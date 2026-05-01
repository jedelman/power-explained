import { parseContent } from '../lib/loadContent'
import ArticlePage from '../components/ArticlePage'
import raw from '../content/mutual-aid-isnt-charity.md?raw'

const { meta, html } = parseContent(raw)

export default function MutualAidIsntCharity() {
  return <ArticlePage meta={meta} html={html} />
}
