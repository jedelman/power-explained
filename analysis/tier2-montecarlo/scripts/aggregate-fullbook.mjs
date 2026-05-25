import fs from "fs";
import yaml from "/home/user/power-explained/node_modules/js-yaml/index.js";
const SW="/tmp/swarm", REPO="/home/user/power-explained";
const vocab=yaml.load(fs.readFileSync(REPO+"/analysis/tier2-montecarlo/vocab.yml","utf8"));
const all=JSON.parse(fs.readFileSync(SW+"/all-gestures.json","utf8"));
const pOf=Object.fromEntries(all.map(g=>[g.id,g.plateau]));
const ORDER=["P-PR","P-01","P-02","P-IB","P-03","P-IW","P-04","P-GC","P-05","P-06","P-07","P-08","P-OA","P-09","P-10","P-11","P-12","P-13","P-AB","P-14","P-15","P-RE","P-16","P-16b","P-17","P-18","P-WW","P-CE","P-EP"];
const FAMS=["image","motif","affect","practice"];

// canonical keys + variant->canonical map
const canon={}, var2canon={};
for(const fam of FAMS){canon[fam]=new Set(Object.keys(vocab[fam]));
  for(const [k,v] of Object.entries(vocab[fam])){for(const va of (v.variants||[]))var2canon[fam+"/"+va]=fam+"/"+k;}}
const isCanon=t=>{const[f,k]=t.split("/");return canon[f]&&canon[f].has(k);};

// load shards
const files=fs.readdirSync(SW).filter(f=>/^out-\d+\.json$/.test(f));
const byGest={}; let raw=0, remapped=0, offvocab={}, proposed={}, tagged=0;
const missing=new Set(all.map(g=>g.id));
for(const f of files){let d;try{d=JSON.parse(fs.readFileSync(SW+"/"+f,"utf8"));}catch(e){console.log("BROKEN",f);continue;}
  for(const g of (d.gestures||[])){missing.delete(g.id);
    if(!byGest[g.id])byGest[g.id]={id:g.id,plateau:pOf[g.id],tags:[]};
    if((g.tags||[]).length)tagged++;
    for(const t of (g.tags||[])){raw++;let tag=t.tag;
      if(tag.startsWith("proposed/")){proposed[tag]=(proposed[tag]||0)+1;byGest[g.id].tags.push({tag,evidence:t.evidence,proposed:true});continue;}
      if(isCanon(tag)){byGest[g.id].tags.push({tag,evidence:t.evidence});continue;}
      if(var2canon[tag]){tag=var2canon[tag];remapped++;byGest[g.id].tags.push({tag,evidence:t.evidence});continue;}
      const seg=tag.split("/"), f=seg[0], key=seg.slice(1).join("/");
      if(FAMS.includes(f)){const p="proposed/"+tag;proposed[p]=(proposed[p]||0)+1;byGest[g.id].tags.push({tag:p,evidence:t.evidence,proposed:true});continue;}
      let rec=null;for(const fam of FAMS){if(canon[fam].has(tag)){rec=fam+"/"+tag;break;}if(key&&canon[fam].has(key)){rec=fam+"/"+key;break;}}
      if(rec){remapped++;byGest[g.id].tags.push({tag:rec,evidence:t.evidence});continue;}
      offvocab[tag]=(offvocab[tag]||0)+1;
    }}}
console.log(`shards loaded: ${files.length}/20 · raw tags: ${raw} · variant→canonical remaps: ${remapped}`);
console.log(`gestures present: ${Object.keys(byGest).length}/${all.length}` + (missing.size?` · MISSING: ${[...missing].slice(0,8).join(",")}${missing.size>8?"…":""}`:""));
const off=Object.keys(offvocab); console.log(`off-vocabulary tags: ${off.length}`+(off.length?" → "+off.slice(0,12).map(t=>t+"("+offvocab[t]+")").join(", "):""));
console.log(`proposed/ tags: ${Object.keys(proposed).length}`+(Object.keys(proposed).length?" → "+Object.entries(proposed).sort((a,b)=>b[1]-a[1]).slice(0,12).map(([t,n])=>t.replace("proposed/","")+"("+n+")").join(", "):""));

// per-family coverage + frequency
const freq={}; for(const fam of FAMS)freq[fam]={};
const cov={}; for(const fam of FAMS)cov[fam]=new Set();
let tagsPer=[];
for(const g of Object.values(byGest)){tagsPer.push(g.tags.length);
  for(const t of g.tags){const[f]=t.tag.split("/");if(FAMS.includes(f)){freq[f][t.tag]=(freq[f][t.tag]||0)+1;cov[f].add(g.id);}}}
const N=Object.keys(byGest).length;
console.log(`\ncoverage: ${tagged}/${N} gestures got ≥1 tag (${(100*tagged/N).toFixed(0)}%) · avg ${(tagsPer.reduce((a,b)=>a+b,0)/N).toFixed(1)} tags/gesture`);
for(const fam of FAMS)console.log(`  ${fam.padEnd(9)} on ${String(cov[fam].size).padStart(3)} gestures · ${Object.keys(freq[fam]).length} distinct tags used`);

for(const fam of FAMS){
  console.log(`\n=== ${fam.toUpperCase()} — top across full book (gesture count) ===`);
  const rows=Object.entries(freq[fam]).sort((a,b)=>b[1]-a[1]);
  for(const [t,n] of rows.slice(0,12)){
    const plats=new Set(Object.values(byGest).filter(g=>g.tags.some(x=>x.tag===t)).map(g=>g.plateau));
    console.log(`  ${String(n).padStart(3)}g  ${String(plats.size).padStart(2)}pl  ${t.split("/")[1]}`);
  }
}

// write the deliverable dataset (sorted reading order)
const ordered=all.map(g=>byGest[g.id]).filter(Boolean);
fs.writeFileSync(SW+"/gesture-tags.json",JSON.stringify(ordered,null,2));
// binding map: image+motif -> plateaus across full book
const binding={};
for(const fam of ["image","motif"])for(const t of Object.keys(freq[fam])){
  const plats=[...new Set(Object.values(byGest).filter(g=>g.tags.some(x=>x.tag===t)).map(g=>g.plateau))].sort((a,b)=>ORDER.indexOf(a)-ORDER.indexOf(b));
  if(plats.length>=2)binding[t]={plateaus:plats,gestures:freq[fam][t]};}
fs.writeFileSync(SW+"/binding-map.json",JSON.stringify(binding,null,2));
console.log(`\nwrote gesture-tags.json (${ordered.length} gestures) + binding-map.json (${Object.keys(binding).length} cross-plateau images/motifs)`);
