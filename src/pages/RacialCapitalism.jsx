import { parseContent } from '../lib/loadContent'
import ArticlePage from '../components/ArticlePage'
import raw from '../content/racial-capitalism.md?raw'

const { meta, html } = parseContent(raw)

export default function RacialCapitalism() {
  return <ArticlePage meta={meta} html={html} />
}
