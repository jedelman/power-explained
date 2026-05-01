import { parseContent } from '../lib/loadContent'
import ArticlePage from '../components/ArticlePage'
import raw from '../content/tech-raymond.md?raw'

const { meta, html } = parseContent(raw)

export default function TechRaymond() {
  return <ArticlePage meta={meta} html={html} />
}
