import { parseContent } from '../lib/loadContent'
import ArticlePage from '../components/ArticlePage'
import raw from '../content/the-tradition-they-buried.md?raw'

const { meta, html } = parseContent(raw)

export default function TheTraditionTheyBuried() {
  return <ArticlePage meta={meta} html={html} />
}
