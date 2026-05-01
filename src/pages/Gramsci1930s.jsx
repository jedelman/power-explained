import { parseContent } from '../lib/loadContent'
import ArticlePage from '../components/ArticlePage'
import raw from '../content/gramsci1930s.md?raw'

const { meta, html } = parseContent(raw)

export default function Gramsci1930s() {
  return <ArticlePage meta={meta} html={html} />
}
