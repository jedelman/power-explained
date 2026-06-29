/**
 * composePlainBody — the parallel "plain river."
 *
 * The plain book (the 5th-grade-reading-level edition) is a faithful
 * TRANSLATION of the canonical river, never a separate argument. It reads
 * the same chapter manifests (render order, separators) but substitutes each
 * gesture's `plain:` frontmatter block for its canonical body. The canonical
 * river and its byte-equivalence-locked composer (composePlateauBody.mjs) are
 * never touched.
 *
 * Contract:
 *   composePlainUnits(chapterMdPath, repoRoot?) →
 *     { units: [{ id, body, plain, sepAfter }], framing, coverage }
 *
 * - `body`  : the canonical prose (for side-by-side / provenance).
 * - `plain` : the translated prose, or null if this gesture has no `plain:`
 *             block yet. Untranslated gestures are surfaced, never invented.
 * - coverage: { total, translated } over the chapter's gestures.
 *
 * Provenance rule (CLAUDE.md): every `plain:` block is a translation of one
 * named source gesture (recorded in that gesture's `plain_meta.source`). No
 * source → it is not a translation → it does not ship.
 */
import fs from "node:fs";
import path from "node:path";
import yaml from "js-yaml";

function splitFrontmatter(text) {
  if (!text.startsWith("---\n")) throw new Error("Missing frontmatter");
  const end = text.indexOf("\n---\n", 4);
  if (end === -1) throw new Error("Unterminated frontmatter");
  return { yamlText: text.slice(4, end), body: text.slice(end + 5) };
}

let _idxCache = new Map();
function gestureIndex(repoRoot) {
  if (_idxCache.has(repoRoot)) return _idxCache.get(repoRoot);
  const dir = path.join(repoRoot, "src", "content", "gestures");
  const idx = new Map();
  if (fs.existsSync(dir)) {
    for (const f of fs.readdirSync(dir)) {
      if (!f.startsWith("G-") || !f.endsWith(".md")) continue;
      const id = f.split("-").slice(0, 3).join("-");
      idx.set(id, path.join(dir, f));
    }
  }
  _idxCache.set(repoRoot, idx);
  return idx;
}

function readGesture(repoRoot, id) {
  const fp = gestureIndex(repoRoot).get(id);
  if (!fp) return { body: "", plain: null, fm: {} };
  const text = fs.readFileSync(fp, "utf8");
  const { yamlText, body } = splitFrontmatter(text);
  const fm = yaml.load(yamlText) || {};
  const clean = body.replace(/^\n+/, "").replace(/\n+$/, "");
  const plain = typeof fm.plain === "string" ? fm.plain.trim() : null;
  return { body: clean, plain: plain || null, fm };
}

export function composePlainUnits(chapterMdPath, repoRoot = process.cwd()) {
  const absPath = path.isAbsolute(chapterMdPath)
    ? chapterMdPath
    : path.join(repoRoot, chapterMdPath);
  const text = fs.readFileSync(absPath, "utf8");
  const { yamlText, body: framingBody } = splitFrontmatter(text);
  const fm = yaml.load(yamlText) || {};
  const framing = framingBody.replace(/^\n+/, "").replace(/\n+$/, "");

  const gestureIds = Array.isArray(fm.gestures) ? fm.gestures : [];
  const separators = Array.isArray(fm.separators) ? fm.separators : [];

  const units = gestureIds.map((gid, i) => {
    const g = readGesture(repoRoot, gid);
    return {
      id: gid,
      body: g.body,
      plain: g.plain,
      sepAfter:
        i < gestureIds.length - 1 ? (separators[i] ?? "paragraph") : null,
    };
  });

  const translated = units.filter((u) => u.plain).length;
  return {
    units,
    framing,
    coverage: { total: units.length, translated },
  };
}
