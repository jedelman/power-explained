import { parseContent } from '../lib/loadContent'
import ArticlePage from '../components/ArticlePage'
import raw from '../content/simondon.md?raw'

const { meta, html } = parseContent(raw)

export default function Simondon() {
  return <ArticlePage meta={meta} html={html} />
}
