# Contributing to Power Explained

This document is for anyone — human or agent — opening a PR. Read it before touching anything.

---

## The non-negotiables

**Read CLAUDE.md first.** The anti-hallucination and anti-slop rules there are not suggestions. Every specific claim — named person, date, quote, statistic, organization — requires verification before commit. If you can't verify it, cut it or mark it `<!-- VERIFY: ... -->`.

**The voice is declarative, accessible, eighth-grade reading level.** No jargon without definition. No hedging where a direct claim is warranted. No marketing language. Read three existing pieces before writing one.

**All analytical claims must be confirmed by Jason before merge.** Don't surprise him with new theoretical arguments in a PR. Draft them, describe them in the PR description, wait.

---

## File structure

Every page is a self-contained HTML file. No build step. No framework. No dependencies beyond `style.css` and Google Fonts.

```
power-explained/
├── style.css          ← shared design system, touch with care
├── index.html         ← homepage — must stay current with all new pieces
├── contents.html      ← full content index by series
├── [article].html     ← one file per piece
└── TASKS.md           ← running work queue
```

All links between pages use **relative paths** (`href="shannon.html"`, not `/shannon.html` or absolute URLs).

---

## HTML structure for a new piece

Every article follows this skeleton:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>[Piece Title] — Power Explained</title>
  <meta name="description" content="[One sentence. What the piece argues.]" />
  <link rel="stylesheet" href="style.css" />
  <style>
    /* Page-specific styles only. Base styles live in style.css. */
    /* Use CSS variables from style.css — never hardcode colors or fonts. */
  </style>
</head>
<body>

  <header>
    <div class="inner">
      <a href="index.html" class="site-name">Power Explained</a>
      <span style="font-family:var(--mono);font-size:0.6rem;letter-spacing:0.1em;text-transform:uppercase;color:rgba(var(--ink-rgb),0.4);">[Series Name]</span>
      <a href="contents.html" style="font-family:var(--mono);font-size:0.6rem;letter-spacing:0.1em;text-transform:uppercase;color:rgba(var(--ink-rgb),0.45);text-decoration:none;" ...>All Content</a>
    </div>
  </header>

  <div class="hero">
    <div class="hero-inner">
      <span class="hero-eyebrow">[Series Name — Thinker/Topic — Source if applicable]</span>
      <h1>[Title]</h1>
      <p class="hero-dek">[Deck: 2-3 sentences. The argument, not the topic.]</p>
      <!-- hero-bio optional: use for thinker profiles -->
    </div>
  </div>

  <main class="article-wrap">

    <nav class="contents-nav" aria-label="Sections">
      <span class="contents-label">What's in this piece</span>
      <ol>
        <li><a href="#section-id"><span class="contents-num">01</span>Section title</a></li>
        <!-- ... -->
      </ol>
    </nav>

    <!-- Sections: -->
    <span id="section-id" class="section-anchor"></span>
    <div class="section-kicker"><span class="section-num">01</span><div class="section-rule"></div></div>
    <h2>Section title</h2>
    <p>Body copy...</p>

    <!-- Optional components: .pull, .callout, .versus — see below -->

    <div class="next-reads">
      <span class="next-reads-label">Read next</span>
      <div class="next-reads-grid">
        <a href="[piece].html" class="next-read">
          <span class="next-read-cat">[Series label]</span>
          <span class="next-read-title">[Title]</span>
        </a>
        <!-- 2 links, same series or logical continuation -->
      </div>
    </div>

    <div class="footnotes">
      <span class="footnotes-label">Notes</span>
      <ol class="fn-list">
        <li id="fn1"><span class="fn-num">1</span> [Full citation + contextual note. Not just a URL.]</li>
      </ol>
    </div>

  </main>

</body>
</html>
```

---

## Design tokens — use these, don't invent new ones

All defined in `style.css`. Dark mode handled automatically via `prefers-color-scheme`.

| Token | Value (light) | Use |
|---|---|---|
| `--ink` | `#1a1714` | Body text |
| `--paper` | `#f2ece0` | Background |
| `--paper-mid` | `#e8dfc8` | Hover states, callout backgrounds |
| `--red` | `#a0291c` | Accent, labels, footnote numbers |
| `--display` | Cormorant Garamond | Headlines, pull quotes, hero text |
| `--body` | Lora | Body copy |
| `--mono` | DM Mono | Labels, eyebrows, numbers, metadata |
| `--max` | `680px` | Max content width |
| `--gutter` | `clamp(1.5rem, 5vw, 4rem)` | Horizontal padding |

---

## In-article components

**Pull quote** — for the sharpest claim in the section:
```html
<p class="pull">The commons isn't what's left after enclosure. <strong>It's what enclosure feeds on.</strong></p>
```

**Callout box** — for definitions, evidence blocks, or asides:
```html
<div class="callout">
  <span class="callout-label">What this means</span>
  <p>...</p>
</div>
```

**Versus grid** — for direct comparisons:
```html
<div class="versus">
  <div class="versus-side false">
    <span class="versus-label">The story</span>
    <p class="versus-claim">Markets allocate resources efficiently.</p>
    <p class="versus-note">This is what the textbook says.</p>
  </div>
  <div class="versus-side">
    <span class="versus-label red">What actually happens</span>
    <p class="versus-claim">Markets allocate to whoever already has.</p>
    <p class="versus-note">This is what the evidence shows.</p>
  </div>
</div>
```

---

## Footnotes

Footnotes are annotation, not just citation. The goal is Wikipedia-level link density with notes that explain what the source actually says — including where it's been misread or oversimplified.

Inline reference:
```html
<sup><a href="#fn1" id="ref1">1</a></sup>
```

Footnote entry:
```html
<li id="fn1"><span class="fn-num">1</span> Author, <em>Title</em> (Year). [What the source actually argues, not just the fact it exists. Flag if commonly misread.] <a href="[url]">↗</a></li>
```

---

## Adding a new piece to the index

Every new piece requires updates to **two files in the same commit**:

### 1. `index.html`

Add a card to the appropriate series section. If it's a new series, add a new `overview-card` block. If it's a piece within an existing series, update the piece count in the matching `overview-card-count` span.

The homepage does not list every piece individually — it lists series and featured entry points. A new piece within an existing series updates the count; a new series gets a new card.

### 2. `contents.html`

Add the piece to the correct series section in the full content index. Format:

```html
<li>
  <a href="[piece].html" class="toc-link">
    <span class="toc-label">[Series label]</span>
    <span class="toc-title">[Piece title]</span>
    <span class="toc-desc">[One sentence. The argument.]</span>
  </a>
</li>
```

Never commit a new piece without updating both files.

---

## Adding a new series

A new series requires:

1. A new `overview-card` block in `index.html`
2. A new anchored section in `contents.html` (e.g., `<section id="series-vi">`)
3. A clear rationale in the PR description for why it's a series and not a standalone piece or an addition to an existing series

Series are not collections of loosely related pieces. Each series has a single argument that runs across all its pieces. Name that argument in the PR description before the pieces exist.

---

## Thinker profiles

Thinker profiles follow the same HTML skeleton as articles, with two additions:

- `hero-bio` block inside `.hero-inner`: dates and one-sentence identification (see `shannon.html`, `kropotkin.html`)
- `hero::before` watermark: the thinker's last name in large ghosted type

The intellectual arc through the thinkers section is complete (Kropotkin → Gramsci → Ostrom → Graeber → D&G → Hardt & Negri). New thinker profiles should have a clear argument for where they slot into or extend that arc. Simondon and Stiegler are on the list.

---

## PR description format

Every PR should include:

1. **What this adds** — one paragraph, the argument of the new content
2. **Where it slots** — series, position, relationship to existing pieces
3. **Claims flagged for Jason's review** — any analytical move you're not certain about
4. **Verification status** — what was checked, what still needs checking
5. **index.html and contents.html updated** — confirm both are in the commit

---

## What not to do

- Don't add new fonts, colors, or spacing values. The design system is closed.
- Don't introduce JavaScript unless Jason specifically asked for it.
- Don't hedge the framework's core claims to seem more palatable.
- Don't write a piece that could have been a paragraph in an existing piece.
- Don't commit placeholder content. Use `<!-- TODO: ... -->` and flag it.
- Don't invent connections between thinkers that haven't been made in the existing pieces.
