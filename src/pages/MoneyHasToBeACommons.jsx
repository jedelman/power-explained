import { parseContent } from '../lib/loadContent'
import ArticlePage from '../components/ArticlePage'
import raw from '../content/money-has-to-be-a-commons.md?raw'

const { meta, html } = parseContent(raw)

export default function MoneyHasToBeACommons() {
  return <ArticlePage meta={meta} html={html} />
}
