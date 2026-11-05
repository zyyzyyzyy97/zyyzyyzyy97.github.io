---
title: 项目
description: 我做过的项目、课程作业与小工具
---

# 项目

这里收录我做过的东西：课程作业、小工具、网站和实验记录。每一条都写在统一的数据文件里，改一次，首页和这一页会一起更新。

<ProjectGrid :show-more="false" />

## 怎么添加项目

打开 `docs/.vitepress/theme/projects.ts`，在 `projects` 数组里复制一条对象，填 `title / desc / tags / year / badge / link` 即可。

- `link` 是站内路径时（如 `/notes/fluid-mechanics`）直接写路径；指向 GitHub 时填完整网址并加 `external: true`。
- `badge` 是卡片左上角的小标签，`color` 控制它的强调色。
- 保存后 `git push`，GitHub Actions 会自动重新构建并发布。
