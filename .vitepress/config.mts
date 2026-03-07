import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "Youhess",
  description: "This will be Youhess website",
  
  // 部署时的路径，如果你放在 github pages 的 /my-repo/ 下，这里就填 '/my-repo/'
  base: '/portfolio/', 

  themeConfig: {
    // 顶部导航
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Journal', link: '/hello-world' },
      { 
        text: 'About', 
        items: [
          { text: '稀土掘金', link: 'https://juejin.cn/user/2696448572141277' },
          { text: 'linkedin', link: 'https://www.linkedin.com/in/zhendichen' },
          { text: 'certificates', link: '/certificates' }
        ]
      }
    ],

    // 侧边栏
    sidebar: [
      {
        text: '日志',
        items: [
     
          { text: '简历', link: '/resume' },
          { text: '证书', link: '/certificates' },

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