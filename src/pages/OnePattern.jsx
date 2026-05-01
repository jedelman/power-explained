import { parseContent } from '../lib/loadContent'
import ArticlePage from '../components/ArticlePage'
import raw from '../content/one-pattern.md?raw'

const { meta, html } = parseContent(raw)

export default function OnePattern() {
  return <ArticlePage meta={meta} html={html} />
}
