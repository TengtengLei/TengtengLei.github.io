# 个人学术主页 — 使用手册

一个不需要任何编译工具的静态网站：中英双语切换、浅色/深色模式、手机自适应。
放到 GitHub Pages 上永久免费。

---

## 1. 文件结构（只有一个文件需要你动）

```
Self-Introduction/
├── index.html              页面骨架 —— 只有改 SEO 信息时才动
├── assets/
│   ├── css/style.css       样式 —— 不用动
│   ├── js/content.js       ★★★ 你的全部内容都在这里 ★★★
│   ├── js/app.js           渲染逻辑 —— 不用动
│   └── img/                头像、图片
└── files/                  简历 PDF、论文、课件
```

**99% 的时间你只需要改 `assets/js/content.js` 这一个文件。**
用记事本、VS Code，或者直接让 Claude Code 帮你改都行。

---

## 2. 本地预览

**最简单：** 在文件管理器里双击 `index.html`，浏览器就打开了。
改完 `content.js` 保存，回到浏览器按 `F5` 刷新即可。

**更接近真实环境**（推荐，某些浏览器对本地文件有限制）：

```bash
python -m http.server 8137
```

然后浏览器打开 <http://localhost:8137>。按 `Ctrl+C` 停止。

---

## 3. 填自己的内容

打开 `assets/js/content.js`，从上往下把占位内容换掉。文件里每一块都有中文注释。

**三条规则，记住就不会出错：**

1. 每段文字都是 `{ en: "英文", zh: "中文" }`，两种语言各写一遍。
   只想写一种？另一种留空字符串 `""`，网站会自动用有内容的那个。
2. 每一项结尾的逗号 `,` 不要删。方括号 `[ ]` 里的条目可以随便增删。
3. 文字里要用英文双引号 `"`，前面加反斜杠：`\"像这样\"`

**改完检查：** 刷新页面。如果页面变成一段红字提示，说明有语法错误——
99% 是漏了逗号或引号没配对。按 `F12` 打开控制台能看到具体第几行。

除了 `content.js`，还有两处要顺手改：

- `index.html` 开头的 `<title>`、`description`、`author` 和结构化数据里的名字（搜索引擎看这些）
- `assets/img/profile.jpg` 放你的照片（正方形，压缩到 500 KB 以内）

---

## 4. 发布到 GitHub Pages

### 第一次发布

**第 1 步 · 建仓库。** 登录 GitHub → 右上角 `+` → New repository

- 仓库名填 **`你的用户名.github.io`**（必须和用户名完全一致）
  这样网址就是干净的 `https://你的用户名.github.io`
- 选 **Public**（Pages 免费版要求公开）
- **不要**勾选 "Add a README file"
- 点 Create repository

**第 2 步 · 上传。** 两种方式，选一种：

**A. 用 GitHub Desktop（不熟悉命令行就选这个）**

1. 装 [GitHub Desktop](https://desktop.github.com/) 并登录
2. `File` → `Add local repository` → 选这个文件夹
3. 提示 "not a git repository" 就点 `create a repository`
4. 左下角写一句 commit 描述 → `Commit to main`
5. 点 `Publish repository`，取消勾选 "Keep this code private"

**B. 用命令行**

```bash
git init
git add .
git commit -m "Initial site"
git branch -M main
git remote add origin https://github.com/你的用户名/你的用户名.github.io.git
git push -u origin main
```

> 注意：`git push` 时 GitHub **不接受账号密码**，要用 Personal Access Token。
> 在 GitHub 网页版 Settings → Developer settings → Personal access tokens →
> Tokens (classic) → Generate new token，勾选 `repo` 权限，生成后把那串字符
> 当密码用。这也是为什么推荐非技术用户用 GitHub Desktop。

**第 3 步 · 打开 Pages。** 仓库页面 → `Settings` → 左侧 `Pages` →
Source 选 `Deploy from a branch`，分支选 `main`，目录选 `/ (root)` → Save。

等 1–2 分钟，访问 `https://你的用户名.github.io` 就能看到了。

### 以后每次更新

改完 `content.js` 保存后：

- GitHub Desktop：写一句描述 → `Commit to main` → `Push origin`
- 命令行：

```bash
git add . && git commit -m "Update publications" && git push
```

网站大约 1 分钟后自动更新。

---

## 5. 加课件、视频、播客

### 课件

1. PDF 放进 `files/teaching/`，文件名用小写字母和连字符（**不要用中文和空格**）
2. 在 `content.js` 的 `teaching.courses[].materials` 里加一行：

```js
{ kind: 'Slides', label: { en: 'Lecture 3 — Methods', zh: '第三讲 · 方法' },
  url: 'files/teaching/abc1234-lecture-03.pdf' },
```

`kind` 是左边的小标签，随便写：`Slides` `Notes` `Syllabus` `Video` `Reading`…

### 视频

**视频不要上传到这个网站。** GitHub Pages 不适合分发视频，会很卡，
而且单文件上限 100 MB。传到 YouTube 或 B 站，这里只填视频 ID：

```js
// YouTube 网址 https://www.youtube.com/watch?v=dQw4w9WgXcQ
{ platform: 'youtube', id: 'dQw4w9WgXcQ',
  title: { en: '...', zh: '...' }, meta: { en: '...', zh: '...' } },

// B站网址 https://www.bilibili.com/video/BV1xx411c7mD
{ platform: 'bilibili', id: 'BV1xx411c7mD',
  title: { en: '...', zh: '...' }, meta: { en: '...', zh: '...' } },
```

网站默认只显示封面图，访客点了才真正加载播放器——页面快，也不会一进来
就被 YouTube 追踪。

### 播客

需要一个播客托管平台（生成 RSS 订阅源，各大平台从那里抓取）：

- **Spotify for Creators**（原 Anchor）—— 免费无限量，最省事
- **小宇宙 / 喜马拉雅** —— 面向中文听众

托管平台会给你各平台的链接和一个 RSS 地址，填进 `content.js` 的
`media.podcast.subscribe` 里。单集可以填 `audioUrl`（mp3 直链，显示原生播放器）
或 `embedUrl`（平台嵌入代码里的那个 src）。

---

### 生活页（此刻 / 兴趣 / 推荐）

全在 `content.js` 的 `life` 一节里。

- **此刻**：一个月改一次就够了，改完把 `now.updated` 的日期也改掉
- **兴趣爱好**：卡片颜色是自动轮换的，不用管。想配图就填 `image`，
  图片放 `assets/img/`，不填就只显示 emoji
- **推荐**：分组自动换色，`url` 留空就不加链接

### 开通留言板

留言板是**完全匿名**的：任何人打开页面就能写，不用注册、不用登录，
写完立刻显示出来。

留言存在 **Supabase**（一个免费的在线数据库）里。为什么需要它：
GitHub Pages 只会把文件发给访客，**不能存东西**，所以留言必须有个地方放。
Supabase 免费额度对个人主页来说绰绰有余，不用绑卡。

一次性配置，大约十分钟。

**第一步：建数据库**

1. 打开 <https://supabase.com>，用 GitHub 账号登录
2. `New project` → 名字随便起（比如 `homepage`）→ 地区选 **West EU (London)** →
   设一个数据库密码（存到密码管理器里，平时用不到）→ 创建，等两分钟

**第二步：建留言表**

左侧点 `SQL Editor` → `New query` → 把下面**整段**贴进去 → 点 `Run`。
看到 `Success` 就成了。

```sql
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

-- 限流：全站一分钟最多 5 条。正常人写一条不会碰到，机器人狂刷会被挡住。
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

-- 权限：任何人能读没被隐藏的留言、能写一条；
-- 但谁都不能改、不能删（没写 update / delete 策略就等于禁止）。
alter table public.messages enable row level security;

create policy "anyone can read visible messages"
  on public.messages for select to anon
  using (is_hidden = false);

create policy "anyone can post"
  on public.messages for insert to anon
  with check (is_hidden = false);
```

**第三步：把两个值填进网页**

左侧 `Project Settings` → `API`，复制这两个值到 `content.js` 第 8 节：

| Supabase 里叫什么 | 填到 `guestbook.supabase` 的 | 长什么样 |
|---|---|---|
| Project URL | `url` | `https://abcdefgh.supabase.co` |
| `anon` `public` key | `anonKey` | `eyJhbGciOi……` 很长一串 |

存盘、推到 GitHub，留言板就活了。配好之前那一页显示「还没开通」，
不影响其他页面。

> **那串 key 公开在仓库里，安全吗？** 安全。它叫 `anon`（匿名）`public`（公开）
> 就是因为它本来就是给浏览器用的，Supabase 的设计就是让你把它写进前端代码。
> 真正管事的是上面那段 SQL 里的权限规则。**另一个** `service_role` key 才是
> 万能钥匙，那个千万不能贴出来 —— 你用不到它。

### 管理留言

有人留了不合适的内容，去 <https://supabase.com> → 你的项目 →
左侧 `Table Editor` → `messages` 表：

- **想藏起来**：把那一行的 `is_hidden` 勾上 → 网页上立刻消失，记录还在
- **想彻底删掉**：选中那一行 → `Delete row`

网页那边一共有四道防机器人的措施，不用你管：表单里藏了一个诱饵输入框、
打开页面不满 3 秒不让发、同一个浏览器一分钟只能发一条、
数据库端禁链接并且全站限流。

真被刷疯了的话，最快的止血办法是去 `SQL Editor` 跑一句
`drop policy "anyone can post" on public.messages;` —— 留言板立刻变成只读，
已有的留言照常显示，等你处理完再把那条策略加回来。

---

## 6. 换成自己的域名（可选）

`你的用户名.github.io` 已经够用了。想要 `yourname.com` 这种：

1. 在 Namecheap / Cloudflare 买一个域名（`.com` 约 £10/年）
2. 在域名商后台加 DNS 记录：
   - 四条 `A` 记录指向 `185.199.108.153`、`185.199.109.153`、`185.199.110.153`、`185.199.111.153`
   - 一条 `CNAME` 记录，`www` 指向 `你的用户名.github.io`
3. GitHub 仓库 → Settings → Pages → Custom domain 填你的域名 → Save
4. 勾上 `Enforce HTTPS`（可能要等几小时证书才签发）

学术圈的实用建议：**换工作时域名跟着你走，学校主页不会**。
如果打算长期做学术，早点买个自己的域名是值得的。

---

## 7. 出问题了怎么办

| 现象 | 原因 |
|---|---|
| 页面空白 / 一段红字提示 | `content.js` 语法错误。按 `F12` 看控制台第几行报错，通常是漏逗号 |
| 头像不显示 | 文件名必须是 `assets/img/profile.jpg`，注意大小写和扩展名（`.jpeg` 不行） |
| PDF 点了 404 | 检查 `content.js` 里的路径和实际文件名是否完全一致，包括大小写 |
| 推送了但网站没变 | 等 1–2 分钟；仍不变就按 `Ctrl+Shift+R` 强制刷新绕过缓存 |
| GitHub Pages 显示 404 | Settings → Pages 里确认分支选的是 `main`、目录是 `/ (root)` |

`.nojekyll` 这个空文件不要删——它让 GitHub 跳过 Jekyll 处理，
否则下划线开头的文件夹会被忽略。

---

## 8. 想改设计

- **换配色**：`assets/css/style.css` 开头「1. 颜色」那一段的 6 个色值。
  全站所有颜色都引用这几个变量，改这里就够了，不用逐处改。
  每个页面用哪个颜色，看它下面的 `html[data-page="..."]` 那几行。
- **改导航栏名字**：`assets/js/app.js` 开头的 `UI.nav`
- **默认语言**：`content.js` 里的 `defaultLang`（浏览器是中文环境的访客会自动看到中文）
- **其他任何改动**：直接告诉 Claude Code 你想要什么样子

---

> `.claude/launch.json` 是给 Claude Code 启动本地预览用的配置，
> 可以留着，也可以删掉，不影响网站。
