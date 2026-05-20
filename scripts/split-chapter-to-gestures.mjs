#!/usr/bin/env node
/**
 * split-chapter-to-gestures.mjs
 *
 * First-pass mechanical splitter: takes a chapter .md file, decomposes its
 * body into paragraph-as-gesture units, and writes:
 *
 *   - src/content/gestures/<P-XX>/NNN-<slug>.md  (one per paragraph)
 *   - src/content/book/<chapter>.md              (rewritten as thin plateau:
 *                                                  frontmatter + gestures + separators,
 *                                                  empty body)
 *   - for-agents/snapshots/<chapter>-pre-gestures.md (verbatim snapshot)
 *
 * Splitting rules:
 *   - The body is split on blank lines.
 *   - A line matching exactly "---" is a SECTION separator between gestures.
 *   - Every other non-empty block is one gesture.
 *
 * Provisional gesture frontmatter:
 *   - id:     G-<plateau-suffix>-NNN
 *   - plateau: P-XX
 *   - title:  derived from the first ~6 words
 *   - slug:   slugified title
 *   - tags:   minimal required set for lint: plateau, voice, status
 *   - notes:  "first-pass paragraph-split; mergers pending"
 *
 * Plateau frontmatter additions:
 *   - plateau.id: P-XX (added if missing)
 *   - plateau.status: draft (added if missing)
 *   - gestures: [G-XX-001, ...]
 *   - separators: [paragraph|section, ...]
 *
 * Usage:
 *   node scripts/split-chapter-to-gestures.mjs <chapter-slug> <plateau-id> [--dry-run]
 *   node scripts/split-chapter-to-gestures.mjs chapter-1 P-01
 *
 * Verification:
 *   After running, invoke:
 *     node scripts/compile-plateau.mjs verify <chapter-slug> for-agents/snapshots/<chapter>-pre-gestures.md
 */
import fs from "node:fs";
import path from "node:path";
import url from "node:url";
import yaml from "js-yaml";

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const REPO_ROOT = path.resolve(__dirname, "..");
const BOOK_DIR = path.join(REPO_ROOT, "src", "content", "book");
const GESTURES_ROOT = path.join(REPO_ROOT, "src", "content", "gestures");
const SNAPSHOT_DIR = path.join(REPO_ROOT, "for-agents", "snapshots");

function splitFrontmatter(text) {
  if (!text.startsWith("---\n")) throw new Error("Missing frontmatter");
  const end = text.indexOf("\n---\n", 4);
  if (end === -1) throw new Error("Unterminated frontmatter");
  return { yamlText: text.slice(4, end), body: text.slice(end + 5) };
}

function slugify(s) {
  return s
    .toLowerCase()
    .replace(/[\u2018\u2019\u201C\u201D]/g, "")  // smart quotes
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .replace(/-+/g, "-")
    .slice(0, 60);
}

function titleFromParagraph(p, fallback) {
  // strip markdown emphasis for title detection
  const stripped = p.replace(/[*_]/g, "").replace(/\s+/g, " ").trim();
  // first ~6 words
  const words = stripped.split(" ").slice(0, 6).join(" ");
  // strip trailing punctuation
  return words.replace(/[.,;:!?"']+$/, "").trim() || fallback;
}

/**
 * Parse the body into a sequence of gestures and inter-gesture separators.
 * Returns { gestures: [{ text }], separators: [string] }
 * separators.length === gestures.length - 1
 */
function parseBody(body) {
  // Normalize: strip leading/trailing blank lines so split on blank lines is clean
  const norm = body.replace(/^\n+/, "").replace(/\n+$/, "");

  // Split on \n\n+ (one or more blank lines)
  const blocks = norm.split(/\n\n+/).map(b => b.trim()).filter(b => b.length > 0);

  // Walk blocks; a block that is exactly "---" is a section separator.
  // Between two real blocks with no "---" between them, the separator is "paragraph".
  const gestures = [];
  const separators = [];
  let pendingSep = null; // null means "paragraph" if next gesture appears

  for (const b of blocks) {
    if (b === "---") {
      // section separator; must come between two real gestures
      pendingSep = "section";
      continue;
    }
    if (gestures.length > 0) {
      separators.push(pendingSep ?? "paragraph");
      pendingSep = null;
    } else {
      // first gesture; ignore any pending separator before it
      pendingSep = null;
    }
    gestures.push({ text: b });
  }

  if (gestures.length === 0) {
    throw new Error("No gestures found in body");
  }
  if (separators.length !== gestures.length - 1) {
    throw new Error(
      `Separator count mismatch: gestures=${gestures.length} separators=${separators.length}`
    );
  }
  return { gestures, separators };
}

function plateauSuffix(plateauId) {
  // P-04 -> "04"; P-OA -> "OA"; P-16b -> "16b"
  const m = /^P-(.+)$/.exec(plateauId);
  if (!m) throw new Error(`Bad plateau id: ${plateauId}`);
  return m[1];
}

function gestureFilename(idx, slug) {
  return `${String(idx).padStart(3, "0")}-${slug}.md`;
}

function writeGestureFile(plateauId, idx, slug, title, body) {
  const dir = path.join(GESTURES_ROOT, plateauId);
  fs.mkdirSync(dir, { recursive: true });
  const suf = plateauSuffix(plateauId);
  const id = `G-${suf}-${String(idx).padStart(3, "0")}`;
  const frontmatter = {
    id,
    plateau: plateauId,
    title,
    slug,
    tags: [
      `plateau/${plateauId}`,
      "voice/jason",
      "status/draft",
    ],
    notes:
      "First-pass paragraph-split (mechanical). Title and slug derived\n" +
      "from leading words; tags are minimal-lint-clean. Subdivision or\n" +
      "merging with adjacent gestures is expected on plateau-level revision.",
  };
  const yamlText = yaml.dump(frontmatter, { lineWidth: 100, noRefs: true });
  const out = `---\n${yamlText}---\n${body}\n`;
  const fp = path.join(dir, gestureFilename(idx, slug));
  fs.writeFileSync(fp, out);
  return { id, path: fp };
}

function rewriteChapterFile(chapterPath, plateauId, gestureIds, separators) {
  const text = fs.readFileSync(chapterPath, "utf8");
  const { yamlText, body } = splitFrontmatter(text);
  const fm = yaml.load(yamlText) ?? {};

  // Add plateau if missing
  if (!fm.plateau) {
    fm.plateau = { id: plateauId, status: "draft" };
  } else if (typeof fm.plateau === "object" && !fm.plateau.id) {
    fm.plateau.id = plateauId;
  }

  // Drop any existing gestures/separators (we're replacing)
  fm.gestures = gestureIds;
  fm.separators = separators;

  // Drop the original body. The composer will rebuild it from gestures.
  // (Keeping a trailing comment so future authors know where to add framing.)
  const yamlOut = yaml.dump(fm, { lineWidth: 100, noRefs: true });
  const out = `---\n${yamlOut}---\n`;
  fs.writeFileSync(chapterPath, out);
}

function snapshotChapter(chapterPath, snapshotPath) {
  fs.mkdirSync(path.dirname(snapshotPath), { recursive: true });
  fs.copyFileSync(chapterPath, snapshotPath);
}

function main() {
  const args = process.argv.slice(2);
  const dryRun = args.includes("--dry-run");
  const positional = args.filter(a => !a.startsWith("--"));
  const [chapterSlug, plateauId] = positional;
  if (!chapterSlug || !plateauId) {
    console.error("Usage: split-chapter-to-gestures.mjs <chapter-slug> <plateau-id> [--dry-run]");
    process.exit(2);
  }

  const chapterPath = path.join(BOOK_DIR, chapterSlug + ".md");
  if (!fs.existsSync(chapterPath)) {
    console.error(`Chapter file not found: ${chapterPath}`);
    process.exit(2);
  }

  // Safety: refuse to split a chapter that already has gestures (already migrated)
  const text = fs.readFileSync(chapterPath, "utf8");
  const { yamlText, body } = splitFrontmatter(text);
  const fm = yaml.load(yamlText) ?? {};
  if (Array.isArray(fm.gestures) && fm.gestures.length > 0) {
    console.error(`Chapter ${chapterSlug} already has ${fm.gestures.length} gestures — refusing to overwrite.`);
    process.exit(2);
  }

  const { gestures, separators } = parseBody(body);

  console.log(`${chapterSlug} → ${plateauId}: ${gestures.length} gestures, ${separators.length} separators`);

  if (dryRun) {
    gestures.forEach((g, i) => {
      const t = titleFromParagraph(g.text, `gesture-${i + 1}`);
      console.log(`  ${String(i + 1).padStart(3, "0")} [${t}] ${g.text.slice(0, 70).replace(/\n/g, " ")}...`);
    });
    return;
  }

  // Snapshot pre-refactor
  const snapPath = path.join(SNAPSHOT_DIR, `${chapterSlug}-pre-gestures.md`);
  snapshotChapter(chapterPath, snapPath);
  console.log(`  snapshot → ${path.relative(REPO_ROOT, snapPath)}`);

  // Refuse to overwrite an existing gesture dir for this plateau (prevent silent clobber)
  const gestureDir = path.join(GESTURES_ROOT, plateauId);
  if (fs.existsSync(gestureDir) && fs.readdirSync(gestureDir).some(f => f.endsWith(".md"))) {
    console.error(`Gesture dir already non-empty: ${gestureDir} — refusing to clobber.`);
    process.exit(2);
  }

  const gestureIds = [];
  gestures.forEach((g, i) => {
    const idx = i + 1;
    const title = titleFromParagraph(g.text, `gesture-${idx}`);
    const slug = slugify(title) || `gesture-${idx}`;
    const { id } = writeGestureFile(plateauId, idx, slug, title, g.text);
    gestureIds.push(id);
  });

  rewriteChapterFile(chapterPath, plateauId, gestureIds, separators);
  console.log(`  wrote ${gestureIds.length} gesture files to src/content/gestures/${plateauId}/`);
  console.log(`  rewrote ${chapterSlug}.md as thin plateau (${gestureIds.length}-gesture manifest)`);
}

main();
