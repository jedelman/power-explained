import { parseContent } from '../lib/loadContent'
import ArticlePage from '../components/ArticlePage'
import raw from '../content/for-social-justice.md?raw'

const { meta, html } = parseContent(raw)

export default function ForSocialJustice() {
  return <ArticlePage meta={meta} html={html} />
}
