#!/usr/bin/env node
/**
 * Compile a plateau (chapter) from its gesture manifest.
 *
 * Reads:
 *   src/content/book/<plateau>.md  — frontmatter with `gestures:` list
 *   src/content/gestures/<P-NN>/*.md — gesture files
 *
 * Output is the concatenation of gesture bodies with the declared
 * separators (paragraph blank line, or section "---" between blank lines).
 *
 * Modes:
 *   compile <chapter-slug>           — print compiled body to stdout
 *   verify  <chapter-slug> <snapshot> — verify byte-equivalence vs snapshot
 *
 * Snapshot is the original full chapter file (with frontmatter); its body
 * is extracted for comparison.
 */
import fs from "node:fs";
import path from "node:path";
import url from "node:url";
import yaml from "js-yaml";

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const REPO_ROOT = path.resolve(__dirname, "..");

function splitFrontmatter(text) {
  if (!text.startsWith("---\n")) {
    throw new Error("Missing frontmatter");
  }
  const end = text.indexOf("\n---\n", 4);
  if (end === -1) throw new Error("Unterminated frontmatter");
  return {
    yamlText: text.slice(4, end),
    body: text.slice(end + 5),
  };
}

function loadFrontmatter(text) {
  const { yamlText, body } = splitFrontmatter(text);
  const fm = yaml.load(yamlText) ?? {};
  return { fm, body };
}

function readGestureBody(plateauId, gestureId) {
  const dir = path.join(REPO_ROOT, "src", "content", "gestures", plateauId);
  if (!fs.existsSync(dir)) {
    throw new Error(`No gesture dir: ${dir}`);
  }
  const num = gestureId.split("-").pop();
  const files = fs.readdirSync(dir);
  const match = files.find(f => f.startsWith(num + "-"));
  if (!match) throw new Error(`Gesture ${gestureId} not found in ${dir}`);
  const text = fs.readFileSync(path.join(dir, match), "utf8");
  const { body } = loadFrontmatter(text);
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
  const { fm, body: framingBody } = loadFrontmatter(text);

  const gestureIds = fm.gestures;
  if (!Array.isArray(gestureIds) || gestureIds.length === 0) {
    throw new Error(`No gestures: list found in ${slug}.md`);
  }
  const separators = Array.isArray(fm.separators) ? fm.separators : [];

  const plateauId = gestureIdToPlateauId(gestureIds[0]);

  const parts = [];
  gestureIds.forEach((gid, i) => {
    parts.push(readGestureBody(plateauId, gid));
    if (i < gestureIds.length - 1) {
      const sep = separators[i] ?? "paragraph";
      parts.push(sep === "section" ? "\n\n---\n\n" : "\n\n");
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
    const { body: snapBody } = loadFrontmatter(snap);
    const a = compiled.replace(/\n+$/, "") + "\n";
    const b = snapBody.replace(/\n+$/, "") + "\n";
    if (a === b) {
      console.log(`OK ${slug}: ${a.length} bytes match snapshot`);
      process.exit(0);
    } else {
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
