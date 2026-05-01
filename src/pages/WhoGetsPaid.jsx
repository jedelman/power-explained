import { parseContent } from '../lib/loadContent'
import ArticlePage from '../components/ArticlePage'
import raw from '../content/who-gets-paid.md?raw'

const { meta, html } = parseContent(raw)

export default function WhoGetsPaid() {
  return <ArticlePage meta={meta} html={html} />
}
