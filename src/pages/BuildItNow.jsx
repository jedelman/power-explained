import { parseContent } from '../lib/loadContent'
import ArticlePage from '../components/ArticlePage'
import raw from '../content/build-it-now.md?raw'

const { meta, html } = parseContent(raw)

export default function BuildItNow() {
  return <ArticlePage meta={meta} html={html} />
}
