import { parseContent } from '../lib/loadContent'
import ArticlePage from '../components/ArticlePage'
import raw from '../content/nobody-had-to.md?raw'

const { meta, html } = parseContent(raw)

export default function NobodyHadTo() {
  return <ArticlePage meta={meta} html={html} />
}
