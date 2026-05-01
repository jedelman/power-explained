import { parseContent } from '../lib/loadContent'
import ArticlePage from '../components/ArticlePage'
import raw from '../content/baudrillard.md?raw'

const { meta, html } = parseContent(raw)

export default function Baudrillard() {
  return <ArticlePage meta={meta} html={html} />
}
