import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'zyy 的主页',
  description: '课程笔记、项目与个人介绍',
  lang: 'zh-CN',
  // 重要：部署到 https://用户名.github.io/仓库名/ 时，改成 '/仓库名/'
  // 若用 用户名.github.io 这个仓库（根域名），保持 '/'
  base: '/',
  lastUpdated: true,
  cleanUrls: true,
  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
      { text: '项目', link: '/projects' },
      { text: '课程笔记', link: '/notes/fluid-mechanics' },
      { text: 'GitHub', link: 'https://github.com/zyyzyyzyy97' }
    ],
    sidebar: [
      {
        text: '项目',
        collapsed: false,
        items: [
          { text: '项目总览', link: '/projects' }
        ]
      },
      {
        text: '课程笔记',
        collapsed: false,
        items: [
          { text: '工程流体力学（甲）I', link: '/notes/fluid-mechanics' }
        ]
      }
    ],
    // 右侧「目录」由页面里的 ## / ### 标题自动生成
    outline: { label: '目录', level: [2, 3] },
    search: { provider: 'local' },
    docFooter: { prev: '上一篇', next: '下一篇' },
    returnToTopLabel: '回到顶部',
    sidebarMenuLabel: '菜单',
    darkModeSwitchLabel: '主题',
    lastUpdatedText: '最后更新'
  }
})
