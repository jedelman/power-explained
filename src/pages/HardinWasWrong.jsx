import { parseContent } from '../lib/loadContent'
import ArticlePage from '../components/ArticlePage'
import raw from '../content/hardin-was-wrong.md?raw'

const { meta, html } = parseContent(raw)

export default function HardinWasWrong() {
  return <ArticlePage meta={meta} html={html} />
}
