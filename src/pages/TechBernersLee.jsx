import { parseContent } from '../lib/loadContent'
import ArticlePage from '../components/ArticlePage'
import raw from '../content/tech-berners-lee.md?raw'

const { meta, html } = parseContent(raw)

export default function TechBernersLee() {
  return <ArticlePage meta={meta} html={html} />
}
