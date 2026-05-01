import { parseContent } from '../lib/loadContent'
import ArticlePage from '../components/ArticlePage'
import raw from '../content/falling-through-the-gap.md?raw'

const { meta, html } = parseContent(raw)

export default function FallingThroughTheGap() {
  return <ArticlePage meta={meta} html={html} />
}
