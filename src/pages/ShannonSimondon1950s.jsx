import { parseContent } from '../lib/loadContent'
import ArticlePage from '../components/ArticlePage'
import raw from '../content/shannon-simondon1950s.md?raw'

const { meta, html } = parseContent(raw)

export default function ShannonSimondon1950s() {
  return <ArticlePage meta={meta} html={html} />
}
