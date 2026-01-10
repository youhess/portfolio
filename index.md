---
layout: home

hero:
  name: "Youhess"
  text: "Software Engineer | Creative Coder"
  tagline: "MSc in CS(AI) from University of Nottingham. Building scalable Web Architectures, exploring AI solutions, and crafting Interactive 3D Experiences."
  
  image:
    src: /avatar.jpg
    alt: Youhess

  actions:
    - theme: brand
      text: Resume
      link: /about
    - theme: alt
      text: GitHub
      link: https://github.com/youhess
    
 # ⚠️ 注意：把这里的
 # features:
 #  - title: ⚡️ 极速启动
 #    details: 基于 Vite 构建，开发服务器毫秒级响应。
 #    icon:
 #      src: https://cn.vitejs.dev/logo.svg
 #      width: 48px
 #      height: 48px 
 # 删掉，因为我们要用下面自定义的
---

<script setup>
import SectionTitle from './.vitepress/theme/components/SectionTitle.vue'
import ImageCard from './.vitepress/theme/components/ImageCard.vue'

const myProjects = [
  {
    title: 'VRChat Geo-Guessing Game',
    details: 'Developed with UdonSharp & VRCSDK3. Achieved 4,991+ visits with real-time multiplayer interaction.',
    icon: '/images/vr-game.jpg', 
    link: '/projects/vr-game'
  },
  {
    title: 'EM Image Denoising Framework',
    details: 'Self-supervised blind-spot learning framework supporting 8k image inference. Unified implementation of N2V/N2S algorithms.',
    icon: '/images/denoise.jpg',
    link: '/projects/ai-denoise'
  },
  {
    title: 'Micro-Frontend Architecture',
    details: 'Enterprise-level modular deployment using Vue3, featuring dynamic routing governance and RBAC implementation.',
    icon: '/images/micro-frontend.jpg',
    link: '/projects/micro-frontend'
  }
]
</script>

<SectionTitle 
  title="Selected Projects" 
  subtitle="Engineering practices from Micro-Frontends to Deep Learning Algorithms." 
/>

<ImageCard :features="myProjects" />