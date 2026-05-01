import { parseContent } from '../lib/loadContent'
import ArticlePage from '../components/ArticlePage'
import raw from '../content/the-party-ate-the-revolution.md?raw'

const { meta, html } = parseContent(raw)

export default function ThePartyAteTheRevolution() {
  return <ArticlePage meta={meta} html={html} />
}
