import { parseContent } from '../lib/loadContent'
import ArticlePage from '../components/ArticlePage'
import raw from '../content/for-urbanists.md?raw'

const { meta, html } = parseContent(raw)

export default function ForUrbanists() {
  return <ArticlePage meta={meta} html={html} />
}
