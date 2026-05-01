import { parseContent } from '../lib/loadContent'
import ArticlePage from '../components/ArticlePage'
import raw from '../content/which-women.md?raw'

const { meta, html } = parseContent(raw)

export default function WhichWomen() {
  return <ArticlePage meta={meta} html={html} />
}
