import fs from "fs";
const SW="/tmp/swarm";
const gts=JSON.parse(fs.readFileSync(SW+"/gesture-tags.json","utf8"));
const ORDER=["P-PR","P-01","P-02","P-IB","P-03","P-IW","P-04","P-GC","P-05","P-06","P-07","P-08","P-OA","P-09","P-10","P-11","P-12","P-13","P-AB","P-14","P-15","P-RE","P-16","P-16b","P-17","P-18","P-WW","P-CE","P-EP"];
const LBL={"P-PR":"prol","P-IB":"i·bcn","P-IW":"i·wash","P-GC":"goet","P-OA":"orgo","P-AB":"angel","P-RE":"reen","P-WW":"wlk","P-CE":"cent","P-EP":"epi"};
const FAM={image:{},motif:{},affect:{},practice:{}};
for(const g of gts)for(const t of g.tags){const[f,k]=t.tag.split("/");if(FAM[f]){(FAM[f][k]??={});FAM[f][k][g.plateau]=(FAM[f][k][g.plateau]||0)+1;}}
function panel(fam,title,color,topN){
  const rows=Object.entries(FAM[fam]).map(([k,m])=>[k,m,Object.values(m).reduce((a,b)=>a+b,0),Object.keys(m).length])
    .sort((a,b)=>b[2]-a[2]).slice(0,topN);
  let max=1;for(const[,m]of rows)max=Math.max(max,...Object.values(m));
  let h=`<h2>${title}</h2><table><thead><tr><th class=rl></th>`;
  for(const p of ORDER)h+=`<th class=ch><span>${LBL[p]||p.replace("P-","")}</span></th>`;
  h+=`<th class=rl>Σ</th><th class=rl>pl</th></tr></thead><tbody>`;
  for(const[k,m,tot,np]of rows){h+=`<tr><td class=rl>${k}</td>`;
    for(const p of ORDER){const v=m[p]||0;const a=v?(0.16+0.84*v/max):0;h+=`<td class=c style="background:rgba(${color},${a.toFixed(3)})" title="${p}:${v}">${v||""}</td>`;}
    h+=`<td class=rl>${tot}</td><td class=rl style="color:${np>=20?'#7fd17f':np>=12?'#ccb15a':'#b89'}">${np}</td></tr>`;}
  return h+`</tbody></table>`;
}
const html=`<!doctype html><meta charset=utf8><title>Tier-2 full-book tag map</title><style>
body{background:#14110e;color:#d8cfc4;font:12px/1.35 ui-monospace,Menlo,monospace;margin:22px}
h1{font-size:17px;color:#e6b07a}h2{font-size:12px;color:#c7a06a;margin:24px 0 5px;letter-spacing:.3px}
table{border-collapse:collapse;margin-bottom:6px}.rl{text-align:right;padding:0 7px 0 0;color:#b8ab9b;white-space:nowrap}
th.ch{height:64px;vertical-align:bottom;padding:0}th.ch span{display:inline-block;transform:rotate(-60deg);transform-origin:left bottom;white-space:nowrap;color:#9a8f80;width:13px}
td.c{width:20px;height:16px;text-align:center;font-size:9px;color:#15100b;border:1px solid #1c1814}
.n{color:#7a7064;font-size:11px;margin:2px 0 16px}</style>
<h1>Power / How to Become a Wizard — Tier-2 full-book tag map (911 gestures, 2,613 tags)</h1>
<div class=n>cell = # gestures carrying that tag in each plateau (reading order). Σ = total gestures · pl = # plateaus (green ≥20). 97% of gestures tagged.</div>
${panel("affect","AFFECT — the emotional key, all 29 chapters","150,70,60",12)}
${panel("practice","PRACTICE — the wizard's curriculum (structures the rewrite)","70,150,90",20)}
${panel("image","IMAGE — recurring images across the book","150,110,60",24)}
${panel("motif","MOTIF — figurative through-lines","120,100,160",15)}
<div class=n>Generated from gesture-tags.json. Affect spans every chapter; the practice spine runs attending → naming → building/self-governing.</div>`;
fs.writeFileSync(SW+"/fullbook-tag-map.html",html);
console.log("wrote fullbook-tag-map.html ("+html.length+" bytes)");
