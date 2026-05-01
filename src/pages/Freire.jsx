import { parseContent } from '../lib/loadContent'
import ArticlePage from '../components/ArticlePage'
import raw from '../content/freire.md?raw'

const { meta, html } = parseContent(raw)

export default function Freire() {
  return <ArticlePage meta={meta} html={html} />
}
