import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "我的博客",
  description: "一个使用 VitePress 构建的博客",
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
      { icon: 'github', link: 'https://github.com/your-username' }
    ],

    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2024-present'
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
