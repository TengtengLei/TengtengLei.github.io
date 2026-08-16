-- ============================================================
-- 留言板数据库 —— 建表脚本
--
-- 用法：全选这个文件的内容（Ctrl+A、Ctrl+C），粘到 Supabase 的
--       SQL Editor 里，点 Run。
--
-- 跑几次都没关系：已经有的东西会跳过，缺的才补上，
-- 已有的留言一条都不会动。
--
-- 跑完最后会出来一张检查表，八项全是 true / 数字对得上就成了。
-- ============================================================


-- ---- 1. 留言表本体（已经有就跳过）--------------------------
create table if not exists public.messages (
  id         bigint generated always as identity primary key,
  created_at timestamptz not null default now(),
  name       text    not null default '',
  body       text    not null,
  is_hidden  boolean not null default false
);


-- ---- 2. 三条内容规则（缺哪条补哪条）------------------------
-- body_len ：留言 2 到 800 字
-- name_len ：名字最多 40 字
-- no_links ：禁止链接。广告机器人来这儿就是为了留链接，
--            堵死这条它们就没兴趣了。
do $checks$
begin
  if not exists (select 1 from pg_constraint
                 where conrelid = 'public.messages'::regclass
                   and conname  = 'body_len') then
    alter table public.messages
      add constraint body_len check (char_length(body) between 2 and 800);
  end if;

  if not exists (select 1 from pg_constraint
                 where conrelid = 'public.messages'::regclass
                   and conname  = 'name_len') then
    alter table public.messages
      add constraint name_len check (char_length(name) <= 40);
  end if;

  if not exists (select 1 from pg_constraint
                 where conrelid = 'public.messages'::regclass
                   and conname  = 'no_links') then
    alter table public.messages
      add constraint no_links check (
        body !~* '(https?://|www\.|\[url)' and name !~* '(https?://|www\.)'
      );
  end if;
end;
$checks$;


-- ---- 3. 按时间倒序取留言的索引 -----------------------------
create index if not exists messages_recent
  on public.messages (created_at desc);


-- ---- 4. 限流：全站一分钟最多 5 条 --------------------------
-- 正常人写一条不会碰到，机器人狂刷会被挡在门外。
create or replace function public.messages_rate_limit()
returns trigger language plpgsql as $fn$
begin
  if (select count(*) from public.messages
      where created_at > now() - interval '1 minute') >= 5 then
    raise exception 'rate limit exceeded';
  end if;
  return new;
end;
$fn$;

drop trigger if exists messages_rate_limit_trg on public.messages;
create trigger messages_rate_limit_trg
  before insert on public.messages
  for each row execute function public.messages_rate_limit();


-- ---- 5. 权限 ------------------------------------------------
-- 任何人都能读没被隐藏的留言、能写一条；
-- 但谁都不能改、不能删（没写 update / delete 策略就等于禁止）。
-- 要删只有你自己上 supabase.com 后台。
alter table public.messages enable row level security;

grant select, insert on public.messages to anon;

drop policy if exists "anyone can read visible messages" on public.messages;
create policy "anyone can read visible messages"
  on public.messages for select to anon
  using (is_hidden = false);

drop policy if exists "anyone can post" on public.messages;
create policy "anyone can post"
  on public.messages for insert to anon
  with check (is_hidden = false);


-- ---- 6. 让 Supabase 的接口层立刻认识这张表 -----------------
notify pgrst, 'reload schema';


-- ---- 7. 检查：跑完会出来一行结果，就是体检报告 -------------
-- 期望：前五项 true，规则 3 条，触发器 1 个，策略 2 条。
select
  (to_regclass('public.messages') is not null)                    as "建表完成",
  (select relrowsecurity from pg_class
     where oid = 'public.messages'::regclass)                     as "行级安全已开",
  has_table_privilege('anon', 'public.messages', 'select')        as "访客能读",
  has_table_privilege('anon', 'public.messages', 'insert')        as "访客能写",
  not has_table_privilege('anon', 'public.messages', 'update')    as "访客不能改",
  (select count(*) from pg_constraint
     where conrelid = 'public.messages'::regclass
       and contype  = 'c')                                        as "内容规则_应为3",
  (select count(*) from pg_trigger
     where tgrelid = 'public.messages'::regclass
       and not tgisinternal)                                      as "限流触发器_应为1",
  (select count(*) from pg_policies
     where schemaname = 'public' and tablename = 'messages')      as "权限策略_应为2",
  (select count(*) from public.messages)                          as "现有留言";
