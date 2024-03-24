<template>
  <h1 class="title">{{ pageData.title }}</h1>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import { useData } from 'vitepress'
const pageData = computed(() => useData().page.value)
</script>

<style scoped>
.title {
  font-weight: 600;
  font-size: 3em;
  margin-top: 0.3em;
  margin-bottom: 0.5em;
  line-height: 1.3;
}
</style>
