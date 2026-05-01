import { parseContent } from '../lib/loadContent'
import ArticlePage from '../components/ArticlePage'
import raw from '../content/for-environmentalists.md?raw'

const { meta, html } = parseContent(raw)

export default function ForEnvironmentalists() {
  return <ArticlePage meta={meta} html={html} />
}
