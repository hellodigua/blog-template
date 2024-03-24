<template>
  <Page :posts="posts" />
</template>

<script setup lang="ts">
import { usePosts } from '../composables'
import Page from './Page.vue'

const posts = usePosts() || []
</script>

<style scoped></style>
