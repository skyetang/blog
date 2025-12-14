import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "季诚AI",
  description: "AI编程，AI智能体，软件定制开发，AI行业新闻分享",
  lang: 'zh-CN',
  
  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
      { text: '文章', link: '/posts/' },
      { text: '分类', link: '/categories/' },
      { text: '关于', link: '/about' }
    ],

    sidebar: {
      '/posts/': [
        {
          text: '技术文章',
          items: [
            { text: '示例文章', link: '/posts/example' }
          ]
        }
      ],
      '/categories/': [
        {
          text: '分类',
          items: [
            { text: '前端', link: '/categories/frontend' },
            { text: '后端', link: '/categories/backend' },
            { text: '工具', link: '/categories/tools' }
          ]
        }
      ]
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/skyetang' }
    ],

    footer: {
      message: '',
      copyright: 'Copyright © 2025 | <a href="https://beian.miit.gov.cn/" target="_blank">蜀ICP备2025165814号-1</a>'
    },

    search: {
      provider: 'local'
    },

    outline: {
      label: '页面导航',
      level: [2, 3]
    }
  }
})
