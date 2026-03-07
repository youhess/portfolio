import DefaultTheme from 'vitepress/theme'
import { h } from 'vue'
import './style.css' // 引入自定义样式
import PdfPreview from './components/PdfPreview.vue'

// 引入可能用到的组件，比如 ElementPlus 或者你自己写的组件
// import MyComponent from './components/MyComponent.vue'

export default {
  // 1. 继承默认主题
  extends: DefaultTheme,

  // 2. 使用 Layout 插槽进行布局扩展 (Level 4 关键)
  Layout: () => {
    return h(DefaultTheme.Layout, null, {
      // 插槽示例：在文档内容之前插入内容
      // 'doc-before': () => h('div', { style: 'color: red; padding: 10px;' }, '⚠️ 这是一个全局警告横幅'),
      
      // 插槽示例：在每篇文章底部插入 (常用于评论区)
      // 'doc-after': () => h(CommentComponent),
      
      // 插槽示例：侧边栏顶部
      // 'sidebar-nav-before': () => h('div', '广告位招租') 
    })
  },

  // 3. 增强 Vue 应用能力 (相当于 main.ts)
  enhanceApp({ app, router, siteData }) {
    // 注册全局组件
    app.component('PdfPreview', PdfPreview)
    // app.component('MyComponent', MyComponent) 
    console.log('VitePress App Initialized!')
  }
}
