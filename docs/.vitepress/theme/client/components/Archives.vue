<template>
  <div style="padding-top: 10px">
    <div v-for="articleSet in filteredPosts">
      <div class="year">
        {{ articleSet.year }}
      </div>
      <a v-for="(article, index) in articleSet.data" :key="index" :href="withBase(article.regularPath)" class="article">
        <div class="titleDiv">
          <div class="title-o"></div>
          {{ article.frontmatter.title }}
        </div>
        <div class="date">{{ article.frontmatter.date.slice(5) }}</div>
      </a>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { usePosts } from '../composables'
import { getPostsByYear } from '../utils'
import { computed } from 'vue'
import { withBase } from 'vitepress'

const posts = usePosts()
const filteredPosts = computed(() => {
  return getPostsByYear(posts)
})
</script>

<style scoped>
.year {
  padding: 16px 0 8px 0;
  font-size: 1.5rem;
  font-weight: 600;
  font-family: var(--date-font-family);
}
</style>
