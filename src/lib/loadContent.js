/**
 * Parses a raw .md string (with frontmatter) into { meta, html }.
 */
export function parseContent(raw) {
  const match = raw.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/m)
  if (!match) return { meta: {}, html: raw }

  const meta = {}
  match[1].split('\n').forEach(line => {
    const colonIdx = line.indexOf(': ')
    if (colonIdx === -1) return
    const key = line.slice(0, colonIdx).trim()
    const val = line.slice(colonIdx + 2).trim().replace(/^"|"$/g, '')
    meta[key] = val === 'true' ? true : val === 'false' ? false : val
  })

  return { meta, html: markdownToHtml(match[2].trim()) }
}

function markdownToHtml(md) {
  return md
    .replace(/^### (.+)$/gm, '<h3>$1</h3>')
    .replace(/^## (.+)$/gm,  '<h2>$1</h2>')
    .replace(/^# (.+)$/gm,   '<h1>$1</h1>')
    .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
    .replace(/_(.+?)_/g, '<em>$1</em>')
    .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a class="xl" href="$2">$1</a>')
    // Blockquotes with bold label → callout
    .replace(/^> \*\*(.+?)\*\*\n((?:^> .*\n?)*)/gm, (_, label, body) =>
      `<div class="callout"><span class="callout-label">${label}</span><p>${
        body.replace(/^> /gm, '').trim()
      }</p></div>\n`
    )
    // Plain blockquotes → pull
    .replace(/((?:^> .+\n?)+)/gm, match =>
      `<div class="pull">${match.replace(/^> /gm, '').trim()}</div>\n`
    )
    // Lists
    .replace(/((?:^- .+\n?)+)/gm, match =>
      '<ul>' + match.replace(/^- (.+)$/gm, '<li>$1</li>') + '</ul>\n'
    )
    // Paragraphs
    .split(/\n\n+/)
    .map(block => {
      block = block.trim()
      if (!block) return ''
      if (/^<[hud]|^<div|^<ul|^<ol/.test(block)) return block
      return `<p>${block.replace(/\n/g, ' ')}</p>`
    })
    .filter(Boolean)
    .join('\n')
}
