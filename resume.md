<script setup lang="ts">
import { withBase } from 'vitepress'

const resumePdfUrl = withBase('/pdf/resume.pdf')
</script>

<a :href="resumePdfUrl" target="_blank" rel="noreferrer">查看我的简历 PDF</a>
