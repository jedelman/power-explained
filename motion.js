/**
 * motion.js — Power Explained
 * Adds a reduced-motion toggle to every page header.
 * Persists preference via localStorage.
 * Works alongside the CSS prefers-reduced-motion media query.
 */

(function () {
  const KEY = 'pe-reduced-motion';
  const CLS = 'no-motion';

  // Apply preference immediately on load (before paint)
  if (localStorage.getItem(KEY) === '1') {
    document.documentElement.classList.add(CLS);
  }

  document.addEventListener('DOMContentLoaded', function () {
    const inner = document.querySelector('header .inner');
    if (!inner) return;

    const reduced = document.documentElement.classList.contains(CLS);

    const btn = document.createElement('button');
    btn.id = 'motion-toggle';
    btn.setAttribute('aria-label', reduced ? 'Enable animations' : 'Reduce motion');
    btn.setAttribute('title',      reduced ? 'Enable animations' : 'Reduce motion');
    btn.textContent = reduced ? 'motion: off' : 'motion: on';

    btn.addEventListener('click', function () {
      const isReduced = document.documentElement.classList.toggle(CLS);
      localStorage.setItem(KEY, isReduced ? '1' : '0');
      btn.textContent = isReduced ? 'motion: off' : 'motion: on';
      btn.setAttribute('aria-label', isReduced ? 'Enable animations' : 'Reduce motion');
      btn.setAttribute('title',      isReduced ? 'Enable animations' : 'Reduce motion');
    });

    inner.appendChild(btn);
  });
})();
