# 李文潇 · 个人主页

淡紫学术风的单页个人主页，纯静态、零依赖、可离线双击打开，支持中英一键切换。

在线地址：https://xiaoxiaoLee424.github.io

## 文件结构

```
├── index.html      页面骨架 + 样式 + 渲染逻辑（一般不用改）
├── content.js      ★ 所有文字都在这里（中英双语），改内容只改这个文件
├── assets/
│   ├── avatar.jpg      头像
│   └── avatar.svg      字母头像（备选）
└── README.md
```

本地预览：双击 `index.html`，或在目录里跑 `python3 -m http.server 8765` 后访问 http://127.0.0.1:8765 。

## 怎么改内容

打开 `content.js`，找到对应字段直接改。字段支持两种写法：

```js
name: "李文潇"                                  // 中英通用
name: { zh: "李文潇", en: "xiaoxiaoLee" }       // 双语，切换语言时自动替换
heroSub: { zh: '…<b>加粗</b>…', en: '…' }       // 字符串里可以直接写 HTML
```

**数组写成 `[]` 时，对应板块会自动隐藏**，导航里也会去掉对应链接。所以实习、论文、竞赛这类暂时没有内容的板块，直接留空就行。

### 加一条 News

```js
{ date: "2026.11", zh: "……", en: "……" },
```

按时间倒序放在 `news` 数组最前面。

### 加一个项目

复制 `projects` 里任意一条改内容即可。可选字段：

- `links`：`[{ url, text }]`，会渲染成一排小胶囊链接
- `stats`：`[{ value: "379", label: { zh: "注册用户", en: "registered users" } }]`，渲染成数据条
- `period`：时间标签，如 `"2026.10 – 2027.04"`
- `note`：副标题，如「指导教师：xx 教授」

### 加一篇论文

在 `publications` 里复制一条。`venueType` 可选 `"under"`（在投，黄色）或 `"accept"`（已录用，绿色）。

## 换头像

把图片命名为 `avatar.jpg` 放进 `assets/` 覆盖同名文件即可。建议正方形、600×600 以上。

## 生成 PDF

点右上角「打印 / PDF」，在打印对话框里选「存储为 PDF」。已做过打印样式：自动隐藏导航、压缩头像、避免条目跨页断裂。

## 发布

仓库 `xiaoxiaoLee424.github.io` 是 GitHub Pages 的用户站，推到 `main` 分支后自动生效：

```bash
git add -A && git commit -m "update" && git push
```

等 1–2 分钟访问 https://xiaoxiaoLee424.github.io 。
