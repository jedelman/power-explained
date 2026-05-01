import { parseContent } from '../lib/loadContent'
import ArticlePage from '../components/ArticlePage'
import raw from '../content/urban-capture.md?raw'

const { meta, html } = parseContent(raw)

export default function UrbanCapture() {
  return <ArticlePage meta={meta} html={html} />
}
