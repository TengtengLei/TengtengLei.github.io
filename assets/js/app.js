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
      teaching:     { en: 'Teaching',     zh: '教学'     },
      media:        { en: 'Outreach',     zh: '科普'     },
      life:         { en: 'Life',         zh: '生活'     },
      cv:           { en: 'CV',           zh: '简历'     },
      hello:        { en: 'Say Hi',       zh: '留言板'   }
    },
    headings: {
      news:       { en: 'News',                  zh: '最新动态'   },
      areas:      { en: 'Research Areas',        zh: '研究方向'   },
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
      chapter:   { en: 'Chapter',        zh: '专著章节' },
      downloadCv:{ en: 'Download CV (PDF)', zh: '下载简历 PDF' },
      email:     { en: 'Email',          zh: '邮箱'     },
      office:    { en: 'Office',         zh: '办公室'   },
      address:   { en: 'Address',        zh: '地址'     },
      empty:     { en: 'Nothing here yet — content coming soon.', zh: '这一块还没有内容，稍后补充。' },
      guestSetup:{ en: 'The guestbook is not switched on yet. See section 8 of content.js for the three-minute setup.',
                   zh: '留言板还没开通。打开 content.js 第 8 节，按里面的步骤配置一下就能用（大约三分钟）。' }
    },
    lede: {
      publications: { en: 'Peer-reviewed articles, conference papers and preprints. Please email me if you cannot access a PDF.',
                      zh: '同行评议论文、会议论文与预印本。如果某篇拿不到全文，欢迎发邮件向我索取。' },
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

  var PAGES = ['about', 'research', 'publications', 'teaching', 'media', 'life', 'cv', 'hello'];

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
  function me(str) { return String(str).replace(/\*([^*]+)\*/g, '<span class="me">$1</span>'); }
  function attr(s) { return String(s).replace(/"/g, '&quot;'); }
  function emptyBlock(msg) { return '<div class="empty">' + (msg || t(UI.labels.empty)) + '</div>'; }
  function extLink(url) { return /^https?:\/\//i.test(url) ? ' target="_blank" rel="noopener"' : ''; }

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
      h += '<section class="section"><h2 class="section__title">' + t(UI.headings.news) + '</h2><ul class="news">';
      S.news.forEach(function (n) {
        h += '<li><time>' + t(n.date) + '</time><span>' + t(n.text) + '</span></li>';
      });
      h += '</ul></section>';
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

    var types = [];
    pubs.forEach(function (p) { if (p.type && types.indexOf(p.type) === -1) types.push(p.type); });

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

  /* ---------- 页面：教学 ---------- */
  function pageTeaching() {
    var tc = S.teaching || {};
    var h = '<div class="page"><header class="page__head">';
    h += '<h1 class="page__title">' + t(UI.nav.teaching) + '</h1>';
    if (has(tc.lede)) h += '<p class="page__lede">' + t(tc.lede) + '</p>';
    h += '</header>';

    if (nonEmpty(tc.courses)) {
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
    } else {
      h += emptyBlock();
    }

    if (tc.statement && has(tc.statement.body)) {
      h += '<section class="section"><h2 class="section__title">' + t(tc.statement.title) + '</h2>';
      h += '<div class="card"><p class="card__body">' + t(tc.statement.body) + '</p></div></section>';
    }

    if (nonEmpty(tc.faq)) {
      h += '<section class="section"><h2 class="section__title">' + t(UI.headings.faq) + '</h2><div class="faq">';
      tc.faq.forEach(function (f) {
        h += '<details><summary>' + t(f.q) + '</summary>';
        h += '<div class="faq__a"><p>' + t(f.a) + '</p></div></details>';
      });
      h += '</div></section>';
    }

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
      h += '<section class="section"><h2 class="section__title">' + t(UI.headings.press) + '</h2><ul class="news">';
      m.press.forEach(function (pr) {
        h += '<li><time>' + t(pr.date) + '</time><span>' + t(pr.text) + '</span></li>';
      });
      h += '</ul></section>';
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
  function pageGuestbook() {
    var g = S.guestbook;
    var h = '<div class="page"><header class="page__head">';
    h += '<h1 class="page__title">' + t(UI.nav.hello) + '</h1>';
    if (g && has(g.lede)) h += '<p class="page__lede">' + t(g.lede) + '</p>';
    h += '</header>';

    if (!g || !g.giscus || !g.giscus.repo || !g.giscus.repoId) {
      return h + emptyBlock(t(UI.labels.guestSetup)) + '</div>';
    }

    if (has(g.note)) {
      h += '<div class="card guest-intro"><p class="card__body">' + t(g.note) + '</p></div>';
    }
    h += '<div id="giscus-mount"></div>';
    return h + '</div>';
  }

  /* ---------- giscus 留言板 ---------- */
  function giscusTheme() {
    return document.documentElement.getAttribute('data-theme') === 'dark' ? 'dark' : 'light';
  }

  function mountGiscus() {
    var g = S.guestbook && S.guestbook.giscus;
    var mount = document.getElementById('giscus-mount');
    if (!mount || !g || !g.repo || !g.repoId) return;

    mount.innerHTML = '';
    var s = document.createElement('script');
    s.src = 'https://giscus.app/client.js';
    s.setAttribute('data-repo', g.repo);
    s.setAttribute('data-repo-id', g.repoId);
    s.setAttribute('data-category', g.category || '');
    s.setAttribute('data-category-id', g.categoryId || '');
    s.setAttribute('data-mapping', 'specific');
    s.setAttribute('data-term', 'guestbook');
    s.setAttribute('data-reactions-enabled', '1');
    s.setAttribute('data-emit-metadata', '0');
    s.setAttribute('data-input-position', 'top');
    s.setAttribute('data-theme', giscusTheme());
    s.setAttribute('data-lang', lang === 'zh' ? 'zh-CN' : 'en');
    s.crossOrigin = 'anonymous';
    s.async = true;
    mount.appendChild(s);
  }

  // 主题切换时同步告诉 giscus 换色
  function syncGiscusTheme() {
    var frame = document.querySelector('iframe.giscus-frame');
    if (!frame || !frame.contentWindow) return;
    frame.contentWindow.postMessage(
      { giscus: { setConfig: { theme: giscusTheme() } } },
      'https://giscus.app'
    );
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
        h += '<section class="section"><h2 class="section__title">' + t(block.title) + '</h2><ul class="news">';
        block.items.forEach(function (it) { h += '<li style="grid-template-columns:1fr">' + t(it) + '</li>'; });
        h += '</ul></section>';
      });
    }

    var ct = c.contact;
    if (ct) {
      h += '<section class="section"><h2 class="section__title">' + t(UI.headings.contact) + '</h2>';
      h += '<div class="card"><dl class="deflist">';
      if (ct.email)        h += '<dt>' + t(UI.labels.email) + '</dt><dd><a href="mailto:' + attr(ct.email) + '">' + ct.email + '</a></dd>';
      if (has(ct.office))  h += '<dt>' + t(UI.labels.office) + '</dt><dd>' + t(ct.office) + '</dd>';
      if (has(ct.address)) h += '<dt>' + t(UI.labels.address) + '</dt><dd>' + t(ct.address) + '</dd>';
      h += '</dl>';
      if (has(ct.note)) h += '<p class="card__body" style="margin-top:1.1rem">' + t(ct.note) + '</p>';
      h += '</div></section>';
    }

    return h + '</div>';
  }

  /* ---------- 路由 ---------- */
  var RENDER = {
    about: pageAbout, research: pageResearch, publications: pagePublications,
    teaching: pageTeaching, media: pageMedia, life: pageLife,
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

    if (page === 'hello') mountGiscus();

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
    syncGiscusTheme();
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
