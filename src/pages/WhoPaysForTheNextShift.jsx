import { parseContent } from '../lib/loadContent'
import ArticlePage from '../components/ArticlePage'
import raw from '../content/who-pays-for-the-next-shift.md?raw'

const { meta, html } = parseContent(raw)

export default function WhoPaysForTheNextShift() {
  return <ArticlePage meta={meta} html={html} />
}
