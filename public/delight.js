// delight.js — power-explained
// Reading progress, scroll reveals, pull-quote border draws, h1 word-wrap, console egg

(function() {
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches

  // ── Wrap opening h1 words for stagger ──────────────────────────
  const h1 = document.querySelector('.opening-h1')
  if (h1) {
    h1.innerHTML = h1.innerText
      .split('\n').map(line =>
        line.split(' ').filter(Boolean)
          .map(w => `<span class="word">${w}</span>`)
          .join(' ')
      ).join('<br/>')
  }

  // ── Reading progress bar ────────────────────────────────────────
  const bar = document.getElementById('reading-progress')
  const article = document.querySelector('.body-text[data-pagefind-body]')
  if (bar && article) {
    document.body.classList.add('is-article')
    const update = () => {
      const rect = article.getBoundingClientRect()
      const total = article.offsetHeight - window.innerHeight
      const scrolled = Math.max(0, -rect.top)
      const pct = total > 0 ? Math.min(100, (scrolled / total) * 100) : 0
      bar.style.setProperty('--progress', pct + '%')
    }
    window.addEventListener('scroll', update, { passive: true })
    update()
  }

  // ── Scroll reveal: piece items ──────────────────────────────────
  if (!reduced) {
    const pieces = document.querySelectorAll('.piece-item')
    if (pieces.length) {
      pieces.forEach(el => el.classList.add('reveal'))
      const io = new IntersectionObserver((entries) => {
        entries.forEach((e, i) => {
          if (e.isIntersecting) {
            // Stagger by DOM index
            const idx = Array.from(pieces).indexOf(e.target)
            e.target.style.animationDelay = (idx * 0.06) + 's'
            e.target.classList.add('visible')
            io.unobserve(e.target)
          }
        })
      }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' })
      pieces.forEach(el => io.observe(el))
    }

    // ── Pull quote border draw ────────────────────────────────────
    const quotes = document.querySelectorAll('.body-text blockquote, .body-text .pull')
    if (quotes.length) {
      const qio = new IntersectionObserver((entries) => {
        entries.forEach(e => {
          if (e.isIntersecting) {
            e.target.classList.add('in-view')
            qio.unobserve(e.target)
          }
        })
      }, { threshold: 0.3 })
      quotes.forEach(el => qio.observe(el))
    }
  }

  // ── Console easter egg ──────────────────────────────────────────
  if (typeof console !== 'undefined') {
    const s = [
      'font-size:1.1rem;font-family:serif;color:#a0291c;',
      'font-size:0.8rem;font-family:monospace;color:#666;',
    ]
    console.log('%cPower Explained', s[0])
    console.log('%cThe commons is not what was taken.\nIt is what people keep building, despite everything.\n\nhttps://github.com/jedelman/power-explained', s[1])
  }

})()
