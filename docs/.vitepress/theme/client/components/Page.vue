<template>
  <div v-for="(article, index) in posts" :key="index" class="list">
    <div class="list-header">
      <div class="list-li">
        <a :href="withBase(article.regularPath)"> {{ article.frontmatter.title }}</a>
      </div>
      <time class="date">
        {{ article.frontmatter.date }}
      </time>
    </div>
    <p class="describe">
      {{ article.frontmatter.description }}
    </p>
  </div>
</template>

<script lang="ts" setup>
import { withBase } from 'vitepress'
import { type PostData } from '../../types'

const props = defineProps<{
  posts: PostData[]
}>()
</script>

<style scoped>
.list {
  border-bottom: 1px dashed var(--vp-c-divider-light);
  padding: 1rem 0 0 0;
}

.list-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.list-li {
  font-size: 1.2rem;
  font-weight: 500;
  margin: 0.1rem 0;
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans,
    Helvetica Neue, sans-serif;
}

.describe {
  font-size: 0.875rem;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
  overflow: hidden;
  color: var(--vp-c-text-2);
  margin: 0.625rem 0 1rem;
  line-height: 1.5rem;
}

.pagination {
  margin-top: 16px;
  display: flex;
  justify-content: center;
}

.link {
  display: inline-block;
  width: 28px;
  height: 28px;
  text-align: center;
  line-height: 28px;
  border: 1px var(--vp-c-divider-light) solid;
  border-right: none;
}

.link.active {
  background: var(--vp-c-text-1);
  color: var(--vp-c-text-inverse-1);
  border: 1px solid var(--vp-c-text-1) !important;
}

.link:first-child {
  border-bottom-left-radius: 3px;
  border-top-left-radius: 3px;
}

.link:last-child {
  border-bottom-right-radius: 3px;
  border-top-right-radius: 3px;
  border-right: 1px var(--vp-c-divider-light) solid;
}

@media screen and (max-width: 720px) {
  .list {
    padding: 1rem 0 0 0;
  }

  .list-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .list-li {
    font-size: 1.0625rem;
    font-weight: 400;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    overflow: hidden;
    width: 17rem;
  }

  .describe {
    font-size: 0.9375rem;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 3;
    overflow: hidden;
    margin: 0.5rem 0 1rem;
  }

  .date {
    font-size: 0.8125rem;
  }
}
</style>
