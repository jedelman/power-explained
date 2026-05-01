import { parseContent } from '../lib/loadContent'
import ArticlePage from '../components/ArticlePage'
import raw from '../content/psychedelics-theory-of-mind.md?raw'

const { meta, html } = parseContent(raw)

export default function PsychedelicsTheoryOfMind() {
  return <ArticlePage meta={meta} html={html} />
}
