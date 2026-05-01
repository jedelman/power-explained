import { parseContent } from '../lib/loadContent'
import ArticlePage from '../components/ArticlePage'
import raw from '../content/who-gets-to-die.md?raw'

const { meta, html } = parseContent(raw)

export default function WhoGetsToDie() {
  return <ArticlePage meta={meta} html={html} />
}
