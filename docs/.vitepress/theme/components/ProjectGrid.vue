<script setup lang="ts">
import { computed, onMounted, ref } from 'vue'
import { projects } from '../projects'

const props = defineProps<{
  limit?: number
  showMore?: boolean
}>()

const withMore = props.showMore !== false
const rootEl = ref<HTMLElement>(null)

// 挂载后给祖先容器打标，让 /projects 页的内容区放宽（不依赖 :has，兼容旧内核）
onMounted(() => {
  const root = rootEl.value
  if (!root) return
  root.closest('.content-container')?.classList.add('projects-wide')
  root.closest('.VPDoc')?.classList.add('projects-wide')
})

const FILTERS = ['全部', '开源', '插件', '其它'] as const
const active = ref('全部')

const filtered = computed(() => {
  let list = projects
  if (active.value === '开源') list = list.filter((p) => p.badge === '开源')
  else if (active.value === '插件') list = list.filter((p) => p.badge === '插件' || p.badge === '早期')
  else if (active.value === '其它') list = list.filter((p) => p.badge !== '开源' && p.badge !== '插件' && p.badge !== '早期')
  if (props.limit && props.limit > 0) list = list.slice(0, props.limit)
  return list
})
</script>

<template>
  <section ref="rootEl" class="project-section">
    <div class="section-head">
      <div>
        <p class="section-eyebrow">Selected work</p>
        <h2 class="section-title">项目</h2>
        <p class="section-sub">
          从 AI 桌宠到课程工具，做能跑的东西 · 共 {{ projects.length }} 个，其中开源
          {{ projects.filter((p) => p.badge === '开源').length }} 个
        </p>
      </div>
      <a v-if="withMore" class="section-more" href="/projects">查看全部<span aria-hidden="true"> →</span></a>
    </div>

    <div class="pc-filters">
      <button
        v-for="f in FILTERS"
        :key="f"
        class="pc-filter"
        :class="{ active: active === f }"
        type="button"
        @click="active = f"
      >
        {{ f }}
      </button>
    </div>

    <div class="project-grid">
      <component
        :is="p.link ? 'a' : 'div'"
        v-for="(p, i) in filtered"
        :key="p.title"
        class="project-card"
        :class="{ 'is-plain': !p.link }"
        :style="{ '--pc-accent': p.color }"
        :href="p.link || undefined"
        :target="p.external ? '_blank' : undefined"
        :rel="p.external ? 'noopener noreferrer' : undefined"
      >
        <div class="pc-top">
          <span class="pc-no">{{ String(i + 1).padStart(2, '0') }}</span>
          <span class="pc-year">{{ p.year }}</span>
        </div>
        <span class="pc-badge" :class="{ muted: !p.link }">{{ p.badge }}</span>
        <h3 class="pc-title">
          {{ p.title }}
          <span v-if="p.external" class="pc-ext" aria-hidden="true">↗</span>
        </h3>
        <p class="pc-desc">{{ p.desc }}</p>
        <ul class="pc-tags">
          <li v-for="t in p.tags" :key="t">{{ t }}</li>
        </ul>
        <span class="pc-cta">{{ p.linkText || '查看项目' }}<span class="pc-arrow" aria-hidden="true"> →</span></span>
      </component>
    </div>

    <p v-if="filtered.length === 0" class="section-empty">这个分类下还没有项目。</p>
  </section>
</template>
