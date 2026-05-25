import fs from "fs";

const MC = "/tmp/mc";
const sample = JSON.parse(fs.readFileSync(MC + "/full-sample.json", "utf8"));
const meta = Object.fromEntries(sample.map(s => [s.id, { plateau: s.plateau, register: s.register }]));
const ORDER = ["P-PR","P-01","P-02","P-IB","P-03","P-IW","P-04","P-GC","P-05","P-06","P-07","P-08","P-OA","P-09","P-10","P-11","P-12","P-13","P-AB","P-14","P-15","P-RE","P-16","P-16b","P-17","P-18","P-WW","P-CE","P-EP"];

// load every shard-*-pass-*.json that exists
const files = fs.readdirSync(MC).filter(f => /^shard-\d+-pass-[ABC]\.json$/.test(f));
const inst = [];
let loaded = 0, broken = [];
for (const f of files) {
  let data;
  try { data = JSON.parse(fs.readFileSync(MC + "/" + f, "utf8")); }
  catch (e) { broken.push(f); continue; }
  loaded++;
  for (const g of (data.gestures||[])) for (const t of (g.tags||[])) {
    const fam = t.tag.split("/")[0];
    if (!["image","motif","affect"].includes(fam)) continue;
    inst.push({ fam, tag: t.tag, pass: data.pass, gid: g.id,
      plateau: meta[g.id]?.plateau, register: meta[g.id]?.register });
  }
}
console.log(`loaded ${loaded}/18 pass-files` + (broken.length?` (BROKEN: ${broken.join(",")})`:"") + `, ${inst.length} tag instances`);
const gotPasses = new Set(inst.map(i => i.gid + ":" + i.pass));
const fullyCovered = sample.filter(s => ["A","B","C"].every(p => gotPasses.has(s.id+":"+p))).length;
console.log(`gestures with all 3 passes: ${fullyCovered}/${sample.length}`);

// normalize + cluster within family
const STOP = new Set(["the","a","an","of","on","and","in","to","by","is","as","that","its","his","her","with","for","at","not"]);
const tok = tag => new Set(tag.split("/")[1].split("-").filter(w => w && !STOP.has(w)));
const jac = (a,b)=>{let i=0;for(const x of a)if(b.has(x))i++;return i/(a.size+b.size-i||1);};
const sub = (a,b)=>{for(const x of b)if(!a.has(x))return false;return true;};

function cluster(fam) {
  const items = inst.filter(x => x.fam === fam).map(x => ({...x, tk: tok(x.tag)}));
  const used = new Array(items.length).fill(false), out = [];
  for (let i=0;i<items.length;i++){
    if(used[i])continue;
    const grp=[items[i]]; used[i]=true;
    for(let j=i+1;j<items.length;j++){
      if(used[j])continue;
      const a=items[i].tk,b=items[j].tk;
      if(jac(a,b)>=0.5 || (b.size&&sub(a,b)) || (a.size&&sub(b,a))){ grp.push(items[j]); used[j]=true; }
    }
    const label = grp.map(x=>x.tag).sort((a,b)=>a.length-b.length)[0];
    out.push({ fam, label,
      n: grp.length,
      gestures: new Set(grp.map(g=>g.gid)),
      plateaus: new Set(grp.map(g=>g.plateau)),
      registers: new Set(grp.map(g=>g.register)),
      // max pass-agreement on any single gesture
      maxPass: Math.max(...[...new Set(grp.map(g=>g.gid))].map(gid =>
        new Set(grp.filter(g=>g.gid===gid).map(g=>g.pass)).size)),
      variants: [...new Set(grp.map(g=>g.tag))] });
  }
  return out.sort((a,b)=> b.gestures.size-a.gestures.size || b.n-a.n);
}

const RES = { image: cluster("image"), motif: cluster("motif"), affect: cluster("affect") };

for (const fam of ["image","motif","affect"]) {
  console.log(`\n===== ${fam.toUpperCase()} — top by recurrence =====`);
  console.log("gest plat reg maxP  label");
  for (const c of RES[fam].slice(0, fam==="affect"?20:30)) {
    if (c.gestures.size < 2 && c.maxPass < 2) continue;
    console.log(`  ${String(c.gestures.size).padStart(3)} ${String(c.plateaus.size).padStart(3)} ${String(c.registers.size).padStart(3)}  ${c.maxPass}/3  ${c.label.split("/")[1]}`);
  }
}

console.log("\n===== REGISTER-CROSSING BINDING IMAGES/MOTIFS (≥2 registers, ≥2 gestures) =====");
const cross = [...RES.image, ...RES.motif].filter(c => c.registers.size>=2 && c.gestures.size>=2)
  .sort((a,b)=> b.registers.size-a.registers.size || b.gestures.size-a.gestures.size);
for (const c of cross.slice(0,40))
  console.log(`  ${c.label.padEnd(32)} ${c.gestures.size}g · ${c.registers.size} registers [${[...c.registers].join(", ")}] · ${c.plateaus.size} plateaus`);

// write distilled candidate vocab + the data blob for the heatmap
const dump = {};
for (const fam of ["image","motif","affect"]) dump[fam] = RES[fam].map(c => ({
  label:c.label, gestures:[...c.gestures], plateaus:[...c.plateaus], registers:[...c.registers],
  n:c.n, maxPass:c.maxPass, variants:c.variants }));
fs.writeFileSync(MC + "/aggregated.json", JSON.stringify(dump, null, 2));
console.log("\nwrote " + MC + "/aggregated.json");
