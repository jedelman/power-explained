import { parseContent } from '../lib/loadContent'
import ArticlePage from '../components/ArticlePage'
import raw from '../content/env-indigenous-land-governance.md?raw'

const { meta, html } = parseContent(raw)

export default function EnvIndigenousLandGovernance() {
  return <ArticlePage meta={meta} html={html} />
}
