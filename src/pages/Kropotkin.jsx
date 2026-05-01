import { parseContent } from '../lib/loadContent'
import ArticlePage from '../components/ArticlePage'
import raw from '../content/kropotkin.md?raw'

const { meta, html } = parseContent(raw)

export default function Kropotkin() {
  return <ArticlePage meta={meta} html={html} />
}
