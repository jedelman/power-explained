# commune.ai — Build & Setup Guide

A scenario tool for modeling **federated commune economics**: each friend enters their real
situation (equity, income, skills) and sees their **own life inside the commune vs. now**, plus
whether a node clears and how nodes clear against each other.

> **The point of this tool is to be a forcing function.** Its job is to convert "I'd love a
> solidarity economy" into a signature, by showing each person their actual number. So the hero
> screen is the **per-persona before/after**, not an abstract spreadsheet.

**Repo:** https://github.com/jedelman/commune.ai

**Stack (decided):**
- **Model core in Rust → WASM.** One validated financial engine, identical in the browser and on
  the server, fast enough for stress-tests later.
- **UI in TypeScript** (Vite + React). Best charting/forms velocity; imports the Rust engine.
- **Backend: Cloudflare Workers + D1** for saving/sharing scenarios (add in v1.5 — the tool runs
  fully client-side before that).

**Build order (don't big-bang the federation):**
1. **v1** — single-node model + per-persona before/after, shareable via URL. *Default scenario =
   our worked "Node #1".*
2. **v1.5** — D1 persistence: named, saved, shared scenarios.
3. **v2** — stress tests (vacancy, restaurant downturn, redemption run, bad trades year).
4. **v3** — federation: multiple nodes, portable stakes, inter-node clearing.

---

## 0. Prerequisites (install on your laptop)

**Rust + WASM toolchain**
```bash
# Rust (if you don't have it)
curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh
source "$HOME/.cargo/env"

# WASM compile target
rustup target add wasm32-unknown-unknown

# wasm-pack (pick one)
brew install wasm-pack                 # macOS, easiest
# or: cargo install wasm-pack          # any platform, compiles from source
# or: curl https://rustwasm.github.io/wasm-pack/installer/init.sh -sSf | sh
```

**Node + Cloudflare**
```bash
node --version    # need >= 20 (22 is fine)
# wrangler is run via npx — no global install needed
```

Verify:
```bash
rustc --version && cargo --version && wasm-pack --version && node --version
```

---

## 1. Clone and lay out the monorepo

```bash
git clone https://github.com/jedelman/commune.ai.git
cd commune.ai
```

Target structure:
```
commune.ai/
├── model/                 # Rust crate — the financial engine (compiles to WASM)
│   ├── Cargo.toml
│   └── src/lib.rs
├── web/                   # Vite + React + TS frontend
│   ├── package.json
│   └── src/
│       └── wasm/          # wasm-pack build output (gitignored; regenerated)
├── worker/                # Cloudflare Worker + D1 (v1.5)
│   ├── wrangler.jsonc
│   ├── src/index.ts
│   └── migrations/
└── README.md
```

Add a root `.gitignore`:
```
node_modules/
target/
web/src/wasm/
web/dist/
.wrangler/
```

---

## 2. The Rust model core (`model/`)

```bash
cargo new model --lib
cd model
cargo add wasm-bindgen serde --features serde/derive
cargo add serde-wasm-bindgen
```

`model/Cargo.toml` — make it a WASM cdylib (and keep rlib so it can also run server-side/native):
```toml
[lib]
crate-type = ["cdylib", "rlib"]
```

`model/src/lib.rs` — a **working vertical slice** that computes the real Node #1 carry/income.
Fill out the rest of the spec (§4) from here:
```rust
use serde::{Deserialize, Serialize};
use wasm_bindgen::prelude::*;

#[derive(Serialize, Deserialize, Clone)]
pub struct NodeConfig {
    pub purchase_price: f64,      // 2_000_000
    pub renovation: f64,          // 300_000
    pub member_bonds: f64,        // 700_000  (mature-couple home equity)
    pub bond_rate: f64,           // 0.05
    pub member_equity: f64,       // 200_000  (limited-equity shares)
    pub mortgage_rate: f64,       // 0.065
    pub mortgage_term_years: u32, // 30
    pub units: u32,               // 8
    pub internal_rent_monthly: f64,     // 1_200
    pub commercial_rent_monthly: f64,   // 3_000
    pub tax_ins_maint: f64,             // 56_000  (annual)
    pub enterprise_recapture: f64,      // 62_000  (restaurant: see §4)
    pub building_share: f64,            // 0.80  (depreciable fraction)
}

#[derive(Serialize, Deserialize)]
pub struct NodeResult {
    pub mortgage_principal: f64,
    pub mortgage_annual: f64,
    pub bond_interest: f64,
    pub carry_total: f64,
    pub residential_income: f64,
    pub commercial_income: f64,
    pub income_total: f64,
    pub asset_layer_net: f64,      // negative = needs the enterprise layer
    pub node_net_with_enterprise: f64,
    pub annual_depreciation: f64,  // the "SMB owner" paper loss
}

fn annual_mortgage_payment(principal: f64, annual_rate: f64, years: u32) -> f64 {
    if principal <= 0.0 { return 0.0; }
    let r = annual_rate / 12.0;
    let n = (years * 12) as f64;
    let m = principal * r * (1.0 + r).powf(n) / ((1.0 + r).powf(n) - 1.0);
    m * 12.0
}

pub fn compute(cfg: &NodeConfig) -> NodeResult {
    let project = cfg.purchase_price + cfg.renovation;
    let mortgage_principal = project - cfg.member_bonds - cfg.member_equity;
    let mortgage_annual = annual_mortgage_payment(mortgage_principal, cfg.mortgage_rate, cfg.mortgage_term_years);
    let bond_interest = cfg.member_bonds * cfg.bond_rate;
    let carry_total = mortgage_annual + bond_interest + cfg.tax_ins_maint;

    let residential_income = cfg.units as f64 * cfg.internal_rent_monthly * 12.0;
    let commercial_income = cfg.commercial_rent_monthly * 12.0;
    let income_total = residential_income + commercial_income;

    let asset_layer_net = income_total - carry_total;
    let node_net_with_enterprise = asset_layer_net + cfg.enterprise_recapture;
    let annual_depreciation = cfg.purchase_price * cfg.building_share / 27.5;

    NodeResult {
        mortgage_principal, mortgage_annual, bond_interest, carry_total,
        residential_income, commercial_income, income_total,
        asset_layer_net, node_net_with_enterprise, annual_depreciation,
    }
}

#[wasm_bindgen]
pub fn compute_node(config: JsValue) -> Result<JsValue, JsValue> {
    let cfg: NodeConfig = serde_wasm_bindgen::from_value(config)?;
    let result = compute(&cfg);
    Ok(serde_wasm_bindgen::to_value(&result)?)
}

#[cfg(test)]
mod tests {
    use super::*;
    #[test]
    fn node_one_reproduces_the_worked_example() {
        let cfg = NodeConfig {
            purchase_price: 2_000_000.0, renovation: 300_000.0,
            member_bonds: 700_000.0, bond_rate: 0.05, member_equity: 200_000.0,
            mortgage_rate: 0.065, mortgage_term_years: 30, units: 8,
            internal_rent_monthly: 1_200.0, commercial_rent_monthly: 3_000.0,
            tax_ins_maint: 56_000.0, enterprise_recapture: 62_000.0, building_share: 0.80,
        };
        let r = compute(&cfg);
        assert!((r.mortgage_principal - 1_400_000.0).abs() < 1.0);
        assert!((r.mortgage_annual - 106_000.0).abs() < 1_500.0);   // ~$8,850/mo
        assert!(r.asset_layer_net < 0.0);                            // real estate alone is negative
        assert!(r.node_net_with_enterprise > 0.0);                   // enterprise layer tips it positive
        assert!((r.annual_depreciation - 58_182.0).abs() < 50.0);
    }
}
```

Run the tests natively (fast feedback, no WASM needed):
```bash
cargo test
```

Build the WASM package straight into the frontend:
```bash
wasm-pack build --target web --out-dir ../web/src/wasm
```

---

## 3. The frontend (`web/`)

```bash
cd ..                       # back to repo root
npm create vite@latest web -- --template react-ts
cd web
npm install
npm install recharts        # before/after bar charts (or @observablehq/plot)
```

Build the WASM first (from `model/`, as in §2) so `web/src/wasm/` exists, then call it. Minimal
end-to-end slice in `web/src/App.tsx`:
```tsx
import { useEffect, useState } from "react";
import init, { compute_node } from "./wasm/commune_model";
// Vite gotcha: pass the .wasm URL explicitly so init() finds it after bundling
import wasmUrl from "./wasm/commune_model_bg.wasm?url";

const NODE_ONE = {
  purchase_price: 2_000_000, renovation: 300_000,
  member_bonds: 700_000, bond_rate: 0.05, member_equity: 200_000,
  mortgage_rate: 0.065, mortgage_term_years: 30, units: 8,
  internal_rent_monthly: 1_200, commercial_rent_monthly: 3_000,
  tax_ins_maint: 56_000, enterprise_recapture: 62_000, building_share: 0.80,
};

export default function App() {
  const [result, setResult] = useState<any>(null);
  useEffect(() => { init(wasmUrl).then(() => setResult(compute_node(NODE_ONE))); }, []);
  if (!result) return <p>loading engine…</p>;
  return <pre>{JSON.stringify(result, null, 2)}</pre>;
}
```

```bash
npm run dev
```

You should see Node #1's numbers: ~$1.4M mortgage, negative asset-layer net, positive node-net
once the enterprise layer is added, ~$58k depreciation. **That confirms the Rust→WASM→TS pipeline
works** — now build the real UI (sliders for each config field, the per-persona before/after).

> If `init(wasmUrl)` gives trouble, the alternative is `wasm-pack build --target bundler` plus
> `npm i -D vite-plugin-wasm vite-plugin-top-level-await` wired into `vite.config.ts`. The
> `--target web` + explicit URL above avoids that for most setups.

---

## 4. The model spec to implement (from our design sessions)

The §2 stub does the asset layer. Flesh out the rest in `model/src/lib.rs`:

**Capital stack** → mortgage principal = (purchase + reno) − bonds − member equity. Amortize at
`mortgage_rate` / `mortgage_term_years`.

**Asset layer (annual):**
- Carry = mortgage P&I + bond interest (`bonds × bond_rate`) + tax/insurance/maintenance.
- Income = `units × internal_rent × 12` + `commercial_rent × 12`.
- Asset-layer net is **negative at below-market rents** — that's expected and is the whole point.

**Enterprise layer (what tips it positive):** restaurant margin recaptured by internalizing
extraction — card processing (Square ~3% → ~0.9% at cost), working capital (MCA ~50% APR → ~6%
member pool), bookkeeping (QuickBooks → ledger byproduct), procurement/waste from baseload demand.
~$62k/yr total in the worked example (treat the procurement piece as a *soft* input the user can
dial down).

**Trades co-op (export sector):** worker co-op, ~5 field workers. Two streams: (a) internal
markup recapture — member discount (cost+10% vs market cost+40–50%), ~$60k saved per ~$300k reno;
(b) external surplus ~$40–90k. Model it as careers + a solidarity contribution to a federation
reserve, **not** a subsidy to the rent roll.

**Per-persona before/after (the hero output).** For each persona, compute annual net change:
| Persona | Before | After | Net |
|---|---|---|---|
| Mature couple | equity dead in a house, $0 yield | bond yield (`stake × bond_rate`) + maint-free unit + care credit | + yield + liquidity |
| Young professional | market rent, $0 equity | internal occupancy + portable equity share | rent saved + equity built |
| Young family | market rent + childcare | occupancy + childcare cleared in credit | ~ rent + childcare freed |
| Bartender/grocer | market rent on low income | part-cash, part-labor-credit rent + ground-lease security | cash rent saved + can't be displaced |
| Restaurant owner | drowning under extraction | recaptured margin + labor support + exitable stake | survival + liquidity |

Make every persona input-driven (their actual rent, income, equity, childcare, hours) so the
output is *their* number.

**Tax layer (the "SMB owner" engine):** straight-line depreciation = `purchase × building_share /
27.5`. Show the paper loss and the ~marginal-rate benefit. Note in the UI: usable against ordinary
income only under PAL §469 (real-estate-professional members, or passive income) — don't overstate.

**Federation layer (v3) — parameters DECIDED (defaults below; all are governance-tunable UI knobs):**

*1. Unit of account — a USD-pegged credit, `1 CC = $1`.* Keep the unit fiat-legible (mortgages,
trades sales, taxes are all USD) so it clears cleanly across nodes. The commune politics live in
the **conversion rates, not the unit**:
- Labor credited on a **compressed schedule**: egalitarian floor for care/community/unskilled work
  (default 25 CC/hr); specialized work capped at **2× the floor** (50 CC/hr) — never market rate.
  *Compression ratio is the central political knob: 1:1 = TimeBank/commune end, ∞ = market end.*
- **Demurrage** on positive balances (default 5%/yr) so credit can't accumulate into capital.
- **Needs-based** negative limits (overdraft set by recognized need, not collateral).

*2. Inter-node clearing — a Bancor/Keynes symmetric clearing union.* Each node holds a CC clearing
account at the federation (starts at 0); inter-node trades move CC between accounts. Each node gets
a **quota** = its annual internal turnover. **Symmetric carrying charges** on imbalance, applied to
BOTH chronic-surplus and chronic-deficit nodes (so adjustment isn't only the weak node's burden):
- within ±25% of quota: 0%  ·  beyond ±25%: 1%/yr  ·  beyond ±50%: 2%/yr  ·  beyond ±75%:
  mandatory settlement/review.
Surplus nodes are pushed to reinvest into the network (fund the next acquisition); deficit nodes to
export more or settle. A distress **jubilee valve** mirrors the intra-node needs principle.

*3. Portable stake — three stakes, three transfer rules (node A → B):*
- **Credit balance (CC):** instantly portable via the clearing union (subject to demurrage).
- **Member bond:** bought out by the **federation redemption facility** (market-maker of last
  resort), re-issued at B. Governed against a bank run: 90-day notice, ≤10%/yr of a node's bond
  stock redeemable, backstopped by the **federation reserve**.
- **Limited-equity share:** valued by **formula, not market** (original + indexed appreciation +
  documented improvements, capped); the PPT golden share enforces the formula and blocks flipping.
- **Standing/reputation:** follows the member and **carries the jubilee** (a depleted season is
  forgiven — a positive track record, never a punitive credit score).

The **federation reserve** is the linchpin (it backstops redemptions). Funded by: trades solidarity
contributions (~10% of co-op surplus) + the Bancor imbalance charges (#2) + a slice of each node's
operating surplus. The parameters interlock: clearing charges (#2) fund the reserve that powers
portability (#3), all denominated in the unit (#1).

*Model shape:* `Node` is the primitive; `Federation { nodes: Vec<Node>, clearing: ClearingUnion,
reserve: f64 }`; a `clear(&mut self)` step applies inter-node settlement + carrying charges +
demurrage each period; `Member::transfer(from, to)` moves CC instantly and queues bond/share
redemption against the reserve. Expose floor, cap, demurrage rate, quota bands, notice period, and
redemption cap as UI knobs — letting friends slide the commune↔market dial *is* the tool.

---

## 5. Cloudflare Worker + D1 (v1.5 — persistence & sharing)

The tool runs fully client-side before this. Add D1 when you want **named, saved, shared**
scenarios. *(Provisioning touches the Cloudflare account — run these yourself.)*

```bash
cd ..                       # repo root
npm create cloudflare@latest worker -- --type hello-world --ts
cd worker
npx wrangler d1 create commune-scenarios     # prints a database_id — copy it
```

`worker/wrangler.jsonc`:
```jsonc
{
  "name": "commune-api",
  "main": "src/index.ts",
  "compatibility_date": "2025-01-01",
  "d1_databases": [
    { "binding": "DB", "database_name": "commune-scenarios", "database_id": "PASTE_ID_HERE" }
  ]
}
```

`worker/migrations/0001_init.sql`:
```sql
CREATE TABLE scenarios (
  id          TEXT PRIMARY KEY,         -- short share slug
  name        TEXT NOT NULL,
  config_json TEXT NOT NULL,            -- the NodeConfig / FederationConfig
  created_at  INTEGER NOT NULL DEFAULT (unixepoch())
);
```

```bash
npx wrangler d1 migrations apply commune-scenarios --local    # local dev
# later, for production:
# npx wrangler d1 migrations apply commune-scenarios --remote
```

`worker/src/index.ts` — minimal save/load API:
```ts
export default {
  async fetch(req: Request, env: { DB: D1Database }): Promise<Response> {
    const url = new URL(req.url);
    if (req.method === "POST" && url.pathname === "/api/scenarios") {
      const { name, config } = await req.json();
      const id = crypto.randomUUID().slice(0, 8);
      await env.DB.prepare("INSERT INTO scenarios (id, name, config_json) VALUES (?, ?, ?)")
        .bind(id, name, JSON.stringify(config)).run();
      return Response.json({ id });
    }
    const m = url.pathname.match(/^\/api\/scenarios\/(\w+)$/);
    if (req.method === "GET" && m) {
      const row = await env.DB.prepare("SELECT name, config_json FROM scenarios WHERE id = ?")
        .bind(m[1]).first<{ name: string; config_json: string }>();
      return row
        ? Response.json({ name: row.name, config: JSON.parse(row.config_json) })
        : new Response("not found", { status: 404 });
    }
    return new Response("not found", { status: 404 });
  },
};
```

```bash
npx wrangler dev --local        # test the API locally against local D1
```

> Before D1, sharing can be **URL-encoded** (base64 the config into the query string) — zero
> backend. D1 only earns its place once you want a gallery of saved scenarios.

---

## 6. Dev workflow (day to day)

```bash
# terminal 1 — rebuild the engine on Rust changes
cd model && cargo watch -s "wasm-pack build --target web --out-dir ../web/src/wasm"
#   (cargo install cargo-watch once, if needed)

# terminal 2 — frontend
cd web && npm run dev

# terminal 3 — worker + local D1 (only when working on persistence)
cd worker && npx wrangler dev --local
```

Always `cargo test` in `model/` — the native tests are your fast correctness check; the WASM
build just ships the same validated code to the browser.

---

## 7. Deploy (when ready)

```bash
cd model && wasm-pack build --target web --out-dir ../web/src/wasm
cd ../web && npm run build               # -> web/dist
# deploy the worker (+ static assets) to Cloudflare:
cd ../worker && npx wrangler deploy
```
Serve the built `web/dist` via Cloudflare Workers static assets or Cloudflare Pages, with the
Worker handling `/api/*`. Point `commune.ai` at it.

---

## 8. First milestone checklist

- [ ] `cargo test` green — Node #1 reproduces the worked numbers
- [ ] `wasm-pack build` outputs to `web/src/wasm/`
- [ ] `npm run dev` renders Node #1's result from the WASM engine
- [ ] Replace the `<pre>` with input controls + a per-persona before/after view
- [ ] URL-encode a scenario to share with a friend
- [ ] (v1.5) D1 save/load
- [ ] (v2) stress tests  ·  (v3) federation clearing — after the three open parameters are chosen
