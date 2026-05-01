import { parseContent } from '../lib/loadContent'
import ArticlePage from '../components/ArticlePage'
import raw from '../content/hardt-negri-gwot.md?raw'

const { meta, html } = parseContent(raw)

export default function HardtNegriGwot() {
  return <ArticlePage meta={meta} html={html} />
}
