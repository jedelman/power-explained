import { parseContent } from '../lib/loadContent'
import ArticlePage from '../components/ArticlePage'
import raw from '../content/the-preparation-is-underway.md?raw'

const { meta, html } = parseContent(raw)

export default function ThePreparationIsUnderway() {
  return <ArticlePage meta={meta} html={html} />
}
