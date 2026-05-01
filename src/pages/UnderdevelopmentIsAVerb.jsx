import { parseContent } from '../lib/loadContent'
import ArticlePage from '../components/ArticlePage'
import raw from '../content/underdevelopment-is-a-verb.md?raw'

const { meta, html } = parseContent(raw)

export default function UnderdevelopmentIsAVerb() {
  return <ArticlePage meta={meta} html={html} />
}
