-- ============================================================
-- 留言板数据库 —— 一次性建表脚本
--
-- 用法：全选这个文件的内容（Ctrl+A、Ctrl+C），粘到 Supabase 的
--       SQL Editor 里，点 Run。看到 Success 就成了。
--       只需要跑一次。
-- ============================================================

-- 留言表
create table public.messages (
  id         bigint generated always as identity primary key,
  created_at timestamptz not null default now(),
  name       text    not null default '',
  body       text    not null,
  is_hidden  boolean not null default false,
  constraint body_len check (char_length(body) between 2 and 800),
  constraint name_len check (char_length(name) <= 40),
  -- 禁止链接：广告机器人来这儿就是为了留链接，堵死这条它们就没兴趣了
  constraint no_links check (
    body !~* '(https?://|www\.|\[url)' and name !~* '(https?://|www\.)'
  )
);

create index messages_recent on public.messages (created_at desc);

-- 限流：全站一分钟最多 5 条。
-- 正常人写一条不会碰到，机器人狂刷会被挡在门外。
create or replace function public.messages_rate_limit()
returns trigger language plpgsql as $$
begin
  if (select count(*) from public.messages
      where created_at > now() - interval '1 minute') >= 5 then
    raise exception 'rate limit exceeded';
  end if;
  return new;
end;
$$;

create trigger messages_rate_limit_trg
  before insert on public.messages
  for each row execute function public.messages_rate_limit();

-- 权限：任何人都能读没被隐藏的留言、能写一条；
-- 但谁都不能改、不能删（没写 update / delete 策略就等于禁止）。
-- 要删只有你自己上 supabase.com 后台。
alter table public.messages enable row level security;

grant select, insert on public.messages to anon;

create policy "anyone can read visible messages"
  on public.messages for select to anon
  using (is_hidden = false);

create policy "anyone can post"
  on public.messages for insert to anon
  with check (is_hidden = false);

-- 让 Supabase 的接口层立刻认识这张新表，省得等它自己刷新
notify pgrst, 'reload schema';
