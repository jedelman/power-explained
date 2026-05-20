/**
 * composePlateauBody — render a plateau's prose body from its gesture manifest.
 *
 * Single source of truth for the gesture-to-body composition. Used by:
 *   - scripts/compile-plateau.mjs   (CLI, byte-equivalence verification)
 *   - src/pages/book/<chapter>.astro (page-time rendering)
 *
 * Contract:
 *   composePlateauBody(chapterMdPath, repoRoot?) → string
 *
 * The returned string is the concatenation of gesture bodies (stripped of
 * their own frontmatter) joined with the declared separators, plus any
 * trailing framing prose from the chapter file's own body. A trailing
 * newline is appended.
 *
 * Separators:
 *   "paragraph" → blank line between gestures
 *   "section"   → "\n\n---\n\n" (a horizontal rule between blank lines)
 *
 * If the chapter has no `gestures:` list (legacy chapters), the function
 * returns the chapter's inline body verbatim (with one trailing newline).
 * This keeps unmigrated chapters working without a special case at call sites.
 */
import fs from "node:fs";
import path from "node:path";
import yaml from "js-yaml";

function splitFrontmatter(text) {
  if (!text.startsWith("---\n")) throw new Error("Missing frontmatter");
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

function gestureIdToPlateauId(gestureId) {
  // G-04-001 -> P-04 ; G-OA-002 -> P-OA
  const parts = gestureId.split("-");
  if (parts.length < 3 || parts[0] !== "G") {
    throw new Error(`Bad gesture id: ${gestureId}`);
  }
  return "P-" + parts[1];
}

function readGestureBody(repoRoot, plateauId, gestureId) {
  const dir = path.join(repoRoot, "src", "content", "gestures", plateauId);
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

/**
 * @param {string} chapterMdPath — absolute or repo-relative path to chapter .md
 * @param {string} [repoRoot]   — absolute path to repo root; defaults to cwd
 * @returns {string} compiled body with trailing newline
 */
export function composePlateauBody(chapterMdPath, repoRoot = process.cwd()) {
  const absPath = path.isAbsolute(chapterMdPath)
    ? chapterMdPath
    : path.join(repoRoot, chapterMdPath);

  const text = fs.readFileSync(absPath, "utf8");
  const { fm, body: framingBody } = loadFrontmatter(text);
  const framing = framingBody.replace(/^\n+/, "").replace(/\n+$/, "");

  const gestureIds = Array.isArray(fm.gestures) ? fm.gestures : [];

  // Legacy fallback: chapter not yet migrated to gestures
  if (gestureIds.length === 0) {
    return framing ? framing + "\n" : "";
  }

  const separators = Array.isArray(fm.separators) ? fm.separators : [];
  const plateauId = gestureIdToPlateauId(gestureIds[0]);

  const parts = [];
  gestureIds.forEach((gid, i) => {
    parts.push(readGestureBody(repoRoot, plateauId, gid));
    if (i < gestureIds.length - 1) {
      const sep = separators[i] ?? "paragraph";
      parts.push(sep === "section" ? "\n\n---\n\n" : "\n\n");
    }
  });

  let out = parts.join("");
  if (framing) out += "\n\n" + framing;
  return out + "\n";
}
