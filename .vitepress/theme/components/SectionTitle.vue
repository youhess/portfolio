<script setup>
defineProps(['title', 'subtitle'])
</script>

<template>
  <div class="section-title-wrapper">
    <h2>{{ title }}</h2>
    <p v-if="subtitle">{{ subtitle }}</p>
  </div>
</template>

<style scoped>
.section-title-wrapper {
  text-align: center;
  margin: 80px 0 40px; /* 上下间距 */
}

h2 {
  font-size: 28px;
  font-weight: 700;
  border: none;
  margin: 0;
  color: var(--vp-c-text-1);
}

/* 加上一个小装饰横线 */
h2::after {
  content: "";
  display: block;
  width: 50px;
  height: 4px;
  background: var(--vp-c-brand-1); /* 你的主题紫色 */
  margin: 15px auto;
  border-radius: 2px;
}

p {
  font-size: 16px;
  color: var(--vp-c-text-2);
  max-width: 600px;
  margin: 0 auto;
}
</style>