import { parseContent } from '../lib/loadContent'
import ArticlePage from '../components/ArticlePage'
import raw from '../content/for-libertarians.md?raw'

const { meta, html } = parseContent(raw)

export default function ForLibertarians() {
  return <ArticlePage meta={meta} html={html} />
}
