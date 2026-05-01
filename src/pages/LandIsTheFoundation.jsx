import { parseContent } from '../lib/loadContent'
import ArticlePage from '../components/ArticlePage'
import raw from '../content/land-is-the-foundation.md?raw'

const { meta, html } = parseContent(raw)

export default function LandIsTheFoundation() {
  return <ArticlePage meta={meta} html={html} />
}
