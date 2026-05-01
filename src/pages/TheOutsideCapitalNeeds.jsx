import { parseContent } from '../lib/loadContent'
import ArticlePage from '../components/ArticlePage'
import raw from '../content/the-outside-capital-needs.md?raw'

const { meta, html } = parseContent(raw)

export default function TheOutsideCapitalNeeds() {
  return <ArticlePage meta={meta} html={html} />
}
