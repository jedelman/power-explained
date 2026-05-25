import fs from "fs";
const MC="/tmp/mc";
const agg=JSON.parse(fs.readFileSync(MC+"/aggregated.json","utf8"));
const sample=JSON.parse(fs.readFileSync(MC+"/full-sample.json","utf8"));
const pOf=Object.fromEntries(sample.map(s=>[s.id,s.plateau]));
const rOf=Object.fromEntries(sample.map(s=>[s.id,s.register]));
const ORDER=["P-PR","P-01","P-02","P-IB","P-03","P-IW","P-04","P-GC","P-05","P-06","P-07","P-08","P-OA","P-09","P-10","P-11","P-12","P-13","P-AB","P-14","P-15","P-RE","P-16","P-16b","P-17","P-18","P-WW","P-CE","P-EP"];
const LBL={"P-PR":"prologue","P-IB":"int·barça","P-IW":"int·wash","P-GC":"goetia","P-OA":"orgone","P-AB":"angel·bk","P-RE":"reench","P-WW":"wiz·walk","P-CE":"centaur","P-EP":"epilogue"};
const REGS=["spine","theory","constructive","lyrical"];

function rows(fam,k){return agg[fam].filter(c=>c.gestures.length>=2).slice(0,k);}
function gridByPlateau(fam,k,title){
  const rs=rows(fam,k);
  const cell={};let max=1;
  for(const c of rs){const m={};for(const g of c.gestures){const p=pOf[g];if(p)m[p]=(m[p]||0)+1;}cell[c.label]=m;max=Math.max(max,...Object.values(m));}
  let h=`<h2>${title}</h2><table><thead><tr><th class=rl></th>`;
  for(const p of ORDER)h+=`<th class=ch><span>${LBL[p]||p.replace("P-","")}</span></th><\/th>`;
  h+=`<th class=rl>reg</th></tr></thead><tbody>`;
  for(const c of rs){
    h+=`<tr><td class=rl>${c.label.split("/")[1]}</td>`;
    for(const p of ORDER){const v=cell[c.label][p]||0;const a=v?(0.15+0.85*v/max):0;h+=`<td class=cell style="background:rgba(196,72,40,${a.toFixed(3)})" title="${p}: ${v}">${v||""}</td>`;}
    const nr=c.registers.length;const rc=nr>=4?"#7fd17f":nr===3?"#ccb15a":nr===2?"#c98a4a":"#7a6a55";
    h+=`<td class=rl style="color:${rc}">${nr}r</td></tr>`;
  }
  return h+`</tbody></table>`;
}
function affectByRegister(){
  const rs=agg.affect.filter(c=>c.gestures.length>=3).slice(0,18);
  const cell={};let max=1;
  for(const c of rs){const m={};for(const g of c.gestures){const r=rOf[g];if(r)m[r]=(m[r]||0)+1;}cell[c.label]=m;max=Math.max(max,...Object.values(m));}
  let h=`<h2>affect × register — the emotional palette across the book's four modes</h2><table><thead><tr><th class=rl></th>`;
  for(const r of REGS)h+=`<th class=chh>${r}</th>`;
  h+=`<th class=rl>reach</th></tr></thead><tbody>`;
  for(const c of rs){
    h+=`<tr><td class=rl>${c.label.split("/")[1]}</td>`;
    for(const r of REGS){const v=cell[c.label][r]||0;const a=v?(0.15+0.85*v/max):0;h+=`<td class=cell wide style="background:rgba(70,150,90,${a.toFixed(3)})" title="${r}: ${v}">${v||""}</td>`;}
    h+=`<td class=rl>${c.registers.length}/4</td></tr>`;
  }
  return h+`</tbody></table>`;
}
const html=`<!doctype html><meta charset=utf8><title>power · tier-2 monte carlo</title>
<style>
 body{background:#14110e;color:#d8cfc4;font:13px/1.4 ui-monospace,Menlo,monospace;margin:24px}
 h1{font-size:18px;color:#e6b07a}h2{font-size:13px;color:#c7a06a;margin:26px 0 6px;letter-spacing:.3px}
 table{border-collapse:collapse;margin-bottom:8px}
 .rl{text-align:right;padding:0 8px 0 0;color:#b8ab9b;white-space:nowrap;font-size:12px}
 th.ch{height:80px;vertical-align:bottom;padding:0}
 th.ch span{display:inline-block;transform:rotate(-60deg);transform-origin:left bottom;white-space:nowrap;color:#9a8f80;font-size:11px;width:14px}
 th.chh{padding:0 6px;color:#9a8f80;font-size:11px;text-align:center}
 td.cell{width:22px;height:18px;text-align:center;font-size:10px;color:#1c140e;border:1px solid #1c1814}
 td.cell.wide{width:64px}
 .reading{color:#7a7064;font-size:11px;margin:2px 0 18px}
</style>
<h1>Power, Explained — Tier-2 Monte Carlo (285 gestures × 3 blind passes)</h1>
<div class=reading>image/motif cells = # sampled gestures carrying that tag in each plateau (reading order) · last column = # registers the tag crosses (green=all 4) · affect panel shows spread across the book's four registers</div>
${affectByRegister()}
${gridByPlateau("image",30,"images — where each recurs across the book")}
${gridByPlateau("motif",24,"motifs — figurative patterns across the book")}
<p class=reading>Generated from the Monte Carlo aggregate. Near-synonym clusters (herons/willow-oaks, armor/shrug/floor) are not yet consolidated — that is the distillation step.</p>`;
fs.writeFileSync(MC+"/tier2-montecarlo.html",html);
console.log("wrote "+MC+"/tier2-montecarlo.html ("+html.length+" bytes)");
