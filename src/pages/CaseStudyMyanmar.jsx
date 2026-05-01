import { parseContent } from '../lib/loadContent'
import ArticlePage from '../components/ArticlePage'
import raw from '../content/case-study-myanmar.md?raw'

const { meta, html } = parseContent(raw)

export default function CaseStudyMyanmar() {
  return <ArticlePage meta={meta} html={html} />
}
