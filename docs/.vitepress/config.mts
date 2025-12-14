import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "贝塔AI编程",
  description: "AI编程，AI智能体，软件定制开发，AI行业新闻分享",
  lang: 'zh-CN',
  
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }]
  ],
  
  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
      { text: '文章', link: '/posts/' },
      { text: '关于', link: '/about' }
    ],

    sidebar: {
      '/posts/': [
        {
          text: '技术文章',
          items: [
            { text: '为什么你应该学会使用 AI 编程', link: '/posts/example' }
          ]
        }
      ],

    },

    // socialLinks: [
    //   { icon: 'github', link: 'https://github.com/skyetang' }
    // ],

    footer: {
      message: '',
      copyright: 'Copyright © 2025 | <a href="https://beian.miit.gov.cn/" target="_blank">蜀ICP备2025165814号-1</a>'
    },

    // search: {
    //   provider: 'local'
    // },

    outline: {
      label: '页面导航',
      level: [2, 3]
    }
  }
})
