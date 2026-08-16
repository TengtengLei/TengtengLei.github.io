/* ═══════════════════════════════════════════════════════════════════════
   ★★★ 这是你唯一需要改的文件 ★★★

   内容已按你的 CV 填好。以后更新只改这里。

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
      en: 'Tengteng Lei',
      zh: '雷腾腾'
    },
    role: {
      en: 'Research Associate',
      zh: '研究员 (Research Associate)'
    },
    affiliation: {
      en: "King's College London  ·  Northeastern University London",
      zh: '伦敦国王学院 · 伦敦东北大学'
    },
    // 头像：把照片放到 assets/img/ 文件夹，命名为 profile.jpg
    // 建议正方形、至少 600×600 像素，压到 500 KB 以内
    photo: 'assets/img/profile.jpg',

    bio: [
      {
        en: "I build hardware for machine intelligence. Currently I work with Prof. Bipin Rajendran on brain-inspired learning accelerators for large language models, designing silicon that lets a spiking transformer learn on-chip rather than only run inference.",
        zh: '我做的是机器智能的硬件。目前与 Bipin Rajendran 教授合作，研究面向大语言模型的类脑学习加速器 —— 设计能让脉冲 Transformer 在芯片上完成学习、而不只是推理的电路。'
      },
      {
        en: "Before this I spent four years at HKUST building tactile sensor arrays that compute where they sense, and before that designed display driver circuits at Peking University. The thread running through all of it is one question: what becomes possible when you stop treating the circuit and the algorithm as separate problems?",
        zh: '在此之前，我在香港科技大学用四年时间做「在感知处直接计算」的触觉传感器阵列，更早在北京大学设计显示驱动电路。贯穿这些工作的是同一个问题：当电路和算法不再被当作两件事来做，会多出什么可能性？'
      }
    ],

    // 首页头像下方的快捷链接。不需要的整行删掉即可。
    // icon 可选：'mail' 'file' 'scholar' 'orcid' 'github' 'link' 'youtube' 'mic'
    links: [
      { icon: 'mail',    label: { en: 'Email',          zh: '邮箱'     }, url: 'mailto:t.lei@nulondon.ac.uk', primary: true },
      { icon: 'file',    label: { en: 'CV (PDF)',       zh: '简历 PDF' }, url: 'files/CV.pdf' },
      { icon: 'orcid',   label: { en: 'ORCID',          zh: 'ORCID'    }, url: 'https://orcid.org/0000-0002-3780-0058' },
      // ↓ Scholar 主页地址栏里 user= 后面那一串，填进来就能用
      { icon: 'scholar', label: { en: 'Google Scholar', zh: '学术主页' }, url: 'https://scholar.google.com/citations?user=YOUR_ID' },
      { icon: 'github',  label: { en: 'GitHub',         zh: 'GitHub'   }, url: 'https://github.com/TengtengLei' }
    ]
  },

  /* ── 2. 最新动态（首页）─────────────────────────────────────────────
     最新的放最上面，颜色会自动按新旧深浅排列。
     text 里可以写 HTML 链接：<a href="...">文字</a>                     */
  news: [
    {
      date: { en: '2026', zh: '2026' },
      text: {
        en: 'Paper on monolithically integrated transimpedance accumulators for analog in-memory computing published in <em>IEEE JETCAS</em>.',
        zh: '关于模拟存内计算单片集成跨阻累加器的论文发表于 <em>IEEE JETCAS</em>。'
      }
    },
    {
      date: { en: '2026', zh: '2026' },
      text: {
        en: 'Active-matrix digital microfluidics paper published in <em>Lab on a Chip</em> (corresponding author).',
        zh: '有源矩阵数字微流控论文发表于 <em>Lab on a Chip</em>（通讯作者）。'
      }
    },
    {
      date: { en: 'Jul 2025', zh: '2025年7月' },
      text: {
        en: 'Presented flexible tactile sensor array work at <strong>Transducers 2025</strong>, Orlando.',
        zh: '在 <strong>Transducers 2025</strong>（美国奥兰多）报告柔性触觉传感器阵列工作。'
      }
    },
    {
      date: { en: 'Feb 2025', zh: '2025年2月' },
      text: {
        en: "Joined King's College London and Northeastern University London as a Research Associate, working on the ARIA-funded brain-inspired learning accelerator programme.",
        zh: '加入伦敦国王学院与伦敦东北大学任研究员，参与 ARIA 资助的类脑学习加速器项目。'
      }
    }
  ],

  /* ── 3. 研究方向 ──────────────────────────────────────────────────────
     每个方向一条横向长条，从上往下排，左侧竖色条自动轮换颜色。

     image：可选配图。填了就变成「左图右文」，没填就是纯文字通栏。
            图片放进 assets/img/，这里写 'assets/img/文件名.jpg'。
            建议接近 4:3 的横图。芯片版图、显微照片、测试装置照都很合适。
     body： 想写多长都行。要分段就用 <p>…</p> 包起来。
     ─────────────────────────────────────────────────────────────────── */
  research: {
    lede: {
      en: 'I work at the boundary between circuits and algorithms — from thin-film display drivers, through tactile sensors that compute in-pixel, to accelerators that let spiking networks learn on-chip.',
      zh: '我的工作在电路与算法的交界处 —— 从薄膜显示驱动电路，到能在像素内完成计算的触觉传感器，再到让脉冲网络在片上学习的加速器。'
    },
    areas: [
      {
        title: { en: 'Brain-Inspired Learning Accelerators for Spiking LLMs', zh: '面向脉冲大模型的类脑学习加速器' },
        image: '',
        body: {
          en: "<p>Fine-tuning a large language model normally needs backpropagation, which is far too memory-hungry for edge silicon. The memory-efficient zeroth-order (MeZO) optimizer sidesteps that, but only if the perturbations it depends on can be generated cheaply in hardware.</p><p>I designed an event-triggered perturbation generation unit that does exactly this, enabling on-chip learning for a spiking transformer accelerator. The design targets an SRAM-based in-memory computing chip, with tape-out planned. This work sits within a &pound;3M ARIA programme at King's College London.</p>",
          zh: '<p>微调大语言模型通常依赖反向传播，而反向传播的内存开销对边缘芯片来说过于沉重。零阶优化器 MeZO 绕开了这一点，但前提是它所需的扰动能在硬件上低成本地生成。</p><p>我设计了一个事件触发的扰动生成单元来解决这个问题，使脉冲 Transformer 加速器具备片上学习能力。该设计面向基于 SRAM 的存内计算芯片，流片计划中。此项工作属于伦敦国王学院一项 300 万英镑的 ARIA 资助项目。</p>'
        },
        tags: ['Spiking Neural Networks', 'In-Memory Computing', 'Zeroth-Order Optimization', 'Transformer Accelerator']
      },
      {
        title: { en: 'Smart Sensors and In-Sensor Computing', zh: '智能传感与传感器内计算' },
        image: '',
        body: {
          en: '<p>A conventional sensor array ships raw data to a processor, and most of that data is discarded. Moving computation into the sensing plane removes that waste — but it demands circuits that can amplify, compensate and classify using the same thin-film technology as the sensor itself.</p><p>At HKUST I pioneered the modelling and fabrication of dual-gate metal-oxide TFTs, which open a degree of freedom that conventional single-gate devices do not have. On that foundation I built active-matrix piezoelectric tactile sensor arrays with in-pixel amplification and non-uniformity compensation, monolithically integrated them with hardware neural networks for edge inference, and demonstrated transimpedance current accumulators for analog in-memory computing.</p>',
          zh: '<p>传统传感器阵列把原始数据全部送给处理器，其中绝大部分随后被丢弃。把计算搬进感知层可以消除这种浪费，但代价是电路必须用与传感器相同的薄膜工艺完成放大、补偿和分类。</p><p>在香港科技大学，我率先建立了双栅金属氧化物薄膜晶体管的建模与制备方法，为模拟电路设计打开了单栅器件不具备的自由度。在此基础上，我做出了带像素内放大与非均匀性补偿的有源矩阵压电触觉传感器阵列，将其与硬件神经网络单片集成用于边缘推理，并实现了面向模拟存内计算的跨阻电流累加器。</p>'
        },
        tags: ['Tactile Sensor Arrays', 'E-Skin', 'Dual-Gate Metal-Oxide TFTs', 'In-Sensor Computing']
      },
      {
        title: { en: 'Thin-Film Circuit Design for Displays', zh: '面向显示的薄膜电路设计' },
        image: '',
        body: {
          en: '<p>Gate-driver-on-array circuits are integrated directly onto the display panel, where the metal-oxide TFTs they are built from drift substantially over their lifetime. A driver that works on day one can fail after months of threshold-voltage shift.</p><p>At Peking University I invented a GOA design that stays reliable under large threshold-voltage shifts, demonstrated a GOA using a dynamic inverter to generate multiple scan and emission signals for internally-compensated AMOLED panels, and designed a fully bootstrapped topology fast enough for large-format 8K LCDs.</p>',
          zh: '<p>GOA 电路直接集成在显示面板上，而构成它的金属氧化物薄膜晶体管在使用过程中会显著漂移。一个出厂时正常工作的驱动电路，可能在阈值电压漂移数月后失效。</p><p>在北京大学，我提出了一种在大幅阈值电压漂移下仍保持可靠的 GOA 设计；实现了用动态反相器为内部补偿型 AMOLED 面板同时产生扫描与发光信号的 GOA；并设计了全自举拓扑结构，速度足以驱动大尺寸 8K 液晶面板。</p>'
        },
        tags: ['Gate Driver on Array', 'AMOLED', 'a-IGZO TFT', 'Display Driver IC']
      }
    ]
  },

  /* ── 4. 学术发表 ──────────────────────────────────────────────────────
     type 决定标签颜色：'journal' 期刊 / 'conference' 会议 /
                        'preprint' 审稿中 / 'chapter' 专著章节
     authors: 你自己的名字用星号包起来 *Tengteng Lei*，会自动高亮。
     venue:   期刊名用星号包起来 *Journal Name*，会自动变斜体。
     links:   想加几个就加几个（DOI / PDF / Code / Slides…），
              没有链接就写 links: []
     ─────────────────────────────────────────────────────────────────── */
  publications: [
    {
      year: 2026, type: 'preprint',
      title: { en: 'Event-triggered Implicit Perturbation for Zeroth-Order Optimization of Spiking Transformers',
               zh: '面向脉冲 Transformer 零阶优化的事件触发隐式扰动' },
      authors: '*Tengteng Lei*, Prabodh Katti, Rashi Dutt, Houssem Sifaou, Tan Peng, Osvaldo Simeone, Kai Xu, Bipin Rajendran',
      venue: { en: '*IEEE Transactions on Circuits and Systems I* — under review.',
               zh: '*IEEE Transactions on Circuits and Systems I*，审稿中。' },
      links: []
    },
    {
      year: 2026, type: 'preprint',
      title: { en: 'A Flexible Dual-Gate TFT-Based Tactile Sensor Array with Polarity-Aware Encoding for Neuromorphic Recognition',
               zh: '基于双栅 TFT、采用极性感知编码的柔性触觉传感器阵列及其类脑识别应用' },
      authors: '*Tengteng Lei*, Boyi Zhu, Yushen Hu, Tianming Li, Man Wong',
      venue: { en: '*FlexMat* — major revision.', zh: '*FlexMat*，大修中。' },
      links: []
    },
    {
      year: 2026, type: 'journal',
      title: { en: 'Monolithically Integrated Transimpedance Accumulators for Analog In-Memory Computing Based on Dual-Gate Metal-Oxide Thin-Film Transistors',
               zh: '基于双栅金属氧化物薄膜晶体管的模拟存内计算单片集成跨阻累加器' },
      authors: '*Tengteng Lei*, Jiayi Mao, Yushen Hu, Man Wong',
      venue: { en: '*IEEE Journal on Emerging and Selected Topics in Circuits and Systems*, vol. 16, no. 2, pp. 607–616.',
               zh: '*IEEE Journal on Emerging and Selected Topics in Circuits and Systems*，第 16 卷第 2 期，607–616 页。' },
      links: []
    },
    {
      year: 2026, type: 'journal',
      title: { en: 'An Active-Matrix Digital Microfluidic Device Based on Surfactant-Mediated Electro-Dewetting',
               zh: '基于表面活性剂介导电润湿的有源矩阵数字微流控器件' },
      authors: 'Xinying Xie, Qining Leo Wang, Runxiao Shi, *Tengteng Lei*, Chang-Jin “CJ” Kim, Man Wong',
      venue: { en: '*Lab on a Chip* — corresponding author.', zh: '*Lab on a Chip*，通讯作者。' },
      links: [ { label: 'DOI', url: 'https://doi.org/10.1039/d5lc00992h' } ]
    },
    {
      year: 2025, type: 'journal',
      title: { en: 'In-Sensor Computing-Based Smart Sensing Architecture Implemented Using a Dual-Gate Metal-Oxide Thin-Film Transistor Technology',
               zh: '基于双栅金属氧化物薄膜晶体管工艺的传感器内计算智能感知架构' },
      authors: '*Tengteng Lei*, Yushen Hu, Xinying Xie, Runxiao Shi, Man Wong',
      venue: { en: '*Advanced Electronic Materials*, vol. 11, no. 9, 2400572.',
               zh: '*Advanced Electronic Materials*，第 11 卷第 9 期，2400572。' },
      links: []
    },
    {
      year: 2025, type: 'conference',
      title: { en: 'Accurate Acquisition of Pressure Signals with Optimal Amplitude Using Flexible Tactile Sensor Array',
               zh: '利用柔性触觉传感器阵列实现最优幅值的压力信号精确采集' },
      authors: '*Tengteng Lei*, Boyi Zhu, Yushen Hu, Man Wong',
      venue: { en: 'Digest Tech. Papers *Transducers 2025*, Orlando, pp. 1621–1624.',
               zh: '*Transducers 2025* 论文集，美国奥兰多，1621–1624 页。' },
      links: []
    },
    {
      year: 2024, type: 'journal',
      title: { en: 'A Sliding-Kernel Computation-in-Memory Architecture for Convolutional Neural Networks',
               zh: '面向卷积神经网络的滑动核存内计算架构' },
      authors: 'Yushen Hu, Xinying Xie, *Tengteng Lei*, Runxiao Shi, Man Wong',
      venue: { en: '*Advanced Science*, vol. 11, no. 46, 2407440 — corresponding author.',
               zh: '*Advanced Science*，第 11 卷第 46 期，2407440。通讯作者。' },
      links: []
    },
    {
      year: 2024, type: 'journal',
      title: { en: 'Neuromorphic Sensor-Perception Systems for Immersive Displays',
               zh: '面向沉浸式显示的类脑感知系统' },
      authors: '*Tengteng Lei*, Runxiao Shi, Zong Liu, Yushen Hu, Man Wong',
      venue: { en: '*IEEE Open Journal on Immersive Displays*, vol. 1, pp. 20–27.',
               zh: '*IEEE Open Journal on Immersive Displays*，第 1 卷，20–27 页。' },
      links: []
    },
    {
      year: 2023, type: 'journal',
      title: { en: 'Low-Temperature Metal-Oxide Thin-Film Transistor Technologies for Implementing Flexible Electronic Circuits and Systems',
               zh: '用于柔性电子电路与系统的低温金属氧化物薄膜晶体管技术' },
      authors: 'Runxiao Shi, *Tengteng Lei*, Zhihe Xia, Man Wong',
      venue: { en: '*Journal of Semiconductors*, 44, 091601 — co-first author.',
               zh: '*Journal of Semiconductors*，44，091601。共同第一作者。' },
      links: []
    },
    {
      year: 2023, type: 'conference',
      title: { en: 'An Active-Matrix Piezoelectric Tactile Sensor Array with In-Pixel Amplifier and Non-Uniformity Compensation',
               zh: '带像素内放大与非均匀性补偿的有源矩阵压电触觉传感器阵列' },
      authors: '*Tengteng Lei*, Yushen Hu, Xinying Xie, Man Wong',
      venue: { en: 'Digest Tech. Papers *Transducers 2023*, Kyoto, pp. 298–301 — oral.',
               zh: '*Transducers 2023* 论文集，日本京都，298–301 页。口头报告。' },
      links: []
    },
    {
      year: 2023, type: 'conference',
      title: { en: 'A Tactile Sensor Array with a Monolithically Integrated Neural Network for Edge Computation',
               zh: '单片集成神经网络的触觉传感器阵列及其边缘计算应用' },
      authors: '*Tengteng Lei*, Yushen Hu, Man Wong',
      venue: { en: 'Digest Tech. Papers *MEMS 2023*, Munich, pp. 13–16 — oral.',
               zh: '*MEMS 2023* 论文集，德国慕尼黑，13–16 页。口头报告。' },
      links: []
    },
    {
      year: 2022, type: 'journal',
      title: { en: 'A Comparative Study on Inverters Built with Dual-Gate Thin-Film Transistors Based on Intrinsically Depletion- or Enhancement-Mode Technologies',
               zh: '本征耗尽型与增强型双栅薄膜晶体管反相器的对比研究' },
      authors: '*Tengteng Lei*, Runxiao Shi, Yuqi Wang, Zhihe Xia, Man Wong',
      venue: { en: '*IEEE Transactions on Electron Devices*, vol. 69, no. 8, pp. 3186–3191.',
               zh: '*IEEE Transactions on Electron Devices*，第 69 卷第 8 期，3186–3191 页。' },
      links: []
    },
    {
      year: 2022, type: 'conference',
      title: { en: 'Active-Matrix Tactile Sensor Array Based on the Monolithic Integration of PVDF and Dual-Gate Transistors',
               zh: '基于 PVDF 与双栅晶体管单片集成的有源矩阵触觉传感器阵列' },
      authors: '*Tengteng Lei*, Yushen Hu, Man Wong',
      venue: { en: 'Digest Tech. Papers *MEMS 2022*, Tokyo, pp. 71–74 — oral.',
               zh: '*MEMS 2022* 论文集，日本东京，71–74 页。口头报告。' },
      links: []
    },
    {
      year: 2020, type: 'conference',
      title: { en: 'A Robust a-IGZO TFT Integrated Scan/Emission Driver with Dynamic Inverter for AMOLED Display',
               zh: '面向 AMOLED 显示、采用动态反相器的高鲁棒性 a-IGZO TFT 集成扫描/发光驱动电路' },
      authors: '*Tengteng Lei*, Congwei Liao, Jie Huang, Shengdong Zhang',
      venue: { en: '*SID Symposium Digest of Technical Papers*, 51(1), pp. 1354–1357.',
               zh: '*SID Symposium Digest of Technical Papers*，51(1)，1354–1357 页。' },
      links: []
    },
    {
      year: 2019, type: 'conference',
      title: { en: 'Oxide Thin Film Transistors Integrated DC-DC Converter with High Efficiency for Passive RFID Tag',
               zh: '面向无源 RFID 标签的氧化物薄膜晶体管集成高效率 DC-DC 变换器' },
      authors: '*Tengteng Lei*, Congwei Liao, Jie Huang, Jiwen Yang, Shengdong Zhang',
      venue: { en: '*SID Symposium Digest of Technical Papers*, 50(1), pp. 1660–1663.',
               zh: '*SID Symposium Digest of Technical Papers*，50(1)，1660–1663 页。' },
      links: []
    },
    {
      year: 2018, type: 'conference',
      title: { en: 'An a-InGaZnO TFT Gate Driver Circuit with Positive Feedback Effect',
               zh: '具有正反馈效应的 a-InGaZnO TFT 栅极驱动电路' },
      authors: '*Tengteng Lei*, Congwei Liao, Jie Huang, Ying Wang, Shengdong Zhang',
      venue: { en: '*International Conference on CAD-TFT* — oral.',
               zh: '*International Conference on CAD-TFT*，口头报告。' },
      links: []
    }
  ],

  /* ── 5. 教学 ──────────────────────────────────────────────────────────
     ⚠️ courses 现在是空的 —— 你的 CV 里没有课程信息，我不替你编。
        等你开始授课，按下面注释里的格式往 courses 数组里加就行，
        空着的时候这一块会显示「内容稍后补充」，不会显示假内容。

     一门课的格式：
       {
         code: 'ABC1234',
         title: { en: 'Course Name', zh: '课程名称' },
         meta:  { en: 'Institution · Term · Role', zh: '学校 · 学期 · 身份' },
         desc:  { en: '…', zh: '…' },
         materials: [
           { kind: 'Video', label: { en: 'Lecture recordings', zh: '课程录像' },
             url: 'https://…', external: true },
           { kind: 'Slides', label: { en: 'Lecture 1', zh: '第一讲' },
             url: 'files/teaching/lecture-01.pdf' }
         ]
       }
     ─────────────────────────────────────────────────────────────────── */
  teaching: {
    lede: {
      en: 'Courses, materials, and answers to the questions students ask me most often.',
      zh: '课程、教学资料，以及学生问得最多的那些问题。'
    },
    courses: [],

    statement: {
      title: { en: 'Teaching Philosophy', zh: '教学理念' },
      body: {
        en: 'I served as a Senior Teaching Assistant Fellow at HKUST, where most of my teaching was in circuits and semiconductor devices. My conviction from that period is simple: students remember what they have built and measured, not what they have been told. A transistor characteristic that a student has fitted from their own noisy measurement teaches more than any derivation on a board. ⚠️ Rewrite this paragraph in your own words before launch — hiring committees read it closely.',
        zh: '我曾在香港科技大学担任高级助教研究员，教学内容集中在电路与半导体器件。那段经历让我确信一件事：学生记住的是自己动手做过、测过的东西，而不是别人讲过的东西。一条学生从自己带噪声的实测数据里拟合出来的晶体管特性曲线，比黑板上任何推导都更有教益。⚠️ 正式发布前请用你自己的话重写这一段 —— 招聘委员会会仔细读。'
      }
    },

    // 给学生的常见问题。默认收起，点一下展开。
    // ⚠️ 下面的回答是模板，请按你的实际情况改写。
    faq: [
      {
        q: { en: 'Can I do a PhD with you?', zh: '可以跟你读博士吗？' },
        a: {
          en: 'Email me a short note on what you want to work on and why, plus your CV and transcript. Tell me which of my papers you actually read and what you disagreed with — that tells me far more than a list of grades. Please do not send a generic mass email.',
          zh: '发邮件给我，简单说明你想做什么方向、为什么，附上简历和成绩单。告诉我你真正读过我哪篇论文、哪里觉得有问题 —— 这比一串分数更能说明问题。请不要群发模板邮件。'
        }
      },
      {
        q: { en: 'What background do I need?', zh: '需要什么背景？' },
        a: {
          en: 'My work spans circuit design, device physics and machine learning, and nobody arrives strong in all three. Solid analog or digital circuit fundamentals plus a willingness to learn the rest is enough. Hands-on tape-out, fabrication or PyTorch experience all count.',
          zh: '我的工作横跨电路设计、器件物理和机器学习，没有人一开始三样都强。有扎实的模拟或数字电路基础，加上愿意补齐其余部分，就足够了。流片、微纳工艺或 PyTorch 的实际经验都算加分。'
        }
      },
      {
        q: { en: 'Do you have funding?', zh: '有经费吗？' },
        a: {
          en: '⚠️ Update this with what is actually available and link the relevant scholarship pages. Revisit it whenever the situation changes.',
          zh: '⚠️ 请填写目前实际有的名额，并附上相关奖学金页面链接。情况变了记得回来改。'
        }
      },
      {
        q: { en: 'Can you write me a reference letter?', zh: '可以帮我写推荐信吗？' },
        a: {
          en: 'I write letters for students I have taught or supervised directly. Please give me at least three weeks, your CV, and a short note on what the letter is for — a letter written in a hurry helps nobody.',
          zh: '我只给直接教过或指导过的学生写推荐信。请至少提前三周告诉我，并提供简历和申请说明 —— 赶出来的推荐信对谁都没好处。'
        }
      }
    ]
  },

  /* ── 6. 科普 / 媒体 ───────────────────────────────────────────────────
     ⚠️ 现在是空的。有视频或播客了再填，格式见下。
        空着的时候页面会显示「内容稍后补充」。

     视频不要上传到网站！传到 YouTube 或 B站，这里只填 ID：
       YouTube  https://www.youtube.com/watch?v=dQw4w9WgXcQ
                → { platform: 'youtube', id: 'dQw4w9WgXcQ', title: {…}, meta: {…} }
       B 站     https://www.bilibili.com/video/BV1xx411c7mD
                → { platform: 'bilibili', id: 'BV1xx411c7mD', title: {…}, meta: {…} }
     ─────────────────────────────────────────────────────────────────── */
  media: {
    lede: {
      en: 'Talks, science communication and public engagement.',
      zh: '公开讲座、科普视频与公众传播。'
    },
    videos: [],
    podcast: null,
    press: []
  },

  /* ── 7. 生活（此刻 + 兴趣爱好 + 推荐）──────────────────────────────
     ⚠️ 全空 —— 你的爱好、在读的书、推荐的工具我都不知道，不能替你编。
        这一页是整个网站里最容易让人记住你的地方，值得花二十分钟填。

     格式：
       now.items:  { emoji: '📖', label: {en,zh}, text: {en,zh} }
       hobbies:    { emoji: '📷', title: {en,zh}, body: {en,zh}, image: '' }
       picks:      { title: {en,zh}, items: [ { name: '…', note: {en,zh}, url: '' } ] }
     ─────────────────────────────────────────────────────────────────── */
  life: {
    lede: {
      en: 'Research is what I do, not all of what I am.',
      zh: '做研究是我的工作，但不是我的全部。'
    },
    now: { updated: { en: '', zh: '' }, items: [] },
    hobbies: [],
    picks: []
  },

  /* ── 8. 留言板 ─────────────────────────────────────────────────────
     配置步骤（仓库已经上线，现在可以配了）：
       1. 仓库 Settings → General → 勾选 Features 里的 Discussions
       2. 打开 https://giscus.app ，仓库填 TengtengLei/TengtengLei.github.io
       3. 按提示装一下 giscus app，页面下方会生成 repoId 和 categoryId
       4. 把四个值填到下面，留言板就活了
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
      repo:       '',   // 'TengtengLei/TengtengLei.github.io'
      repoId:     '',   // giscus.app 会生成
      category:   '',   // 例：'Announcements'
      categoryId: ''    // giscus.app 会生成
    }
  },

  /* ── 9. 简历（教育背景 + 工作经历 + 联系方式）─────────────────────── */
  cv: {
    // 把简历 PDF 放进 files/ 文件夹，命名为 CV.pdf
    pdf: 'files/CV.pdf',

    education: [
      {
        when:  { en: '2020 – 2023', zh: '2020 – 2023' },
        what:  { en: 'PhD, Electronic and Computer Engineering', zh: '博士，电子与计算机工程' },
        where: { en: 'The Hong Kong University of Science and Technology', zh: '香港科技大学' },
        note:  { en: 'Supervisor: Prof. Man Wong.', zh: '导师：Man Wong 教授。' }
      },
      {
        when:  { en: '2017 – 2020', zh: '2017 – 2020' },
        what:  { en: 'MEng, Electronic and Computer Engineering', zh: '硕士，电子与计算机工程' },
        where: { en: 'Peking University', zh: '北京大学' },
        note:  { en: 'Supervisor: Prof. Shengdong Zhang. Excellent Graduate, 2020.', zh: '导师：张盛东教授。2020 年北京大学优秀毕业生。' }
      },
      {
        when:  { en: '2013 – 2017', zh: '2013 – 2017' },
        what:  { en: 'BEng, Opto-electronics and Information Technology', zh: '学士，光电与信息工程' },
        where: { en: 'Sun Yat-sen University', zh: '中山大学' },
        note:  { en: '', zh: '' }
      }
    ],

    experience: [
      {
        when:  { en: '2025 – present', zh: '2025 至今' },
        what:  { en: 'Research Associate', zh: '研究员 (Research Associate)' },
        where: { en: "King's College London & Northeastern University London", zh: '伦敦国王学院 & 伦敦东北大学' },
        note:  { en: 'Line manager: Prof. Bipin Rajendran. Brain-inspired learning accelerators for large language models, within a £3M ARIA programme.',
                 zh: '负责人：Bipin Rajendran 教授。面向大语言模型的类脑学习加速器，隶属 300 万英镑 ARIA 项目。' }
      },
      {
        when:  { en: '2024 – 2025', zh: '2024 – 2025' },
        what:  { en: 'Research Associate', zh: '研究员 (Research Associate)' },
        where: { en: 'The Hong Kong University of Science and Technology', zh: '香港科技大学' },
        note:  { en: 'Supervisor: Prof. Man Wong. Smart sensor systems and in-sensor computing based on dual-gate metal-oxide TFTs.',
                 zh: '合作导师：Man Wong 教授。基于双栅金属氧化物薄膜晶体管的智能传感系统与传感器内计算。' }
      },
      {
        when:  { en: '2019', zh: '2019' },
        what:  { en: 'Intern', zh: '实习生' },
        where: { en: 'HUAWEI Technologies Co., Ltd.', zh: '华为技术有限公司' },
        note:  { en: '', zh: '' }
      }
    ],

    extras: [
      {
        title: { en: 'IC Tape-Outs', zh: '流片经历' },
        items: [
          { en: 'TSMC 16 nm FinFET — spiking transformer accelerator (KCL)', zh: 'TSMC 16 nm FinFET —— 脉冲 Transformer 加速器（KCL）' },
          { en: 'SMIC 0.18 µm CMOS — driver IC for micro-OLED display, gamma correction DAC (PKU)', zh: 'SMIC 0.18 µm CMOS —— 微型 OLED 显示驱动 IC、伽马校正 DAC（北大）' }
        ]
      },
      {
        title: { en: 'Research Funding', zh: '科研项目' },
        items: [
          { en: 'ARIA (UK) — Brain-Inspired Learning Accelerator for Large Language Models, 2024–2027, £3M. <em>Participant</em>',
            zh: '英国 ARIA —— 面向大语言模型的类脑学习加速器，2024–2027，300 万英镑。<em>参与人</em>' },
          { en: 'Innovation and Technology Fund — CNN architecture based on metal-oxide TFT technology for pattern recognition, 2023–2025, HK$1.12M. <em>Participant</em>',
            zh: '创新及科技基金 —— 基于金属氧化物 TFT 的卷积神经网络架构及其模式识别应用，2023–2025，112 万港元。<em>参与人</em>' },
          { en: 'Innovation and Technology Fund — In-display fingerprint sensing based on oxide TFTs, 2023–2025, HK$1.07M. <em>Participant</em>',
            zh: '创新及科技基金 —— 基于氧化物 TFT 的屏下指纹感测技术，2023–2025，107 万港元。<em>参与人</em>' },
          { en: 'ICDT Huada Jiutian Cup Innovation Competition — Full-flow design of gate-driver-on-array circuits for flat-panel displays, 2022, ¥40,000. <em>Lead</em>',
            zh: 'ICDT 华大九天杯创新竞赛 —— 平板显示 GOA 电路全流程设计，2022，4 万元人民币。<em>负责人</em>' }
        ]
      },
      {
        title: { en: 'Patents', zh: '专利' },
        items: [
          { en: '<em>Tengteng Lei</em>, Man Wong. A hysteresis comparator implemented using dual-gate thin-film transistors. CN120512123A.',
            zh: '<em>雷腾腾</em>，Man Wong。一种双栅薄膜晶体管迟滞比较器。CN120512123A。' },
          { en: 'Xuchi Liu, <em>Tengteng Lei</em>, Man Wong. A dynamic offset-cancellation circuit based on dual-gate thin-film transistors. CN116800209A.',
            zh: '刘旭驰，<em>雷腾腾</em>，Man Wong。基于双栅薄膜晶体管的动态失调消除电路。CN116800209A。' },
          { en: 'Shengdong Zhang, <em>Tengteng Lei</em>, Congwei Liao, Jie Huang. A high-speed gate driving unit and circuit. CN109859669B — granted 2022.',
            zh: '张盛东，<em>雷腾腾</em>，廖聪维，黄杰。一种高速栅极驱动单元及电路。CN109859669B，2022 年授权。' },
          { en: 'Shengdong Zhang, <em>Tengteng Lei</em>, Congwei Liao, Jie Huang. Voltage converter and radio frequency identification device. CN109492740B — granted 2022.',
            zh: '张盛东，<em>雷腾腾</em>，廖聪维，黄杰。电压变换器及射频识别装置。CN109492740B，2022 年授权。' },
          { en: 'Shengdong Zhang, <em>Tengteng Lei</em>, Congwei Liao, Jie Huang. Shift register unit, gate drive circuit and display device. CN109285505B — granted 2020.',
            zh: '张盛东，<em>雷腾腾</em>，廖聪维，黄杰。移位寄存器单元、栅极驱动电路及显示装置。CN109285505B，2020 年授权。' }
        ]
      },
      {
        title: { en: 'Selected Honours', zh: '主要获奖' },
        items: [
          { en: '2023 — PG Workshop Best Oral Award; HKUST RedBird Academic Excellence Award; Senior Teaching Assistant Fellowship',
            zh: '2023 —— 研究生研讨会最佳口头报告奖；香港科技大学红鸟学术卓越奖；高级助教研究员' },
          { en: '2022 — Grand Prize, ICDT Empyrean Cup Innovation Competition; Solomon Systech Scholarship',
            zh: '2022 —— ICDT 华大九天杯创新竞赛特等奖；晶门科技奖学金' },
          { en: '2020 — Excellent Graduate, Peking University', zh: '2020 —— 北京大学优秀毕业生' },
          { en: '2019 — Founder Scholarship; Merit Student, Peking University', zh: '2019 —— 方正奖学金；北京大学三好学生' },
          { en: '2016 — Duke Kunshan University Medical Physics Young Talent; Honorable Mention, Mathematical Contest in Modeling',
            zh: '2016 —— 昆山杜克大学医学物理青年人才；美国大学生数学建模竞赛 Honorable Mention' }
        ]
      },
      {
        title: { en: 'Technical Skills', zh: '技能' },
        items: [
          { en: '<em>IC design</em> — Cadence Virtuoso / Xcelium / Genus / Innovus / Pegasus / Tempus / Joules; Silvaco Gateway',
            zh: '<em>集成电路设计</em> —— Cadence Virtuoso / Xcelium / Genus / Innovus / Pegasus / Tempus / Joules；Silvaco Gateway' },
          { en: '<em>Programming</em> — Python, PyTorch, Verilog HDL, LabVIEW',
            zh: '<em>编程</em> —— Python、PyTorch、Verilog HDL、LabVIEW' },
          { en: '<em>Embedded systems</em> — Vivado, FPGA, STM32, PYNQ-Z2',
            zh: '<em>嵌入式系统</em> —— Vivado、FPGA、STM32、PYNQ-Z2' },
          { en: '<em>Micro-fabrication</em> — photolithography, dry/wet etching, sputtering and PECVD deposition',
            zh: '<em>微纳加工</em> —— 光刻、干法/湿法刻蚀、溅射与 PECVD 沉积' },
          { en: '<em>Languages</em> — Mandarin (native), English (fluent)',
            zh: '<em>语言</em> —— 中文（母语）、英语（流利）' }
        ]
      }
    ],

    contact: {
      email: 't.lei@nulondon.ac.uk',
      office: { en: '', zh: '' },
      address: {
        en: "Department of Engineering, King's College London, Strand, London WC2R 2LS, United Kingdom",
        zh: '英国伦敦国王学院工程系，Strand, London WC2R 2LS'
      },
      note: {
        en: 'Email is the fastest way to reach me. I also read <a href="mailto:tengteng.lei@kcl.ac.uk">tengteng.lei@kcl.ac.uk</a>. I am happy to hear from prospective students and collaborators.',
        zh: '邮件是联系我最快的方式，<a href="mailto:tengteng.lei@kcl.ac.uk">tengteng.lei@kcl.ac.uk</a> 我也会看。欢迎有意向的学生和合作者与我联系。'
      }
    }
  },

  /* ── 10. 页脚 ─────────────────────────────────────────────────────── */
  footer: {
    line: {
      en: '© 2026 Tengteng Lei. Built as a static site, hosted on GitHub Pages.',
      zh: '© 2026 雷腾腾。静态网页，托管于 GitHub Pages。'
    },
    updated: {
      en: 'Last updated: August 2026',
      zh: '最后更新：2026 年 8 月'
    }
  }
};
