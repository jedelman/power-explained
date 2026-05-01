import { parseContent } from '../lib/loadContent'
import ArticlePage from '../components/ArticlePage'
import raw from '../content/graeber.md?raw'

const { meta, html } = parseContent(raw)

export default function Graeber() {
  return <ArticlePage meta={meta} html={html} />
}
