#!/usr/bin/env node
/**
 * thread-candidates — list the river gestures carrying a given tag, in
 * canonical book order, so a thread can be curated from real content.
 *
 * For the tapestry (thread swarm). Prints, for each match: chapter, gesture
 * ID, whether it is already on a thread, title, and the opening of the body.
 * Asserts nothing — it only surfaces gestures that already carry a tag Jason
 * assigned. Curation (which ~8–12 make the walk) and the invocation are the
 * editorial acts that follow.
 *
 * Run: node scripts/thread-candidates.mjs <tag>
 *   e.g. node scripts/thread-candidates.mjs concept/enclosure
 */
import fs from "node:fs";
import path from "node:path";
import url from "node:url";
import yaml from "js-yaml";
import { loadCorpus } from "../src/lib/load-corpus.mjs";
import { loadThreads } from "../src/lib/threads.mjs";

const __dirname = path.dirname(url.fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");
const TAG = process.argv[2];
if (!TAG) {
  console.error("usage: node scripts/thread-candidates.mjs <tag>");
  process.exit(2);
}

const corpus = loadCorpus(ROOT);
const river = yaml.load(
  fs.readFileSync(path.join(ROOT, "src/content/manifests/the-river.manifest.yml"), "utf8")
) || {};
const sources = river.sources || river.chapters || [];
const bySlug = Object.fromEntries(corpus.plateaus.map((p) => [p.slug, p]));

const onThread = {};
for (const t of loadThreads())
  for (const id of t.gestures) (onThread[id] ||= []).push(t.h1 || t.title || t.slug);

const snippet = (s, n = 16) => {
  const words = (s || "").replace(/\s+/g, " ").trim().split(" ");
  return words.slice(0, n).join(" ") + (words.length > n ? " …" : "");
};

let count = 0;
for (const slug of sources) {
  const ch = bySlug[slug];
  if (!ch) continue;
  for (const id of ch.gestures) {
    const g = corpus.gestures[id];
    if (!g || !(g.tags || []).includes(TAG)) continue;
    count += 1;
    const mark = onThread[id] ? `[on: ${onThread[id].join(", ")}]` : "[free]";
    console.log(`${id.padEnd(11)} ${ch.title}`);
    console.log(`   ${mark}  ${g.title}`);
    console.log(`   ${snippet(g.body)}`);
  }
}
console.log(`\n${count} river gestures carry ${TAG}`);
