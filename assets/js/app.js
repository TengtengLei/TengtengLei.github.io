/* =====================================================================
   渲染引擎 — 一般情况下不需要改这个文件。
   唯一可能想改的是下面 UI 里的导航栏名字。
   ===================================================================== */
(function () {
  'use strict';

  /* ---------- 界面固定文字（导航栏名字想改就改这里） ---------- */
  var UI = {
    nav: {
      about:        { en: 'About',        zh: '关于我'   },
      research:     { en: 'Research',     zh: '研究'     },
      publications: { en: 'Publications', zh: '论文'     },
      group:        { en: 'Group',        zh: '课题组'   },
      teaching:     { en: 'Teaching',     zh: '教学'     },
      media:        { en: 'Outreach',     zh: '科普'     },
      life:         { en: 'Life',         zh: '生活'     },
      cv:           { en: 'CV',           zh: '简历'     },
      hello:        { en: 'Say Hi',       zh: '留言板'   }
    },
    headings: {
      news:       { en: 'News',                  zh: '最新动态'   },
      areas:      { en: 'Research Areas',        zh: '研究方向'   },
      members:    { en: 'Members',               zh: '成员'       },
      alumni:     { en: 'Alumni',                zh: '毕业去向'   },
      activities: { en: 'Life in the Group',     zh: '组里的日常' },
      courses:    { en: 'Courses',               zh: '课程'       },
      faq:        { en: 'For Students',          zh: '给学生'     },
      videos:     { en: 'Videos & Talks',        zh: '视频与讲座' },
      podcast:    { en: 'Podcast',               zh: '播客'       },
      episodes:   { en: 'Episodes',              zh: '往期节目'   },
      press:      { en: 'Press & Invited Talks', zh: '媒体与受邀报告' },
      now:        { en: 'Right Now',             zh: '此刻'       },
      hobbies:    { en: 'Things I Love',         zh: '喜欢的事'   },
      picks:      { en: 'Recommendations',       zh: '私人推荐'   },
      education:  { en: 'Education',             zh: '教育背景'   },
      experience: { en: 'Experience',            zh: '工作经历'   },
      contact:    { en: 'Contact',               zh: '联系方式'   }
    },
    labels: {
      all:       { en: 'All',            zh: '全部'     },
      journal:   { en: 'Journal',        zh: '期刊'     },
      conference:{ en: 'Conference',     zh: '会议'     },
      preprint:  { en: 'Preprint',       zh: '预印本'   },
      patent:    { en: 'Patent',         zh: '专利'     },
      chapter:   { en: 'Chapter',        zh: '专著章节' },
      downloadCv:{ en: 'Download CV (PDF)', zh: '下载简历 PDF' },
      downloadStatement: { en: 'Teaching Statement (PDF)', zh: '下载教学陈述 PDF' },
      email:     { en: 'Email',          zh: '邮箱'     },
      office:    { en: 'Office',         zh: '办公室'   },
      address:   { en: 'Address',        zh: '地址'     },
      empty:     { en: 'Nothing here yet — content coming soon.', zh: '这一块还没有内容，稍后补充。' },
      guestSetup:{ en: 'The guestbook is not switched on yet. See section 8 of content.js and the README for the ten-minute setup.',
                   zh: '留言板还没开通。打开 content.js 第 8 节，照 README 里「开通留言板」那一节走一遍就能用（大约十分钟）。' }
    },
    guest: {
      name:     { en: 'Name (optional)',  zh: '名字（可不填）' },
      anon:     { en: 'Anonymous',        zh: '匿名' },
      body:     { en: 'Your message',     zh: '想说的话' },
      hint:     { en: 'Say hi, ask something, leave a note…', zh: '打个招呼，问点什么，随便写写……' },
      send:     { en: 'Leave a message',  zh: '发表留言' },
      sending:  { en: 'Sending…',         zh: '发送中……' },
      thanks:   { en: 'Thank you — your message is up.', zh: '谢谢你，留言已经发出来了。' },
      loading:  { en: 'Loading messages…', zh: '正在载入留言……' },
      none:     { en: 'No messages yet. Be the first!', zh: '还没有人留言，来当第一个吧！' },
      count:    { en: 'message(s)',       zh: '条留言' },
      // 出错提示
      errEmpty: { en: 'Please write something first.', zh: '还没写内容呢。' },
      errLong:  { en: 'That is a bit too long — please keep it under 800 characters.',
                  zh: '有点太长了，控制在 800 字以内吧。' },
      errLink:  { en: 'Links are not allowed here (it keeps the spam bots away). Please remove the URL.',
                  zh: '这里不能放链接（防广告机器人）。把网址去掉就可以发了。' },
      errSlow:  { en: 'Just a moment — please take a few seconds to write.', zh: '稍等一下，慢慢写。' },
      errWait:  { en: 'You just posted. Please wait a minute before posting again.',
                  zh: '你刚刚发过了，等一分钟再发下一条吧。' },
      errBusy:  { en: 'The guestbook is busy right now. Please try again in a minute.',
                  zh: '留言板现在有点忙，过一分钟再试试。' },
      errNet:   { en: 'Could not reach the guestbook. Please check your connection and try again.',
                  zh: '连不上留言板。检查一下网络再试一次。' }
    },
    lede: {
      publications: { en: '<sup class="corr">†</sup> equal contribution<br><sup class="corr">*</sup> corresponding author',
                      zh: '<sup class="corr">†</sup> 共同第一作者<br><sup class="corr">*</sup> 通讯作者' },
      cv:           { en: 'Education, appointments, funding and service. A full PDF version is available below.',
                      zh: '教育背景、任职经历、基金与学术服务。完整版简历可在下方下载。' }
    }
  };

  /* ---------- 图标 ---------- */
  var ICONS = {
    mail:    '<path d="M3 6.5h18v11H3z"/><path d="m3 7 9 6.2L21 7"/>',
    file:    '<path d="M14 3H7a1.5 1.5 0 0 0-1.5 1.5v15A1.5 1.5 0 0 0 7 21h10a1.5 1.5 0 0 0 1.5-1.5V7.5z"/><path d="M14 3v4.5h4.5"/>',
    scholar: '<path d="M12 4 2.5 9 12 14l9.5-5z"/><path d="M6.5 11.3V16c0 1.4 2.5 2.6 5.5 2.6s5.5-1.2 5.5-2.6v-4.7"/>',
    orcid:   '<circle cx="12" cy="12" r="9"/><path d="M9.4 9.4v6.2M9.4 7.3v.1M12.9 15.6V9.4h1.6a3.1 3.1 0 0 1 0 6.2z"/>',
    github:  '<path d="M12 2.4a9.6 9.6 0 0 0-3 18.7c.5.1.6-.2.6-.5v-1.7c-2.6.6-3.2-1.2-3.2-1.2-.4-1.1-1-1.4-1-1.4-.9-.6.1-.6.1-.6 1 .1 1.4 1 1.4 1 .9 1.5 2.3 1.1 2.9.8a2 2 0 0 1 .6-1.3c-2.1-.2-4.3-1-4.3-4.6a3.6 3.6 0 0 1 1-2.5 3.4 3.4 0 0 1 .1-2.5s.8-.2 2.6 1a9 9 0 0 1 4.8 0c1.8-1.2 2.6-1 2.6-1a3.4 3.4 0 0 1 .1 2.5 3.6 3.6 0 0 1 1 2.5c0 3.6-2.2 4.4-4.3 4.6a2.3 2.3 0 0 1 .7 1.8v2.6c0 .3.1.6.6.5A9.6 9.6 0 0 0 12 2.4z"/>',
    link:    '<path d="M10 13.5a4 4 0 0 0 5.7 0l2.8-2.8a4 4 0 1 0-5.7-5.7L11.5 6.3"/><path d="M14 10.5a4 4 0 0 0-5.7 0l-2.8 2.8a4 4 0 1 0 5.7 5.7l1.3-1.3"/>',
    youtube: '<rect x="2.5" y="5" width="19" height="14" rx="4"/><path d="m10.2 9.2 5 2.8-5 2.8z"/>',
    mic:     '<rect x="9" y="2.8" width="6" height="11" rx="3"/><path d="M5.5 11.5a6.5 6.5 0 0 0 13 0M12 18v3.2"/>'
  };

  function icon(name) {
    if (!ICONS[name]) return '';
    return '<svg viewBox="0 0 24 24" aria-hidden="true">' + ICONS[name] + '</svg>';
  }

  /* ---------- 状态 ---------- */
  var S = window.SITE;
  var lang = 'en';
  var pubFilter = 'all';

  // 导航顺序。想调整就改这一行的先后，颜色会自动跟着页面走。
  var PAGES = ['about', 'cv', 'research', 'publications', 'group', 'teaching', 'media', 'life', 'hello'];

  /* ---------- 小工具 ---------- */

  // 取出当前语言的文字。传进来的可能是 {en,zh}，也可能是纯字符串。
  function t(v) {
    if (v === null || v === undefined) return '';
    if (typeof v === 'string' || typeof v === 'number') return String(v);
    var out = v[lang];
    if (out === undefined || out === null || out === '') out = v.en || v.zh || '';
    return String(out);
  }

  function has(v) { return t(v).trim() !== ''; }
  function nonEmpty(arr) { return Array.isArray(arr) && arr.length > 0; }
  function em(str) { return String(str).replace(/\*([^*]+)\*/g, '<em>$1</em>'); }
  // 作者列表里的三种标记（顺序不能换，先处理 *…* 再处理另外两个）：
  //   *名字*  → 高亮（你自己）
  //   名字^   → 上标 *，通讯作者
  //   名字#   → 上标 †，共同第一作者
  // 可以叠加，例如 *Tengteng Lei*#^
  function me(str) {
    return String(str)
      .replace(/\*([^*]+)\*/g, '<span class="me">$1</span>')
      .replace(/\^/g, '<sup class="corr" title="Corresponding author">*</sup>')
      .replace(/#/g,  '<sup class="corr" title="Equal contribution">†</sup>');
  }
  function attr(s) { return String(s).replace(/"/g, '&quot;'); }

  // 把访客输入的文字变成安全的 HTML。留言板一定要用这个 ——
  // 否则任何人都能在留言里塞一段脚本，在别人的浏览器里跑起来。
  function esc(s) {
    return String(s)
      .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;').replace(/'/g, '&#39;');
  }
  function emptyBlock(msg) { return '<div class="empty">' + (msg || t(UI.labels.empty)) + '</div>'; }
  function extLink(url) { return /^https?:\/\//i.test(url) ? ' target="_blank" rel="noopener"' : ''; }

  // 时间胶囊列表：越新的条目颜色越深，往下逐条变浅。
  // 深浅是按「第几条 / 共几条」算的，所以加减条目都会自动重新分配。
  // 混白色而不是混背景色，这样深色模式下胶囊依然是浅底深字，不会看不清。
  function newsList(items) {
    var n = items.length;
    var h = '<ul class="news">';
    items.forEach(function (it, i) {
      var pct = n > 1 ? Math.round(100 - (i / (n - 1)) * 55) : 100;
      h += '<li><time style="background:color-mix(in srgb, var(--accent) ' + pct + '%, #ffffff)">' +
           t(it.date) + '</time><span>' + t(it.text) + '</span></li>';
    });
    return h + '</ul>';
  }

  /* ---------- 页面：关于我 ---------- */
  function pageAbout() {
    var p = S.profile || {};
    var h = '<div class="page">';

    h += '<section class="hero">';
    h += '<div><img class="hero__photo" src="' + attr(p.photo || 'assets/img/profile.jpg') +
         '" alt="' + attr(t(p.name)) + '" onerror="this.style.visibility=\'hidden\'"></div>';
    h += '<div>';
    h += '<h1 class="hero__name">' + t(p.name) + '</h1><br>';
    if (has(p.role))        h += '<p class="hero__role">' + t(p.role) + '</p>';
    if (has(p.affiliation)) h += '<p class="hero__affil">' + t(p.affiliation) + '</p>';

    if (nonEmpty(p.bio)) {
      h += '<div class="hero__bio">';
      p.bio.forEach(function (para) { h += '<p>' + t(para) + '</p>'; });
      h += '</div>';
    }

    if (nonEmpty(p.links)) {
      h += '<div class="links">';
      p.links.forEach(function (l) {
        h += '<a class="link-pill' + (l.primary ? ' link-pill--primary' : '') + '" href="' +
             attr(l.url) + '"' + extLink(l.url) + '>' + icon(l.icon) + t(l.label) + '</a>';
      });
      h += '</div>';
    }
    h += '</div></section>';

    if (nonEmpty(S.news)) {
      h += '<section class="section"><h2 class="section__title">' + t(UI.headings.news) + '</h2>' +
           newsList(S.news) + '</section>';
    }

    return h + '</div>';
  }

  /* ---------- 页面：研究 ---------- */
  function pageResearch() {
    var r = S.research || {};
    var h = '<div class="page"><header class="page__head">';
    h += '<h1 class="page__title">' + t(UI.nav.research) + '</h1>';
    if (has(r.lede)) h += '<p class="page__lede">' + t(r.lede) + '</p>';
    h += '</header>';

    if (nonEmpty(r.areas)) {
      h += '<div class="areas">';
      r.areas.forEach(function (a) {
        h += '<article class="area' + (a.image ? ' area--img' : '') + '">';
        if (a.image) h += '<img class="area__img" src="' + attr(a.image) +
                          '" alt="" loading="lazy" onerror="this.remove()">';
        h += '<div>';
        h += '<h2 class="area__title">' + t(a.title) + '</h2>';
        h += '<div class="area__body">' + t(a.body) + '</div>';
        if (nonEmpty(a.tags)) {
          h += '<div class="tags">';
          a.tags.forEach(function (tg) { h += '<span class="tag">' + t(tg) + '</span>'; });
          h += '</div>';
        }
        h += '</div></article>';
      });
      h += '</div>';
    } else {
      h += emptyBlock();
    }

    return h + '</div>';
  }

  /* ---------- 页面：论文发表 ---------- */
  function pagePublications() {
    var pubs = S.publications || [];
    var h = '<div class="page"><header class="page__head">';
    h += '<h1 class="page__title">' + t(UI.nav.publications) + '</h1>';
    h += '<p class="page__lede">' + t(UI.lede.publications) + '</p>';
    h += '</header>';

    if (!nonEmpty(pubs)) return h + emptyBlock() + '</div>';

    // 固定顺序，不跟着数据里谁先出现走
    var ORDER = ['journal', 'conference', 'chapter', 'patent', 'preprint'];
    var types = ORDER.filter(function (ty) {
      return pubs.some(function (p) { return p.type === ty; });
    });

    if (types.length > 1) {
      h += '<div class="pub-filters">';
      h += '<button class="chip' + (pubFilter === 'all' ? ' is-active' : '') + '" data-filter="all">' +
           t(UI.labels.all) + '</button>';
      types.forEach(function (ty) {
        var label = UI.labels[ty] ? t(UI.labels[ty]) : ty;
        h += '<button class="chip' + (pubFilter === ty ? ' is-active' : '') + '" data-filter="' + ty + '">' +
             label + '</button>';
      });
      h += '</div>';
    }

    var shown = pubs.filter(function (p) { return pubFilter === 'all' || p.type === pubFilter; });
    shown = shown.slice().sort(function (a, b) { return (b.year || 0) - (a.year || 0); });
    if (!shown.length) return h + emptyBlock() + '</div>';

    var n = shown.length;
    var lastYear = null;
    shown.forEach(function (p, i) {
      if (p.year !== lastYear) {
        h += '<h2 class="year-head">' + (p.year || '') + '</h2>';
        lastYear = p.year;
      }
      var badge = p.type
        ? '<span class="badge badge--' + p.type + '">' + (UI.labels[p.type] ? t(UI.labels[p.type]) : p.type) + '</span>'
        : '';

      h += '<article class="pub">';
      h += '<div><div class="pub__num">' + (n - i) + '</div></div><div>';
      h += '<p class="pub__title">' + t(p.title) + badge + '</p>';
      if (p.authors)    h += '<p class="pub__authors">' + me(p.authors) + '</p>';
      if (has(p.venue)) h += '<p class="pub__venue">' + em(t(p.venue)) + '</p>';
      // 第四行：有 DOI 就显示 DOI，没有就退回 url（比如 IEEE Xplore 页面）
      if (p.doi) {
        h += '<p class="pub__doi"><a href="https://doi.org/' + attr(p.doi) +
             '" target="_blank" rel="noopener">https://doi.org/' + p.doi + '</a></p>';
      } else if (p.url) {
        h += '<p class="pub__doi"><a href="' + attr(p.url) +
             '" target="_blank" rel="noopener">' + p.url + '</a></p>';
      }
      if (nonEmpty(p.links)) {
        h += '<div class="pub__links">';
        p.links.forEach(function (l) {
          h += '<a href="' + attr(l.url) + '"' + extLink(l.url) + '>' + t(l.label) + '</a>';
        });
        h += '</div>';
      }
      h += '</div></article>';
    });

    return h + '</div>';
  }

  /* ---------- 页面：课题组 ---------- */

  // 没有照片时，用姓名首字母做头像。中文名取第一个字，英文名取首字母。
  function initials(name) {
    var s = String(name).trim();
    if (!s) return '·';
    if (/[一-鿿]/.test(s)) return s.charAt(0);
    return s.split(/\s+/).slice(0, 2).map(function (w) { return w.charAt(0); }).join('').toUpperCase();
  }

  function personCard(p) {
    var h = '<article class="person">';
    if (p.photo) {
      h += '<img class="person__photo" src="' + attr(p.photo) + '" alt="' + attr(t(p.name)) +
           '" loading="lazy" onerror="this.remove()">';
    } else {
      h += '<div class="person__initials" aria-hidden="true">' + initials(t(p.name)) + '</div>';
    }
    h += '<h3 class="person__name">' + t(p.name) + '</h3>';
    if (has(p.role)) h += '<p class="person__role">' + t(p.role) + '</p>';
    if (has(p.bio))  h += '<p class="person__bio">' + t(p.bio) + '</p>';
    if (nonEmpty(p.links)) {
      h += '<div class="person__links">';
      p.links.forEach(function (l) {
        h += '<a href="' + attr(l.url) + '"' + extLink(l.url) +
             ' aria-label="' + attr(l.icon || 'link') + '">' + icon(l.icon || 'link') + '</a>';
      });
      h += '</div>';
    }
    return h + '</article>';
  }

  function pageGroup() {
    var g = S.group || {};
    var h = '<div class="page"><header class="page__head">';
    h += '<h1 class="page__title">' + t(UI.nav.group) + '</h1>';
    if (has(g.lede)) h += '<p class="page__lede">' + t(g.lede) + '</p>';
    h += '</header>';

    var anything = false;

    if (nonEmpty(g.members)) {
      anything = true;
      h += '<section class="section"><h2 class="section__title">' + t(UI.headings.members) + '</h2>';
      h += '<div class="grid grid--3">' + g.members.map(personCard).join('') + '</div></section>';
    }

    if (nonEmpty(g.alumni)) {
      anything = true;
      h += '<section class="section"><h2 class="section__title">' + t(UI.headings.alumni) + '</h2>';
      h += '<ul class="cvspine">';
      g.alumni.forEach(function (a) { h += '<li>' + t(a) + '</li>'; });
      h += '</ul></section>';
    }

    if (g.activities && nonEmpty(g.activities.items)) {
      anything = true;
      h += '<section class="section"><h2 class="section__title">' + t(UI.headings.activities) + '</h2>';
      if (has(g.activities.lede)) h += '<p class="page__lede" style="margin-bottom:1.4rem">' + t(g.activities.lede) + '</p>';
      h += '<div class="grid grid--3">';
      g.activities.items.forEach(function (s) {
        h += '<figure class="snap">';
        if (s.photo) {
          h += '<img class="snap__img" src="' + attr(s.photo) + '" alt="" loading="lazy" onerror="this.remove()">';
        } else {
          h += '<div class="snap__placeholder" aria-hidden="true">' + (s.emoji || '📷') + '</div>';
        }
        h += '<figcaption><span class="snap__caption">' + t(s.caption) + '</span>';
        if (has(s.date)) h += '<span class="snap__date">' + t(s.date) + '</span>';
        h += '</figcaption></figure>';
      });
      h += '</div></section>';
    }

    if (!anything) h += emptyBlock();
    return h + '</div>';
  }

  /* ---------- 页面：教学 ---------- */
  function pageTeaching() {
    var tc = S.teaching || {};
    var h = '<div class="page"><header class="page__head">';
    h += '<h1 class="page__title">' + t(UI.nav.teaching) + '</h1>';
    if (has(tc.lede)) h += '<p class="page__lede">' + t(tc.lede) + '</p>';
    h += '</header>';

    var anything = false;

    // 教学理念放在最前面：它是「我为什么这么教」，
    // 给后面的课程列表提供解读框架。
    if (tc.statement && has(tc.statement.body)) {
      anything = true;
      h += '<section class="section"><h2 class="section__title">' + t(tc.statement.title) + '</h2>';
      h += '<div class="card"><p class="statement">' + t(tc.statement.body) + '</p>';
      if (tc.statement.pdf) {
        h += '<div class="links" style="margin-top:1.3rem">' +
             '<a class="link-pill link-pill--primary" href="' + attr(tc.statement.pdf) + '" download>' +
             icon('file') + t(UI.labels.downloadStatement) + '</a></div>';
      }
      h += '</div></section>';
    }

    if (nonEmpty(tc.courses)) {
      anything = true;
      h += '<section class="section"><h2 class="section__title">' + t(UI.headings.courses) + '</h2><div class="stack">';
      tc.courses.forEach(function (c) {
        h += '<article class="course">';
        h += '<div class="course__top">';
        if (c.code) h += '<span class="course__code">' + t(c.code) + '</span>';
        h += '<h3 class="course__title">' + t(c.title) + '</h3></div>';
        if (has(c.meta)) h += '<p class="course__meta">' + t(c.meta) + '</p>';
        if (has(c.desc)) h += '<p class="course__desc">' + t(c.desc) + '</p>';
        if (nonEmpty(c.materials)) {
          h += '<ul class="materials">';
          c.materials.forEach(function (m) {
            var target = m.external || /^https?:\/\//i.test(m.url) ? ' target="_blank" rel="noopener"' : '';
            h += '<li><a href="' + attr(m.url) + '" data-kind="' + attr(m.kind || 'File') + '"' + target + '>' +
                 t(m.label) + '</a></li>';
          });
          h += '</ul>';
        }
        h += '</article>';
      });
      h += '</div></section>';
    }

    if (nonEmpty(tc.faq)) {
      anything = true;
      h += '<section class="section"><h2 class="section__title">' + t(UI.headings.faq) + '</h2><div class="faq">';
      tc.faq.forEach(function (f) {
        h += '<details><summary>' + t(f.q) + '</summary>';
        h += '<div class="faq__a"><p>' + t(f.a) + '</p></div></details>';
      });
      h += '</div></section>';
    }

    if (!anything) h += emptyBlock();
    return h + '</div>';
  }

  /* ---------- 页面：科普 / 媒体 ---------- */
  function pageMedia() {
    var m = S.media || {};
    var h = '<div class="page"><header class="page__head">';
    h += '<h1 class="page__title">' + t(UI.nav.media) + '</h1>';
    if (has(m.lede)) h += '<p class="page__lede">' + t(m.lede) + '</p>';
    h += '</header>';

    var anything = false;

    if (nonEmpty(m.videos)) {
      anything = true;
      h += '<section class="section"><h2 class="section__title">' + t(UI.headings.videos) + '</h2>';
      h += '<div class="grid grid--2">';
      m.videos.forEach(function (v) {
        var poster = v.platform === 'youtube'
          ? '<img src="https://i.ytimg.com/vi/' + attr(v.id) + '/hqdefault.jpg" alt="" loading="lazy">'
          : '';
        h += '<article class="video">';
        h += '<button class="video__frame" data-platform="' + attr(v.platform) + '" data-id="' + attr(v.id) +
             '" aria-label="Play: ' + attr(t(v.title)) + '">' + poster +
             '<span class="video__play"><span></span></span></button>';
        h += '<div class="video__body"><h3 class="video__title">' + t(v.title) + '</h3>';
        if (has(v.meta)) h += '<p class="video__meta">' + t(v.meta) + '</p>';
        h += '</div></article>';
      });
      h += '</div></section>';
    }

    var pod = m.podcast;
    if (pod) {
      anything = true;
      h += '<section class="section"><h2 class="section__title">' + t(UI.headings.podcast) + '</h2>';
      h += '<div class="card"><h3 class="card__title">' + t(pod.title) + '</h3>';
      if (has(pod.desc)) h += '<p class="card__body">' + t(pod.desc) + '</p>';
      if (nonEmpty(pod.subscribe)) {
        h += '<div class="links" style="margin-top:1.1rem">';
        pod.subscribe.forEach(function (sub) {
          h += '<a class="link-pill" href="' + attr(sub.url) + '"' + extLink(sub.url) + '>' +
               icon('mic') + t(sub.label) + '</a>';
        });
        h += '</div>';
      }
      h += '</div>';

      if (nonEmpty(pod.episodes)) {
        h += '<h3 class="section__title" style="margin-top:2.2rem">' + t(UI.headings.episodes) + '</h3>';
        pod.episodes.forEach(function (ep) {
          h += '<article class="episode">';
          h += '<div class="episode__num">' + (ep.number !== undefined ? ep.number : '·') + '</div><div>';
          h += '<h4 class="episode__title">' + t(ep.title) + '</h4>';
          if (has(ep.meta)) h += '<p class="episode__meta">' + t(ep.meta) + '</p>';
          if (has(ep.desc)) h += '<p class="episode__desc">' + t(ep.desc) + '</p>';
          if (ep.audioUrl)  h += '<audio controls preload="none" src="' + attr(ep.audioUrl) + '"></audio>';
          if (ep.embedUrl)  h += '<div class="embed-wrap"><iframe src="' + attr(ep.embedUrl) +
                                 '" height="152" loading="lazy" allow="encrypted-media" title="' +
                                 attr(t(ep.title)) + '"></iframe></div>';
          h += '</div></article>';
        });
      }
      h += '</section>';
    }

    if (nonEmpty(m.press)) {
      anything = true;
      h += '<section class="section"><h2 class="section__title">' + t(UI.headings.press) + '</h2>' +
           newsList(m.press) + '</section>';
    }

    if (!anything) h += emptyBlock();
    return h + '</div>';
  }

  /* ---------- 页面：生活 ---------- */
  function pageLife() {
    var L = S.life || {};
    var h = '<div class="page"><header class="page__head">';
    h += '<h1 class="page__title">' + t(UI.nav.life) + '</h1>';
    if (has(L.lede)) h += '<p class="page__lede">' + t(L.lede) + '</p>';
    h += '</header>';

    var anything = false;

    if (L.now && nonEmpty(L.now.items)) {
      anything = true;
      h += '<section class="section"><h2 class="section__title">' + t(UI.headings.now) + '</h2>';
      if (has(L.now.updated)) h += '<p class="now__stamp">' + t(L.now.updated) + '</p>';
      h += '<div class="now">';
      L.now.items.forEach(function (it) {
        h += '<div class="now__row">';
        h += '<div class="now__icon" aria-hidden="true">' + (it.emoji || '·') + '</div>';
        h += '<div><p class="now__label">' + t(it.label) + '</p>';
        h += '<p class="now__text">' + t(it.text) + '</p></div></div>';
      });
      h += '</div></section>';
    }

    if (nonEmpty(L.hobbies)) {
      anything = true;
      h += '<section class="section"><h2 class="section__title">' + t(UI.headings.hobbies) + '</h2>';
      h += '<div class="grid grid--3">';
      L.hobbies.forEach(function (hb) {
        h += '<article class="hobby">';
        h += '<div class="hobby__emoji" aria-hidden="true">' + (hb.emoji || '✦') + '</div>';
        h += '<h3 class="hobby__title">' + t(hb.title) + '</h3>';
        h += '<p class="hobby__body">' + t(hb.body) + '</p>';
        if (hb.image) h += '<img src="' + attr(hb.image) + '" alt="" loading="lazy" onerror="this.remove()">';
        h += '</article>';
      });
      h += '</div></section>';
    }

    if (nonEmpty(L.picks)) {
      anything = true;
      h += '<section class="section"><h2 class="section__title">' + t(UI.headings.picks) + '</h2>';
      h += '<div class="picks">';
      L.picks.forEach(function (g) {
        h += '<div class="pick-group"><h3 class="pick-group__head">' + t(g.title) + '</h3><ul class="pick-list">';
        (g.items || []).forEach(function (it) {
          var name = t(it.name);
          h += '<li>' + (it.url ? '<a href="' + attr(it.url) + '"' + extLink(it.url) + '><b>' + name + '</b></a>'
                                : '<b>' + name + '</b>');
          if (has(it.note)) h += '<span>' + t(it.note) + '</span>';
          h += '</li>';
        });
        h += '</ul></div>';
      });
      h += '</div></section>';
    }

    if (!anything) h += emptyBlock();
    return h + '</div>';
  }

  /* ---------- 页面：留言板 ---------- */
  function guestReady() {
    var sb = S.guestbook && S.guestbook.supabase;
    return !!(sb && sb.url && sb.anonKey);
  }

  function pageGuestbook() {
    var g = S.guestbook;
    var G = UI.guest;
    var h = '<div class="page"><header class="page__head">';
    h += '<h1 class="page__title">' + t(UI.nav.hello) + '</h1>';
    if (g && has(g.lede)) h += '<p class="page__lede">' + t(g.lede) + '</p>';
    h += '</header>';

    if (!guestReady()) {
      return h + emptyBlock(t(UI.labels.guestSetup)) + '</div>';
    }

    if (has(g.note)) h += '<p class="gb-note">' + t(g.note) + '</p>';

    h += '<form class="gb-form" id="gbForm" novalidate>';
    h += '<input class="gb-input" id="gbName" type="text" maxlength="40" autocomplete="off"' +
         ' placeholder="' + attr(t(G.name)) + '" aria-label="' + attr(t(G.name)) + '">';
    h += '<textarea class="gb-input gb-input--area" id="gbBody" rows="4" maxlength="800"' +
         ' placeholder="' + attr(t(G.hint)) + '" aria-label="' + attr(t(G.body)) + '"></textarea>';

    // 蜜罐：藏起来的输入框。真人看不见也 tab 不到，机器人却会老老实实填。
    // 一旦填了就当作机器人，假装发送成功但什么都不发出去。
    h += '<div class="gb-hp" aria-hidden="true"><label>Website' +
         '<input id="gbHp" type="text" tabindex="-1" autocomplete="off"></label></div>';

    h += '<div class="gb-form__foot">';
    h += '<button class="btn gb-send" id="gbSend" type="submit">' + t(G.send) + '</button>';
    h += '<span class="gb-msg" id="gbMsg" role="status"></span>';
    h += '</div></form>';

    h += '<div class="gb-list" id="gbList"><p class="gb-loading">' + t(G.loading) + '</p></div>';
    return h + '</div>';
  }

  /* ---------- 留言板：跟 Supabase 打交道 ----------
     留言存在 Supabase 的 messages 表里。anonKey 是公钥，写在前端是设计如此；
     真正管权限的是数据库那边的规则：任何人都能读、能写一条，但谁都不能改、
     不能删。要删只能你自己上 supabase.com 后台。
     防机器人一共四道：蜜罐、最短停留时间、本机冷却、数据库端的限流和禁链接。 */
  var GB_TABLE    = 'messages';
  var GB_MINTIME  = 3000;    // 打开页面后至少停留 3 秒才能发（机器人是秒发的）
  var GB_COOLDOWN = 60000;   // 同一个浏览器，两条留言之间至少隔一分钟
  var gbOpenedAt  = 0;
  var gbSending   = false;   // 上一条还在路上时，挡住第二条
  var gbDraft     = { name: '', body: '' };   // 切换语言会整页重画，别把人家写了一半的话弄丢

  function gbKey() { return S.guestbook.supabase.anonKey; }
  function gbEndpoint(q) {
    return String(S.guestbook.supabase.url).replace(/\/+$/, '') +
           '/rest/v1/' + GB_TABLE + (q || '');
  }

  function gbDate(iso) {
    var d = new Date(iso);
    if (isNaN(d.getTime())) return '';
    try {
      return d.toLocaleDateString(lang === 'zh' ? 'zh-CN' : 'en-GB',
                                  { year: 'numeric', month: 'short', day: 'numeric' });
    } catch (e) {
      return String(iso).slice(0, 10);
    }
  }

  function gbRender(rows) {
    var G = UI.guest;
    var list = document.getElementById('gbList');
    if (!list) return;
    if (!rows || !rows.length) {
      list.innerHTML = '<div class="empty">' + t(G.none) + '</div>';
      return;
    }
    var h = '<p class="gb-count">' + rows.length + ' ' + t(G.count) + '</p>';
    rows.forEach(function (r) {
      var who = String(r.name || '').trim() || t(G.anon);
      h += '<article class="gb-item"><div class="gb-item__head">';
      h += '<span class="gb-avatar" aria-hidden="true">' + esc(initials(who)) + '</span>';
      h += '<b class="gb-who">' + esc(who) + '</b>';
      h += '<time class="gb-when">' + esc(gbDate(r.created_at)) + '</time>';
      h += '</div><p class="gb-body">' + esc(r.body).replace(/\n/g, '<br>') + '</p></article>';
    });
    list.innerHTML = h;
  }

  function gbLoad() {
    if (!document.getElementById('gbList')) return;
    fetch(gbEndpoint('?select=name,body,created_at&is_hidden=eq.false' +
                     '&order=created_at.desc&limit=200'),
          { headers: { apikey: gbKey(), Authorization: 'Bearer ' + gbKey() }, cache: 'no-store' })
      .then(function (r) {
        if (!r.ok) throw new Error('HTTP ' + r.status);
        return r.json();
      })
      .then(gbRender)
      .catch(function (err) {
        console.error('[guestbook] 读取失败：', err);
        var l = document.getElementById('gbList');
        if (l) l.innerHTML = '<div class="empty">' + t(UI.guest.errNet) + '</div>';
      });
  }

  function gbSay(text, kind) {
    var el = document.getElementById('gbMsg');
    if (!el) return;
    el.textContent = text || '';
    el.className = 'gb-msg' + (kind ? ' gb-msg--' + kind : '');
  }

  function gbSubmit(e) {
    e.preventDefault();
    var G = UI.guest;
    var nameEl = document.getElementById('gbName');
    var bodyEl = document.getElementById('gbBody');
    var hpEl   = document.getElementById('gbHp');
    var btn    = document.getElementById('gbSend');
    if (!bodyEl || !btn || gbSending) return;

    // 蜜罐被填了 —— 是机器人。假装成功，一个字都不发出去。
    if (hpEl && hpEl.value) { bodyEl.value = ''; gbSay(t(G.thanks), 'ok'); return; }

    var body = bodyEl.value.trim();
    var who  = (nameEl ? nameEl.value : '').trim();

    if (!body)             { gbSay(t(G.errEmpty), 'bad'); return; }
    if (body.length > 800) { gbSay(t(G.errLong),  'bad'); return; }
    if (/(https?:\/\/|www\.)/i.test(body + ' ' + who)) { gbSay(t(G.errLink), 'bad'); return; }
    if (Date.now() - gbOpenedAt < GB_MINTIME) { gbSay(t(G.errSlow), 'bad'); return; }

    var last = 0;
    try { last = parseInt(localStorage.getItem('gbLast') || '0', 10) || 0; } catch (e1) {}
    if (Date.now() - last < GB_COOLDOWN) { gbSay(t(G.errWait), 'bad'); return; }

    gbSending = true;
    btn.disabled = true;
    gbSay(t(G.sending), '');

    fetch(gbEndpoint(), {
      method: 'POST',
      headers: {
        apikey: gbKey(),
        Authorization: 'Bearer ' + gbKey(),
        'Content-Type': 'application/json',
        Prefer: 'return=minimal'
      },
      body: JSON.stringify({ name: who.slice(0, 40), body: body })
    })
      .then(function (r) {
        // 数据库那边拦下来了：撞上限流，或者违反了长度／禁链接的约束
        if (!r.ok) throw new Error('HTTP ' + r.status);
        try { localStorage.setItem('gbLast', String(Date.now())); } catch (e2) {}
        bodyEl.value = '';
        gbDraft = { name: who, body: '' };   // 名字留着，免得回头再留一条还要重打
        gbSay(t(G.thanks), 'ok');
        gbLoad();
      })
      .catch(function (err) {
        console.error('[guestbook] 发送失败：', err);
        gbSay(t(G.errBusy), 'bad');
      })
      .then(function () { gbSending = false; btn.disabled = false; });
  }

  function mountGuestbook() {
    if (!guestReady()) return;
    // 只在整页第一次打开时记时间，切语言、来回翻页都不该重新计时
    if (!gbOpenedAt) gbOpenedAt = Date.now();

    var form   = document.getElementById('gbForm');
    var nameEl = document.getElementById('gbName');
    var bodyEl = document.getElementById('gbBody');
    if (!form) return;

    // 把重画之前写了一半的内容放回去
    if (nameEl) nameEl.value = gbDraft.name;
    if (bodyEl) bodyEl.value = gbDraft.body;

    form.addEventListener('submit', gbSubmit);
    form.addEventListener('input', function () {
      gbDraft.name = nameEl ? nameEl.value : '';
      gbDraft.body = bodyEl ? bodyEl.value : '';
    });
    gbLoad();
  }

  /* ---------- 页面：简历 ---------- */
  function timeline(items) {
    var h = '<ul class="timeline">';
    items.forEach(function (it) {
      h += '<li>';
      h += '<p class="timeline__when">' + t(it.when) + '</p>';
      h += '<p class="timeline__what">' + t(it.what) + '</p>';
      if (has(it.where)) h += '<p class="timeline__where">' + t(it.where) + '</p>';
      if (has(it.note))  h += '<p class="timeline__note">' + t(it.note) + '</p>';
      h += '</li>';
    });
    return h + '</ul>';
  }

  function pageCv() {
    var c = S.cv || {};
    var h = '<div class="page"><header class="page__head">';
    h += '<h1 class="page__title">' + t(UI.nav.cv) + '</h1>';
    h += '<p class="page__lede">' + t(UI.lede.cv) + '</p>';
    h += '</header>';

    if (c.pdf) {
      h += '<div class="links" style="margin-bottom:2.6rem">';
      h += '<a class="link-pill link-pill--primary" href="' + attr(c.pdf) + '" download>' +
           icon('file') + t(UI.labels.downloadCv) + '</a></div>';
    }

    if (nonEmpty(c.education)) {
      h += '<section class="section"><h2 class="section__title">' + t(UI.headings.education) + '</h2>' +
           timeline(c.education) + '</section>';
    }
    if (nonEmpty(c.experience)) {
      h += '<section class="section"><h2 class="section__title">' + t(UI.headings.experience) + '</h2>' +
           timeline(c.experience) + '</section>';
    }

    if (nonEmpty(c.extras)) {
      c.extras.forEach(function (block) {
        if (!nonEmpty(block.items)) return;
        h += '<section class="section"><h2 class="section__title">' + t(block.title) + '</h2><ul class="cvspine">';
        block.items.forEach(function (it) { h += '<li>' + t(it) + '</li>'; });
        h += '</ul></section>';
      });
    }

    var ct = c.contact;
    if (ct) {
      h += '<section class="section"><h2 class="section__title">' + t(UI.headings.contact) + '</h2>';
      h += '<div class="cvspine"><dl class="deflist">';
      // email 可以是一个字符串，也可以是一个数组（多个邮箱，用分号隔开显示）
      var mails = Array.isArray(ct.email) ? ct.email : (ct.email ? [ct.email] : []);
      if (mails.length) {
        h += '<dt>' + t(UI.labels.email) + '</dt><dd>' + mails.map(function (e) {
          return '<a href="mailto:' + attr(e) + '">' + e + '</a>';
        }).join('; ') + '</dd>';
      }
      if (has(ct.office))  h += '<dt>' + t(UI.labels.office) + '</dt><dd>' + t(ct.office) + '</dd>';
      if (has(ct.address)) h += '<dt>' + t(UI.labels.address) + '</dt><dd>' + t(ct.address) + '</dd>';
      h += '</dl>';
      if (has(ct.note)) h += '<p class="contact-note">' + t(ct.note) + '</p>';
      h += '</div></section>';
    }

    return h + '</div>';
  }

  /* ---------- 路由 ---------- */
  var RENDER = {
    about: pageAbout, research: pageResearch, publications: pagePublications,
    group: pageGroup, teaching: pageTeaching, media: pageMedia, life: pageLife,
    cv: pageCv, hello: pageGuestbook
  };

  function currentPage() {
    var key = (location.hash || '').replace(/^#\/?/, '').split('?')[0];
    return PAGES.indexOf(key) !== -1 ? key : 'about';
  }

  function renderNav(active) {
    document.getElementById('nav').innerHTML = PAGES.map(function (k) {
      return '<a href="#/' + k + '"' + (k === active ? ' class="is-active" aria-current="page"' : '') + '>' +
             t(UI.nav[k]) + '</a>';
    }).join('');
  }

  function renderShell() {
    document.documentElement.lang = (lang === 'zh' ? 'zh-CN' : 'en');
    document.getElementById('langLabel').textContent = (lang === 'en' ? '中文' : 'EN');

    var brand = document.querySelector('[data-slot="brandName"]');
    if (brand) brand.textContent = t(S.profile && S.profile.name);

    var f = S.footer || {};
    var fl = document.querySelector('[data-slot="footerLine"]');
    var fu = document.querySelector('[data-slot="footerUpdated"]');
    if (fl) fl.innerHTML = t(f.line);
    if (fu) fu.textContent = t(f.updated);
  }

  function render(scroll) {
    var page = currentPage();
    document.documentElement.setAttribute('data-page', page);  // 切换页面主题色
    renderShell();
    renderNav(page);

    var main = document.getElementById('main');
    try {
      main.innerHTML = RENDER[page]();
    } catch (err) {
      main.innerHTML = '<div class="callout"><strong>content.js 里有一处写错了。</strong><br>' +
                       '常见原因：漏了逗号、引号没配对、方括号没闭合。<br><br>' +
                       '<code>' + String(err.message) + '</code></div>';
      console.error(err);
    }

    if (page === 'hello') mountGuestbook();

    var name = t(S.profile && S.profile.name);
    document.title = (page === 'about' ? name : t(UI.nav[page]) + ' — ' + name);

    document.getElementById('nav').classList.remove('is-open');
    document.getElementById('navToggle').setAttribute('aria-expanded', 'false');
    if (scroll !== false) window.scrollTo(0, 0);
  }

  /* ---------- 主题 ---------- */
  function applyTheme(mode) {
    document.documentElement.setAttribute('data-theme', mode);
    try { localStorage.setItem('theme', mode); } catch (e) {}
  }

  function initTheme() {
    var saved = null;
    try { saved = localStorage.getItem('theme'); } catch (e) {}
    if (!saved) {
      saved = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    }
    document.documentElement.setAttribute('data-theme', saved);
  }

  /* ---------- 语言 ---------- */
  function initLang() {
    var saved = null;
    try { saved = localStorage.getItem('lang'); } catch (e) {}
    if (saved === 'en' || saved === 'zh') { lang = saved; return; }

    if (S.defaultLang === 'en' || S.defaultLang === 'zh') lang = S.defaultLang;
    // 浏览器是中文环境的访客，自动给中文
    if ((navigator.language || '').toLowerCase().indexOf('zh') === 0) lang = 'zh';
  }

  /* ---------- 事件绑定 ---------- */
  function bind() {
    document.getElementById('langToggle').addEventListener('click', function () {
      lang = (lang === 'en' ? 'zh' : 'en');
      try { localStorage.setItem('lang', lang); } catch (e) {}
      render(false);
    });

    document.getElementById('themeToggle').addEventListener('click', function () {
      var now = document.documentElement.getAttribute('data-theme');
      applyTheme(now === 'dark' ? 'light' : 'dark');
    });

    var navToggle = document.getElementById('navToggle');
    navToggle.addEventListener('click', function () {
      var open = document.getElementById('nav').classList.toggle('is-open');
      navToggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    });

    window.addEventListener('hashchange', function () { render(true); });

    // 论文筛选 + 视频点击播放（事件委托，重渲染后依然有效）
    document.getElementById('main').addEventListener('click', function (e) {
      var chip = e.target.closest && e.target.closest('.chip[data-filter]');
      if (chip) { pubFilter = chip.getAttribute('data-filter'); render(false); return; }

      var frame = e.target.closest && e.target.closest('.video__frame[data-id]');
      if (frame) {
        var platform = frame.getAttribute('data-platform');
        var id = frame.getAttribute('data-id');
        var src = platform === 'bilibili'
          ? 'https://player.bilibili.com/player.html?bvid=' + encodeURIComponent(id) +
            '&autoplay=1&high_quality=1&danmaku=0'
          : 'https://www.youtube-nocookie.com/embed/' + encodeURIComponent(id) + '?autoplay=1&rel=0';

        var wrap = document.createElement('div');
        wrap.className = 'video__frame';
        wrap.innerHTML = '<iframe src="' + attr(src) + '" allow="autoplay; encrypted-media; picture-in-picture" ' +
                         'allowfullscreen scrolling="no" title="video"></iframe>';
        frame.replaceWith(wrap);
      }
    });
  }

  /* ---------- 启动 ---------- */
  initTheme();

  if (!S) {
    document.getElementById('main').innerHTML =
      '<div class="callout"><strong>没能读取 content.js。</strong><br>' +
      '要么文件路径不对，要么文件里有语法错误（最常见的是漏了一个逗号或引号）。' +
      '在浏览器里按 F12 打开控制台可以看到具体是第几行。</div>';
    return;
  }

  initLang();
  bind();
  render(false);
})();
