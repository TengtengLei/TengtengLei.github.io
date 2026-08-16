/* ═══════════════════════════════════════════════════════════════════════
   ★★★ 这是你唯一需要改的文件 ★★★

   现在里面全部是【占位内容】，请逐条替换成你自己的信息。

   三条规则，记住就不会出错：
   1) 每段文字都写成 { en: "英文", zh: "中文" } —— 两种语言各写一遍。
      如果某项只想写一种语言，另一种留空字符串 "" 即可。
   2) 每一项结尾的逗号 , 不要删。方括号 [ ] 里可以随便增删条目。
   3) 文字里如果要用英文双引号 " ，前面加一个反斜杠：\"像这样\"

   改完保存，双击 index.html 就能在浏览器里看到效果。
   ═══════════════════════════════════════════════════════════════════════ */

window.SITE = {

  /* ── 默认语言：'en' 英文优先 / 'zh' 中文优先 ───────────────────────── */
  defaultLang: 'en',

  /* ── 1. 个人信息（首页头部） ──────────────────────────────────────── */
  profile: {
    name: {
      en: 'Your Name',
      zh: '你的姓名'
    },
    role: {
      en: 'Postdoctoral Researcher',
      zh: '博士后研究员'
    },
    affiliation: {
      en: 'Northeastern University London',
      zh: '伦敦东北大学'
    },
    // 头像：把照片放到 assets/img/ 文件夹，命名为 profile.jpg
    // 建议正方形、至少 600×600 像素
    photo: 'assets/img/profile.jpg',

    // 首页自我介绍。每个 { } 是一段，可以增删段落。
    bio: [
      {
        en: 'I am a postdoctoral researcher at Northeastern University London, where I work on [your research area]. My research asks how [the central question you care about].',
        zh: '我是伦敦东北大学的博士后研究员，研究方向为【你的研究领域】。我的工作主要关注【你最关心的核心问题】。'
      },
      {
        en: 'Before joining NU London I completed my PhD at [University], where I worked with [advisor] on [topic]. I am currently looking for [collaborations / a lectureship / PhD students].',
        zh: '在加入伦敦东北大学之前，我在【某大学】获得博士学位，师从【导师姓名】，从事【方向】研究。目前我正在寻找【合作机会 / 教职 / 博士生】。'
      }
    ],

    // 首页头像下方的快捷链接。不需要的整行删掉即可。
    // icon 可选：'mail' 'file' 'scholar' 'orcid' 'github' 'link' 'youtube' 'mic'
    links: [
      { icon: 'mail',    label: { en: 'Email',          zh: '邮箱'     }, url: 'mailto:t.lei@nulondon.ac.uk', primary: true },
      { icon: 'file',    label: { en: 'CV (PDF)',       zh: '简历 PDF' }, url: 'files/CV.pdf' },
      { icon: 'scholar', label: { en: 'Google Scholar', zh: '学术主页' }, url: 'https://scholar.google.com/citations?user=YOUR_ID' },
      { icon: 'orcid',   label: { en: 'ORCID',          zh: 'ORCID'    }, url: 'https://orcid.org/0000-0000-0000-0000' },
      { icon: 'github',  label: { en: 'GitHub',         zh: 'GitHub'   }, url: 'https://github.com/YOUR_USERNAME' }
    ]
  },

  /* ── 2. 最新动态（首页）─────────────────────────────────────────────
     最新的放最上面。text 里可以写 HTML 链接：<a href="...">文字</a>
     整个 news 数组留空 []，首页就不会显示这一块。                        */
  news: [
    {
      date: { en: 'Aug 2026', zh: '2026年8月' },
      text: {
        en: 'New paper accepted at <a href="#/publications">[Journal Name]</a>.',
        zh: '一篇新论文被 <a href="#/publications">【期刊名】</a> 接收。'
      }
    },
    {
      date: { en: 'Jun 2026', zh: '2026年6月' },
      text: {
        en: 'Presented at [Conference], [City].',
        zh: '在【某会议】（【城市】）做报告。'
      }
    },
    {
      date: { en: 'Jan 2026', zh: '2026年1月' },
      text: {
        en: 'Joined Northeastern University London as a postdoctoral researcher.',
        zh: '加入伦敦东北大学，任博士后研究员。'
      }
    }
  ],

  /* ── 3. 研究方向 ──────────────────────────────────────────────────── */
  research: {
    lede: {
      en: 'My work sits at the intersection of [field A] and [field B]. Broadly, I am interested in [one-sentence summary of what unifies your work].',
      zh: '我的研究处在【领域 A】与【领域 B】的交叉地带，核心关注【一句话概括你研究的共同主线】。'
    },
    // 每个方向一条横向长条，从上往下排。想加第四、第五个直接往下加。
    // 左侧竖色条会自动轮换颜色，不用管。
    //
    // image：可选配图。填了就变成「左图右文」，没填就是纯文字通栏。
    //        图片放进 assets/img/，这里写 'assets/img/文件名.jpg'。
    //        建议接近 4:3 的横图，压到 300 KB 以内。
    //        示意图、显微照片、数据图、实验装置照都很合适。
    // body： 想写多长都行。要分段就用 <p>…</p> 包起来，例如：
    //        zh: '<p>第一段。</p><p>第二段。</p>'
    areas: [
      {
        title: { en: 'Research Direction One', zh: '研究方向一' },
        image: '',
        body: {
          en: 'Two or three sentences describing this line of work: the question, the method, and why it matters. Keep it readable for someone outside your subfield.',
          zh: '用两三句话描述这条研究线：问题是什么、用什么方法、为什么重要。尽量让本领域之外的人也能看懂。'
        },
        tags: ['Keyword A', 'Keyword B', 'Keyword C']
      },
      {
        title: { en: 'Research Direction Two', zh: '研究方向二' },
        image: '',
        body: {
          en: 'Two or three sentences describing this line of work.',
          zh: '用两三句话描述这条研究线。'
        },
        tags: ['Keyword D', 'Keyword E']
      },
      {
        title: { en: 'Research Direction Three', zh: '研究方向三' },
        image: '',
        body: {
          en: 'Two or three sentences describing this line of work.',
          zh: '用两三句话描述这条研究线。'
        },
        tags: ['Keyword F']
      }
    ]
  },

  /* ── 4. 学术发表 ──────────────────────────────────────────────────────
     type 决定右上角标签的颜色，可选：
       'journal'    期刊论文（绿）
       'conference' 会议论文（蓝）
       'preprint'   预印本  （橙）
       'chapter'    专著章节（灰）
     authors: 你自己的名字用星号包起来 *Your Name*，会自动加粗。
     links: 想加几个就加几个，label 随便写（DOI / PDF / Code / arXiv / Slides…）
     ─────────────────────────────────────────────────────────────────── */
  publications: [
    {
      year: 2026,
      type: 'journal',
      title: { en: 'Title of your most recent journal article goes here', zh: '你最新一篇期刊论文的标题' },
      authors: 'Coauthor A., *Your Name*, & Coauthor B.',
      venue: { en: '*Journal Name*, 12(3), 145–168.', zh: '*期刊名称*，12(3)，145–168。' },
      links: [
        { label: 'DOI',  url: 'https://doi.org/10.xxxx/xxxxx' },
        { label: 'PDF',  url: 'files/papers/2026-journal-article.pdf' },
        { label: 'Code', url: 'https://github.com/YOUR_USERNAME/repo' }
      ]
    },
    {
      year: 2025,
      type: 'conference',
      title: { en: 'Title of a conference paper', zh: '一篇会议论文的标题' },
      authors: '*Your Name*, & Coauthor C.',
      venue: { en: 'In *Proceedings of [Conference]* (pp. 1–12).', zh: '收录于 *【会议名】论文集*，第 1–12 页。' },
      links: [
        { label: 'PDF',    url: 'files/papers/2025-conference.pdf' },
        { label: 'Slides', url: 'files/slides/2025-conference-talk.pdf' }
      ]
    },
    {
      year: 2025,
      type: 'preprint',
      title: { en: 'Title of a preprint under review', zh: '一篇审稿中的预印本标题' },
      authors: '*Your Name*, Coauthor D., & Coauthor E.',
      venue: { en: 'Preprint, under review.', zh: '预印本，审稿中。' },
      links: [
        { label: 'arXiv', url: 'https://arxiv.org/abs/xxxx.xxxxx' }
      ]
    }
  ],

  /* ── 5. 教学（成为教师后重点填这里）───────────────────────────────────
     materials 是每门课底下的资料行，现在每门课只留了一行「课程录像」。
     想加更多就往数组里加，格式一样：

       { kind: 'Slides', label: { en: 'Lecture 1', zh: '第一讲' },
         url: 'files/teaching/abc1234-lecture-01.pdf' },

     kind 是左边小标签的文字，随便写：'Slides' 'Notes' 'Syllabus' 'Reading' …
     文件放 files/ 文件夹；外部链接（B站、YouTube）直接写完整网址，
     并加上 external: true。
     ─────────────────────────────────────────────────────────────────── */
  teaching: {
    lede: {
      en: 'Courses I teach or have taught, with slides and materials free to download and reuse.',
      zh: '我讲授过的课程，课件与教学资料均可自由下载使用。'
    },
    courses: [
      {
        code: 'ABC1234',
        title: { en: 'Name of the Course', zh: '课程名称' },
        meta: {
          en: 'Northeastern University London · Autumn 2026 · Lecturer',
          zh: '伦敦东北大学 · 2026 年秋季学期 · 主讲'
        },
        desc: {
          en: 'A short paragraph on what the course covers and who it is for.',
          zh: '用一段话说明这门课讲什么、面向哪些学生。'
        },
        materials: [
          { kind: 'Video', label: { en: 'Lecture recordings', zh: '课程录像' }, url: 'https://www.youtube.com/playlist?list=XXXX', external: true }
        ]
      },
      {
        code: 'DEF5678',
        title: { en: 'Another Course', zh: '另一门课程' },
        meta: {
          en: 'Northeastern University London · Spring 2027 · Teaching Assistant',
          zh: '伦敦东北大学 · 2027 年春季学期 · 助教'
        },
        desc: {
          en: 'A short paragraph on what the course covers.',
          zh: '用一段话说明这门课讲什么。'
        },
        materials: [
          { kind: 'Video', label: { en: 'Lecture recordings', zh: '课程录像' }, url: 'https://www.bilibili.com/video/BVxxxxxxxxx', external: true }
        ]
      }
    ],

    // 指导过的学生 / 教学理念，不需要就把 statement 设成 null
    statement: {
      title: { en: 'Teaching Philosophy', zh: '教学理念' },
      body: {
        en: 'A short paragraph on how you teach and what you want students to walk away with. Hiring committees read this.',
        zh: '用一段话讲清楚你怎么教、希望学生带走什么。招聘委员会会认真看这一段。'
      }
    },

    // 给学生的常见问题。默认收起，点一下展开。整块删掉或设成 [] 就不显示。
    faq: [
      {
        q: { en: 'Can I do a PhD with you?', zh: '可以跟你读博士吗？' },
        a: {
          en: 'Yes — I am happy to hear from prospective students. Email me a short note on what you want to work on and why, plus your CV. Please do not send a generic mass email; I read the specific ones.',
          zh: '欢迎。发邮件给我，简单说明你想做什么方向、为什么，附上简历。请不要群发模板邮件——我只会认真回复写得具体的那些。'
        }
      },
      {
        q: { en: 'What is your supervision style?', zh: '你的指导风格是什么样的？' },
        a: {
          en: 'Describe how often you meet, how much independence you expect, and what students can rely on you for. Being honest here saves everyone time.',
          zh: '写清楚多久见一次、期待学生多大程度上独立、学生可以在哪些事情上依靠你。这一段诚实一点，对双方都省时间。'
        }
      },
      {
        q: { en: 'Do you have funding?', zh: '有经费吗？' },
        a: {
          en: 'Say what is currently available and point to the relevant scholarship pages. Update this whenever it changes.',
          zh: '写明目前有什么名额，附上相关奖学金页面的链接。情况变了记得回来改。'
        }
      },
      {
        q: { en: 'Can you write me a reference letter?', zh: '可以帮我写推荐信吗？' },
        a: {
          en: 'State your rule — e.g. you write letters for students you have taught or supervised, and need at least three weeks notice plus a CV and a note on what the letter is for.',
          zh: '写清楚你的规矩——比如只给教过或指导过的学生写、至少提前三周、需要提供简历和申请说明。'
        }
      }
    ]
  },

  /* ── 6. 科普 / 媒体 ───────────────────────────────────────────────────
     视频不要上传到网站！传到 YouTube 或 B站，这里只填 ID。

     YouTube：网址 https://www.youtube.com/watch?v=dQw4w9WgXcQ
              → { platform: 'youtube', id: 'dQw4w9WgXcQ' }

     B 站：   网址 https://www.bilibili.com/video/BV1xx411c7mD
              → { platform: 'bilibili', id: 'BV1xx411c7mD' }
     ─────────────────────────────────────────────────────────────────── */
  media: {
    lede: {
      en: 'Talks, science communication and public engagement.',
      zh: '公开讲座、科普视频与公众传播。'
    },

    videos: [
      {
        platform: 'youtube',
        id: 'dQw4w9WgXcQ',
        title: { en: 'Title of the video', zh: '视频标题' },
        meta:  { en: 'Public lecture · 2026 · 42 min', zh: '公开讲座 · 2026 · 42 分钟' }
      },
      {
        platform: 'bilibili',
        id: 'BV1xx411c7mD',
        title: { en: 'Title of a Chinese-language explainer', zh: '一期中文科普视频的标题' },
        meta:  { en: 'Science outreach · 2026 · 15 min', zh: '科普 · 2026 · 15 分钟' }
      }
    ],

    // 播客：整档节目的订阅入口。没有就把 podcast 设成 null
    podcast: {
      title: { en: 'Name of Your Podcast', zh: '你的播客名称' },
      desc: {
        en: 'One or two sentences about what the show is about and who it is for.',
        zh: '用一两句话说明这档节目聊什么、给谁听。'
      },
      // 各平台订阅链接
      subscribe: [
        { label: 'Apple Podcasts', url: 'https://podcasts.apple.com/...' },
        { label: 'Spotify',        url: 'https://open.spotify.com/show/...' },
        { label: 'RSS',            url: 'https://your-podcast-host.com/feed.xml' },
        { label: { en: 'Xiaoyuzhou', zh: '小宇宙' }, url: 'https://www.xiaoyuzhoufm.com/podcast/...' }
      ],
      // 单集列表。audioUrl 填 mp3 直链会显示播放器；
      // 或者用 embedUrl 填平台提供的嵌入网址（Spotify 的 "嵌入" 代码里那个 src）
      episodes: [
        {
          number: 2,
          title: { en: 'Episode title', zh: '本期标题' },
          meta:  { en: '15 Aug 2026 · 48 min', zh: '2026年8月15日 · 48 分钟' },
          desc:  { en: 'What this episode covers, in one or two sentences.', zh: '一两句话介绍这期聊了什么。' },
          audioUrl: ''      // 例：'https://your-host.com/ep02.mp3'
        },
        {
          number: 1,
          title: { en: 'Episode title', zh: '本期标题' },
          meta:  { en: '1 Aug 2026 · 52 min', zh: '2026年8月1日 · 52 分钟' },
          desc:  { en: 'What this episode covers.', zh: '一两句话介绍这期聊了什么。' },
          audioUrl: ''
        }
      ]
    },

    // 媒体报道 / 受邀报告，不需要就设成 []
    press: [
      {
        date: { en: 'Jul 2026', zh: '2026年7月' },
        text: {
          en: 'Quoted in <a href="https://example.com" target="_blank" rel="noopener">[Outlet]</a> on [topic].',
          zh: '就【某话题】接受 <a href="https://example.com" target="_blank" rel="noopener">【媒体名】</a> 采访。'
        }
      }
    ]
  },

  /* ── 7. 生活（此刻 + 兴趣爱好 + 推荐）──────────────────────────────
     这一页是给人看「你是个什么样的人」的。写得随意一点没关系，
     反而比一本正经的学术简介更容易被记住。
     ─────────────────────────────────────────────────────────────────── */
  life: {
    lede: {
      en: 'Research is what I do, not all of what I am. A few things I am into right now.',
      zh: '做研究是我的工作，但不是我的全部。这里是我最近在鼓捣的一些事。'
    },

    // ── 此刻 ── 一个月更新一次就够了。emoji 直接换成你喜欢的。
    now: {
      updated: { en: 'Last updated August 2026', zh: '更新于 2026 年 8 月' },
      items: [
        { emoji: '📖', label: { en: 'Reading',  zh: '在读' }, text: { en: '[Book title] by [Author] — and slowly, a paper I keep meaning to finish.', zh: '《【书名】》，【作者】。还有一篇拖了很久没读完的论文。' } },
        { emoji: '🎧', label: { en: 'Listening', zh: '在听' }, text: { en: '[Podcast name], and far too much of one album on repeat.', zh: '【播客名】，以及单曲循环到有点过分的一张专辑。' } },
        { emoji: '🔬', label: { en: 'Working on', zh: '在忙' }, text: { en: '[Current project] — currently at the stage where nothing works yet.', zh: '【当前项目】—— 目前处于「什么都还跑不通」的阶段。' } },
        { emoji: '🤔', label: { en: 'Thinking about', zh: '在想' }, text: { en: 'A question I cannot stop turning over: [the question].', zh: '一个最近老在脑子里转的问题：【问题】。' } },
        { emoji: '🌱', label: { en: 'Learning',  zh: '在学' }, text: { en: '[A skill or language] — badly, but consistently.', zh: '【某项技能或语言】—— 学得很烂，但没停。' } }
      ]
    },

    // ── 兴趣爱好卡片墙 ──
    // 每张卡自动换一个颜色。想配图就填 image，不填就只有 emoji 和文字。
    hobbies: [
      { emoji: '📷', title: { en: 'Film photography', zh: '胶片摄影' },
        body: { en: 'Mostly street scenes and badly-exposed skies. I develop at home.', zh: '主要拍街景，还有一堆曝光失败的天空。在家自己冲洗。' },
        image: '' },
      { emoji: '🥖', title: { en: 'Sourdough', zh: '烤面包' },
        body: { en: 'My starter has a name and I am not going to apologise for that.', zh: '我的酵头有名字，这件事我不打算道歉。' } },
      { emoji: '🏔', title: { en: 'Hiking', zh: '徒步' },
        body: { en: 'Anywhere with a hill and no phone signal.', zh: '只要有山、没信号，去哪都行。' } },
      { emoji: '🐈', title: { en: 'One opinionated cat', zh: '一只很有主见的猫' },
        body: { en: 'Co-author on nothing, present at every video call.', zh: '一篇论文都没署名，但每场视频会议都到场。' } },
      { emoji: '🎹', title: { en: 'Piano, badly', zh: '弹得很烂的钢琴' },
        body: { en: 'Twenty years in, still working on the same three pieces.', zh: '弹了二十年，还是那三首。' } },
      { emoji: '🧩', title: { en: 'Puzzles & board games', zh: '解谜与桌游' },
        body: { en: 'Will happily explain the rules for longer than the game takes.', zh: '讲规则的时间通常比玩的时间还长。' } }
    ],

    // ── 推荐 / 书架片单 ──
    // 每一组自动换一个颜色。url 留空就不加链接。
    picks: [
      {
        title: { en: 'Books that changed how I think', zh: '改变我想法的书' },
        items: [
          { name: '[Book title] — [Author]', note: { en: 'One line on why it mattered to you.', zh: '一句话说明它为什么重要。' }, url: '' },
          { name: '[Book title] — [Author]', note: { en: 'One line on why it mattered to you.', zh: '一句话说明它为什么重要。' }, url: '' }
        ]
      },
      {
        title: { en: 'Podcasts I actually finish', zh: '我真的听完的播客' },
        items: [
          { name: '[Podcast name]', note: { en: 'What it is about and who it suits.', zh: '聊什么、适合谁听。' }, url: '' },
          { name: '[Podcast name]', note: { en: 'What it is about and who it suits.', zh: '聊什么、适合谁听。' }, url: '' }
        ]
      },
      {
        title: { en: 'Tools I rely on', zh: '离不开的工具' },
        items: [
          { name: 'Zotero', note: { en: 'Reference management. Free, open source.', zh: '文献管理。免费、开源。' }, url: 'https://www.zotero.org' },
          { name: '[Tool name]', note: { en: 'What you use it for.', zh: '你拿它做什么。' }, url: '' }
        ]
      },
      {
        title: { en: 'Blogs & newsletters', zh: '常读的博客与邮件通讯' },
        items: [
          { name: '[Blog name]', note: { en: 'Why it is worth your inbox.', zh: '为什么值得占用你的收件箱。' }, url: '' }
        ]
      }
    ]
  },

  /* ── 8. 留言板 ─────────────────────────────────────────────────────
     留言用 giscus —— 它把留言存在你 GitHub 仓库的 Discussions 里，
     不需要服务器、不需要数据库、不花钱、也基本不会有垃圾留言。

     配置步骤（网站发布之后再做）：
       1. 仓库 Settings → General → 勾选 Features 里的 Discussions
       2. 打开 https://giscus.app ，填入 你的用户名/你的用户名.github.io
       3. 按提示装一下 giscus app，页面下方会生成 4 个值
       4. 把那 4 个值填到下面，留言板就活了

     配好之前，这一页会显示一段「还没开通」的提示，不影响别的页面。
     不想要留言板？把整个 guestbook 设成 null 即可。
     ─────────────────────────────────────────────────────────────── */
  guestbook: {
    lede: {
      en: 'Say hello, ask a question, or tell me I am wrong about something. I read everything.',
      zh: '打个招呼、问个问题，或者告诉我哪里说错了。我都会看。'
    },
    note: {
      en: 'Comments are powered by GitHub Discussions — you will need a GitHub account to post.',
      zh: '留言由 GitHub Discussions 驱动，需要有 GitHub 账号才能发言。'
    },
    giscus: {
      repo:             '',   // 例：'yourname/yourname.github.io'
      repoId:           '',   // giscus.app 会生成
      category:         '',   // 例：'Announcements'
      categoryId:       ''    // giscus.app 会生成
    }
  },

  /* ── 9. 简历（教育背景 + 工作经历 + 联系方式）─────────────────────── */
  cv: {
    // 简历 PDF：把文件放进 files/ 文件夹，命名为 CV.pdf
    pdf: 'files/CV.pdf',

    education: [
      {
        when:  { en: '2021 – 2025', zh: '2021 – 2025' },
        what:  { en: 'PhD in [Subject]', zh: '【专业】博士' },
        where: { en: '[University Name], [Country]', zh: '【大学名称】，【国家】' },
        note:  { en: 'Thesis: “[Thesis title]”. Supervisor: [Name].', zh: '博士论文：《【论文题目】》。导师：【姓名】。' }
      },
      {
        when:  { en: '2019 – 2021', zh: '2019 – 2021' },
        what:  { en: 'MSc in [Subject]', zh: '【专业】硕士' },
        where: { en: '[University Name], [Country]', zh: '【大学名称】，【国家】' },
        note:  { en: '', zh: '' }
      },
      {
        when:  { en: '2015 – 2019', zh: '2015 – 2019' },
        what:  { en: 'BSc in [Subject]', zh: '【专业】学士' },
        where: { en: '[University Name], [Country]', zh: '【大学名称】，【国家】' },
        note:  { en: '', zh: '' }
      }
    ],

    experience: [
      {
        when:  { en: '2026 – present', zh: '2026 至今' },
        what:  { en: 'Postdoctoral Researcher', zh: '博士后研究员' },
        where: { en: 'Northeastern University London', zh: '伦敦东北大学' },
        note:  { en: 'Working on [project], funded by [funder].', zh: '从事【项目名称】研究，由【资助方】资助。' }
      },
      {
        when:  { en: '2025 – 2026', zh: '2025 – 2026' },
        what:  { en: 'Research Assistant', zh: '研究助理' },
        where: { en: '[Institution]', zh: '【机构名称】' },
        note:  { en: '', zh: '' }
      }
    ],

    // 获奖、基金、审稿、服务等。不需要的整块删掉。
    extras: [
      {
        title: { en: 'Awards & Funding', zh: '获奖与基金' },
        items: [
          { en: '2026 — [Grant / award name], [funder], £[amount]', zh: '2026 — 【基金/奖项名称】，【资助方】，£【金额】' },
          { en: '2024 — [Award name], [institution]',               zh: '2024 — 【奖项名称】，【授予机构】' }
        ]
      },
      {
        title: { en: 'Service & Reviewing', zh: '学术服务与审稿' },
        items: [
          { en: 'Reviewer for [Journal A], [Journal B], [Conference C]', zh: '担任【期刊A】《期刊B》《会议C》审稿人' },
          { en: 'Organiser, [Seminar series / workshop], 2026',          zh: '【研讨会/工作坊名称】组织者，2026' }
        ]
      },
      {
        title: { en: 'Skills', zh: '技能' },
        items: [
          { en: 'Languages: English (fluent), Mandarin (native)', zh: '语言：英语（流利）、中文（母语）' },
          { en: 'Technical: Python, R, MATLAB, [domain tools]',   zh: '技术：Python、R、MATLAB、【领域专用工具】' }
        ]
      }
    ],

    contact: {
      email: 't.lei@nulondon.ac.uk',
      office: {
        en: 'Room [X], [Building Name]',
        zh: '【楼名】【房间号】'
      },
      address: {
        en: 'Northeastern University London, Devon House, St Katharine Docks, London E1W 1LP, United Kingdom',
        zh: '英国伦敦东北大学，Devon House, St Katharine Docks, London E1W 1LP'
      },
      note: {
        en: 'The fastest way to reach me is email. I am happy to hear from prospective students and collaborators.',
        zh: '邮件是联系我最快的方式。欢迎有意向的学生和合作者与我联系。'
      }
    }
  },

  /* ── 10. 页脚 ─────────────────────────────────────────────────────── */
  footer: {
    line: {
      en: '© 2026 Your Name. Built as a static site, hosted on GitHub Pages.',
      zh: '© 2026 你的姓名。静态网页，托管于 GitHub Pages。'
    },
    updated: {
      en: 'Last updated: August 2026',
      zh: '最后更新：2026 年 8 月'
    }
  }
};
