// Shared markdown renderer for chapter / interlude / overture routes.
//
// One source of truth. Each chapter route imports `md` from here instead
// of redefining its own. Handles every variant the routes used to handle
// individually (h2/h3, blockquote, bold, italic in both *...* and _..._
// forms, links, section breaks, and the "chapter-coda" whole-paragraph
// italic convention).

export function md(text) {
  return text
    .replace(/^## (.+)$/gm, '<h2>$1</h2>')
    .replace(/^### (.+)$/gm, '<h3>$1</h3>')
    .replace(/^> (.+)$/gm, '<blockquote>$1</blockquote>')
    .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
    .replace(/_(.+?)_/g, '<em>$1</em>')
    .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2">$1</a>')
    .replace(/^---$/gm, '<hr class="section-break" />')
    .split(/\n\n+/)
    .map(b => {
      b = b.trim()
      if (!b) return ''
      if (b.startsWith('<h') || b.startsWith('<hr') || b.startsWith('<blockquote')) return b
      // Chapter-coda: whole-paragraph italic (paragraph that both starts
      // and ends with a single *, not **). Detected BEFORE the inline
      // italic regex so whole-paragraph italics don't get inline-em'd.
      if (b.startsWith('*') && b.endsWith('*') && !b.startsWith('**')) {
        return `<p class="chapter-coda">${b.slice(1, -1).replace(/\*(.+?)\*/g, '<em>$1</em>')}</p>`
      }
      // Inline italic: *...* anywhere in a regular paragraph.
      return `<p>${b.replace(/\*(.+?)\*/g, '<em>$1</em>').replace(/\n/g, ' ')}</p>`
    })
    .filter(Boolean)
    .join('\n')
}
