import { inject, InjectionKey } from 'vue'
import type { PostData } from '../../types'
import type { App } from '@vue/runtime-core'

export const postsSymbol: InjectionKey<PostData[]> = Symbol('postsSymbol')

export function usePosts(): PostData[] | undefined {
  const posts = inject(postsSymbol)
  if (!posts) {
    console.log('posts not found')
    return undefined
  }
  return posts
}

export function setPosts(app: App, posts: PostData[]) {
  return app.provide(postsSymbol, posts)
}
