<script setup lang="ts">
import { computed } from 'vue'
import { withBase } from 'vitepress'

type Props = {
  src: string
  title?: string
  height?: number | string
}

const props = withDefaults(defineProps<Props>(), {
  title: 'PDF Preview',
  height: 900
})

const pdfUrl = computed(() => withBase(props.src))
const frameHeight = computed(() =>
  typeof props.height === 'number' ? `${props.height}` : props.height
)
</script>

<template>
  <div class="pdf-preview">
    <p class="pdf-preview__actions">
      <a :href="pdfUrl" target="_blank" rel="noreferrer">Open in new tab</a>
      <a :href="pdfUrl" download>Download PDF</a>
    </p>
    <iframe
      :src="pdfUrl"
      :title="title"
      width="100%"
      :height="frameHeight"
      class="pdf-preview__frame"
    ></iframe>
  </div>
</template>

<style scoped>
.pdf-preview {
  margin: 16px 0 24px;
}

.pdf-preview__actions {
  display: flex;
  gap: 16px;
  margin: 0 0 12px;
}

.pdf-preview__frame {
  border: 1px solid var(--vp-c-divider);
  border-radius: 8px;
  background: var(--vp-c-bg-soft);
}
</style>
