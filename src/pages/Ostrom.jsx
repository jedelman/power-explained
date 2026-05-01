import { parseContent } from '../lib/loadContent'
import ArticlePage from '../components/ArticlePage'
import raw from '../content/ostrom.md?raw'

const { meta, html } = parseContent(raw)

export default function Ostrom() {
  return <ArticlePage meta={meta} html={html} />
}
