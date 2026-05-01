import { parseContent } from '../lib/loadContent'
import ArticlePage from '../components/ArticlePage'
import raw from '../content/env-carbon-markets-are-enclosures.md?raw'

const { meta, html } = parseContent(raw)

export default function EnvCarbonMarketsAreEnclosures() {
  return <ArticlePage meta={meta} html={html} />
}
