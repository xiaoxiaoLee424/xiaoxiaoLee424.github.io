/* =========================================================================
 * content.js —— 网站所有文字都在这个文件里（中英双语）
 * 改文字只需要改这个文件，不用动 index.html。
 * 每个字段都可以是字符串，也可以是 { zh: "...", en: "..." } 双语对。
 * 允许直接写 HTML 标签，例如 <b>加粗</b>、<a href="...">链接</a>。
 * 数组写成 [] 时，对应板块会自动隐藏（不会留下空标题）。
 * ========================================================================= */

const DATA = {

  /* ---------- 基本信息 ---------- */
  name:        { zh: "李文潇", en: "xiaoxiaoLee" },
  nameEn:      "xiaoxiaoLee",                  // 中文界面时显示成「李文潇 (xiaoxiaoLee)」
  title:       { zh: "李文潇 (xiaoxiaoLee) @ 北京邮电大学", en: "xiaoxiaoLee @ BUPT" },
  description: { zh: "李文潇（xiaoxiaoLee）的个人主页 —— 北京邮电大学计算机学院，关注可信 AI 与大模型安全对齐",
                 en: "xiaoxiaoLee (李文潇) — Undergraduate in Computer Science at BUPT, focused on trustworthy AI, LLM safety and alignment." },

  heroSub: {
    zh: '🎓 北京邮电大学 · <span class="purple">计算机学院 · 计算机专业</span> 本科生',
    en: '🎓 Undergraduate in <span class="purple">Computer Science @ BUPT</span>'
  },
  heroAffil: {
    zh: "北京邮电大学 计算机学院（国家示范性软件学院）<br>2026.09 – 2030.06 · 北京",
    en: "School of Computer Science (National Pilot School of Software Engineering), BUPT<br>2026.09 – 2030.06 · Beijing, China"
  },

  /* ---------- 联系方式 ---------- */
  email: "xxlee424@bupt.edu.cn",
  emailDisplay: { zh: "xxlee424 [at] bupt.edu.cn", en: "xxlee424 [at] bupt.edu.cn" },
  wechat: "xiaoxiaolee424",

  /* 社交链接：icon 可选 github / gmail / x / instagram / scholar / link */
  links: [
    { icon: "github", label: "GitHub", url: "https://github.com/xiaoxiaoLee424" },
    { icon: "x",      label: "X (Twitter)", url: "https://x.com/xiaoxiaoLee424" },
    { icon: "link",   label: { zh: "华附论坛", en: "HSFZ BBS" }, url: "https://bbs.hsfz-bbs.cn" }
  ],

  heroBadge: { zh: "可信 AI · 大模型安全 · 对齐", en: "Trustworthy AI · LLM Safety · Alignment" },

  /* ---------- 个人简介 ---------- */
  bio: {
    zh: [
      '我是 <span class="purple"><b>李文潇</b></span>，<span class="purple"><b>北京邮电大学计算机学院</b></span> 2026 级本科生。目前主修 C / C++、Python 与数学基础课（数学分析、线性代数），同时在自学人工智能安全。',
      '2026 年 10 月，我借助 AI 工具独立开发并上线了 <span class="purple"><b>华附校园论坛（HSFZ BBS）</b></span>，从需求、实现到部署运维均由我完成，目前已有近 400 名同学在三个校区注册使用。运营过程中，我处理过内容审核、可见范围与权限这类问题，也修过几次安全漏洞。',
      '随着大模型在社会各个层面的快速更迭，安全问题会越来越突出，这也是我把研究方向定在<span class="purple"><b>可信 AI 与大模型安全对齐</b></span>的原因。我希望自己做的研究能够回答「模型是否安全、以及为什么」，未来计划继续攻读博士学位，在这一方向做长期研究。',
      '<i class="purple">欢迎邮件交流。</i>'
    ],
    en: [
      'I am <span class="purple"><b>Wenxiao Li (xiaoxiaoLee)</b></span>, an undergraduate at the <span class="purple"><b>School of Computer Science, BUPT</b></span> (class of 2026). My coursework covers C / C++, Python and the maths foundations — mathematical analysis and linear algebra — and I am teaching myself AI safety on the side.',
      'In October 2026 I built and launched <span class="purple"><b>HSFZ BBS</b></span>, a campus forum, working independently with AI tools from requirements through implementation, deployment and operations. It now has close to 400 registered users across three campuses. Running it meant dealing with content moderation, visibility and permissions, and patching a few security holes.',
      'As large models spread through society at an accelerating pace, safety problems will only become more pressing — which is why I have settled on <span class="purple"><b>trustworthy AI and LLM safety &amp; alignment</b></span>. I want to work on whether a model is actually safe, and why, and I plan to continue with a PhD in this direction.',
      '<i class="purple">Feel free to reach out by email.</i>'
    ]
  },

  /* ---------- 研究兴趣 ---------- */
  research: [
    {
      title: { zh: "可信人工智能 Trustworthy AI", en: "Trustworthy AI" },
      desc: {
        zh: "模型在真实场景里是否鲁棒、可解释、可控 —— 涵盖鲁棒性、隐私、公平与安全等维度，是我理解这个领域的底座。",
        en: "Whether models stay robust, interpretable and controllable in the real world — robustness, privacy, fairness and safety. This is the base layer of how I understand the field."
      }
    },
    {
      title: { zh: "大模型安全与对齐 LLM Safety &amp; Alignment", en: "LLM Safety &amp; Alignment" },
      desc: {
        zh: "让大语言模型的行为符合人类意图与价值：越狱与防御、对齐训练、安全评测基准。也是我最想深入的方向。",
        en: "Making LLM behaviour follow human intent and values: jailbreaks and defences, alignment training, safety benchmarks. The direction I most want to go deep into."
      }
    },
    {
      title: { zh: "评测与红队测试 Evaluation &amp; Red-teaming", en: "Evaluation &amp; Red-teaming" },
      desc: {
        zh: "用可复现的基准和攻击方法量化模型的安全边界 —— 我相信能被测量的风险，才谈得上被改进。",
        en: "Quantifying a model's safety boundary with reproducible benchmarks and attack methods — a risk you can measure is a risk you can improve."
      }
    }
  ],

  /* ---------- 动态 News ---------- */
  news: [
    { date: "2026.11", zh: '参与大学生创新创业训练计划（<b>雏雁计划</b>）项目 <b>「邮小伴 PostPal」</b> 立项，项目周期 2026.10 – 2027.04。', en: 'Project <b>PostPal</b> approved under BUPT\'s undergraduate innovation program (Chuyan Program), 2026.10 – 2027.04.' },
    { date: "2026.10", zh: '参加北京邮电大学 <b>程序设计大赛</b>，进入决赛。', en: 'Advanced to the finals of the <b>BUPT Programming Contest</b>.' },
    { date: "2026.10", zh: '借助 AI 工具独立开发并上线 <b>华附校园论坛（HSFZ BBS）</b>，目前在三个校区运行中。', en: 'Built and launched <b>HSFZ BBS</b> on my own with AI tools — now close to 400 registered users across three campuses.' },
    { date: "2026.09", zh: '入读 <b>北京邮电大学计算机学院</b>，计算机专业。', en: 'Started my undergraduate study in CS at <b>BUPT</b>.' }
  ],

  /* ---------- 教育背景 ---------- */
  education: [
    {
      badge: "BUPT",
      title: { zh: "北京邮电大学 · 计算机学院（国家示范性软件学院）· 计算机专业", en: "BUPT · School of Computer Science (National Pilot School of Software Engineering) · Computer Science" },
      period: "2026.09 – 2030.06",
      note: { zh: "北京 · 2026 级", en: "Beijing · Class of 2030" },
      detail: { zh: "", en: "" }
    }
  ],

  /* ---------- 实习经历（没有就留空数组 []） ---------- */
  experience: [],

  /* ---------- 科研 / 论文（没有就留空数组 []） ---------- */
  publications: [],

  /* ---------- 项目 ---------- */
  projects: [
    {
      name: { zh: "华附校园论坛 HSFZ BBS", en: "HSFZ BBS · Campus Forum" },
      role: { zh: "独立开发 · 全栈（AI 辅助）", en: "Solo Developer · Full-stack (AI-assisted)" },
      links: [
        { url: "https://bbs.hsfz-bbs.cn", text: "bbs.hsfz-bbs.cn" },
        { url: "https://github.com/xiaoxiaoLee424/hsfz-bbs", text: "github.com/xiaoxiaoLee424/hsfz-bbs" }
      ],
      stats: [
        { value: "379", label: { zh: "注册用户", en: "registered users" } },
        { value: "185", label: { zh: "主题", en: "threads" } },
        { value: "753", label: { zh: "回复", en: "replies" } }
      ],
      bullets: {
        zh: [
          "面向华附在校生与校友的校园论坛，上线 7 大分区、23 个板块，覆盖学习互助、年级群、球友、生活娱乐、跳蚤市场与校友交流。",
          "Next.js + React + TypeScript 全栈实现，SQLite 存储；支持发帖带图（最多 4 张、自动压缩）、可见范围控制（所有人 / 关注者 / 仅自己）、头衔系统与审核制的首页横幅。",
          "安全方面：服务端会话（httpOnly Cookie + 随机 token + 过期控制）、登录与注册的多维度限流（同 IP 与 IP + 用户名）、bcrypt 密码哈希、手机号 AES-256-GCM 加密存储；内容与上传按可见范围、角色和配额逐次鉴权，图片统一重编码。",
          "支持 Markdown 与数学公式渲染（KaTeX）、关注与楼层引用。从零完成需求设计、开发、部署上线与日常运维，开发过程借助 AI 工具；后期合并了其他开发者的部分代码。"
        ],
        en: [
          "A campus forum for HSFZ students and alumni: 7 sections and 23 boards covering study help, class groups, sports, life, second-hand market and alumni exchange.",
          "Built full-stack with Next.js + React + TypeScript and SQLite: image posts (up to 4, auto-compressed), per-post visibility (public / followers / private), a title system and a moderated homepage banner.",
          "Security: server-side sessions (httpOnly cookies with random tokens and expiry), multi-dimensional rate limiting on login and registration (per IP and per IP + username), bcrypt password hashing and AES-256-GCM encryption for phone numbers. Every read is authorised by visibility scope and role, and uploads are capped by type, count and size with image re-encoding.",
          "Markdown and math rendering (KaTeX), follows and quoted replies. I took it from zero to launch on my own — requirements, implementation, deployment and operations — using AI tools heavily; later I merged code contributions from other developers."
        ]
      }
    },
    {
      name: { zh: "邮小伴 PostPal · 轻量化本地桌宠 Agent", en: "PostPal · Lightweight Local Desktop Agent" },
      role: { zh: "团队成员 · 测试与运营 + 核心开发", en: "Team Member · Testing &amp; Operations + Core Development" },
      period: "2026.10 – 2027.04",
      note: { zh: "大学生创新创业训练计划（雏雁计划）· 指导教师：鄂海红教授、康俊教授", en: "BUPT Undergraduate Innovation Program (Chuyan) · Advisors: Prof. Haihong E, Prof. Jun Kang" },
      bullets: {
        zh: [
          "面向学生桌面场景的本地化个人 Agent：以桌面宠物为交互形态，在断网条件下完成自然对话、本地笔记 RAG 问答与待办管理，个人数据全程不出本机。",
          "技术方案：Ollama 部署 Qwen2.5（0.5B / 3B 量化版）做本地推理，ChromaDB 构建个人笔记向量库，SQLite 存储日程与待办，桌面外壳基于开源框架二次开发；目标为 Windows 端 Demo，内存占用控制在 8GB 以内。",
          "我的职责：负责测试与运营（测试用例设计、内测招募、仓库文档维护），同时参与核心技术开发与本地部署调试。"
        ],
        en: [
          "A local-first personal agent for students' desktops: desktop-pet interaction with offline chat, RAG over personal notes and to-do management — personal data never leaves the machine.",
          "Stack: local inference via Ollama with quantized Qwen2.5 (0.5B / 3B), a ChromaDB vector store over personal notes, SQLite for schedules and tasks, and a desktop shell built on an open-source framework; target is a Windows demo under 8 GB memory.",
          "My role: testing and operations (test cases, recruiting beta testers, repository docs), alongside core feature development and local deployment debugging."
        ]
      }
    }
  ],

  /* ---------- 荣誉与竞赛（没有就留空数组 []） ---------- */
  awards: [
    { year: "2026.10", name: { zh: "北京邮电大学程序设计大赛", en: "BUPT Programming Contest" },
      prize: { zh: "进入决赛", en: "Finalist" } }
  ],

  /* ---------- 技能 ---------- */
  skills: [
    { group: { zh: "编程语言", en: "Languages" },
      items: ["C", "C++", "Python"] },
    { group: { zh: "在学", en: "Learning" },
      items: ["TypeScript", "JavaScript", "SQL", "React", "Next.js", "Node.js", "SQLite", "Tailwind CSS"] },
    { group: { zh: "项目相关（在学）", en: "Project Stack (Learning)" },
      items: ["Ollama", "Qwen2.5 (quantized)", "ChromaDB", "Prompt Engineering"] },
    { group: { zh: "工具与环境", en: "Tools" },
      items: ["Git / GitHub", "VS Code"] }
  ],

  /* ---------- 页脚 ---------- */
  footer: { zh: "© 2026 李文潇 · 纯静态页面", en: "© 2026 xiaoxiaoLee · Static site" },
  lastUpdated: "2026-11-10"
};
