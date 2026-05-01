import { parseContent } from '../lib/loadContent'
import ArticlePage from '../components/ArticlePage'
import raw from '../content/for-normies.md?raw'

const { meta, html } = parseContent(raw)

export default function ForNormies() {
  return <ArticlePage meta={meta} html={html} />
}
