<template>
  <DefaultTheme.Layout>
    <template #doc-before>
      <h1 v-if="isPost" class="title">{{ pageData.title }}</h1>
      <p v-if="isPost">
        <span class="meta">发表于：{{ dateStr }}</span>
        <span class="meta">阅读量：<span id="busuanzi_value_page_pv"></span> </span>
      </p>
    </template>
    <template #doc-after>
      <!-- disqus评论组件 -->
      <!-- <Discussion v-if="!isHome" /> -->
    </template>
  </DefaultTheme.Layout>
  <Footer></Footer>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useData } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import Footer from './Footer.vue'
// import Discussion from './Discussion.vue'

const pageData = computed(() => useData().page.value)
const isPost = computed(() => !pageData.value.frontmatter.page)

// const isHome = computed(() => pageData.value.frontmatter.title === '首页')

const dateStr = computed(() => {
  if (isPost.value) {
    return new Date(+new Date(pageData.value.frontmatter.date) + 8 * 3600 * 1000)
      .toISOString()
      .replace(/T/g, ' ')
      .replace(/\.[\d]{3}Z/, '')
  } else {
    return ''
  }
})
</script>

<style scoped>
.title {
  margin-bottom: 1rem;
  font-size: 1.8rem;
  line-height: 1.5;
  padding-top: 0;
}

.meta {
  font-size: 0.8rem;
  color: #999;
  margin-right: 1rem;
}
</style>
