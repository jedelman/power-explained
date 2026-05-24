#!/usr/bin/env node
/**
 * Propose tag additions for a plateau, based on what its gesture prose
 * actually mentions. Reads each gesture's body, matches against the
 * ontology vocabulary for `concept`, `person`, `place`, `year`, and
 * emits a per-gesture diff of suggested additions.
 *
 * Does NOT propose `kind`, `capacity`, `zone`, `direction` — those
 * require editorial judgment about rhetorical form / reader capacity
 * the prose alone can't reliably signal.
 *
 * Modes:
 *   propose <P-ID>                — print proposals to stdout (dry-run)
 *   propose <P-ID> --json         — emit machine-readable proposal set
 *   apply   <P-ID> <accept.json>  — write the accepted subset back to files
 *
 * The accept.json format is the dry-run output with `accepted: true`
 * flipped on the tags you want kept. Anything `accepted: false` (or
 * absent) is skipped.
 *
 * Usage:
 *   node scripts/propose-tags.mjs propose P-01
 *   node scripts/propose-tags.mjs propose P-01 --json > /tmp/p01.json
 *   # edit /tmp/p01.json, set accepted: true on the ones to keep
 *   node scripts/propose-tags.mjs apply P-01 /tmp/p01.json
 */
import fs from "node:fs";
import path from "node:path";
import url from "node:url";
import yaml from "js-yaml";

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const REPO_ROOT = path.resolve(__dirname, "..");
const GROOT = path.join(REPO_ROOT, "src", "content", "gestures");
const ONTOLOGY_PATH = path.join(REPO_ROOT, "for-agents", "tag-ontology.yml");

// ── Surface-form aliases ─────────────────────────────────────────────────
// Multi-word or capitalized variants for proper nouns and concepts.
// Pure-slug-as-substring fallback is built in below.
const ALIASES = {
  // concept (multi-word forms; the slug is matched too as a fallback)
  "concept/character-armor":           ["character armor", "character-armor"],
  "concept/the-collector":             ["the collector", "the collector's"],
  "concept/the-wizard":                ["the wizard", "the wizards"],
  "concept/the-council":               ["the council"],
  "concept/the-shard":                 ["the shard", "the shards"],
  "concept/the-line":                  ["the line"],
  "concept/the-back-line":             ["the back line", "back-line"],
  "concept/dialectical-image":         ["dialectical image", "dialectical-image"],
  "concept/production-of-subjectivity":["production of subjectivity"],
  "concept/primitive-accumulation":    ["primitive accumulation"],
  "concept/the-outside":               ["the outside"],
  "concept/racial-capitalism":         ["racial capitalism"],
  "concept/junta-de-buen-gobierno":    ["junta de buen gobierno", "juntas de buen gobierno"],
  "concept/mandar-obedeciendo":        ["mandar obedeciendo"],
  "concept/lehen-auzoa":               ["lehen auzoa"],
  "concept/mutual-aid":                ["mutual aid", "mutual-aid"],
  "concept/death-drive":               ["death drive", "death-drive"],
  "concept/being-held":                ["being held", "held by"],
  "concept/wages-of-whiteness":        ["wages of whiteness"],
  "concept/clt":                       ["clt", "community land trust"],
  "concept/the-shrug":                 ["the shrug", "shrug"],
  "concept/citta-vritti":              ["citta vritti", "citta-vritti"],
  "concept/degenerate-art":            ["degenerate art", "entartete"],
  "concept/conscientização":           ["conscientização", "conscientizacao", "conscientization"],
  "concept/biopower":                  ["biopower", "bio-power"],
  "concept/biopolitics":               ["biopolitics", "bio-politics"],

  // person — proper-noun surface forms
  "person/sanders-bernie":             ["bernie sanders", "sanders"],
  "person/lumumba-chokwe":             ["chokwe lumumba"],
  "person/lumumba-chokwe-antar":       ["chokwe antar lumumba", "chokwe antar"],
  "person/lumumba-rukia":              ["rukia lumumba", "rukia"],
  "person/pope-francis":               ["pope francis", "francis"],
  "person/subcomandante-moises":       ["subcomandante moisés", "subcomandante moises"],
  "person/ostrom-elinor":              ["elinor ostrom", "ostrom"],
  "person/du-bois":                    ["du bois", "du-bois", "w.e.b. du bois", "w. e. b. du bois"],
  "person/arizmendiarrieta":           ["arizmendiarrieta", "arizmendi"],

  // place
  "place/hampton-roads":               ["hampton roads", "hampton boulevard", "brambleton"],
  "place/burlington-vt":               ["burlington"],
  "place/norfolk-va":                  ["norfolk"],
  "place/jackson-ms":                  ["jackson"],
  "place/washington-state":            ["washington state", "the scar"],
  "place/zuccotti-park":               ["zuccotti"],
  "place/standing-rock":               ["standing rock"],
  "place/basque-country":              ["basque country", "basque"],
  "place/crown-heights":               ["crown heights"],
  "place/new-york":                    ["new york"],
  "place/the-south":                   ["the south", "deep south"],
};

const args = process.argv.slice(2);
const cmd = args[0];
const targetPlateau = args[1];
const ASJSON = args.includes("--json");

function loadOntology() {
  const doc = yaml.load(fs.readFileSync(ONTOLOGY_PATH, "utf8"));
  return doc.namespaces || {};
}

function loadGestures(plateau) {
  const out = [];
  for (const f of fs.readdirSync(GROOT)) {
    if (!f.endsWith(".md") || f === "README.md") continue;
    if (!f.startsWith("G-")) continue;
    const text = fs.readFileSync(path.join(GROOT, f), "utf8");
    const end = text.indexOf("\n---\n", 4);
    if (end === -1) continue;
    const fm = yaml.load(text.slice(4, end)) || {};
    if (plateau && fm.plateau !== plateau) continue;
    out.push({
      id: fm.id,
      file: path.join(GROOT, f),
      relFile: path.join("src/content/gestures", f),
      plateau: fm.plateau,
      tags: new Set(fm.tags || []),
      body: text.slice(end + 5),
      bodyLower: text.slice(end + 5).toLowerCase(),
      fmRaw: text.slice(4, end),
      fullText: text,
    });
  }
  return out.sort((a, b) => a.id.localeCompare(b.id));
}

// Return list of surface forms to test for a given fully-qualified tag.
function surfaceForms(fqTag) {
  const [, term] = fqTag.split("/");
  const aliases = ALIASES[fqTag] || [];
  const slugForm = term.replace(/-/g, " ");
  const formsSet = new Set([term.toLowerCase(), slugForm.toLowerCase(), ...aliases.map(a => a.toLowerCase())]);
  return [...formsSet];
}

// Word-boundary-ish substring match. Avoid matching inside longer words.
function matches(haystackLower, needle) {
  let from = 0;
  const out = [];
  while (true) {
    const i = haystackLower.indexOf(needle, from);
    if (i === -1) break;
    const before = i === 0 ? " " : haystackLower[i - 1];
    const after = i + needle.length === haystackLower.length ? " " : haystackLower[i + needle.length];
    // Treat hyphen/space/punct as boundary. Reject if either side is alphanumeric.
    const isBoundary = (c) => !/[a-z0-9]/i.test(c);
    if (isBoundary(before) && isBoundary(after)) {
      out.push(i);
    }
    from = i + needle.length;
  }
  return out;
}

function proposeForGesture(g, ontology) {
  const proposals = [];
  for (const ns of ["concept", "person", "place", "year"]) {
    const def = ontology[ns];
    if (!def) continue;
    for (const term of def.terms || []) {
      const fq = `${ns}/${term}`;
      if (g.tags.has(fq)) continue;
      const forms = surfaceForms(fq);
      const hits = [];
      for (const f of forms) {
        const ms = matches(g.bodyLower, f);
        if (ms.length) hits.push({ form: f, count: ms.length });
      }
      if (hits.length === 0) continue;
      const totalHits = hits.reduce((s, h) => s + h.count, 0);
      proposals.push({ tag: fq, hits, totalHits, accepted: false });
    }
  }
  proposals.sort((a, b) => b.totalHits - a.totalHits);
  return proposals;
}

// ── propose ──────────────────────────────────────────────────────────────
function cmdPropose() {
  if (!targetPlateau) {
    console.error("Usage: propose-tags.mjs propose <P-ID> [--json]");
    process.exit(2);
  }
  const ontology = loadOntology();
  const gestures = loadGestures(targetPlateau);
  if (gestures.length === 0) {
    console.error(`No gestures for plateau ${targetPlateau}`);
    process.exit(1);
  }

  const report = {
    plateau: targetPlateau,
    generated: new Date().toISOString(),
    gestures: gestures.map(g => ({
      id: g.id,
      file: g.relFile,
      currentTags: [...g.tags],
      proposals: proposeForGesture(g, ontology),
      preview: g.body.trim().slice(0, 180).replace(/\s+/g, " "),
    })),
  };

  if (ASJSON) {
    process.stdout.write(JSON.stringify(report, null, 2));
    return;
  }

  const totalProposals = report.gestures.reduce((s, g) => s + g.proposals.length, 0);
  console.log(`\nProposing tags for ${targetPlateau}: ${gestures.length} gestures, ${totalProposals} candidates.\n`);
  for (const g of report.gestures) {
    if (g.proposals.length === 0) continue;
    console.log(`  ${g.id}`);
    console.log(`    "${g.preview}…"`);
    for (const p of g.proposals) {
      const forms = p.hits.map(h => `"${h.form}"×${h.count}`).join(", ");
      console.log(`    + ${p.tag.padEnd(36)}  ${forms}`);
    }
    console.log();
  }

  const noProposals = report.gestures.filter(g => g.proposals.length === 0);
  if (noProposals.length) {
    console.log(`  (${noProposals.length} gestures had no proposals — pure first-person passages, etc.)`);
  }
  console.log(`\n  To accept in batch: re-run with --json, flip accepted:true on the keepers, then:`);
  console.log(`    node scripts/propose-tags.mjs apply ${targetPlateau} <accepted.json>`);
}

// ── apply ────────────────────────────────────────────────────────────────
function writeFm(g, newTags) {
  // Preserve everything else in frontmatter; replace only the tags: list.
  const fm = yaml.load(g.fmRaw) || {};
  fm.tags = newTags;
  const newYaml = yaml.dump(fm, { lineWidth: 100, noRefs: true }).trimEnd();
  const newText = `---\n${newYaml}\n---\n${g.body.replace(/^\n+/, "\n")}`;
  fs.writeFileSync(g.file, newText);
}

function cmdApply() {
  if (!targetPlateau || !args[2]) {
    console.error("Usage: propose-tags.mjs apply <P-ID> <accepted.json>");
    process.exit(2);
  }
  const acceptedPath = path.resolve(args[2]);
  const acc = JSON.parse(fs.readFileSync(acceptedPath, "utf8"));
  if (acc.plateau !== targetPlateau) {
    console.error(`Plateau mismatch: file is for ${acc.plateau}, target ${targetPlateau}`);
    process.exit(1);
  }
  const gestures = loadGestures(targetPlateau);
  const byId = new Map(gestures.map(g => [g.id, g]));

  let touched = 0;
  let added = 0;
  for (const ge of acc.gestures) {
    const g = byId.get(ge.id);
    if (!g) {
      console.error(`Skipping unknown gesture ${ge.id}`);
      continue;
    }
    const accepted = (ge.proposals || []).filter(p => p.accepted).map(p => p.tag);
    if (accepted.length === 0) continue;
    const merged = new Set([...g.tags, ...accepted]);
    writeFm(g, [...merged]);
    touched++;
    added += accepted.length;
  }
  console.log(`Applied ${added} tag(s) across ${touched} gesture(s) in ${targetPlateau}.`);
}

if (cmd === "propose") cmdPropose();
else if (cmd === "apply") cmdApply();
else {
  console.error("Usage:");
  console.error("  propose-tags.mjs propose <P-ID> [--json]");
  console.error("  propose-tags.mjs apply   <P-ID> <accepted.json>");
  process.exit(2);
}
