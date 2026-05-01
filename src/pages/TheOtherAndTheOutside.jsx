import { parseContent } from '../lib/loadContent'
import ArticlePage from '../components/ArticlePage'
import raw from '../content/the-other-and-the-outside.md?raw'

const { meta, html } = parseContent(raw)

export default function TheOtherAndTheOutside() {
  return <ArticlePage meta={meta} html={html} />
}
