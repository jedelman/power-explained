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
 * Cardinality enforcement (per ontology):
 *   - exactly-one: exactly 1 tag in this namespace
 *   - one-or-more: at least 1 tag
 *   - zero-or-one: 0 or 1 tag
 *   - zero-or-more: no constraint
 *
 * Cross-field consistency:
 *   - tag plateau/<X> must match the file's structured `plateau:` field
 *
 * Usage:
 *   node scripts/lint-tags.mjs            # lint all gesture files
 *   node scripts/lint-tags.mjs --strict   # warnings also exit nonzero
 */
import fs from "node:fs";
import path from "node:path";
import url from "node:url";
import yaml from "js-yaml";

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const REPO_ROOT = path.resolve(__dirname, "..");
const ONTOLOGY_PATH = path.join(REPO_ROOT, "for-agents", "tag-ontology.yml");
const GESTURES_ROOT = path.join(REPO_ROOT, "src", "content", "gestures");

const STRICT = process.argv.slice(2).includes("--strict");

function loadOntology(filePath) {
  const text = fs.readFileSync(filePath, "utf8");
  const doc = yaml.load(text);
  if (!doc || typeof doc.namespaces !== "object" || doc.namespaces === null) {
    throw new Error(`Ontology at ${filePath} is missing a top-level 'namespaces:' map`);
  }
  // Normalize: each namespace has { cardinality, open, terms[] } with defaults.
  const out = {};
  for (const [ns, raw] of Object.entries(doc.namespaces)) {
    const spec = raw ?? {};
    out[ns] = {
      cardinality: spec.cardinality ?? "zero-or-more",
      open: spec.open === true,
      terms: Array.isArray(spec.terms) ? spec.terms.map(String) : [],
    };
  }
  return out;
}

function loadFrontmatter(text) {
  if (!text.startsWith("---\n")) throw new Error("No frontmatter");
  const end = text.indexOf("\n---\n", 4);
  if (end === -1) throw new Error("Unterminated frontmatter");
  const yamlText = text.slice(4, end);
  return yaml.load(yamlText) ?? {};
}

function lintGestureFile(filePath, ontology) {
  const errors = [];
  const warnings = [];
  let fm;
  try {
    fm = loadFrontmatter(fs.readFileSync(filePath, "utf8"));
  } catch (e) {
    return { errors: [`${filePath}: ${e.message}`], warnings: [] };
  }

  if (!fm.id) errors.push(`${filePath}: missing required field 'id'`);
  if (!fm.plateau) errors.push(`${filePath}: missing required field 'plateau'`);

  const tags = Array.isArray(fm.tags) ? fm.tags.map(String) : [];

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
    (buckets[ns] ??= []).push(term);
  }

  // Cardinality
  for (const [ns, def] of Object.entries(ontology)) {
    const count = (buckets[ns] ?? []).length;
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
        break;
      default:
        warnings.push(`${filePath}: namespace "${ns}" has unrecognized cardinality "${def.cardinality}"`);
    }
  }

  // Cross-field: plateau tag must match plateau: field
  if (buckets.plateau && fm.plateau) {
    const tagP = buckets.plateau[0];
    if (tagP !== fm.plateau) {
      errors.push(`${filePath}: plateau tag "${tagP}" disagrees with structured field "${fm.plateau}"`);
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
  const ontology = loadOntology(ONTOLOGY_PATH);
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
