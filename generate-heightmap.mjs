/**
 * generate-heightmap.mjs
 * Offline heightmap generator for the Map of Consciousness.
 * Run once: node generate-heightmap.mjs
 * Outputs: heightmap.json (checked into repo)
 *
 * Pipeline:
 * 1. Layered fbm noise with semantic region biases
 * 2. Hydraulic erosion (N iterations)
 * 3. Normalize + coastline mask
 * 4. Serialize as flat Float32Array → JSON
 */

import { writeFileSync } from 'fs';

const W = 320, H = 240; // 1/10 of map coords (3200x2400), upsample at render time
const ITERATIONS = 12000; // erosion passes
const SEED = 42;

// ── Noise ──────────────────────────────────────────────────────────
function noise(x, y, seed) {
  const a = Math.sin(x * 0.013 + seed) * 43758.5453;
  const b = Math.sin(y * 0.017 + seed + 1) * 29571.3317;
  const c = Math.sin((x + y) * 0.009 + seed + 2) * 38472.1177;
  return ((a % 1 + b % 1 + c % 1) / 3 + 1) / 2;
}

function fbm(x, y, octaves, seed, lacunarity, gain) {
  lacunarity = lacunarity || 2.1;
  gain = gain || 0.5;
  let v = 0, amp = 1, freq = 1, max = 0;
  for (let i = 0; i < octaves; i++) {
    v += noise(x * freq, y * freq, seed + i * 100) * amp;
    max += amp;
    amp *= gain;
    freq *= lacunarity;
  }
  return v / max;
}

// ── Base heightmap with semantic region biases ─────────────────────
function buildBase() {
  const h = new Float32Array(W * H);

  for (let y = 0; y < H; y++) {
    for (let x = 0; x < W; x++) {
      // Normalised coords [0,1]
      const nx = x / W, ny = y / H;

      // Continental gradient: high NW (old forest), low SE (ocean)
      const continental = (1 - nx) * 0.4 + (1 - ny) * 0.3;

      // Region biases
      // NW quadrant: Old Forest — rough, high fractal dimension
      const nwBias = Math.max(0, (0.4 - nx) * (0.5 - ny)) * 2.5;
      // Central plains: Enclosure Fields — smoother, lower
      const plainsDist = Math.hypot(nx - 0.45, ny - 0.5);
      const plainsBias = Math.max(0, 0.25 - plainsDist) * -3.0;
      // Eastern Outside: different noise orientation (rotated 45°)
      const eastBias = Math.max(0, nx - 0.75) * 1.2;
      // Coastal lowlands: flatten near the coast (y > 0.72)
      const coastalFlat = Math.max(0, ny - 0.72) * -4.0;
      // Mountain massif (capital): bump at ~(0.44, 0.13)
      const massifDist = Math.hypot(nx - 0.44, ny - 0.13);
      const massifBump = Math.max(0, 0.12 - massifDist) * 8.0;
      // Ridge of State: bump at ~(0.26, 0.13)
      const ridgeDist = Math.hypot(nx - 0.26, ny - 0.13);
      const ridgeBump = Math.max(0, 0.10 - ridgeDist) * 6.0;
      // Peaks of Hegemony: bump at ~(0.59, 0.38)
      const peakDist = Math.hypot(nx - 0.59, ny - 0.38);
      const peakBump = Math.max(0, 0.09 - peakDist) * 5.5;

      // NW: high octave rough fbm
      const roughNoise = fbm(nx * 6, ny * 6, 7, SEED, 2.2, 0.52);
      // Plains: low octave smooth fbm
      const smoothNoise = fbm(nx * 3, ny * 3, 3, SEED + 50, 1.8, 0.45);
      // Outside: rotated fbm
      const rx = nx * Math.cos(0.7) - ny * Math.sin(0.7);
      const ry = nx * Math.sin(0.7) + ny * Math.cos(0.7);
      const outsideNoise = fbm(rx * 5, ry * 5, 5, SEED + 200, 2.0, 0.48);

      // Blend noise by region
      const plainWeight = Math.max(0, 0.3 - plainsDist) * 3;
      const eastWeight = Math.max(0, nx - 0.7) * 3;
      const baseNoise = roughNoise * (1 - plainWeight - eastWeight)
        + smoothNoise * plainWeight
        + outsideNoise * eastWeight;

      const val = continental + baseNoise * 0.6
        + nwBias + plainsBias + eastBias + coastalFlat
        + massifBump + ridgeBump + peakBump;

      h[y * W + x] = val;
    }
  }
  return h;
}

// ── Hydraulic erosion ─────────────────────────────────────────────
function hydraulicErosion(h, iterations) {
  const inertia = 0.05;
  const sedimentCapacityFactor = 4.0;
  const minSedimentCapacity = 0.01;
  const erodeSpeed = 0.3;
  const depositSpeed = 0.3;
  const evaporateSpeed = 0.02;
  const gravity = 4.0;
  const maxSteps = 64;
  const erosionRadius = 2;

  // Precompute erosion brush weights
  const brushWeights = [];
  for (let dy = -erosionRadius; dy <= erosionRadius; dy++) {
    for (let dx = -erosionRadius; dx <= erosionRadius; dx++) {
      const d = Math.sqrt(dx * dx + dy * dy);
      if (d <= erosionRadius) {
        brushWeights.push({ dx, dy, w: 1 - d / erosionRadius });
      }
    }
  }
  const brushSum = brushWeights.reduce((s, b) => s + b.w, 0);
  brushWeights.forEach(b => b.w /= brushSum);

  function gradient(px, py) {
    const x0 = Math.floor(px), y0 = Math.floor(py);
    const x1 = Math.min(x0 + 1, W - 1), y1 = Math.min(y0 + 1, H - 1);
    const u = px - x0, v = py - y0;
    const h00 = h[y0 * W + x0], h10 = h[y0 * W + x1];
    const h01 = h[y1 * W + x0], h11 = h[y1 * W + x1];
    const gx = (h10 - h00) * (1 - v) + (h11 - h01) * v;
    const gy = (h01 - h00) * (1 - u) + (h11 - h10) * u;
    const height = h00 * (1-u)*(1-v) + h10*u*(1-v) + h01*(1-u)*v + h11*u*v;
    return { gx, gy, height };
  }

  let rng = SEED;
  function rand() {
    rng = (rng * 1664525 + 1013904223) & 0xffffffff;
    return (rng >>> 0) / 0xffffffff;
  }

  for (let iter = 0; iter < iterations; iter++) {
    let px = rand() * (W - 2) + 1;
    let py = rand() * (H - 2) + 1;
    let dx = 0, dy = 0;
    let speed = 1, water = 1, sediment = 0;

    for (let step = 0; step < maxSteps; step++) {
      const x0 = Math.floor(px), y0 = Math.floor(py);
      if (x0 < 1 || x0 >= W - 1 || y0 < 1 || y0 >= H - 1) break;

      const { gx, gy, height } = gradient(px, py);

      // Update direction
      dx = dx * inertia - gx * (1 - inertia);
      dy = dy * inertia - gy * (1 - inertia);

      const len = Math.sqrt(dx * dx + dy * dy);
      if (len < 1e-6) break;
      dx /= len; dy /= len;

      const newPx = px + dx, newPy = py + dy;
      if (newPx < 0 || newPx >= W - 1 || newPy < 0 || newPy >= H - 1) break;

      const newHeight = gradient(newPx, newPy).height;
      const dh = newHeight - height;

      const capacity = Math.max(-dh * speed * water * sedimentCapacityFactor, minSedimentCapacity);

      if (sediment > capacity || dh > 0) {
        // Deposit
        const deposit = dh > 0
          ? Math.min(dh, sediment)
          : (sediment - capacity) * depositSpeed;
        sediment -= deposit;

        // Deposit to grid (bilinear)
        const u = px - x0, v2 = py - y0;
        h[y0 * W + x0]           += deposit * (1-u) * (1-v2);
        h[y0 * W + x0 + 1]       += deposit * u * (1-v2);
        h[(y0+1) * W + x0]       += deposit * (1-u) * v2;
        h[(y0+1) * W + x0 + 1]   += deposit * u * v2;
      } else {
        // Erode
        const erodeAmount = Math.min((capacity - sediment) * erodeSpeed, -dh);
        for (const b of brushWeights) {
          const ex = x0 + b.dx, ey = y0 + b.dy;
          if (ex >= 0 && ex < W && ey >= 0 && ey < H) {
            const e = Math.min(erodeAmount * b.w, h[ey * W + ex]);
            h[ey * W + ex] -= e;
            sediment += e;
          }
        }
      }

      speed = Math.sqrt(Math.max(0, speed * speed + dh * gravity));
      water *= (1 - evaporateSpeed);
      if (water < 0.01) break;

      px = newPx; py = newPy;
    }
  }
  return h;
}

// ── Normalize and apply coastline ─────────────────────────────────
function normalizeAndCoast(h) {
  let min = Infinity, max = -Infinity;
  for (let i = 0; i < h.length; i++) {
    if (h[i] < min) min = h[i];
    if (h[i] > max) max = h[i];
  }
  const range = max - min;
  for (let i = 0; i < h.length; i++) {
    h[i] = (h[i] - min) / range;
  }

  // Force ocean in lower portion (y > 0.76 normalized)
  const coastY = Math.floor(H * 0.76);
  for (let y = coastY; y < H; y++) {
    for (let x = 0; x < W; x++) {
      const t = (y - coastY) / (H - coastY);
      h[y * W + x] = h[y * W + x] * (1 - t * 1.5);
      if (h[y * W + x] < 0) h[y * W + x] = 0;
    }
  }

  // Re-normalize
  min = Infinity; max = -Infinity;
  for (let i = 0; i < h.length; i++) {
    if (h[i] < min) min = h[i];
    if (h[i] > max) max = h[i];
  }
  const range2 = max - min;
  for (let i = 0; i < h.length; i++) {
    h[i] = (h[i] - min) / range2;
  }

  return h;
}

// ── Run ───────────────────────────────────────────────────────────
console.log(`Building base heightmap ${W}×${H}...`);
let h = buildBase();
console.log(`Running hydraulic erosion (${ITERATIONS} iterations)...`);
h = hydraulicErosion(h, ITERATIONS);
console.log('Normalizing...');
h = normalizeAndCoast(h);

// Serialize as array of uint16 (0-65535) to keep JSON small
const uint16 = new Uint16Array(h.length);
for (let i = 0; i < h.length; i++) {
  uint16[i] = Math.round(h[i] * 65535);
}

const output = {
  width: W,
  height: H,
  mapWidth: 3200,
  mapHeight: 2400,
  seaLevel: 0.32,
  data: Array.from(uint16)
};

writeFileSync('/tmp/pe-deploy/public/heightmap.json', JSON.stringify(output));
console.log(`Done. Written to public/heightmap.json`);
console.log(`Size: ${JSON.stringify(output).length} bytes`);
console.log(`Sea level: ${output.seaLevel}`);

// Quick stats
const vals = Array.from(h);
const mean = vals.reduce((a,b)=>a+b,0)/vals.length;
const aboveSea = vals.filter(v=>v>output.seaLevel).length;
console.log(`Mean elevation: ${mean.toFixed(3)}`);
console.log(`Land coverage: ${(aboveSea/vals.length*100).toFixed(1)}%`);
