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
    // 邮箱和简历下载放在 CV 页，这里不重复。
    // 想加回来就在数组里补一行，格式见其他几行。
    links: [
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
      // 月份来自 Crossref 的 published-print 字段（2026-6），准确
      date: { en: 'Jun 2026', zh: '2026年6月' },
      text: {
        en: 'Paper on monolithically integrated transimpedance accumulators for analog in-memory computing published in <em>IEEE JETCAS</em>.',
        zh: '关于模拟存内计算单片集成跨阻累加器的论文发表于 <em>IEEE JETCAS</em>。'
      }
    },
    {
      // ⚠️ Crossref 只登记了年份，这个月份是按 DOI 注册日期（2026-01-19）推的，请核对
      date: { en: 'Jan 2026', zh: '2026年1月' },
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
                        'patent' 专利 / 'preprint' 预印本 / 'chapter' 专著章节

     authors: 三种标记 ——
              *Tengteng Lei*  用星号包起来 = 高亮（你自己）
              Man Wong^       名字后面加 ^ = 通讯作者（显示成上标 *）
              Runxiao Shi#    名字后面加 # = 共同第一作者（显示成上标 †）
              可以叠加：*Tengteng Lei*#^ = 高亮 + 共一 + 通讯
     venue:   期刊名用星号包起来 *Journal Name*，会自动变斜体。
     doi:     只填 DOI 本身（不要带 https://doi.org/），
              页面上会自动显示成完整链接，单独占一行。没有就留空 ''。
     links:   额外的按钮（PDF / Code / Slides…），没有就写 links: []
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
      doi: '10.1109/jetcas.2026.3688129',
      links: []
    },
    {
      year: 2026, type: 'journal',
      title: { en: 'An Active-Matrix Digital Microfluidic Device Based on Surfactant-Mediated Electro-Dewetting',
               zh: '基于表面活性剂介导电润湿的有源矩阵数字微流控器件' },
      authors: 'Xinying Xie, Qining Leo Wang, Runxiao Shi, *Tengteng Lei*^, Chang-Jin “CJ” Kim, Man Wong',
      venue: { en: '*Lab on a Chip*, vol. 26, no. 6, pp. 1850–1860.',
               zh: '*Lab on a Chip*，第 26 卷第 6 期，1850–1860 页。' },
      doi: '10.1039/d5lc00992h',
      links: []
    },
    {
      year: 2025, type: 'journal',
      title: { en: 'In-Sensor Computing-Based Smart Sensing Architecture Implemented Using a Dual-Gate Metal-Oxide Thin-Film Transistor Technology',
               zh: '基于双栅金属氧化物薄膜晶体管工艺的传感器内计算智能感知架构' },
      authors: '*Tengteng Lei*, Yushen Hu, Xinying Xie, Runxiao Shi, Man Wong',
      venue: { en: '*Advanced Electronic Materials*, vol. 11, no. 9, 2400572.',
               zh: '*Advanced Electronic Materials*，第 11 卷第 9 期，2400572。' },
      doi: '10.1002/aelm.202400572',
      links: []
    },
    {
      year: 2025, type: 'conference',
      title: { en: 'Accurate Acquisition of Pressure Signals with Optimal Amplitude Using Flexible Tactile Sensor Array',
               zh: '利用柔性触觉传感器阵列实现最优幅值的压力信号精确采集' },
      authors: '*Tengteng Lei*, Boyi Zhu, Yushen Hu, Man Wong',
      venue: { en: 'Digest Tech. Papers *Transducers 2025*, Orlando, pp. 1621–1624.',
               zh: '*Transducers 2025* 论文集，美国奥兰多，1621–1624 页。' },
      doi: '10.1109/transducers61432.2025.11109844',
      links: []
    },
    {
      year: 2024, type: 'journal',
      title: { en: 'A Sliding-Kernel Computation-in-Memory Architecture for Convolutional Neural Networks',
               zh: '面向卷积神经网络的滑动核存内计算架构' },
      authors: 'Yushen Hu, Xinying Xie, *Tengteng Lei*^, Runxiao Shi, Man Wong',
      venue: { en: '*Advanced Science*, vol. 11, no. 46, 2407440.',
               zh: '*Advanced Science*，第 11 卷第 46 期，2407440。' },
      doi: '10.1002/advs.202407440',
      links: []
    },
    {
      year: 2024, type: 'journal',
      title: { en: 'Neuromorphic Sensor-Perception Systems for Immersive Displays',
               zh: '面向沉浸式显示的类脑感知系统' },
      authors: '*Tengteng Lei*#, Runxiao Shi#, Zong Liu, Yushen Hu, Man Wong',
      venue: { en: '*IEEE Open Journal on Immersive Displays*, vol. 1, pp. 20–27.',
               zh: '*IEEE Open Journal on Immersive Displays*，第 1 卷，20–27 页。' },
      doi: '10.1109/OJID.2023.3343309',
      links: []
    },
    {
      year: 2023, type: 'journal',
      title: { en: 'Low-Temperature Metal-Oxide Thin-Film Transistor Technologies for Implementing Flexible Electronic Circuits and Systems',
               zh: '用于柔性电子电路与系统的低温金属氧化物薄膜晶体管技术' },
      authors: 'Runxiao Shi#, *Tengteng Lei*#, Zhihe Xia, Man Wong',
      venue: { en: '*Journal of Semiconductors*, 44, 091601.',
               zh: '*Journal of Semiconductors*，44，091601。' },
      doi: '10.1088/1674-4926/44/9/091601',
      links: []
    },
    {
      year: 2023, type: 'conference',
      title: { en: 'An Active-Matrix Piezoelectric Tactile Sensor Array with In-Pixel Amplifier and Non-Uniformity Compensation',
               zh: '带像素内放大与非均匀性补偿的有源矩阵压电触觉传感器阵列' },
      authors: '*Tengteng Lei*, Yushen Hu, Xinying Xie, Man Wong',
      venue: { en: 'Digest Tech. Papers *Transducers 2023*, Kyoto, pp. 298–301.',
               zh: '*Transducers 2023* 论文集，日本京都，298–301 页。' },
      // Crossref 里查不到这篇的 DOI，退而用 IEEE Xplore 页面链接
      url: 'https://ieeexplore.ieee.org/document/10517256',
      links: []
    },
    {
      year: 2023, type: 'conference',
      title: { en: 'A Tactile Sensor Array with a Monolithically Integrated Neural Network for Edge Computation',
               zh: '单片集成神经网络的触觉传感器阵列及其边缘计算应用' },
      authors: '*Tengteng Lei*, Yushen Hu, Man Wong',
      venue: { en: 'Digest Tech. Papers *MEMS 2023*, Munich, pp. 13–16.',
               zh: '*MEMS 2023* 论文集，德国慕尼黑，13–16 页。' },
      doi: '10.1109/mems49605.2023.10052560',
      links: []
    },
    {
      year: 2022, type: 'journal',
      title: { en: 'A Comparative Study on Inverters Built with Dual-Gate Thin-Film Transistors Based on Intrinsically Depletion- or Enhancement-Mode Technologies',
               zh: '本征耗尽型与增强型双栅薄膜晶体管反相器的对比研究' },
      authors: '*Tengteng Lei*, Runxiao Shi, Yuqi Wang, Zhihe Xia, Man Wong',
      venue: { en: '*IEEE Transactions on Electron Devices*, vol. 69, no. 8, pp. 3186–3191.',
               zh: '*IEEE Transactions on Electron Devices*，第 69 卷第 8 期，3186–3191 页。' },
      doi: '10.1109/ted.2022.3167940',
      links: []
    },
    {
      year: 2022, type: 'conference',
      title: { en: 'Active-Matrix Tactile Sensor Array Based on the Monolithic Integration of PVDF and Dual-Gate Transistors',
               zh: '基于 PVDF 与双栅晶体管单片集成的有源矩阵触觉传感器阵列' },
      authors: '*Tengteng Lei*, Yushen Hu, Man Wong',
      venue: { en: 'Digest Tech. Papers *MEMS 2022*, Tokyo, pp. 71–74.',
               zh: '*MEMS 2022* 论文集，日本东京，71–74 页。' },
      doi: '10.1109/mems51670.2022.9699743',
      links: []
    },
    {
      year: 2020, type: 'conference',
      title: { en: 'A Robust a-IGZO TFT Integrated Scan/Emission Driver with Dynamic Inverter for AMOLED Display',
               zh: '面向 AMOLED 显示、采用动态反相器的高鲁棒性 a-IGZO TFT 集成扫描/发光驱动电路' },
      authors: '*Tengteng Lei*, Congwei Liao, Jie Huang, Shengdong Zhang',
      venue: { en: '*SID Symposium Digest of Technical Papers*, 51(1), pp. 1354–1357.',
               zh: '*SID Symposium Digest of Technical Papers*，51(1)，1354–1357 页。' },
      doi: '10.1002/sdtp.14135',
      links: []
    },
    {
      year: 2019, type: 'conference',
      title: { en: 'Oxide Thin Film Transistors Integrated DC-DC Converter with High Efficiency for Passive RFID Tag',
               zh: '面向无源 RFID 标签的氧化物薄膜晶体管集成高效率 DC-DC 变换器' },
      authors: '*Tengteng Lei*, Congwei Liao, Jie Huang, Jiwen Yang, Shengdong Zhang',
      venue: { en: '*SID Symposium Digest of Technical Papers*, 50(1), pp. 1660–1663.',
               zh: '*SID Symposium Digest of Technical Papers*，50(1)，1660–1663 页。' },
      doi: '10.1002/sdtp.13269',
      links: []
    },
    {
      year: 2018, type: 'conference',
      title: { en: 'An a-InGaZnO TFT Gate Driver Circuit with Positive Feedback Effect',
               zh: '具有正反馈效应的 a-InGaZnO TFT 栅极驱动电路' },
      authors: '*Tengteng Lei*, Congwei Liao, Jie Huang, Ying Wang, Shengdong Zhang',
      venue: { en: '*International Conference on CAD-TFT*.',
               zh: '*International Conference on CAD-TFT*。' },
      doi: '10.1109/CAD-TFT.2018.8608053',
      links: []
    },

    /* ── 专利 ──────────────────────────────────────────────────────────
       ⚠️ 下面两条的年份是我按 CN 公开号推的（CN120… ≈ 2025，CN116… ≈ 2023），
          CV 里没写日期，请你核对一下。后三条有明确授权日期，是准确的。
       ─────────────────────────────────────────────────────────────── */
    {
      year: 2025, type: 'patent',
      title: { en: 'A Hysteresis Comparator Implemented Using Dual-Gate Thin-Film Transistors',
               zh: '一种基于双栅薄膜晶体管的迟滞比较器' },
      authors: '*Tengteng Lei*, Man Wong',
      venue: { en: 'Chinese patent CN120512123A.', zh: '中国发明专利 CN120512123A。' },
      links: []
    },
    {
      year: 2023, type: 'patent',
      title: { en: 'A Dynamic Offset-Cancellation Circuit Based on Dual-Gate Thin-Film Transistors',
               zh: '一种基于双栅薄膜晶体管的动态失调消除电路' },
      authors: 'Xuchi Liu, *Tengteng Lei*, Man Wong',
      venue: { en: 'Chinese patent CN116800209A.', zh: '中国发明专利 CN116800209A。' },
      links: []
    },
    {
      year: 2022, type: 'patent',
      title: { en: 'A High-Speed Gate Driving Unit and Circuit', zh: '一种高速栅极驱动单元及电路' },
      authors: 'Shengdong Zhang, *Tengteng Lei*, Congwei Liao, Jie Huang',
      venue: { en: 'Chinese patent CN109859669B — granted 2 September 2022.',
               zh: '中国发明专利 CN109859669B，2022 年 9 月 2 日授权。' },
      links: []
    },
    {
      year: 2022, type: 'patent',
      title: { en: 'Voltage Converter and Radio Frequency Identification Device', zh: '电压变换器及射频识别装置' },
      authors: 'Shengdong Zhang, *Tengteng Lei*, Congwei Liao, Jie Huang',
      venue: { en: 'Chinese patent CN109492740B — granted 1 March 2022.',
               zh: '中国发明专利 CN109492740B，2022 年 3 月 1 日授权。' },
      links: []
    },
    {
      year: 2020, type: 'patent',
      title: { en: 'Shift Register Unit, Gate Drive Circuit and Display Device', zh: '移位寄存器单元、栅极驱动电路及显示装置' },
      authors: 'Shengdong Zhang, *Tengteng Lei*, Congwei Liao, Jie Huang',
      venue: { en: 'Chinese patent CN109285505B — granted 23 June 2020.',
               zh: '中国发明专利 CN109285505B，2020 年 6 月 23 日授权。' },
      links: []
    }
  ],

  /* ── 5. 课题组 ────────────────────────────────────────────────────────
     ⚠️ 下面全是占位示例，换成真人。

     members 一个人的格式：
       {
         photo: '',                                  // 留空就用姓名首字母做头像，
                                                     // 有照片放 assets/img/，正方形
         name: { en: 'Name', zh: '姓名' },
         role: { en: 'PhD Student', zh: '博士生' },
         bio:  { en: '…', zh: '…' },                 // 一两句话
         links: [ { icon: 'mail', url: 'mailto:…' } ] // icon 可选：
       }                                              // mail / scholar / orcid / github / link

     alumni  一行一个人，写去向。不需要就设成 []
     activities.items：
       { photo: '', emoji: '🍜', caption: {en,zh}, date: {en,zh} }
       photo 留空就显示 emoji 色块，填了就显示照片（建议 4:3）
     ─────────────────────────────────────────────────────────────────── */
  group: {
    lede: {
      en: 'The people I work with, and what we get up to when we are not in the cleanroom.',
      zh: '和我一起工作的人，以及我们不在洁净室的时候在干什么。'
    },

    members: [
      {
        photo: '',
        name: { en: 'Tengteng Lei', zh: '雷腾腾' },
        role: { en: 'Research Associate', zh: '研究员' },
        bio: { en: 'Brain-inspired learning accelerators, in-sensor computing, thin-film circuits.',
               zh: '类脑学习加速器、传感器内计算、薄膜电路。' },
        links: [
          { icon: 'mail',  url: 'mailto:t.lei@nulondon.ac.uk' },
          { icon: 'orcid', url: 'https://orcid.org/0000-0002-3780-0058' }
        ]
      },
      {
        photo: '',
        name: { en: 'Member Two', zh: '成员二' },
        role: { en: 'PhD Student', zh: '博士生' },
        bio: { en: 'One or two sentences on what they work on.', zh: '一两句话说明他/她在做什么方向。' },
        links: [ { icon: 'mail', url: 'mailto:someone@example.ac.uk' } ]
      },
      {
        photo: '',
        name: { en: 'Member Three', zh: '成员三' },
        role: { en: 'MSc Student', zh: '硕士生' },
        bio: { en: 'One or two sentences on what they work on.', zh: '一两句话说明他/她在做什么方向。' },
        links: []
      },
      {
        photo: '',
        name: { en: 'Member Four', zh: '成员四' },
        role: { en: 'Visiting Researcher', zh: '访问学者' },
        bio: { en: 'One or two sentences on what they work on.', zh: '一两句话说明他/她在做什么方向。' },
        links: []
      }
    ],

    // 毕业去向。不需要就设成 []
    alumni: [
      { en: '<em>Name</em> — PhD 2026, now at [Company / University].',
        zh: '<em>姓名</em> —— 2026 年博士毕业，现于【公司 / 学校】。' },
      { en: '<em>Name</em> — MSc 2025, now at [Company / University].',
        zh: '<em>姓名</em> —— 2025 年硕士毕业，现于【公司 / 学校】。' }
    ],

    activities: {
      lede: {
        en: 'Group dinners, conference trips, and the occasional escape from the lab.',
        zh: '聚餐、出差开会，以及偶尔逃离实验室的时刻。'
      },
      items: [
        { photo: '', emoji: '🍜', caption: { en: 'Group dinner after the tape-out', zh: '流片之后的组会聚餐' },
          date: { en: 'June 2026', zh: '2026 年 6 月' } },
        { photo: '', emoji: '🎤', caption: { en: 'Conference trip to Orlando', zh: '奥兰多参会' },
          date: { en: 'July 2025', zh: '2025 年 7 月' } },
        { photo: '', emoji: '🥾', caption: { en: 'Weekend walk in the Peak District', zh: '峰区周末徒步' },
          date: { en: 'May 2025', zh: '2025 年 5 月' } },
        { photo: '', emoji: '🎂', caption: { en: 'Someone defended, so: cake', zh: '有人答辩通过了，于是有蛋糕' },
          date: { en: 'March 2025', zh: '2025 年 3 月' } },
        { photo: '', emoji: '🧋', caption: { en: 'The weekly bubble tea run', zh: '每周一次的奶茶行动' },
          date: { en: 'Ongoing', zh: '长期项目' } },
        { photo: '', emoji: '🔬', caption: { en: 'First light from the new probe station', zh: '新探针台第一次出数据' },
          date: { en: 'January 2025', zh: '2025 年 1 月' } }
      ]
    }
  },

  /* ── 6. 教学 ──────────────────────────────────────────────────────────
     ⚠️ 下面的课程是占位示例，等你真的开课了把内容换掉。

     materials 现在每门课只留一行「课程录像」。想加更多就往数组里加：
       { kind: 'Slides', label: { en: 'Lecture 1', zh: '第一讲' },
         url: 'files/teaching/lecture-01.pdf' },
     kind 是左边小标签的文字，随便写：'Slides' 'Notes' 'Syllabus' 'Reading' …
     文件放 files/ 文件夹；外部链接（B站、YouTube）写完整网址并加 external: true。
     ─────────────────────────────────────────────────────────────────── */
  teaching: {
    lede: {
      en: 'Courses, materials, and answers to the questions students ask me most often.',
      zh: '课程、教学资料，以及学生问得最多的那些问题。'
    },
    courses: [
      {
        code: 'ABC1234',
        title: { en: 'Name of the Course', zh: '课程名称' },
        meta: {
          en: "King's College London · Autumn 2026 · Lecturer",
          zh: '伦敦国王学院 · 2026 年秋季学期 · 主讲'
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
          en: "King's College London · Spring 2027 · Teaching Assistant",
          zh: '伦敦国王学院 · 2027 年春季学期 · 助教'
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

    statement: {
      title: { en: 'Teaching Philosophy', zh: '教学理念' },
      body: {
        en: 'I served as a Senior Teaching Assistant Fellow at HKUST, where most of my teaching was in circuits and semiconductor devices. My conviction from that period is simple: students remember what they have built and measured, not what they have been told. A transistor characteristic that a student has fitted from their own noisy measurement teaches more than any derivation on a board.',
        zh: '我曾在香港科技大学担任高级助教研究员，教学内容集中在电路与半导体器件。那段经历让我确信一件事：学生记住的是自己动手做过、测过的东西，而不是别人讲过的东西。一条学生从自己带噪声的实测数据里拟合出来的晶体管特性曲线，比黑板上任何推导都更有教益。'
      },
      // 教学陈述 PDF。把文件放进 files/ 文件夹，命名为 Teaching-Statement.pdf。
      // 不想要这个下载按钮就把这一行删掉，或者设成 ''。
      pdf: 'files/Teaching-Statement.pdf'
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
     ⚠️ 下面全是占位示例，有真内容了再换掉。

     视频不要上传到网站！传到 YouTube 或 B站，这里只填 ID：
       YouTube  https://www.youtube.com/watch?v=dQw4w9WgXcQ
                → { platform: 'youtube', id: 'dQw4w9WgXcQ' }
       B 站     https://www.bilibili.com/video/BV1xx411c7mD
                → { platform: 'bilibili', id: 'BV1xx411c7mD' }
     ─────────────────────────────────────────────────────────────────── */
  media: {
    lede: {
      en: 'Talks, science communication and public engagement.',
      zh: '公开讲座、科普视频与公众传播。'
    },

    videos: [
      {
        platform: 'youtube', id: 'dQw4w9WgXcQ',
        title: { en: 'Title of the video', zh: '视频标题' },
        meta:  { en: 'Public lecture · 2026 · 42 min', zh: '公开讲座 · 2026 · 42 分钟' }
      },
      {
        platform: 'bilibili', id: 'BV1xx411c7mD',
        title: { en: 'Title of a Chinese-language explainer', zh: '一期中文科普视频的标题' },
        meta:  { en: 'Science outreach · 2026 · 15 min', zh: '科普 · 2026 · 15 分钟' }
      }
    ],

    // 不想要播客就把 podcast 设成 null
    podcast: {
      title: { en: 'Name of Your Podcast', zh: '你的播客名称' },
      desc: {
        en: 'One or two sentences about what the show is about and who it is for.',
        zh: '用一两句话说明这档节目聊什么、给谁听。'
      },
      subscribe: [
        { label: 'Apple Podcasts', url: 'https://podcasts.apple.com/...' },
        { label: 'Spotify',        url: 'https://open.spotify.com/show/...' },
        { label: { en: 'Xiaoyuzhou', zh: '小宇宙' }, url: 'https://www.xiaoyuzhoufm.com/podcast/...' }
      ],
      // audioUrl 填 mp3 直链会显示播放器；
      // 或者用 embedUrl 填平台嵌入代码里的那个 src
      episodes: [
        {
          number: 2,
          title: { en: 'Episode title', zh: '本期标题' },
          meta:  { en: '15 Aug 2026 · 48 min', zh: '2026年8月15日 · 48 分钟' },
          desc:  { en: 'What this episode covers, in one or two sentences.', zh: '一两句话介绍这期聊了什么。' },
          audioUrl: ''
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
     ⚠️ 下面全是占位示例，换成你自己的。
        这一页是整个网站里最容易让人记住你的地方，值得花二十分钟填。
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
        { emoji: '📖', label: { en: 'Reading',        zh: '在读' }, text: { en: '[Book title] by [Author] — and slowly, a paper I keep meaning to finish.', zh: '《【书名】》，【作者】。还有一篇拖了很久没读完的论文。' } },
        { emoji: '🎧', label: { en: 'Listening',      zh: '在听' }, text: { en: '[Podcast name], and far too much of one album on repeat.', zh: '【播客名】，以及单曲循环到有点过分的一张专辑。' } },
        { emoji: '🔬', label: { en: 'Working on',     zh: '在忙' }, text: { en: '[Current project] — currently at the stage where nothing works yet.', zh: '【当前项目】—— 目前处于「什么都还跑不通」的阶段。' } },
        { emoji: '🤔', label: { en: 'Thinking about', zh: '在想' }, text: { en: 'A question I cannot stop turning over: [the question].', zh: '一个最近老在脑子里转的问题：【问题】。' } },
        { emoji: '🌱', label: { en: 'Learning',       zh: '在学' }, text: { en: '[A skill or language] — badly, but consistently.', zh: '【某项技能或语言】—— 学得很烂，但没停。' } }
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

    // ── 推荐 / 书架片单 ── 每一组自动换一个颜色。url 留空就不加链接。
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
          { name: '[Podcast name]', note: { en: 'What it is about and who it suits.', zh: '聊什么、适合谁听。' }, url: '' }
        ]
      },
      {
        title: { en: 'Tools I rely on', zh: '离不开的工具' },
        items: [
          { name: 'Zotero', note: { en: 'Reference management. Free, open source.', zh: '文献管理。免费、开源。' }, url: 'https://www.zotero.org' },
          { name: 'Cadence Virtuoso', note: { en: 'Where most of my working hours go.', zh: '我大部分工作时间都花在这上面。' }, url: '' }
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

  /* ── 8. 留言板（匿名，任何人都能留，留完立刻显示）───────────────────
     留言存在 Supabase（一个免费的在线数据库）里。GitHub Pages 只能发文件、
     不能存数据，所以必须借一个外部数据库，这是唯一要额外注册的东西。

     配置步骤见 README.md 的「开通留言板」那一节，大约十分钟。
     配好之后把两个值填到下面就能用了：

       url     —— 形如 https://abcdefghijk.supabase.co
                  （就是 Supabase 里的 Project ID 前后加上这两段）
       anonKey —— Settings → API Keys 里的 Publishable key，
                  以 sb_publishable_ 开头

     ⚠️ anonKey 出现在公开仓库里是正常的，它本来就是给浏览器用的公钥。
        真正拦住坏人的是数据库那边的权限规则（README 里的 SQL 已经配好）：
        任何人都能读、能写一条留言，但谁都不能改、不能删。
        能删的只有你，在 supabase.com 后台。
     ─────────────────────────────────────────────────────────────── */
  guestbook: {
    lede: {
      en: 'Say hello, ask a question, or tell me I am wrong about something. I read everything.',
      zh: '打个招呼、问个问题，或者告诉我哪里说错了。我都会看。'
    },
    note: {
      en: 'No account needed — leave a name or stay anonymous, either is fine. Messages appear straight away, and I can remove anything unkind.',
      zh: '不用注册，留个名字或者完全匿名都可以。留言会立刻显示出来，不友善的内容我会删掉。'
    },
    supabase: {
      url:     'https://hfuaahhigbqpfgamasyp.supabase.co',
      anonKey: 'sb_publishable_n4NtUaTwUorWQeqJFC0Amg_n_1vXmsX'
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
      // 可以写一个字符串，也可以写成数组（多个邮箱，页面上用分号隔开）
      email: [
        't.lei@nulondon.ac.uk',
        'tengteng.lei@kcl.ac.uk',
        'eetlei@ust.hk'
      ],
      office: { en: '', zh: '' },
      address: {
        en: "Department of Engineering, King's College London, Strand, London WC2R 2LS, United Kingdom",
        zh: '英国伦敦国王学院工程系，Strand, London WC2R 2LS'
      },
      note: {
        en: 'Email is the fastest way to reach me — any of the three above will do. I am happy to hear from prospective students and collaborators.',
        zh: '邮件是联系我最快的方式，上面三个都收。欢迎有意向的学生和合作者与我联系。'
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
