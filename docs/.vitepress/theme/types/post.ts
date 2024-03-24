export interface Frontmatter {
  title: string
  date: string
  tags?: string[]
  categories?: string[]
  description?: string
}

export interface PostData {
  frontmatter: Frontmatter
  regularPath: string
}
