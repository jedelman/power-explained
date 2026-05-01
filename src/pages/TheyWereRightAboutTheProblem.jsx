import { parseContent } from '../lib/loadContent'
import ArticlePage from '../components/ArticlePage'
import raw from '../content/they-were-right-about-the-problem.md?raw'

const { meta, html } = parseContent(raw)

export default function TheyWereRightAboutTheProblem() {
  return <ArticlePage meta={meta} html={html} />
}
