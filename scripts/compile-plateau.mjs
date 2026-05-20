#!/usr/bin/env node
/**
 * Compile a plateau (chapter) from its gesture manifest.
 *
 * Reads:
 *   src/content/book/<plateau>.md  — frontmatter with `gestures:` list
 *   src/content/gestures/<P-NN>/*.md — gesture files
 *
 * Writes (or compares):
 *   compiled body = concatenation of gesture bodies, separated per chapter
 *                   manifest's `separators:` block (default "\n\n",
 *                   override "section" for "\n\n---\n\n").
 *
 * Modes:
 *   compile <chapter-slug>           — print compiled body to stdout
 *   verify  <chapter-slug> <snapshot> — verify byte-equivalence vs snapshot
 *
 * The plateau frontmatter declares gesture order and any section breaks.
 *
 * Why Node: matches the existing Astro toolchain (no Python in package.json).
 */
import fs from "node:fs";
import path from "node:path";
import url from "node:url";

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const REPO_ROOT = path.resolve(__dirname, "..");

function parseFrontmatter(text) {
  // Returns { yaml: rawYamlString, body: string }
  if (!text.startsWith("---\n")) {
    throw new Error("Missing frontmatter");
  }
  const end = text.indexOf("\n---\n", 4);
  if (end === -1) throw new Error("Unterminated frontmatter");
  const yaml = text.slice(4, end);
  const body = text.slice(end + 5);
  return { yaml, body };
}

function extractTopLevelList(yaml, key) {
  // Find a top-level (column 0) `key:` line, then read the indented list
  // that follows until indent drops below the list's indent.
  const lines = yaml.split("\n");
  let start = -1;
  for (let i = 0; i < lines.length; i++) {
    if (lines[i].match(new RegExp("^" + key + ":\\s*(#.*)?$"))) {
      start = i;
      break;
    }
  }
  if (start === -1) return null;
  const items = [];
  for (let i = start + 1; i < lines.length; i++) {
    const line = lines[i];
    if (line.trim() === "" || line.trim().startsWith("#")) continue;
    // Stop when we hit a non-indented line (column 0 = new top-level key)
    if (!line.startsWith(" ")) break;
    const m = line.match(/^\s+-\s+(.+?)(?:\s+#.*)?$/);
    if (m) items.push(m[1].trim());
    // If a nested key (not a list item) at deeper indent appears, this isn't our list
    else if (!line.match(/^\s+#/)) break;
  }
  return items;
}

function extractTopLevelScalar(yaml, key) {
  const m = yaml.match(new RegExp("^" + key + ":\\s*(.+?)(?:\\s+#.*)?$", "m"));
  if (!m) return null;
  return m[1].trim().replace(/^["']|["']$/g, "");
}

function readGesture(plateauId, gestureId) {
  const dir = path.join(REPO_ROOT, "src", "content", "gestures", plateauId);
  if (!fs.existsSync(dir)) {
    throw new Error(`No gesture dir: ${dir}`);
  }
  const files = fs.readdirSync(dir);
  const num = gestureId.split("-").pop();
  const match = files.find(f => f.startsWith(num + "-"));
  if (!match) throw new Error(`Gesture ${gestureId} not found in ${dir}`);
  const text = fs.readFileSync(path.join(dir, match), "utf8");
  const { body } = parseFrontmatter(text);
  // Body may have leading/trailing newlines; normalize: strip a single trailing newline
  // (gesture body is the prose without surrounding blank lines)
  return body.replace(/^\n+/, "").replace(/\n+$/, "");
}

function gestureIdToPlateauId(gestureId) {
  // G-04-001 -> P-04 ; G-OA-002 -> P-OA
  const parts = gestureId.split("-");
  if (parts.length < 3 || parts[0] !== "G") {
    throw new Error(`Bad gesture id: ${gestureId}`);
  }
  return "P-" + parts[1];
}

function compilePlateau(slug) {
  const chapterPath = path.join(REPO_ROOT, "src", "content", "book", slug + ".md");
  const text = fs.readFileSync(chapterPath, "utf8");
  const { yaml, body: framingBody } = parseFrontmatter(text);

  const gestureIds = extractTopLevelList(yaml, "gestures");
  if (!gestureIds || gestureIds.length === 0) {
    throw new Error(`No gestures: list found in ${slug}.md`);
  }
  const separators = extractTopLevelList(yaml, "separators") || [];

  const plateauId = gestureIdToPlateauId(gestureIds[0]);

  const parts = [];
  gestureIds.forEach((gid, i) => {
    parts.push(readGesture(plateauId, gid));
    if (i < gestureIds.length - 1) {
      const sep = separators[i] || "paragraph";
      if (sep === "section") parts.push("\n\n---\n\n");
      else parts.push("\n\n");
    }
  });

  let out = parts.join("");
  const framing = framingBody.replace(/^\n+/, "").replace(/\n+$/, "");
  if (framing) {
    out = out + "\n\n" + framing;
  }
  return out + "\n";
}

function main() {
  const [, , cmd, slug, snapshot] = process.argv;
  if (cmd === "compile") {
    process.stdout.write(compilePlateau(slug));
  } else if (cmd === "verify") {
    const compiled = compilePlateau(slug);
    const snap = fs.readFileSync(snapshot, "utf8");
    // Snapshot is the original chapter file WITH frontmatter; extract its body
    const { body: snapBody } = parseFrontmatter(snap);
    // Normalize both: ensure single trailing newline
    const a = compiled.replace(/\n+$/, "") + "\n";
    const b = snapBody.replace(/\n+$/, "") + "\n";
    if (a === b) {
      console.log(`OK ${slug}: ${a.length} bytes match snapshot`);
      process.exit(0);
    } else {
      // Find first diff
      for (let i = 0; i < Math.min(a.length, b.length); i++) {
        if (a[i] !== b[i]) {
          const ctx = Math.max(0, i - 80);
          console.error(`FIRST DIFF at byte ${i}`);
          console.error(`compiled:  ...${JSON.stringify(a.slice(ctx, i + 80))}`);
          console.error(`snapshot:  ...${JSON.stringify(b.slice(ctx, i + 80))}`);
          process.exit(1);
        }
      }
      console.error(`Length diff: compiled=${a.length} snapshot=${b.length}`);
      process.exit(1);
    }
  } else {
    console.error("Usage: compile-plateau.mjs compile <slug>");
    console.error("       compile-plateau.mjs verify <slug> <snapshot.md>");
    process.exit(2);
  }
}

main();
