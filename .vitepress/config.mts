import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "Youhess",
  description: "This will be Youhess website",
  
  // 部署时的路径，如果你放在 github pages 的 /my-repo/ 下，这里就填 '/my-repo/'
  base: '/', 

  themeConfig: {
    // 顶部导航
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Guaide', link: '/markdown-examples' },
      { 
        text: 'About', 
        items: [
          { text: 'Vue 官网', link: 'https://vuejs.org' },
          { text: 'VitePress', link: 'https://vitepress.dev' }
        ]
      }
    ],

    // 侧边栏
    sidebar: [
      {
        text: '开始上手',
        items: [
          { text: 'Markdown 示例', link: '/markdown-examples' },
          { text: 'API 示例', link: '/api-examples' }
        ]
      }
    ],

    // 社交链接
    socialLinks: [
      { icon: 'github', link: 'https://github.com/youhess' }
    ],
    
    // 页脚 (仅在 Home 页显示，文档页默认不显示)
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2024-present My Team'
    }
  }
})