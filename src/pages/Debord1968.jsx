import { parseContent } from '../lib/loadContent'
import ArticlePage from '../components/ArticlePage'
import raw from '../content/debord1968.md?raw'

const { meta, html } = parseContent(raw)

export default function Debord1968() {
  return <ArticlePage meta={meta} html={html} />
}
