import { parseContent } from '../lib/loadContent'
import ArticlePage from '../components/ArticlePage'
import raw from '../content/open-data-isnt-enough.md?raw'

const { meta, html } = parseContent(raw)

export default function OpenDataIsntEnough() {
  return <ArticlePage meta={meta} html={html} />
}
