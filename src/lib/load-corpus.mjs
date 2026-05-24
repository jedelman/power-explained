// load-corpus.mjs
//
// Single source of truth for reading the book corpus off disk into a
// structured object. Used by scripts/analyze-corpus.mjs and
// scripts/build-stats.mjs so the two never drift in how they parse.

import fs from "node:fs";
import path from "node:path";
import yaml from "js-yaml";

// Load the whole book corpus relative to a repo root.
// Returns:
//   {
//     gestures: { [id]: { id, plateau, file, title, body, tags } },
//     plateaus: [ { id, slug, title, part, gestures: [id...],
//                   separators: [str...], gestureObjs: [obj...],
//                   bodyText: string } ],
//   }
export function loadCorpus(repoRoot) {
  const GROOT = path.join(repoRoot, "src", "content", "gestures");
  const BROOT = path.join(repoRoot, "src", "content", "book");

  const gestures = {};
  if (fs.existsSync(GROOT)) {
    // Flat layout: src/content/gestures/G-<plateau>-<NNN>[a]-<slug>.md
    // Plateau identity comes from the frontmatter `plateau:` field, not
    // the directory path (which no longer encodes it).
    for (const f of fs.readdirSync(GROOT)) {
      if (!f.endsWith(".md") || f === "README.md") continue;
      if (!f.startsWith("G-")) continue;
      const text = fs.readFileSync(path.join(GROOT, f), "utf8");
      const end = text.indexOf("\n---\n", 4);
      if (end === -1) continue;
      const fm = yaml.load(text.slice(4, end)) || {};
      const body = text.slice(end + 5).trim();
      if (!fm.id) continue;
      gestures[fm.id] = {
        id: fm.id, plateau: fm.plateau || "", file: f,
        title: fm.title || "", body, tags: fm.tags || [],
      };
    }
  }

  const plateaus = [];
  if (fs.existsSync(BROOT)) {
    for (const f of fs.readdirSync(BROOT)) {
      if (!f.endsWith(".md")) continue;
      const text = fs.readFileSync(path.join(BROOT, f), "utf8");
      const end = text.indexOf("\n---\n", 4);
      if (end === -1) continue;
      const fm = yaml.load(text.slice(4, end)) || {};
      const slug = f.replace(/\.md$/, "");
      const pid = fm.plateau
        ? (typeof fm.plateau === "object" ? fm.plateau.id : fm.plateau)
        : null;
      const gestureIds = fm.gestures || [];
      const separators = fm.separators || [];
      const gestureObjs = gestureIds.map(id => gestures[id]).filter(Boolean);

      // Reconstruct the running body text from gesture bodies in order,
      // so readability/entropy on the whole plateau works whether the chapter
      // is migrated (empty inline body) or legacy (inline body, no gestures).
      let bodyText;
      if (gestureObjs.length > 0) {
        bodyText = gestureObjs.map(g => g.body).join("\n\n");
      } else {
        bodyText = text.slice(end + 5).trim();
      }

      plateaus.push({
        id: pid, slug, title: fm.title || "", part: fm.part || "",
        gestures: gestureIds, separators, gestureObjs, bodyText,
      });
    }
  }

  return { gestures, plateaus };
}
