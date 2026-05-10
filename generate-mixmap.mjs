/**
 * generate-mixmap.mjs
 * Offline mix map generator for the Map of Consciousness.
 * Run: node generate-mixmap.mjs
 * Outputs: public/mixmap.json
 *
 * The mix map is a per-pixel significance function that determines
 * which spectral layers are most salient at each point on the map.
 * It is the cartographer's argument about what matters where.
 *
 * Each pixel stores weights [geo, soil, hydro, biome, infra, influence]
 * normalised so the most significant layer reads loudly and the others
 * recede — not silenced, just mixed.
 *
 * The selection function reads:
 *   - Bedrock type (from geology seeds)
 *   - Elevation and slope (from heightmap)
 *   - Proximity and type of nearby features
 *   - Influence overlap / conflict intensity
 *   - Infrastructure proximity and type
 *   - Boundary zone conditions
 */

import { readFileSync, writeFileSync } from 'fs';

// ── Load baked heightmap ──────────────────────────────────────────
const hmJson = JSON.parse(readFileSync('/tmp/pe-deploy/public/heightmap.json','utf8'));
const HMW = hmJson.width, HMH = hmJson.height;
const SEA = hmJson.seaLevel || 0.32;
const HM = new Float32Array(hmJson.data.length);
for (let i=0;i<hmJson.data.length;i++) HM[i]=hmJson.data[i]/65535;

const MW=3200, MH=2400;
const RW=320, RH=240; // mix map resolution = heightmap resolution

// ── Heightmap sampling ────────────────────────────────────────────
function hmSample(wx,wy){
  const hx=(wx/MW)*(HMW-1), hy=(wy/MH)*(HMH-1);
  const x0=Math.floor(hx),y0=Math.floor(hy);
  const x1=Math.min(x0+1,HMW-1),y1=Math.min(y0+1,HMH-1);
  const u=hx-x0,v=hy-y0;
  return HM[y0*HMW+x0]*(1-u)*(1-v)+HM[y0*HMW+x1]*u*(1-v)
        +HM[y1*HMW+x0]*(1-u)*v    +HM[y1*HMW+x1]*u*v;
}

function hmGrad(wx,wy){
  const eps=MW/RW;
  const gx=(hmSample(wx+eps,wy)-hmSample(wx-eps,wy))/(2*eps);
  const gy=(hmSample(wx,wy+eps)-hmSample(wx,wy-eps))/(2*eps);
  return {gx,gy,slope:Math.sqrt(gx*gx+gy*gy)};
}

// ── Noise ─────────────────────────────────────────────────────────
function noise(x,y,seed){
  seed=seed||0;
  const a=Math.sin(x*0.013+seed)*43758.5453;
  const b=Math.sin(y*0.017+seed+1)*29571.3317;
  const c=Math.sin((x+y)*0.009+seed+2)*38472.1177;
  return ((a%1+b%1+c%1)/3+1)/2;
}
function fbm(x,y,oct,seed){
  oct=oct||4;seed=seed||0;
  let v=0,amp=1,freq=1,max=0;
  for(let i=0;i<oct;i++){v+=noise(x*freq,y*freq,seed+i*100)*amp;max+=amp;amp*=0.5;freq*=2.1;}
  return v/max;
}

// ── Geology seed assignment ────────────────────────────────────────
// Types: 0=granite, 1=limestone, 2=clay, 3=sandstone, 4=peat
const GEO_SEEDS=[
  [370,540,1],[750,780,1],[1060,750,1],[1600,1200,1],[900,1550,1],[1200,900,1],
  [380,400,2],[500,1400,2],[820,1400,2],[280,1200,2],[700,240,2],
  [1400,310,0],[840,320,0],[1900,900,0],[820,430,0],[1640,440,0],[1280,360,0],
  [1100,500,3],[1500,700,3],[900,750,3],[1300,1100,3],[620,700,3],
  [2700,600,4],[2700,1100,4],[2500,380,4],
];
function geoAt(wx,wy){
  const nx=wx+(fbm(wx*0.004,wy*0.004,3,77)-0.5)*200;
  const ny=wy+(fbm(wx*0.004,wy*0.004,3,133)-0.5)*200;
  let best=3,bestD=Infinity;
  for(const [gx,gy,t] of GEO_SEEDS){const d=(nx-gx)**2+(ny-gy)**2;if(d<bestD){bestD=d;best=t;}}
  return best;
}

// ── Feature catalogue (map coords) ───────────────────────────────
// Each feature: [wx, wy, radius_of_significance, layer_key, weight_boost]
// layer_key: which layer this feature makes most salient nearby
// weight_boost: how strongly (0-1)
const FEATURES = [
  // Underground entrances → geology loud, influence present
  [370,540,180,'geo',0.9],[750,780,160,'geo',0.85],[1060,750,170,'geo',0.9],
  [1400,880,160,'influence',0.8],[1800,780,160,'geo',0.85],
  [600,1280,150,'soil',0.75],[2050,980,140,'influence',0.8],
  [1600,1200,160,'geo',0.9],[1200,900,150,'geo',0.85],
  [2400,1100,140,'geo',0.8],[900,1550,150,'soil',0.75],

  // Commons settlements → soil + influence loud
  [500,380,200,'soil',0.85],[700,240,180,'soil',0.8],
  [1650,1480,220,'influence',0.9],[460,920,190,'soil',0.85],
  [2200,980,180,'influence',0.85],[280,1200,200,'soil',0.9],
  [820,1400,210,'soil',0.9],[960,1320,140,'infra',0.75],
  [1200,1460,180,'hydro',0.85],[380,1600,160,'infra',0.8],
  [1740,340,160,'soil',0.75],[2100,1480,170,'soil',0.8],
  [700,1600,140,'influence',0.8],

  // Encloser settlements → infrastructure + influence loud
  [1100,490,220,'infra',0.9],[1300,420,200,'infra',0.85],
  [1480,650,190,'influence',0.9],[900,540,210,'influence',0.85],
  [620,700,180,'infra',0.8],

  // Warm ruins → geology + time (biome = succession marker)
  [820,430,200,'geo',0.85],[1280,360,180,'biome',0.8],
  [1640,440,190,'geo',0.85],[1100,1280,200,'biome',0.85],
  [1560,320,170,'infra',0.8],[960,1160,210,'influence',0.9],
  [440,660,220,'soil',0.9], // Atlantic City — soil IS the argument

  // Cold ruins → geology dominant (structural failure)
  [2500,380,200,'geo',0.9],[1860,480,180,'influence',0.8],
  [750,870,190,'soil',0.85],[2300,680,160,'biome',0.7],
  [480,1050,170,'geo',0.75],

  // Wizard figures → influence + biome (they read everything)
  [420,350,160,'influence',0.75],[1680,180,170,'biome',0.75],
  [560,220,150,'influence',0.8],[1400,200,160,'influence',0.8],
  [940,160,150,'biome',0.8],[1960,160,170,'influence',0.75],
  [2340,260,180,'biome',0.85],[760,160,160,'influence',0.8],
  [1160,180,160,'influence',0.8],[620,480,180,'influence',0.85],
  [1800,1060,170,'biome',0.85],[1500,1380,180,'biome',0.9],
  [2080,1340,170,'influence',0.85],[1100,1060,160,'influence',0.9],
  [1300,700,170,'geo',0.8], // Turing — gap-finder, limestone

  // Infrastructure features → infra loud
  [560,800,180,'infra',0.95], // Junction Camp
  [1040,1060,160,'infra',0.9],[880,1540,160,'infra',0.9],
  [960,700,200,'infra',0.95], // Toll crossing — INFRA dominant
  [1060,490,180,'infra',0.9],

  // Boundary zones → their specific layer
  [820,1680,220,'hydro',0.9],  // Salt Marsh — hydro + biome
  [700,880,200,'biome',0.9],   // Hedgerow — biome boundary
  [1780,620,190,'biome',0.85], // Scrubland
  [960,760,210,'influence',0.95], // The Dam — conflict
  [580,1060,200,'geo',0.9],    // Foundation Line — geo thin here

  // Mountains → geo + elevation gradient
  [1400,310,280,'geo',0.95],[840,320,240,'geo',0.9],[1900,900,220,'geo',0.9],

  // Port of Shamans → all layers converge
  [1100,1780,280,'influence',0.85],

  // Waters
  [350,650,120,'hydro',0.85],[600,1200,140,'hydro',0.9],
  [1400,760,160,'hydro',0.9],[760,1380,150,'hydro',0.85],
];

// Layer index mapping
const L = { geo:0, soil:1, hydro:2, biome:3, infra:4, influence:5 };
const NLAYERS = 6;

// ── Significance weights ─────────────────────────────────────────
// Base weights from terrain conditions (before feature proximity)
function baseWeights(wx,wy,elev,geoType,slope,normE){
  const w=new Float32Array(NLAYERS);

  // Geology: loud on steep slopes, at ridgelines, in cave zones, under ruins
  w[L.geo] = 0.15
    + slope*3.0                          // steep → geology explains it
    + (geoType===1?0.35:0)               // limestone → entrances nearby
    + (geoType===4?0.30:0)               // peat → Outside
    + (normE>0.72?0.25:0)               // high ground → bedrock exposed
    + (normE<0.05?0.10:0);              // very low → geology determines drainage

  // Soil: loud in valleys, at commons zones, near water
  w[L.soil] = 0.12
    + Math.max(0,(0.45-normE)*0.8)       // lower → soil matters more
    + (geoType===2?0.30:0)               // clay → soil IS the commons
    + (slope<0.02?0.15:0);              // flat → soil is the story

  // Hydrology: loud near water, in wetlands, at coast, flood plains
  const coastProx=Math.max(0,(wy/MH-0.65)*3);
  w[L.hydro] = 0.10
    + coastProx*0.5                      // near coast → hydro dominant
    + (geoType===2&&normE<0.3?0.25:0)   // clay lowland → waterlogged
    + (elev<SEA+0.06?0.35:0);          // near sea level → hydro

  // Biome: loud in forest zones, boundary areas, succession zones
  w[L.biome] = 0.12
    + (geoType===2&&normE>0.2&&normE<0.65?0.25:0) // clay mid-slope → forest
    + (slope>0.03&&slope<0.08?0.20:0)   // moderate slope → forest edge
    + (normE>0.35&&normE<0.7?0.15:0);  // mid-elevation sweet spot

  // Infrastructure: low base, rises near roads/settlements
  w[L.infra] = 0.08;

  // Influence: moderate everywhere, rises at boundaries
  w[L.influence] = 0.12
    + (slope>0.06?0.15:0)               // steep = contested, hard to govern
    + (geoType===3?0.10:0);            // sandstone = enclosure pressure

  return w;
}

// ── Feature proximity boost ───────────────────────────────────────
function featureBoost(wx,wy,w){
  for(const [fx,fy,fr,lkey,boost] of FEATURES){
    const d=Math.sqrt((wx-fx)**2+(wy-fy)**2);
    if(d>fr) continue;
    const t=1-d/fr;          // 1 at center, 0 at edge
    const falloff=t*t*(3-2*t); // smoothstep
    const li=L[lkey];
    if(li===undefined) continue;
    w[li]+=boost*falloff*0.8;

    // Secondary: feature type brings companion layer
    if(lkey==='geo')       w[L.biome]  +=boost*falloff*0.25;
    if(lkey==='soil')      w[L.hydro]  +=boost*falloff*0.20;
    if(lkey==='influence') w[L.infra]  +=boost*falloff*0.20;
    if(lkey==='infra')     w[L.influence]+=boost*falloff*0.25;
    if(lkey==='biome')     w[L.soil]   +=boost*falloff*0.20;
    if(lkey==='hydro')     w[L.geo]    +=boost*falloff*0.15;
  }
}

// ── Conflict zone boost ───────────────────────────────────────────
// Where commons + encloser influence overlap → influence layer surges
const COMMONS_PTS=[[500,380],[700,240],[1650,1480],[460,920],[2200,980],[280,1200],[820,1400],[700,1600]];
const ENCLOSER_PTS=[[1100,490],[1300,420],[1480,650],[900,540],[620,700]];
function conflictBoost(wx,wy,w){
  let commonsNear=0,encloserNear=0;
  for(const [cx,cy] of COMMONS_PTS){
    const d=Math.sqrt((wx-cx)**2+(wy-cy)**2);
    if(d<400) commonsNear+=Math.max(0,1-d/400);
  }
  for(const [ex,ey] of ENCLOSER_PTS){
    const d=Math.sqrt((wx-ex)**2+(wy-ey)**2);
    if(d<400) encloserNear+=Math.max(0,1-d/400);
  }
  const conflict=Math.min(commonsNear,encloserNear);
  if(conflict>0.1){
    w[L.influence]+=conflict*0.9;
    w[L.infra]    +=conflict*0.4;
    // Suppress quiet layers at high conflict — the argument is clear
    w[L.soil]     *=(1-conflict*0.3);
    w[L.geo]      *=(1-conflict*0.2);
  }
}

// ── Normalise + shape the mix ─────────────────────────────────────
// We want: dominant layer clear, secondary present, others recede
// Not a hard max — a shaped distribution
function shapeMix(w){
  // Find total
  let sum=0; for(let i=0;i<NLAYERS;i++) sum+=w[i];
  if(sum<0.001){ for(let i=0;i<NLAYERS;i++) w[i]=1/NLAYERS; return; }

  // Normalise
  for(let i=0;i<NLAYERS;i++) w[i]/=sum;

  // Shape: apply soft-contrast curve so the mix has a clear voice
  // without silencing everything else
  // w_shaped = w^0.6 renormalised (less aggressive than w^2, keeps secondaries)
  let sum2=0;
  for(let i=0;i<NLAYERS;i++){w[i]=Math.pow(w[i],0.55); sum2+=w[i];}
  for(let i=0;i<NLAYERS;i++) w[i]/=sum2;

  // Floor: no layer ever fully silent (minimum 3% presence)
  // This is the "everything is always there" principle
  const FLOOR=0.03;
  let floored=0;
  for(let i=0;i<NLAYERS;i++){
    if(w[i]<FLOOR){floored+=FLOOR-w[i]; w[i]=FLOOR;}
  }
  // Take floor contribution from the loudest layer
  let maxI=0;
  for(let i=1;i<NLAYERS;i++) if(w[i]>w[maxI]) maxI=i;
  w[maxI]=Math.max(FLOOR,w[maxI]-floored);
}

// ── Main generation loop ──────────────────────────────────────────
console.log(`Generating mix map ${RW}×${RH}...`);
console.log(`${RW*RH} pixels × ${NLAYERS} layers = ${RW*RH*NLAYERS} significance values`);
console.log(`${FEATURES.length} features contributing to the mix`);

// Store as uint8 (0-255) per channel per pixel, 6 channels
// Layout: pixel 0 [geo,soil,hydro,biome,infra,influence], pixel 1, ...
const mixData = new Uint8Array(RW*RH*NLAYERS);

let progress=0;
for(let py=0;py<RH;py++){
  if(Math.floor(py/RH*10)>progress){
    progress=Math.floor(py/RH*10);
    process.stdout.write(`  ${progress*10}%\r`);
  }
  for(let px=0;px<RW;px++){
    const wx=px/RW*MW, wy=py/RH*MH;
    const elev=hmSample(wx,wy);
    const normE=Math.max(0,(elev-SEA)/(1-SEA));
    const {slope}=hmGrad(wx,wy);
    const geoType=geoAt(wx,wy);

    // Ocean: hydro dominant, everything else recedes
    if(elev<SEA-0.02){
      const w=new Float32Array(NLAYERS);
      w[L.hydro]=0.75; w[L.geo]=0.10; w[L.soil]=0.03;
      w[L.biome]=0.03; w[L.infra]=0.03; w[L.influence]=0.06;
      const idx=(py*RW+px)*NLAYERS;
      for(let i=0;i<NLAYERS;i++) mixData[idx+i]=Math.round(w[i]*255);
      continue;
    }

    // Land: full significance calculation
    const w=baseWeights(wx,wy,elev,geoType,slope,normE);
    featureBoost(wx,wy,w);
    conflictBoost(wx,wy,w);
    shapeMix(w);

    const idx=(py*RW+px)*NLAYERS;
    for(let i=0;i<NLAYERS;i++) mixData[idx+i]=Math.round(w[i]*255);
  }
}
console.log(`  100%`);

// ── Compute mix statistics ────────────────────────────────────────
const dominantCounts=new Array(NLAYERS).fill(0);
const LNAMES=['geo','soil','hydro','biome','infra','influence'];
for(let p=0;p<RW*RH;p++){
  const base=p*NLAYERS;
  let maxI=0,maxV=0;
  for(let i=0;i<NLAYERS;i++) if(mixData[base+i]>maxV){maxV=mixData[base+i];maxI=i;}
  dominantCounts[maxI]++;
}
console.log('\nDominant layer by pixel:');
for(let i=0;i<NLAYERS;i++){
  const pct=(dominantCounts[i]/(RW*RH)*100).toFixed(1);
  const bar='█'.repeat(Math.round(pct/2));
  console.log(`  ${LNAMES[i].padEnd(10)} ${pct.padStart(5)}%  ${bar}`);
}

// ── Serialise ────────────────────────────────────────────────────
const output={
  width:RW, height:RH,
  mapWidth:MW, mapHeight:MH,
  layers:NLAYERS,
  layerNames:LNAMES,
  data:Array.from(mixData),
};
writeFileSync('/tmp/pe-deploy/public/mixmap.json', JSON.stringify(output));
const sizeKB=(JSON.stringify(output).length/1024).toFixed(0);
console.log(`\nWritten to public/mixmap.json (${sizeKB} KB)`);
console.log(`The cartographer has spoken.`);
