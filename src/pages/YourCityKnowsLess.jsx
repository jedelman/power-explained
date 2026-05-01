import { parseContent } from '../lib/loadContent'
import ArticlePage from '../components/ArticlePage'
import raw from '../content/your-city-knows-less.md?raw'

const { meta, html } = parseContent(raw)

export default function YourCityKnowsLess() {
  return <ArticlePage meta={meta} html={html} />
}
