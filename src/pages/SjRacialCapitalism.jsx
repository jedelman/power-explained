import { parseContent } from '../lib/loadContent'
import ArticlePage from '../components/ArticlePage'
import raw from '../content/sj-racial-capitalism.md?raw'

const { meta, html } = parseContent(raw)

export default function SjRacialCapitalism() {
  return <ArticlePage meta={meta} html={html} />
}
