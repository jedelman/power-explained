import { parseContent } from '../lib/loadContent'
import ArticlePage from '../components/ArticlePage'
import raw from '../content/godel.md?raw'

const { meta, html } = parseContent(raw)

export default function Godel() {
  return <ArticlePage meta={meta} html={html} />
}
