import { parseContent } from '../lib/loadContent'
import ArticlePage from '../components/ArticlePage'
import raw from '../content/care-is-the-economy.md?raw'

const { meta, html } = parseContent(raw)

export default function CareIsTheEconomy() {
  return <ArticlePage meta={meta} html={html} />
}
