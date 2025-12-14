import { createContentLoader } from 'vitepress'

export default createContentLoader('posts/*.md', {
  transform(raw) {
    return raw
      .filter(page => page.url !== '/posts/')
      .map(page => ({
        title: page.frontmatter.title || '无标题',
        url: page.url,
        date: formatDate(page.frontmatter.date)
      }))
      .sort((a, b) => new Date(b.date) - new Date(a.date))
  }
})

function formatDate(date) {
  if (!date) return 'Unknown'
  const d = new Date(date)
  const year = d.getFullYear()
  const month = String(d.getMonth() + 1).padStart(2, '0')
  const day = String(d.getDate()).padStart(2, '0')
  return `${year}.${month}.${day}`
}

export { default as data } from './posts.data.js'
