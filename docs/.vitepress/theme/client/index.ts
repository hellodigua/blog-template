import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import type { EnhanceAppContext } from 'vitepress'
import { watch } from 'vue'
import Layout from './components/Layout.vue'
import Archives from './components/Archives.vue'
import Home from './components/Home.vue'
import './styles/custom.css'
import { setPosts } from './composables'
import busuanzi from './utils/busuanzi'

function setupPosts(ctx: EnhanceAppContext) {
  const posts = ctx.siteData.value.themeConfig.posts
  setPosts(ctx.app, posts)
}

export const MioTheme: Theme = {
  ...DefaultTheme,
  Layout,
  enhanceApp({ app, router, siteData }: EnhanceAppContext) {
    // 监听路由变化，并进行访问计数
    watch(
      () => router.route.path,
      () => {
        busuanzi.fetch()
      }
    )

    DefaultTheme.enhanceApp({ app, router, siteData })
    setupPosts({ app, router, siteData })
    app.component('Archives', Archives)
    app.component('Home', Home)
  },
}
