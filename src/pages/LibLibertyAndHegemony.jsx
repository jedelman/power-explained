import { parseContent } from '../lib/loadContent'
import ArticlePage from '../components/ArticlePage'
import raw from '../content/lib-liberty-and-hegemony.md?raw'

const { meta, html } = parseContent(raw)

export default function LibLibertyAndHegemony() {
  return <ArticlePage meta={meta} html={html} />
}
