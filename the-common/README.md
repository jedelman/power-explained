# The Common — Argument Graph

A hypertextual, fractal presentation of the commons framework as a navigable argument graph.

**Adjunct to [power-explained](https://jedelman.github.io/power-explained/)**

## Architecture

- **Primitive:** A claim node (not an article)
- **Depth axis:** Ontology (0) → Theory (1) → Structure (2) → Pattern (3) → Case (4)
- **Navigation:** Click node → drawer opens with claim + connected nodes + article body
- **Hypergraph:** Edges are also nodes; D3 diagrams are edge nodes
- **Sync:** Clicking links in article content navigates the graph

## Stack

React + Vite + D3 v7 + MUI v5

## Data

`src/graph.json` — 95 nodes, 151 edges, v0.1.0

## Dev

```
npm install
npm run dev
```

## Deploy

Netlify or GitHub Pages via `npm run build` → `dist/`
