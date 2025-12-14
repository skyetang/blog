# VitePress 博客

## 快速开始

```bash
# 安装依赖
npm install

# 本地开发
npm run dev

# 构建
npm run build

# 预览构建结果
npm run preview
```

## 项目结构

```
docs/
├── .vitepress/
│   └── config.mts      # 站点配置
├── public/             # 静态资源（图片等）
├── posts/              # 文章目录
├── categories/         # 分类目录
├── index.md            # 首页
└── about.md            # 关于页面
```

## 添加新文章

### 方法一：使用脚本
运行 `new-post.bat`，按提示输入标题和分类。

### 方法二：手动创建
1. 在 `docs/posts/` 下创建 `.md` 文件
2. 添加 frontmatter：

```markdown
---
title: 文章标题
date: 2024-12-14
category: frontend
tags:
  - tag1
  - tag2
---

# 文章标题

正文内容...
```

3. 更新 `docs/.vitepress/config.mts` 中的 sidebar

## 添加新分类

1. 在 `docs/categories/` 下创建 `分类名.md`
2. 更新 `docs/.vitepress/config.mts` 中的 sidebar
3. 更新 `docs/categories/index.md` 中的分类列表

## 部署

### GitHub Pages 自动部署
1. 推送代码到 GitHub 仓库的 `main` 分支
2. 在仓库 Settings > Pages 中选择 GitHub Actions 作为 Source
3. 每次推送会自动构建部署

### 手动部署
运行 `deploy.bat`（需先配置仓库地址）

## 常用命令

| 命令 | 说明 |
|------|------|
| `npm run dev` | 启动开发服务器 |
| `npm run build` | 构建生产版本 |
| `npm run preview` | 预览构建结果 |
