#!/usr/bin/env node
/**
 * lint-tags.mjs — validate gesture tags against the ontology.
 *
 * Validation contract (hybrid):
 *   - Unknown NAMESPACES are errors. A new dimension of attention is
 *     architectural and must be declared in for-agents/tag-ontology.yml.
 *   - Unknown TERMS within known namespaces are WARNINGS. Terms are
 *     organic; the warning output is the to-add list for the ontology.
 *
 * Cardinality enforcement:
 *   - exactly-one: exactly one tag in this namespace, error if missing or 2+
 *   - one-or-more: one or more tags in this namespace, error if zero
 *   - zero-or-more: 0..N, no constraint
 *   - zero-or-one: 0 or 1, error if 2+
 *
 * Cross-field consistency:
 *   - tag plateau/<X> must match the file's structured `plateau:` field
 *
 * Output:
 *   - errors: printed to stderr, exit 1
 *   - warnings: printed to stdout (does not exit nonzero unless --strict)
 *
 * Usage:
 *   node scripts/lint-tags.mjs            # lint all gesture files
 *   node scripts/lint-tags.mjs --strict   # warnings also exit nonzero
 */
import fs from "node:fs";
import path from "node:path";
import url from "node:url";

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const REPO_ROOT = path.resolve(__dirname, "..");
const ONTOLOGY_PATH = path.join(REPO_ROOT, "for-agents", "tag-ontology.yml");
const GESTURES_ROOT = path.join(REPO_ROOT, "src", "content", "gestures");

const args = process.argv.slice(2);
const STRICT = args.includes("--strict");

// ---------- minimal YAML parsing for the ontology -------------------------
// Just enough to read the namespace -> { cardinality, open, terms[] } shape.
function parseOntology(text) {
  const lines = text.split("\n");
  const ns = {};
  let currentNs = null;
  let currentNsBody = null;
  let inTerms = false;

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    if (line.trim().startsWith("#") || line.trim() === "") continue;
    // Top-level "namespaces:" marker — just keep going
    if (/^namespaces:\s*$/.test(line)) continue;
    // Top-level scalars like `version: 1` — ignore
    if (/^[a-zA-Z_]+:\s*\S/.test(line) && !line.startsWith(" ")) continue;

    // 2-space indent = a namespace name
    const nsMatch = line.match(/^  ([a-z_][a-z_0-9-]*):\s*$/);
    if (nsMatch) {
      currentNs = nsMatch[1];
      currentNsBody = { cardinality: "zero-or-more", open: false, terms: [] };
      ns[currentNs] = currentNsBody;
      inTerms = false;
      continue;
    }
    // 4-space indent inside a namespace
    if (currentNsBody) {
      const cardMatch = line.match(/^    cardinality:\s*(\S+)\s*$/);
      if (cardMatch) { currentNsBody.cardinality = cardMatch[1]; inTerms = false; continue; }
      const openMatch = line.match(/^    open:\s*(true|false)\s*$/);
      if (openMatch) { currentNsBody.open = openMatch[1] === "true"; inTerms = false; continue; }
      if (/^    terms:\s*$/.test(line)) { inTerms = true; continue; }
      if (/^    description:\s*\|/.test(line)) { inTerms = false; continue; }
      if (inTerms) {
        const termMatch = line.match(/^      -\s*"?([^"#]+?)"?\s*(?:#.*)?$/);
        if (termMatch) {
          currentNsBody.terms.push(termMatch[1].trim());
          continue;
        }
      }
    }
  }
  return ns;
}

// ---------- frontmatter parse ----------
function parseFrontmatter(text) {
  if (!text.startsWith("---\n")) throw new Error("No frontmatter");
  const end = text.indexOf("\n---\n", 4);
  if (end === -1) throw new Error("Unterminated frontmatter");
  return { yaml: text.slice(4, end), body: text.slice(end + 5) };
}

function extractScalar(yaml, key) {
  const m = yaml.match(new RegExp("^" + key + ":\\s*\"?([^\"#\\n]+?)\"?\\s*(?:#.*)?$", "m"));
  return m ? m[1].trim() : null;
}

function extractList(yaml, key) {
  const lines = yaml.split("\n");
  const start = lines.findIndex(l => new RegExp("^" + key + ":\\s*(#.*)?$").test(l));
  if (start === -1) return null;
  const items = [];
  for (let i = start + 1; i < lines.length; i++) {
    const line = lines[i];
    if (line.trim() === "" || line.trim().startsWith("#")) continue;
    if (!line.startsWith(" ")) break;
    const m = line.match(/^\s+-\s+"?([^"#]+?)"?\s*(?:#.*)?$/);
    if (m) items.push(m[1].trim());
    else if (!line.match(/^\s+#/)) break;
  }
  return items;
}

// ---------- main lint ----------
function lintGestureFile(filePath, ontology) {
  const errors = [];
  const warnings = [];
  const text = fs.readFileSync(filePath, "utf8");
  let yaml;
  try {
    ({ yaml } = parseFrontmatter(text));
  } catch (e) {
    return { errors: [`${filePath}: ${e.message}`], warnings: [] };
  }

  const fileId = extractScalar(yaml, "id");
  const filePlateau = extractScalar(yaml, "plateau");
  const tags = extractList(yaml, "tags") || [];

  if (!fileId) errors.push(`${filePath}: missing required field 'id'`);
  if (!filePlateau) errors.push(`${filePath}: missing required field 'plateau'`);

  // Bucket tags by namespace
  const buckets = {};
  for (const tag of tags) {
    const slash = tag.indexOf("/");
    if (slash === -1) {
      errors.push(`${filePath} tag "${tag}": no namespace (expected <ns>/<term>)`);
      continue;
    }
    const ns = tag.slice(0, slash);
    const term = tag.slice(slash + 1);
    if (!ontology[ns]) {
      errors.push(`${filePath} tag "${tag}": unknown namespace "${ns}" (add to for-agents/tag-ontology.yml)`);
      continue;
    }
    if (!ontology[ns].terms.includes(term)) {
      if (ontology[ns].open) {
        warnings.push(`${filePath} tag "${tag}": term "${term}" not yet in ontology under "${ns}" (open namespace; promote when stable)`);
      } else {
        errors.push(`${filePath} tag "${tag}": term "${term}" not in closed namespace "${ns}"`);
      }
    }
    if (!buckets[ns]) buckets[ns] = [];
    buckets[ns].push(term);
  }

  // Cardinality checks
  for (const [ns, def] of Object.entries(ontology)) {
    const count = (buckets[ns] || []).length;
    switch (def.cardinality) {
      case "exactly-one":
        if (count !== 1) errors.push(`${filePath}: namespace "${ns}" requires exactly 1 tag, got ${count}`);
        break;
      case "one-or-more":
        if (count < 1) errors.push(`${filePath}: namespace "${ns}" requires at least 1 tag, got 0`);
        break;
      case "zero-or-one":
        if (count > 1) errors.push(`${filePath}: namespace "${ns}" allows at most 1 tag, got ${count}`);
        break;
      case "zero-or-more":
        // no constraint
        break;
      default:
        warnings.push(`${filePath}: namespace "${ns}" has unrecognized cardinality "${def.cardinality}"`);
    }
  }

  // Cross-field: plateau tag must match plateau: field
  if (buckets.plateau && filePlateau) {
    const tagP = buckets.plateau[0];
    if (tagP !== filePlateau) {
      errors.push(`${filePath}: plateau tag "${tagP}" disagrees with structured field "${filePlateau}"`);
    }
  }

  return { errors, warnings };
}

function findGestureFiles(root) {
  const out = [];
  if (!fs.existsSync(root)) return out;
  for (const entry of fs.readdirSync(root, { withFileTypes: true })) {
    const p = path.join(root, entry.name);
    if (entry.isDirectory()) out.push(...findGestureFiles(p));
    else if (entry.isFile() && entry.name.endsWith(".md") && entry.name !== "README.md") {
      out.push(p);
    }
  }
  return out;
}

function main() {
  if (!fs.existsSync(ONTOLOGY_PATH)) {
    console.error(`Missing ontology file: ${ONTOLOGY_PATH}`);
    process.exit(2);
  }
  const ontology = parseOntology(fs.readFileSync(ONTOLOGY_PATH, "utf8"));
  const ontologyNs = Object.keys(ontology);
  console.log(`Ontology loaded: ${ontologyNs.length} namespaces (${ontologyNs.join(", ")})`);

  const files = findGestureFiles(GESTURES_ROOT);
  console.log(`Linting ${files.length} gesture files...\n`);

  let totalErrors = 0;
  let totalWarnings = 0;
  for (const f of files) {
    const { errors, warnings } = lintGestureFile(f, ontology);
    for (const e of errors) console.error("ERROR  " + e);
    for (const w of warnings) console.log("WARN   " + w);
    totalErrors += errors.length;
    totalWarnings += warnings.length;
  }

  console.log(`\n${totalErrors} error(s), ${totalWarnings} warning(s).`);
  if (totalErrors > 0 || (STRICT && totalWarnings > 0)) process.exit(1);
}

main();
