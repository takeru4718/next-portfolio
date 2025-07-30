import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

export function getSlugs(category: string) {
  const dir = path.join(process.cwd(), 'content', category)
  return fs.readdirSync(dir).map((file) => file.replace(/\.md$/, ''))
}

export function getBySlug(category: string, slug: string) {
  const fullPath = path.join(process.cwd(), 'content', category, `${slug}.md`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const { data, content } = matter(fileContents)
  return {
    frontmatter: data,
    content,
    slug,
  }
}
