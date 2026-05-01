import { parseContent } from '../lib/loadContent'
import ArticlePage from '../components/ArticlePage'
import raw from '../content/the-human-was-a-story.md?raw'

const { meta, html } = parseContent(raw)

export default function TheHumanWasAStory() {
  return <ArticlePage meta={meta} html={html} />
}
