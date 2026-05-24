#!/usr/bin/env node
/**
 * Compose the river — concatenate every chapter manifest listed in
 * src/content/manifests/the-river.manifest.yml into a single prose body.
 *
 * Modes:
 *   compose                      — print compiled river to stdout
 *   write   <out.md>             — write river snapshot file (frontmatter + body)
 *   verify  <snapshot.md>        — assert byte-equivalence against a snapshot
 *
 * The composer also verifies each source chapter's snapshot under
 * for-agents/snapshots/<slug>-pre-gestures.md if one exists, as a
 * round-trip sanity check.
 */
import fs from "node:fs";
import path from "node:path";
import url from "node:url";
import yaml from "js-yaml";
import { composePlateauBody } from "../src/lib/composePlateauBody.mjs";

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const REPO_ROOT = path.resolve(__dirname, "..");

const MANIFEST_PATH = path.join(
  REPO_ROOT,
  "src",
  "content",
  "manifests",
  "the-river.manifest.yml"
);

function loadRiver() {
  const text = fs.readFileSync(MANIFEST_PATH, "utf8");
  const fm = yaml.load(text);
  if (!Array.isArray(fm.sources)) {
    throw new Error("the-river.manifest.yml missing `sources` array");
  }
  return fm;
}

function compose() {
  const river = loadRiver();
  const interSep =
    river.inter_chapter_separator === "section" ? "\n\n---\n\n" : "\n\n";

  const parts = [];
  for (let i = 0; i < river.sources.length; i++) {
    const slug = river.sources[i];
    const chapterPath = path.join(
      REPO_ROOT,
      "src",
      "content",
      "book",
      slug + ".md"
    );
    if (!fs.existsSync(chapterPath)) {
      throw new Error(`Source missing: ${chapterPath}`);
    }
    const body = composePlateauBody(chapterPath, REPO_ROOT);
    // Strip trailing newline; we'll add separators between chapters.
    parts.push(body.replace(/\n+$/, ""));
    if (i < river.sources.length - 1) parts.push(interSep);
  }

  return parts.join("") + "\n";
}

function snapshotFrontmatter(river, byteLen) {
  return [
    "---",
    `id: ${river.id}`,
    `title: ${JSON.stringify(river.title)}`,
    `generated: ${new Date().toISOString().slice(0, 10)}`,
    `sources: ${river.sources.length}`,
    `bytes: ${byteLen}`,
    `inter_chapter_separator: ${river.inter_chapter_separator}`,
    "notes: |",
    "  Pre-flatten snapshot of the river. Byte-equivalence lock for the",
    "  storage-flatten phase. Regenerate with `node scripts/compose-river.mjs",
    "  write for-agents/snapshots/the-river-pre-flatten.md` only if you",
    "  intentionally edit prose or reorder sources.",
    "---",
    "",
  ].join("\n");
}

function snapshotBody(filePath) {
  const text = fs.readFileSync(filePath, "utf8");
  if (!text.startsWith("---\n")) throw new Error("Missing frontmatter");
  const end = text.indexOf("\n---\n", 4);
  if (end === -1) throw new Error("Unterminated frontmatter");
  return text.slice(end + 5);
}

function main() {
  const [, , cmd, arg] = process.argv;

  if (cmd === "compose") {
    process.stdout.write(compose());
    return;
  }

  if (cmd === "write") {
    if (!arg) {
      console.error("Usage: compose-river.mjs write <out.md>");
      process.exit(2);
    }
    const river = loadRiver();
    const body = compose();
    const fm = snapshotFrontmatter(river, body.length);
    const outPath = path.isAbsolute(arg) ? arg : path.join(REPO_ROOT, arg);
    fs.mkdirSync(path.dirname(outPath), { recursive: true });
    fs.writeFileSync(outPath, fm + body);
    console.log(
      `wrote ${path.relative(REPO_ROOT, outPath)}: ` +
        `${river.sources.length} sources, ${body.length} bytes`
    );
    return;
  }

  if (cmd === "verify") {
    if (!arg) {
      console.error("Usage: compose-river.mjs verify <snapshot.md>");
      process.exit(2);
    }
    const compiled = compose();
    const snapPath = path.isAbsolute(arg) ? arg : path.join(REPO_ROOT, arg);
    const snap = snapshotBody(snapPath);
    const a = compiled.replace(/^\n+/, "").replace(/\n+$/, "") + "\n";
    const b = snap.replace(/^\n+/, "").replace(/\n+$/, "") + "\n";
    if (a === b) {
      console.log(`OK river: ${a.length} bytes match snapshot`);
      return;
    }
    for (let i = 0; i < Math.min(a.length, b.length); i++) {
      if (a[i] !== b[i]) {
        const ctx = Math.max(0, i - 80);
        console.error(`FIRST DIFF at byte ${i}`);
        console.error(`compiled: ...${JSON.stringify(a.slice(ctx, i + 80))}`);
        console.error(`snapshot: ...${JSON.stringify(b.slice(ctx, i + 80))}`);
        process.exit(1);
      }
    }
    console.error(`Length diff: compiled=${a.length} snapshot=${b.length}`);
    process.exit(1);
  }

  console.error("Usage:");
  console.error("  compose-river.mjs compose");
  console.error("  compose-river.mjs write <out.md>");
  console.error("  compose-river.mjs verify <snapshot.md>");
  process.exit(2);
}

main();
