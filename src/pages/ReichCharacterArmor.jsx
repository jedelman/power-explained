import { parseContent } from '../lib/loadContent'
import ArticlePage from '../components/ArticlePage'
import raw from '../content/reich-character-armor.md?raw'

const { meta, html } = parseContent(raw)

export default function ReichCharacterArmor() {
  return <ArticlePage meta={meta} html={html} />
}
