<template>
  <div class="footer">
    <p>
      Copyright © 2015 - {{ currentYear }} YourName | 访问统计：<span
        id="busuanzi_value_site_pv"
      ></span>
    </p>
  </div>
</template>
<script setup lang="ts">
const currentYear = new Date().getFullYear();
</script>
<style lang="scss" scoped>
.footer {
  margin: 20px auto;
  color: #666;
  p {
    text-align: center;
    font-size: 0.8rem;
  }
}
</style>
