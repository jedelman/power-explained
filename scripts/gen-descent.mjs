#!/usr/bin/env node
// scripts/gen-descent.mjs
//
// Reads all chapter files in src/content/book/, extracts the plateau
// frontmatter, and writes a dashboard view to interviews/descent.md.
//
// This file is auto-generated. Never edit it by hand — the source of
// truth is the YAML frontmatter on each chapter file.
//
// Run:  node scripts/gen-descent.mjs
// Or:   npm run descent (if added to package.json scripts)

import { readFileSync, writeFileSync, readdirSync } from 'node:fs'
import { resolve, join } from 'node:path'

const ROOT = resolve(process.cwd())
const BOOK_DIR = join(ROOT, 'src/content/book')
const OUT = join(ROOT, 'interviews/descent.md')

// === minimal YAML parser ===
// We only support the shapes the plateau schema actually uses.
// Nested objects, arrays of scalars, arrays of objects, block strings (|),
// tuples (as [a, b] inline lists). Anything weirder, add support here.

function parseYAML(src) {
  const lines = src.split('\n')
  const root = {}
  parseBlock(lines, 0, 0, root)
  return root
}

function parseBlock(lines, start, indent, into) {
  let i = start
  while (i < lines.length) {
    const line = lines[i]
    if (line.trim() === '' || line.trim().startsWith('#')) { i++; continue }

    const lineIndent = line.length - line.trimStart().length
    if (lineIndent < indent) return i

    const stripped = line.slice(indent)

    // List item under a key handled by parent — we shouldn't be at a `-` here
    // because the parent's parseList consumed it. If we are, it's a malformed
    // case; just skip.
    if (stripped.startsWith('- ')) return i

    const m = stripped.match(/^([\w_-]+):\s*(.*)$/)
    if (!m) { i++; continue }
    const key = m[1]
    let rest = m[2]

    // Block scalar (|)
    if (rest === '|') {
      const [text, next] = readBlockScalar(lines, i + 1, indent + 2)
      into[key] = text
      i = next
      continue
    }

    // Inline list (tuple): [a, b]  or  [a, b, c]
    if (rest.startsWith('[') && rest.endsWith(']')) {
      const inner = rest.slice(1, -1).trim()
      if (inner === '') {
        into[key] = []
      } else {
        into[key] = inner.split(',').map(s => coerce(s.trim()))
      }
      i++
      continue
    }

    // Empty value → either a nested object or a list follows on subsequent lines
    if (rest === '') {
      // Peek next non-empty line to see if it's a list (- ) or a nested key
      let j = i + 1
      while (j < lines.length && (lines[j].trim() === '' || lines[j].trim().startsWith('#'))) j++
      if (j >= lines.length) { into[key] = null; i = j; continue }
      const nextLine = lines[j]
      const nextIndent = nextLine.length - nextLine.trimStart().length
      if (nextIndent <= indent) { into[key] = null; i = i + 1; continue }
      const nextStripped = nextLine.slice(nextIndent)
      if (nextStripped.startsWith('- ')) {
        const [arr, next] = parseList(lines, j, nextIndent)
        into[key] = arr
        i = next
      } else {
        const sub = {}
        i = parseBlock(lines, j, nextIndent, sub)
        into[key] = sub
      }
      continue
    }

    // Scalar
    into[key] = unquote(rest)
    i++
  }
  return i
}

function readBlockScalar(lines, start, indent) {
  const out = []
  let i = start
  while (i < lines.length) {
    const line = lines[i]
    if (line.trim() === '') { out.push(''); i++; continue }
    const lineIndent = line.length - line.trimStart().length
    if (lineIndent < indent) break
    out.push(line.slice(indent))
    i++
  }
  // Trim trailing blank lines
  while (out.length && out[out.length - 1] === '') out.pop()
  return [out.join('\n'), i]
}

function parseList(lines, start, indent) {
  const out = []
  let i = start
  while (i < lines.length) {
    const line = lines[i]
    if (line.trim() === '' || line.trim().startsWith('#')) { i++; continue }
    const lineIndent = line.length - line.trimStart().length
    if (lineIndent < indent) break
    const stripped = line.slice(indent)
    if (!stripped.startsWith('- ')) break
    const after = stripped.slice(2)
    // Inline object: `- key: value`
    const m = after.match(/^([\w_-]+):\s*(.*)$/)
    if (m) {
      const obj = {}
      const firstKey = m[1]
      const firstVal = m[2]
      if (firstVal === '') {
        // need to gather subsequent keys at indent+2
        const sub = {}
        i = parseBlock(lines, i + 1, indent + 2, sub)
        obj[firstKey] = null
        Object.assign(obj, sub)
        out.push(obj)
        continue
      } else if (firstVal === '|') {
        const [text, next] = readBlockScalar(lines, i + 1, indent + 4)
        obj[firstKey] = text
        i = next
      } else {
        obj[firstKey] = unquote(firstVal)
        i++
      }
      // continue parsing additional keys of this list item at indent+2
      const sub = {}
      i = parseBlock(lines, i, indent + 2, sub)
      Object.assign(obj, sub)
      out.push(obj)
    } else {
      out.push(coerce(after))
      i++
    }
  }
  return [out, i]
}

function unquote(s) {
  s = s.trim()
  if ((s.startsWith('"') && s.endsWith('"')) || (s.startsWith("'") && s.endsWith("'"))) {
    return s.slice(1, -1)
  }
  return s
}

function coerce(s) {
  s = unquote(s)
  if (/^-?\d+$/.test(s)) return parseInt(s, 10)
  if (/^-?\d+\.\d+$/.test(s)) return parseFloat(s)
  if (s === 'true') return true
  if (s === 'false') return false
  if (s === 'null') return null
  return s
}

// === extract frontmatter ===
function extractFrontmatter(src) {
  const m = src.match(/^---\n([\s\S]*?)\n---/)
  if (!m) return null
  return parseYAML(m[1])
}

// === load all chapter files ===
function loadChapters() {
  return readdirSync(BOOK_DIR)
    .filter(f => f.endsWith('.md'))
    .map(f => {
      const path = join(BOOK_DIR, f)
      const src = readFileSync(path, 'utf8')
      const fm = extractFrontmatter(src) || {}
      return { file: f, ...fm }
    })
}

// === render dashboard ===
function render(chapters) {
  const lines = []
  lines.push('# Descent — Build Dashboard')
  lines.push('')
  lines.push('*Auto-generated from chapter frontmatter. Do not edit by hand.*')
  lines.push(`*Generated: ${new Date().toISOString()}*`)
  lines.push('')
  lines.push('Source of truth: YAML frontmatter on each file in `src/content/book/`.')
  lines.push('Schema documentation: [`interviews/plateau-schema.md`](./plateau-schema.md)')
  lines.push('')
  lines.push('---')
  lines.push('')

  // Summary table
  lines.push('## Plateau summary')
  lines.push('')
  lines.push('| File | ID | Status | Zone | Capacity | T | M | N | Doors | Inbox |')
  lines.push('|------|----|--------|------|----------|---|---|---|-------|-------|')
  for (const c of chapters) {
    const id = c.plateau?.id ?? '—'
    const status = c.plateau?.status ?? '—'
    const zone = c.map?.zone ?? '—'
    const cap = c.capacities?.primary ?? '—'
    const t = c.territory?.feature ? '✓' : '·'
    const m = c.metaphor?.choice ? '✓' : '·'
    const n = c.nagual?.blind_spot_at_entry ? '✓' : '·'
    const doors = c.doors ? c.doors.length : 0
    const inbox = c.sources?.inbox?.length ? c.sources.inbox.length : '·'
    lines.push(`| ${c.file} | ${id} | ${status} | ${zone} | ${cap} | ${t} | ${m} | ${n} | ${doors} | ${inbox} |`)
  }
  lines.push('')
  lines.push('*T = territory anchored. M = metaphor defended. N = nagual angle named.*')
  lines.push('')
  lines.push('---')
  lines.push('')

  // Counts by status
  const counts = { draft: 0, 'beauty-pending': 0, offered: 0, untagged: 0 }
  for (const c of chapters) {
    const s = c.plateau?.status
    if (s && counts[s] !== undefined) counts[s]++
    else counts.untagged++
  }
  lines.push('## Status counts')
  lines.push('')
  lines.push(`- **untagged:** ${counts.untagged}  *(no plateau frontmatter yet)*`)
  lines.push(`- **draft:** ${counts.draft}  *(prose exists, plateau fields not finalized)*`)
  lines.push(`- **beauty-pending:** ${counts['beauty-pending']}  *(plateau fields done, prose not yet an offering)*`)
  lines.push(`- **offered:** ${counts.offered}  *(beauty pass passed; the plateau is an offering)*`)
  lines.push('')
  lines.push('---')
  lines.push('')

  // Per-plateau detail for plateaus that have any plateau fields
  const tagged = chapters.filter(c => c.plateau?.id)
  if (tagged.length > 0) {
    lines.push('## Plateau detail')
    lines.push('')
    for (const c of tagged) {
      lines.push(`### ${c.plateau.id} — ${c.title}`)
      lines.push('')
      lines.push(`- **File:** \`${c.file}\``)
      lines.push(`- **Status:** ${c.plateau.status}`)
      if (c.map) {
        lines.push(`- **Map:** ${c.map.zone} @ [${c.map.position?.join(', ')}]`)
        if (c.map.visible_from?.length) {
          lines.push(`- **Visible from:** ${c.map.visible_from.join(', ')}`)
        }
      }
      if (c.capacities) {
        lines.push(`- **Capacities:** ${c.capacities.primary}` +
          (c.capacities.secondary?.length ? ` (+ ${c.capacities.secondary.join(', ')})` : ''))
      }
      if (c.territory?.feature) {
        lines.push('')
        lines.push('**Territory feature:**')
        lines.push('')
        lines.push('> ' + c.territory.feature.split('\n').join('\n> '))
        if (c.territory.field_notes?.length) {
          lines.push('')
          lines.push('*Field notes:*')
          for (const f of c.territory.field_notes) lines.push(`- ${f}`)
        }
      }
      if (c.metaphor?.choice) {
        lines.push('')
        lines.push('**Metaphor:**')
        lines.push('')
        lines.push('> ' + c.metaphor.choice.split('\n').join('\n> '))
        lines.push('')
        lines.push('*Defense:*')
        lines.push('')
        lines.push('> ' + c.metaphor.defense.split('\n').join('\n> '))
      }
      if (c.nagual?.blind_spot_at_entry) {
        lines.push('')
        lines.push('**Nagual — blind spot at entry:**')
        lines.push('')
        lines.push('> ' + c.nagual.blind_spot_at_entry.split('\n').join('\n> '))
        lines.push('')
        lines.push('**Nagual — angle of approach:**')
        lines.push('')
        lines.push('> ' + c.nagual.angle_of_approach.split('\n').join('\n> '))
      }
      if (c.doors?.length) {
        lines.push('')
        lines.push('**Doors:**')
        for (const d of c.doors) {
          lines.push(`- *${d.prompt}* → ${d.to}`)
        }
      }
      if (c.beauty_check) {
        lines.push('')
        lines.push(`**Beauty check:** ${c.beauty_check.status}`)
        if (c.beauty_check.notes) {
          lines.push('')
          lines.push('> ' + c.beauty_check.notes.split('\n').join('\n> '))
        }
      }
      if (c.sources?.inbox?.length || c.sources?.conversations?.length) {
        lines.push('')
        lines.push('**Sources:**')
        if (c.sources.inbox?.length) lines.push(`- *Inbox blocked:* ${c.sources.inbox.join(', ')}`)
        if (c.sources.conversations?.length) lines.push(`- *Conversations:* ${c.sources.conversations.join(', ')}`)
      }
      if (c.notes) {
        lines.push('')
        lines.push('**Notes:**')
        lines.push('')
        lines.push('> ' + c.notes.split('\n').join('\n> '))
      }
      lines.push('')
      lines.push('---')
      lines.push('')
    }
  }

  // Untagged list
  const untagged = chapters.filter(c => !c.plateau?.id)
  if (untagged.length > 0) {
    lines.push('## Untagged chapters')
    lines.push('')
    lines.push('*These chapters have not yet been converted to plateaus.*')
    lines.push('')
    for (const c of untagged) {
      lines.push(`- \`${c.file}\` — ${c.title ?? '(no title)'}`)
    }
    lines.push('')
  }

  return lines.join('\n')
}

// === main ===
const chapters = loadChapters()
const out = render(chapters)
writeFileSync(OUT, out, 'utf8')
console.log(`wrote ${OUT}`)
console.log(`  ${chapters.length} chapters total`)
console.log(`  ${chapters.filter(c => c.plateau?.id).length} tagged as plateaus`)
