import { parseContent } from '../lib/loadContent'
import ArticlePage from '../components/ArticlePage'
import raw from '../content/start-here.md?raw'

const { meta, html } = parseContent(raw)

export default function StartHere() {
  return <ArticlePage meta={meta} html={html} />
}
