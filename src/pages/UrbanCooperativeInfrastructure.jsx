import { parseContent } from '../lib/loadContent'
import ArticlePage from '../components/ArticlePage'
import raw from '../content/urban-cooperative-infrastructure.md?raw'

const { meta, html } = parseContent(raw)

export default function UrbanCooperativeInfrastructure() {
  return <ArticlePage meta={meta} html={html} />
}
