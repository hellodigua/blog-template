import fg from 'fast-glob'
import MarkdownIt from 'markdown-it'
import { frontmatterPlugin } from '@mdit-vue/plugin-frontmatter'
import fs from 'fs-extra'
import type { Frontmatter, PostData } from '../types'
import { formateDateString } from './resolvePage'

async function createMarkdownRender(): Promise<MarkdownIt> {
  return MarkdownIt({ html: true }).use(frontmatterPlugin, {
    // options
    grayMatterOptions: {
      excerpt: true,
      excerpt_separator: '<!-- more -->',
    },
  })
}

async function getPages(cmd: string): Promise<string[]> {
  return (
    await fg(['**.md'], {
      cwd: cmd,
      ignore: ['**/node_modules', 'README.md', 'docs/drafts', 'docs/pages', 'docs/index.md', ...[]],
    })
  ).sort()
}

export async function getPosts(root: string) {
  let pages = await getPages(root)
  const render = await createMarkdownRender()
  let posts = await Promise.all(
    pages.map(async (page) => {
      return await renderPage(render, page, root)
    })
  )
  posts.sort(compareDate)
  return posts
}

async function renderPage(render: MarkdownIt, page: string, root: string): Promise<PostData> {
  const content = await fs.readFile(root + '/' + page, 'utf-8')
  const env: any = {}
  render.render(content, env)
  // @ts-ignore
  const ft: Frontmatter = {
    ...env.frontmatter,
    // @ts-ignore
    date: formateDateString(env.frontmatter.date),
  }
  const pagePath = page.replace('docs', '').replace('.md', '.html')
  return {
    frontmatter: ft,
    regularPath: `${pagePath}`,
  }
}

const compareDate = (a: PostData, b: PostData) => {
  return a.frontmatter.date < b.frontmatter.date ? 1 : -1
}
