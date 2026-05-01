import { parseContent } from '../lib/loadContent'
import ArticlePage from '../components/ArticlePage'
import raw from '../content/hardt-negri.md?raw'

const { meta, html } = parseContent(raw)

export default function HardtNegri() {
  return <ArticlePage meta={meta} html={html} />
}
