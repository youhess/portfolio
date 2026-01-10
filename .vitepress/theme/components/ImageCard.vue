
<script setup>
defineProps({
  features: {
    type: Array,
    required: true
  }
})
</script>

<template>
  <div class="image-card-container">
    <div v-for="(item, index) in features" :key="index" class="card">
      <!-- 上半部分：图片区域 -->
      <div class="card-image">
        <img :src="item.icon.src || item.icon" :alt="item.title" />
      </div>
      
      <!-- 下半部分：文字区域 -->
      <div class="card-content">
        <h3>{{ item.title }}</h3>
        <p>{{ item.details }}</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.image-card-container {
  display: grid;
  /* 自动适应宽度，最小 300px */
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 24px;
  margin: 40px auto;
  max-width: 1152px;
  padding: 0 24px;
}

.card {
  background-color: var(--vp-c-bg-soft);
  border: 1px solid var(--vp-c-bg-soft);
  border-radius: 12px;
  overflow: hidden; /* 确保图片圆角不溢出 */
  transition: all 0.3s ease;
}

.card:hover {
  border-color: var(--vp-c-brand-1);
  transform: translateY(-4px);
  box-shadow: 0 4px 12px rgba(0,0,0,0.1);
}

/* 图片容器：固定高度，或者比例 */
.card-image {
  height: 160px; /* 你可以调整这里的高度 */
  width: 100%;
  background-color: var(--vp-c-bg-alt);
  overflow: hidden;
}

.card-image img {
  width: 100%;
  height: 100%;
  object-fit: cover; /* 关键：让图片填满容器且不变形 */
  transition: transform 0.5s;
}

.card:hover .card-image img {
  transform: scale(1.05);
}

.card-content {
  padding: 20px;
}

.card-content h3 {
  margin: 0;
  font-size: 18px;
  font-weight: 600;
  color: var(--vp-c-text-1);
}

.card-content p {
  margin-top: 8px;
  margin-bottom: 0;
  font-size: 14px;
  color: var(--vp-c-text-2);
  line-height: 1.5;
}
</style>
