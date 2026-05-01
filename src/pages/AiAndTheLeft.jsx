import { parseContent } from '../lib/loadContent'
import ArticlePage from '../components/ArticlePage'
import raw from '../content/ai-and-the-left.md?raw'

const { meta, html } = parseContent(raw)

export default function AiAndTheLeft() {
  return <ArticlePage meta={meta} html={html} />
}
