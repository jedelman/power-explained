import { parseContent } from '../lib/loadContent'
import ArticlePage from '../components/ArticlePage'
import raw from '../content/tech-shannon.md?raw'

const { meta, html } = parseContent(raw)

export default function TechShannon() {
  return <ArticlePage meta={meta} html={html} />
}
