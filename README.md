# blog-hush

个人博客。骨架来自 [XFX-939/xiang-fuxing-blog](https://github.com/XFX-939/xiang-fuxing-blog)，已剔除原作者的文章、私图、个人信息，所有占位由你自己填入。

## 技术栈

- **Next.js 14** (App Router) + **TypeScript** + **React 18**
- **Tailwind CSS** + CSS 变量主题（支持深色模式）
- **MDX** (`next-mdx-remote/rsc`)：GFM、表格、代码高亮 (`rehype-pretty-code`)、数学公式 (KaTeX)
- **next-themes** 深色模式
- 本地文章搜索、分类、标签、归档、sitemap、robots

## 本地运行

```bash
npm install
npm run dev
# http://localhost:3000
```

生产构建：

```bash
npm run build
npm run start
```

## 个性化

打开 `lib/site.ts`：

- `siteName` / `siteDescription` / `siteUrl` —— 站点名、描述、域名
- `author` / `email` / `github` 等 —— 你的联系方式
- `navItems` —— 顶部导航
- `categories` —— 文章分类

`lib/projects.ts` 和 `lib/topics.ts` 同样需要换成你自己的内容。

## 头像

把头像放到 `public/images/avatar.jpg`（替换占位 `avatar-placeholder.svg`），`app/about/page.tsx` 和 `components/HeroSection.tsx` 已经默认指向 `avatar.jpg`。

## 写文章

在 `content/blog/` 下新建 `.mdx` 文件，**文件名 = URL slug**。

```mdx
---
title: "文章标题"
description: "摘要"
date: "2026-06-27"
category: "技术笔记"
tags: ["标签A"]
featured: false
draft: false
---

## 一级小标题

正文支持 GFM 列表、表格、代码块、引用、KaTeX 公式。
```

字段说明（与 `lib/posts.ts` 的 `PostFrontmatter` 对齐）：

- `title` 标题
- `description` 摘要
- `date` ISO 字符串
- `category` 必须是 `lib/site.ts` 的 `categories` 之一
- `tags` 标签数组
- `featured` 是否展示在首页"精选"区
- `draft` 草稿；`true` 时不在列表、归档、sitemap、搜索中出现

## 部署到 Vercel

1. 把仓库推到 GitHub
2. 打开 [vercel.com/new](https://vercel.com/new)，用 GitHub 登录
3. **Import** 这个仓库
4. Framework Preset 自动识别为 Next.js
5. 直接点 **Deploy**（Root Directory 留空，Vercel 默认从仓库根构建）
6. 等 1-2 分钟 → 拿到 `https://blog-hush-xxx.vercel.app`
7. 部署前确认 `lib/site.ts` 的 `siteUrl` 已填真实域名（影响 sitemap 和 OG 图）

## 目录结构

```
.
├── app/                  Next.js App Router：页面、SEO、API
│   ├── about/            关于
│   ├── api/              likes / search
│   ├── archive/          归档
│   ├── blog/             列表 + 详情
│   ├── categories/       分类索引
│   ├── collaboration/    合作
│   ├── methodology/      方法论
│   ├── projects/         项目
│   ├── tags/             标签索引
│   ├── topics/           主题聚合
│   ├── layout.tsx        全局 layout
│   ├── page.tsx          首页
│   ├── robots.ts
│   └── sitemap.ts
├── components/           33 个复用组件
├── content/blog/         MDX 文章
├── lib/                  site / posts / projects / topics / utils
├── public/               静态资源
└── styles/globals.css    全局样式 + CSS 变量
```

## 致谢

- 骨架与设计：[XFX-939/xiang-fuxing-blog](https://github.com/XFX-939/xiang-fuxing-blog)
