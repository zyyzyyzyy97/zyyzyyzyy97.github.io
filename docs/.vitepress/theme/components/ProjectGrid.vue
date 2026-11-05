<script setup lang="ts">
import { projects } from '../projects'

const props = defineProps<{
  limit?: number
  showMore?: boolean
}>()

const list = props.limit && props.limit > 0 ? projects.slice(0, props.limit) : projects
const withMore = props.showMore !== false
</script>

<template>
  <section class="project-section">
    <div class="section-head">
      <div>
        <p class="section-eyebrow">Selected work</p>
        <h2 class="section-title">项目</h2>
        <p class="section-sub">做过的小工具、课程作业与网站，持续更新。</p>
      </div>
      <a v-if="withMore" class="section-more" href="/projects">查看全部<span aria-hidden="true"> →</span></a>
    </div>

    <div class="project-grid">
      <a
        v-for="(p, i) in list"
        :key="p.title"
        class="project-card"
        :style="{ '--pc-accent': p.color }"
        :href="p.link || '/projects'"
        :target="p.external ? '_blank' : '_self'"
        :rel="p.external ? 'noopener noreferrer' : undefined"
      >
        <div class="pc-top">
          <span class="pc-no">{{ String(i + 1).padStart(2, '0') }}</span>
          <span class="pc-year">{{ p.year }}</span>
        </div>
        <div class="pc-badge">{{ p.badge }}</div>
        <h3 class="pc-title">{{ p.title }}</h3>
        <p class="pc-desc">{{ p.desc }}</p>
        <ul class="pc-tags">
          <li v-for="t in p.tags" :key="t">{{ t }}</li>
        </ul>
        <span class="pc-cta">{{ p.linkText || '查看项目' }}<span class="pc-arrow" aria-hidden="true"> →</span></span>
      </a>
    </div>

    <p v-if="list.length === 0" class="section-empty">还没有项目，去 projects.ts 里加一条吧。</p>
  </section>
</template>
