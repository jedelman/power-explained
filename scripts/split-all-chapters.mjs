#!/usr/bin/env node
/**
 * split-all-chapters.mjs — drive the gesture migration across all remaining chapters.
 *
 * Steps per chapter:
 *   1. Snapshot the chapter to for-agents/snapshots/<slug>-pre-gestures.md
 *   2. Run scripts/split-chapter-to-gestures.mjs <slug> <plateauId>
 *   3. Run scripts/compile-plateau.mjs verify <slug> <snapshot>
 *   4. If an astro page exists at src/pages/book/<slug>.astro, rewrite it
 *      to use composePlateauBody (replacing the inline readFileSync block).
 *
 * Stops on first failure with a non-zero exit code and a clear message.
 */
import fs from "node:fs";
import path from "node:path";
import url from "node:url";
import { execFileSync } from "node:child_process";

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const REPO_ROOT = path.resolve(__dirname, "..");

// Chapter -> plateau mapping. chapter-4 is already migrated; not in this list.
const CHAPTERS = [
  ["prologue", "P-PR"],
  ["chapter-1", "P-01"],
  ["chapter-2", "P-02"],
  ["chapter-3", "P-03"],
  ["interlude-washington", "P-IW"],
  ["goetia", "P-GC"],
  ["chapter-5", "P-05"],
  ["chapter-6", "P-06"],
  ["chapter-7", "P-07"],
  ["chapter-8", "P-08"],
  ["chapter-9", "P-09"],
  ["chapter-10", "P-10"],
  ["interlude-barcelona", "P-IB"],
  ["chapter-11", "P-11"],
  ["chapter-12", "P-12"],
  ["chapter-13", "P-13"],
  ["chapter-14", "P-14"],
  ["chapter-15", "P-15"],
  ["reenchanting", "P-RE"],
  ["chapter-16", "P-16"],
  ["chapter-16b", "P-16b"],
  ["chapter-17", "P-17"],
  ["chapter-18", "P-18"],
  ["the-centaur-chapter", "P-CE"],
  ["epilogue", "P-EP"],
];

function run(cmd, args, opts = {}) {
  return execFileSync(cmd, args, {
    cwd: REPO_ROOT,
    encoding: "utf8",
    stdio: opts.silent ? "pipe" : "inherit",
  });
}

function migrateAstroPage(slug) {
  const astroPath = path.join(REPO_ROOT, "src", "pages", "book", `${slug}.astro`);
  if (!fs.existsSync(astroPath)) {
    console.log(`  no astro page for ${slug} (skipping page migration)`);
    return;
  }
  const text = fs.readFileSync(astroPath, "utf8");
  if (text.includes("composePlateauBody")) {
    console.log(`  ${slug}.astro already migrated`);
    return;
  }

  // Two transformations expected; both must succeed.
  const importPattern =
    /import \{ readFileSync \} from 'fs'\nimport \{ resolve \} from 'path'/;
  const bodyPattern =
    /const raw = readFileSync\(resolve\('src\/content\/book\/[^']+\.md'\), 'utf8'\)\nconst body = raw\.split\('---\\n'\)\.slice\(2\)\.join\('---\\n'\)\.trim\(\)/;

  if (!importPattern.test(text) || !bodyPattern.test(text)) {
    throw new Error(`Astro page ${slug} does not match expected pattern`);
  }

  const out = text
    .replace(
      importPattern,
      `import { resolve } from 'path'\nimport { composePlateauBody } from '../../lib/composePlateauBody.mjs'`
    )
    .replace(
      bodyPattern,
      `const body = composePlateauBody(resolve('src/content/book/${slug}.md'))`
    );

  fs.writeFileSync(astroPath, out);
  console.log(`  migrated ${slug}.astro`);
}

function main() {
  let okCount = 0;
  for (const [slug, plateauId] of CHAPTERS) {
    console.log(`\n--- ${slug} → ${plateauId} ---`);

    const chapterPath = path.join(REPO_ROOT, "src", "content", "book", `${slug}.md`);
    if (!fs.existsSync(chapterPath)) {
      console.error(`MISSING: ${chapterPath}`);
      process.exit(1);
    }

    // Has this chapter already been migrated? (re-runnable)
    const txt = fs.readFileSync(chapterPath, "utf8");
    const alreadyMigrated = /\ngestures:\n\s*-\s*G-/.test(txt);
    if (alreadyMigrated) {
      console.log(`  already migrated — skipping split`);
      migrateAstroPage(slug);
      okCount++;
      continue;
    }

    // 1+2. Split (snapshot is taken by the splitter)
    run("node", ["scripts/split-chapter-to-gestures.mjs", slug, plateauId]);

    // 3. Verify byte-equivalence
    const snap = path.join("for-agents", "snapshots", `${slug}-pre-gestures.md`);
    run("node", ["scripts/compile-plateau.mjs", "verify", slug, snap]);

    // 4. Migrate astro page (if exists)
    migrateAstroPage(slug);

    okCount++;
  }

  console.log(`\n=== ${okCount}/${CHAPTERS.length} chapters migrated ===`);
}

main();
