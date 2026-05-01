import { parseContent } from '../lib/loadContent'
import ArticlePage from '../components/ArticlePage'
import raw from '../content/case-study-occupy.md?raw'

const { meta, html } = parseContent(raw)

export default function CaseStudyOccupy() {
  return <ArticlePage meta={meta} html={html} />
}
