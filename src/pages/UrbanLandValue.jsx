import { parseContent } from '../lib/loadContent'
import ArticlePage from '../components/ArticlePage'
import raw from '../content/urban-land-value.md?raw'

const { meta, html } = parseContent(raw)

export default function UrbanLandValue() {
  return <ArticlePage meta={meta} html={html} />
}
