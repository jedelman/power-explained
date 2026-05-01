import { parseContent } from '../lib/loadContent'
import ArticlePage from '../components/ArticlePage'
import raw from '../content/case-study-india.md?raw'

const { meta, html } = parseContent(raw)

export default function CaseStudyIndia() {
  return <ArticlePage meta={meta} html={html} />
}
