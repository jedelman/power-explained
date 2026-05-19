# Fact-Check Build Step — Spec

Status: spec / not yet implemented.

## Purpose

Factual claims in the prose are build-pipeline data, not authorial
intuition. They get verified once, cached, and re-verified only when
the claim changes. Lint reads the cache and fails red, warns yellow,
passes green.

The FLAG markers already present in chapter prose (e.g., the Kerala
life expectancy flag, the caracoles date flag) are the manual
ancestor of this system. The build step formalizes what Jason is
already doing by hand.

## Outputs

Per chapter: `src/content/book/facts/chapter-N.facts.yaml`

```yaml
facts:
  - id: ch4-mondragon-founded-1956
    claim: "In 1956, five of Arizmendi's former students founded a cooperative."
    location: chapter-4.md, paragraph 5
    sources:
      - "Whyte & Whyte, Making Mondragón (1988), p. XX"
      - "https://www.mondragon-corporation.com/en/about-us/history/"
    verified: 2026-05-19
    verifier: claude+jason
    confidence: high
    hash: sha256:abc123...  # of the claim text

  - id: ch4-kerala-life-expectancy
    claim: "Kerala life expectancy is 75 years"
    location: chapter-4.md, Kerala section
    sources: []
    verified: null
    confidence: unverified
    notes: |
      FLAG: current figures show ~77 years. Need to identify which
      dataset/year the 75 figure comes from and either update the
      claim or cite the source explicitly.
    hash: sha256:def456...

  - id: ch4-caracoles-date
    claim: "By 2004, they had built functioning caracoles"
    location: chapter-4.md, Chiapas section
    sources:
      - "EZLN announcement, August 9, 2003"
    verified: 2026-05-19
    confidence: high
    notes: |
      Caracoles announced 2003-08-09. "By 2004" is technically
      accurate. Prose could tighten to 2003 for precision; flagged
      as stylistic, not factual.
    hash: sha256:ghi789...
```

## Build pipeline

  1. Extractor pass: scan each chapter's prose for factual claims
     (numbers, dates, names, attributions). Generate candidate
     claim list with hashes of claim text.
  2. Diff against existing facts.yaml. New or changed claims get
     `verified: null, confidence: unverified`.
  3. Lint reads facts.yaml:
       - any `confidence: unverified` → warning (yellow)
       - any `confidence: contradicted` → error (red)
       - any `hash` mismatch with current prose → claim has been
         edited, revert to unverified
  4. Verification is human-in-loop or LLM-in-loop with citations.
     Each verification writes back source URLs/citations, date,
     verifier, confidence.
  5. Cache persists across builds. Only changed claims re-verify.

## Confidence levels

  - `high`: multiple independent sources, or one canonical source
  - `medium`: single source, or sources differ slightly
  - `low`: source exists but is contested or weak
  - `unverified`: no verification attempted yet
  - `contradicted`: verification found the claim false; needs prose
    revision before build can ship

## Integration with beauty_check

Beauty check reads facts.yaml and reports:
  - `unverified_count: N`
  - `low_confidence_count: N`
  - `contradicted_count: N`

A beauty check cannot pass with any contradicted claim. Unverified
claims are allowed in draft state but block ship.

## Integration with the wheel

S-seat chapters (proof, precision, evidence) have stricter
fact-check requirements than NE-seat chapters (mystery, pre-dawn)
or NW-seat chapters (grief). A noon chapter that ships with
unverified numbers fails its own seat — precision is its medium.
A pre-dawn chapter making fewer specific claims is held to fewer
verifications.

This is the wheel showing up in the build system. The lint rules
themselves are wheel-aware.

## Implementation order (when we get there)

  1. Manual: pull existing FLAGs from chapter prose into ch4.facts.yaml
     by hand. Worked example.
  2. Linter: read facts.yaml, report unverified counts. Bash + yq.
  3. Extractor: scan prose for new claims. Probably LLM-assisted
     (sonnet/haiku call with a structured-output schema).
  4. Verification UX: Jason reviews unverified claims; Claude proposes
     sources; Jason confirms or edits.
  5. Hash-invalidation: when prose edits change a claim's hash, the
     verification status resets.

## Why this matters

The book makes specific claims and the claims must be true. "Bread
daily in the ovens" is not a fact claim (it's atmospheric and
Claude-invented; the correct fix was to remove it). "Kerala life
expectancy is 75 years" IS a fact claim and must be verified. The
build system distinguishes between these and refuses to let the
second kind ship without verification.

This is also a defense against hallucination at scale. The book is
being built with LLM in the loop. The fact-check cache is the
discipline that keeps LLM-generated prose from drifting into
plausible-but-false. Hash invalidation means even subtle edits
re-trigger verification. The system assumes the LLM will lie
sometimes and catches it structurally.
