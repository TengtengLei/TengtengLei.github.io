# 文件下载区

所有让访客下载的文件都放这里，然后在 `assets/js/content.js` 里用相对路径引用。

建议的目录结构：

```
files/
├── CV.pdf                          ← 简历（content.js 里 cv.pdf 指向它）
├── papers/                         ← 论文全文 PDF
│   └── 2026-journal-article.pdf
├── slides/                         ← 学术报告幻灯片
│   └── 2025-conference-talk.pdf
└── teaching/                       ← 课件、大纲、习题
    ├── abc1234-syllabus.pdf
    └── abc1234-lecture-01.pdf
```

## 两条注意事项

**1. 文件名不要用中文和空格。** 用小写字母、数字和连字符，例如
`abc1234-lecture-01.pdf`。中文和空格在网址里会变成 `%E8%AF%BE` 这样的乱码，
在某些浏览器和邮件客户端里会打不开。

**2. 视频和音频不要放这里。**
GitHub 仓库单个文件上限 100 MB，整个仓库建议不超过 1 GB，
而且 GitHub Pages 不适合做视频分发（会很卡）。
课程录像传 YouTube 或 B 站，播客传播客托管平台，网站只放链接。

**3. 版权。** 上传论文 PDF 前确认出版社政策。多数期刊允许你放
"accepted manuscript"（接收版，排版前的稿子）而不是出版社最终排版版。
可以在 <https://openpolicyfinder.jisc.ac.uk> 查每本期刊的规定。
