import { parseContent } from '../lib/loadContent'
import ArticlePage from '../components/ArticlePage'
import raw from '../content/deleuze-guattari.md?raw'

const { meta, html } = parseContent(raw)

export default function DeleuzeGuattari() {
  return <ArticlePage meta={meta} html={html} />
}
