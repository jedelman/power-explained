#!/usr/bin/env node
/**
 * Compile a plateau (chapter) from its gesture manifest.
 *
 * Composition logic lives in src/lib/composePlateauBody.mjs (the single
 * source of truth — shared with page-time rendering).
 *
 * This script is the CLI wrapper for build-time use (byte-equivalence
 * verification against pre-refactor snapshots).
 *
 * Modes:
 *   compile <chapter-slug>           — print compiled body to stdout
 *   verify  <chapter-slug> <snapshot> — verify byte-equivalence vs snapshot
 */
import fs from "node:fs";
import path from "node:path";
import url from "node:url";
import yaml from "js-yaml";
import { composePlateauBody } from "../src/lib/composePlateauBody.mjs";

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const REPO_ROOT = path.resolve(__dirname, "..");

function snapshotBody(filePath) {
  const text = fs.readFileSync(filePath, "utf8");
  if (!text.startsWith("---\n")) throw new Error("Missing frontmatter");
  const end = text.indexOf("\n---\n", 4);
  if (end === -1) throw new Error("Unterminated frontmatter");
  return text.slice(end + 5);
}

function main() {
  const [, , cmd, slug, snapshot] = process.argv;
  if (cmd === "compile") {
    const chapterPath = path.join(REPO_ROOT, "src", "content", "book", slug + ".md");
    process.stdout.write(composePlateauBody(chapterPath, REPO_ROOT));
  } else if (cmd === "verify") {
    const chapterPath = path.join(REPO_ROOT, "src", "content", "book", slug + ".md");
    const compiled = composePlateauBody(chapterPath, REPO_ROOT);
    const snapBody = snapshotBody(snapshot);
    const a = compiled.replace(/^\n+/, "").replace(/\n+$/, "") + "\n";
    const b = snapBody.replace(/^\n+/, "").replace(/\n+$/, "") + "\n";
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
