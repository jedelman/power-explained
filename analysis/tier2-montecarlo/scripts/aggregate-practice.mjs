import fs from "fs";
const MC="/tmp/mc";
const sample=JSON.parse(fs.readFileSync(MC+"/pr-full-sample.json","utf8"));
const meta=Object.fromEntries(sample.map(s=>[s.id,{plateau:s.plateau,dense:s.dense}]));
const ORDER=["P-PR","P-01","P-02","P-IB","P-03","P-IW","P-04","P-GC","P-05","P-06","P-07","P-08","P-OA","P-09","P-10","P-11","P-12","P-13","P-AB","P-14","P-15","P-RE","P-16","P-16b","P-17","P-18","P-WW","P-CE","P-EP"];
const PALETTE=new Set(["becoming-still","naming","greeting","welcoming","grieving","attending","holding","descending","de-armoring","blessing","witnessing","tending","gathering","refusing","remembering"]);

const files=fs.readdirSync(MC).filter(f=>/^pr-shard-\d+-pass-[ABC]\.json$/.test(f));
const inst=[];let loaded=0;
for(const f of files){let d;try{d=JSON.parse(fs.readFileSync(MC+"/"+f,"utf8"));}catch(e){console.log("BROKEN",f);continue;}loaded++;
  for(const g of (d.gestures||[]))for(const t of (g.tags||[])){
    if(!t.tag||!t.tag.startsWith("practice/"))continue;
    inst.push({tag:t.tag.slice(9),pass:d.pass,gid:g.id,plateau:meta[g.id]?.plateau,dense:meta[g.id]?.dense,ev:t.evidence});
  }}
console.log(`loaded ${loaded}/15 files · ${inst.length} practice tag-instances`);
const cov=sample.filter(s=>["A","B","C"].every(p=>inst.some(i=>i.gid===s.id&&i.pass===p))).length;
// note: gestures with empty tags still count as "covered" if the pass ran; approximate via file presence
console.log(`sample ${sample.length} gestures`);

// normalize near-synonym coinages onto palette where obvious
const MAP={ "self-locating":"positioning","self-location":"positioning","locating-self":"positioning",
  "reading-the-world":"attending","noticing":"attending","seeing":"attending","observing":"attending","attention":"attending",
  "stilling":"becoming-still","stillness":"becoming-still","quieting":"becoming-still","pausing":"becoming-still","silence":"becoming-still",
  "mourning":"grieving","softening":"de-armoring","unclenching":"de-armoring","relaxing":"de-armoring",
  "cultivating":"tending","stewarding":"tending","keeping":"tending","caring":"tending",
  "convening":"gathering","forming-the-circle":"gathering","assembling":"gathering",
  "the-refusal":"refusing","saying-no":"refusing","declining":"refusing",
  "bearing-witness":"witnessing","being-witnessed":"witnessing",
  "hospitality":"welcoming","making-room":"welcoming","hosting":"welcoming",
  "consecrating":"blessing","benediction":"blessing",
  "keeping-the-lineage":"remembering","passing-the-thread":"remembering",
  "self-governance":"self-governing","governing-self":"self-governing",
  "persisting":"continuing","continuation":"continuing","persistence":"continuing",
  "scaffolding":"conditioning","arranging-conditions":"conditioning","conditions":"conditioning",
  "practice":"practicing" };
const norm=t=>MAP[t]||t;

const agg={};
for(const i of inst){const t=norm(i.tag);(agg[t]??={tag:t,gestures:new Set(),plateaus:new Set(),passes:new Set(),n:0,inPalette:PALETTE.has(t),raw:new Set(),ev:[]});
  const a=agg[t];a.n++;a.gestures.add(i.gid);a.plateaus.add(i.plateau);a.passes.add(i.gid+":"+i.pass);a.raw.add(i.tag);if(i.ev&&a.ev.length<3)a.ev.push(i.ev);}
// per-gesture max pass agreement
for(const t in agg){const a=agg[t];const byG={};for(const i of inst)if(norm(i.tag)===t)byG[i.gid]=(byG[i.gid]||new Set()).add(i.pass);
  a.maxPass=Math.max(...Object.values(byG).map(s=>s.size));a.gAll3=Object.values(byG).filter(s=>s.size===3).length;}

const rows=Object.values(agg).sort((a,b)=>b.gestures.size-a.gestures.size||b.n-a.n);
console.log("\n=== PRACTICE — ranked by recurrence (★=in palette, +=newly coined) ===");
console.log("gest  pla  inst  3/3  maxP  practice");
for(const a of rows){if(a.gestures.size<2 && a.maxPass<2)continue;
  console.log(`${String(a.gestures.size).padStart(4)} ${String(a.plateaus.size).padStart(4)} ${String(a.n).padStart(5)} ${String(a.gAll3).padStart(4)}  ${a.maxPass}/3  ${a.inPalette?"★":"+"} ${a.tag}${a.raw.size>1?"  ‹"+[...a.raw].filter(r=>r!==a.tag).slice(0,4).join(", ")+"›":""}`);}

console.log("\n=== NEWLY COINED (not in palette), with sample evidence ===");
for(const a of rows.filter(a=>!a.inPalette && a.gestures.size>=1).sort((x,y)=>y.gestures.size-x.gestures.size)){
  console.log(`  + ${a.tag.padEnd(20)} ${a.gestures.size}g ${a.maxPass}/3  e.g. "${(a.ev[0]||"").slice(0,60)}"`);}

const dump=rows.map(a=>({tag:a.tag,inPalette:a.inPalette,gestures:[...a.gestures],plateaus:[...a.plateaus],n:a.n,maxPass:a.maxPass,gAll3:a.gAll3,raw:[...a.raw],ev:a.ev}));
fs.writeFileSync(MC+"/practice-aggregated.json",JSON.stringify(dump,null,2));
console.log("\nwrote practice-aggregated.json");
