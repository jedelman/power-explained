import { parseContent } from '../lib/loadContent'
import ArticlePage from '../components/ArticlePage'
import raw from '../content/two-ways-to-fix-a-pothole.md?raw'

const { meta, html } = parseContent(raw)

export default function TwoWaysToFixAPothole() {
  return <ArticlePage meta={meta} html={html} />
}
