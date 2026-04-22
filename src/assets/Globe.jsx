import { useEffect, useRef } from 'react';

/**
 * Globe — animated canvas globe with pulsing beams, gridlines,
 * halo, outer network mesh, and traveling current packets.
 *
 * Drop into any React project:
 *   import Globe from './Globe';
 *   <Globe />
 *
 * By default it fills its parent element (position: relative on parent).
 * Override with the `style` / `className` props if needed.
 *
 * All appearance values are baked-in constants matching the final
 * design. Tweak the CONFIG block below if you want to adjust.
 */

const CONFIG = {
  speed: 7,
  beams: 30,
  lines: 118,
  ink: 55,
  grid: true,
  halo: true,
  gridAlpha: 70,
  scale: 260,
  beamH: 36,
  redSat: 98,
  red: true,
  currents: 80,
  curAlpha: 0,
  bgDensity: 122,
};

// Background layer tuning
const BG_INFLUENCE = 160; // px radius where cursor connects to dots
const BG_REPEL = 55;       // strength cursor pushes dots away

export default function Globe({ className = '', style = {} }) {
  const canvasRef = useRef(null);
  const bgRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    const parent = canvas.parentElement;

    let DPR = Math.min(window.devicePixelRatio || 1, 2);
    let W = 0, H = 0, CX = 0, CY = 0, R = 0;
    let BOX_W = 0, BOX_H = 0, BOX = 0, MAX_REACH = 0;
    let ANCHOR_X = 0, ANCHOR_Y = 0;

    const TWEAKS = { ...CONFIG };

    function resize() {
      DPR = Math.min(window.devicePixelRatio || 1, 2);
      const rect = parent.getBoundingClientRect();
      W = rect.width || window.innerWidth;
      H = rect.height || window.innerHeight;
      canvas.width = W * DPR;
      canvas.height = H * DPR;
      canvas.style.width = W + 'px';
      canvas.style.height = H + 'px';
      ctx.setTransform(DPR, 0, 0, DPR, 0, 0);

      BOX_W = W / 3;
      BOX_H = H / 3;
      BOX = Math.min(BOX_W, BOX_H);
      const baseR = BOX * 0.92;
      ANCHOR_X = BOX_W * 2 - baseR;
      ANCHOR_Y = BOX_H * 2 - baseR;
      R = baseR * (TWEAKS.scale / 100);
      CX = ANCHOR_X + R;
      CY = ANCHOR_Y + R;
      MAX_REACH = R + BOX * 0.95;
    }

    /* ---------- Color helpers ---------- */
    function ink(alpha, shade = 'base') {
      const L = shade === 'dim' ? 0.6
              : shade === 'faint' ? 0.78
              : shade === 'dark' ? 0.25
              : TWEAKS.ink / 100;
      return `oklch(${L} 0.008 250 / ${alpha})`;
    }
    function dotColor(alpha, depth = 1) {
      if (!TWEAKS.red) return ink(alpha, 'dark');
      const sat = TWEAKS.redSat / 100;
      const C = 0.005 + sat * 0.24;
      const L = 0.48 - sat * 0.10;
      return `oklch(${L} ${C.toFixed(3)} 25 / ${alpha})`;
    }

    /* ---------- Landmass ---------- */
    const blobs = [
      { cx:-100, cy:45, rx:32, ry:22, rot:-0.2 },
      { cx:-85, cy:30, rx:15, ry:14, rot:0.1 },
      { cx:-75, cy:10, rx:10, ry:14, rot:0.3 },
      { cx:-60, cy:-15, rx:14, ry:24, rot:0.15 },
      { cx:-65, cy:-40, rx:8, ry:18, rot:0.2 },
      { cx:10, cy:50, rx:22, ry:12, rot:0 },
      { cx:18, cy:5, rx:20, ry:22, rot:0 },
      { cx:25, cy:-20, rx:14, ry:18, rot:0.1 },
      { cx:80, cy:50, rx:40, ry:20, rot:-0.1 },
      { cx:100, cy:30, rx:20, ry:18, rot:0 },
      { cx:130, cy:40, rx:14, ry:12, rot:0.2 },
      { cx:115, cy:0, rx:16, ry:8, rot:0 },
      { cx:140, cy:-5, rx:10, ry:6, rot:0.1 },
      { cx:135, cy:-25, rx:18, ry:10, rot:0 },
      { cx:-40, cy:72, rx:12, ry:10, rot:0 },
    ];
    function inLand(lon, lat) {
      for (const b of blobs) {
        const dx = lon - b.cx, dy = lat - b.cy;
        const c = Math.cos(b.rot), s = Math.sin(b.rot);
        const x = dx*c + dy*s;
        const y = -dx*s + dy*c;
        if ((x*x)/(b.rx*b.rx) + (y*y)/(b.ry*b.ry) <= 1) return true;
      }
      return false;
    }

    /* ---------- Point cloud ---------- */
    const dots = [];
    for (let lat = -80; lat <= 82; lat += 4) {
      const dens = Math.max(1, Math.round(Math.cos(lat*Math.PI/180) * 2));
      const step = Math.max(2.5, 4 / dens);
      for (let lon = -180; lon < 180; lon += step) {
        if (inLand(lon, lat)) {
          dots.push({ lon, lat, size: 0.8 + Math.random()*0.6 });
        }
      }
    }
    const hotspotSeeds = [
      [-122,37],[-74,40],[-99,19],[-58,-34],[-46,-23],
      [-3,51],[13,52],[28,41],[31,30],[18,-33],
      [77,28],[103,1],[121,31],[139,35],[151,-33],
      [37,55],[55,25],[106,29],[114,22],[-9,38],
      [-85,45],[50,-5],[70,40],[90,60],[-110,55],
    ];
    const hotspots = hotspotSeeds.map(([lon,lat]) => ({
      lon, lat,
      phase: Math.random()*Math.PI*2,
      beam: 0.4 + Math.random()*0.6,
      freq: 0.6 + Math.random()*0.9,
    }));

    /* ---------- Nearest-neighbor pairs ---------- */
    const pairs = [];
    (() => {
      const sphere = dots.map(d => {
        const phi = d.lat*Math.PI/180, lam = d.lon*Math.PI/180;
        return {
          x: Math.cos(phi)*Math.sin(lam),
          y: Math.sin(phi),
          z: Math.cos(phi)*Math.cos(lam),
        };
      });
      const seen = new Set();
      for (let i = 0; i < sphere.length; i++) {
        const a = sphere[i];
        const best = [];
        for (let j = 0; j < sphere.length; j++) {
          if (j === i) continue;
          const b = sphere[j];
          const dx = a.x-b.x, dy = a.y-b.y, dz = a.z-b.z;
          const d2 = dx*dx + dy*dy + dz*dz;
          if (best.length < 2) {
            best.push({ j, d2 });
            best.sort((p,q) => p.d2 - q.d2);
          } else if (d2 < best[1].d2) {
            best[1] = { j, d2 };
            best.sort((p,q) => p.d2 - q.d2);
          }
        }
        for (const nb of best) {
          const key = i < nb.j ? i+':'+nb.j : nb.j+':'+i;
          if (!seen.has(key)) {
            seen.add(key);
            pairs.push({ i, j: nb.j });
          }
        }
      }
    })();

    const adj = dots.map(() => []);
    for (const p of pairs) { adj[p.i].push(p.j); adj[p.j].push(p.i); }

    /* ---------- Outer network ---------- */
    const netNodes = [];
    function rebuildNetwork(count) {
      netNodes.length = 0;
      const maxR = (MAX_REACH / R) * 0.98;
      const minR = 1.08;
      for (let i = 0; i < count; i++) {
        netNodes.push({
          u: Math.random()*Math.PI*2,
          v: (Math.random()-0.5)*Math.PI*0.9,
          r: minR + Math.random()*Math.max(0.02, maxR-minR),
          du: (Math.random()-0.5)*0.0015,
          dv: (Math.random()-0.5)*0.0015,
          twinkle: Math.random()*Math.PI*2,
        });
      }
    }

    /* ---------- Projection ---------- */
    const TILT = -0.35;
    let spin = 0.6;
    function project(lon, lat) {
      const phi = lat*Math.PI/180;
      const lam = lon*Math.PI/180 + spin;
      let x = Math.cos(phi)*Math.sin(lam);
      let y = Math.sin(phi);
      let z = Math.cos(phi)*Math.cos(lam);
      const ct = Math.cos(TILT), st = Math.sin(TILT);
      const y2 = y*ct - z*st, z2 = y*st + z*ct;
      y = y2; z = z2;
      return { x: CX + x*R, y: CY - y*R, z };
    }
    function nodePos(n) {
      let x = Math.cos(n.v)*Math.sin(n.u);
      let y = Math.sin(n.v);
      let z = Math.cos(n.v)*Math.cos(n.u);
      const ct = Math.cos(TILT), st = Math.sin(TILT);
      const y2 = y*ct - z*st, z2 = y*st + z*ct;
      const rs = R * n.r;
      return { x: CX + x*rs, y: CY - y2*rs, z: z2 };
    }

    /* ---------- Current packets ---------- */
    const packets = [];
    function spawnPacket() {
      let start;
      for (let tries = 0; tries < 40; tries++) {
        const k = Math.floor(Math.random()*dots.length);
        if (adj[k]?.length) { start = k; break; }
      }
      if (start == null) return;
      const next = adj[start][Math.floor(Math.random()*adj[start].length)];
      packets.push({
        from: start, to: next, prev: -1,
        t: Math.random(),
        speed: 0.5 + Math.random()*0.4,
        tail: 0.18 + Math.random()*0.12,
      });
    }
    function ensurePacketCount(n) {
      while (packets.length < n) spawnPacket();
      while (packets.length > n) packets.pop();
    }
    function stepPackets(dt) {
      const globalSpeed = 0.38;
      for (const pk of packets) {
        pk.t += dt * pk.speed * globalSpeed;
        while (pk.t >= 1) {
          pk.t -= 1;
          const neigh = adj[pk.to] || [];
          if (!neigh.length) {
            const k = Math.floor(Math.random()*dots.length);
            pk.prev = -1; pk.from = k; pk.to = (adj[k]||[])[0] ?? k;
            break;
          }
          let choices = neigh.filter(x => x !== pk.from);
          if (!choices.length) choices = neigh;
          pk.prev = pk.from;
          pk.from = pk.to;
          pk.to = choices[Math.floor(Math.random()*choices.length)];
        }
      }
    }

    /* ---------- Draw routines ---------- */
    function drawHalo() {
      const g = ctx.createRadialGradient(CX, CY, R*0.2, CX, CY, R*1.6);
      g.addColorStop(0, dotColor(0.10, 0.5));
      g.addColorStop(0.4, dotColor(0.05, 0.5));
      g.addColorStop(1, dotColor(0, 0.5));
      ctx.fillStyle = g;
      ctx.fillRect(0, 0, W, H);
      ctx.strokeStyle = dotColor(0.18, 0.6);
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.arc(CX, CY, R, 0, Math.PI*2);
      ctx.stroke();
    }
    function drawGrid(side) {
      const a = TWEAKS.gridAlpha / 100;
      ctx.strokeStyle = dotColor((side === 'front' ? 0.18 : 0.08) * a, 0.6);
      ctx.lineWidth = 0.8;
      for (let lon = -180; lon < 180; lon += 20) {
        ctx.beginPath();
        let started = false;
        for (let lat = -88; lat <= 88; lat += 3) {
          const p = project(lon, lat);
          const vis = side === 'front' ? p.z >= 0 : p.z < 0;
          if (vis) {
            if (!started) { ctx.moveTo(p.x, p.y); started = true; }
            else ctx.lineTo(p.x, p.y);
          } else started = false;
        }
        ctx.stroke();
      }
      for (let lat = -60; lat <= 60; lat += 20) {
        ctx.beginPath();
        let started = false;
        for (let lon = -180; lon <= 180; lon += 3) {
          const p = project(lon, lat);
          const vis = side === 'front' ? p.z >= 0 : p.z < 0;
          if (vis) {
            if (!started) { ctx.moveTo(p.x, p.y); started = true; }
            else ctx.lineTo(p.x, p.y);
          } else started = false;
        }
        ctx.stroke();
      }
    }
    function drawHotspots(t) {
      const beamCount = Math.min(hotspots.length, TWEAKS.beams);
      for (let i = 0; i < hotspots.length; i++) {
        const h = hotspots[i];
        const p = project(h.lon, h.lat);
        if (p.z < 0.05) continue;
        const depth = p.z;
        const ph = Math.sin(t * h.freq * 1.6 + h.phase) * 0.5 + 0.5;
        const ringR = 3 + ph * 10;
        ctx.strokeStyle = dotColor(0.35 * (1 - ph) * depth, depth);
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.arc(p.x, p.y, ringR, 0, Math.PI*2);
        ctx.stroke();
        ctx.fillStyle = dotColor(0.9 * depth, depth);
        ctx.beginPath();
        ctx.arc(p.x, p.y, 1.6 + ph*1.2, 0, Math.PI*2);
        ctx.fill();
        if (i < beamCount) {
          const beamPhase = Math.sin(t * 0.9 + h.phase*2);
          let dx = p.x - CX, dy = p.y - CY;
          const surfaceDist = Math.hypot(dx, dy) || 1;
          dx /= surfaceDist; dy /= surfaceDist;
          const available = Math.max(0, MAX_REACH - surfaceDist);
          const heightScale = TWEAKS.beamH / 100;
          const maxH = available * (0.55 + h.beam*0.45) * heightScale;
          const currentH = maxH * (0.35 + 0.65*(beamPhase*0.5+0.5));
          const ex = p.x + dx*currentH;
          const ey = p.y + dy*currentH;
          const grad = ctx.createLinearGradient(p.x, p.y, ex, ey);
          grad.addColorStop(0, dotColor(0.55*depth, depth));
          grad.addColorStop(1, dotColor(0, depth));
          ctx.strokeStyle = grad;
          ctx.lineWidth = 1;
          ctx.beginPath();
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(ex, ey);
          ctx.stroke();
          ctx.fillStyle = dotColor(0.8*depth, depth);
          ctx.beginPath();
          ctx.arc(ex, ey, 1.6, 0, Math.PI*2);
          ctx.fill();
        }
      }
    }
    function updateNetwork(dt) {
      if (netNodes.length !== TWEAKS.lines) rebuildNetwork(TWEAKS.lines);
      for (const n of netNodes) {
        n.u += n.du; n.v += n.dv;
        if (n.v > 1.3) n.dv = -Math.abs(n.dv);
        if (n.v < -1.3) n.dv = Math.abs(n.dv);
        n.twinkle += dt*2;
      }
    }
    function drawNetwork() {
      if (TWEAKS.lines <= 0) return;
      const pts = netNodes.map(nodePos);
      const maxDist = BOX * 0.9;
      ctx.lineWidth = 0.8;
      for (let i = 0; i < pts.length; i++) {
        for (let j = i+1; j < pts.length; j++) {
          const a = pts[i], b = pts[j];
          const d = Math.hypot(a.x-b.x, a.y-b.y);
          if (d < maxDist) {
            const avgZ = (a.z + b.z)/2;
            const alpha = (1 - d/maxDist) * 0.22 * (0.4 + (avgZ+1)/2*0.7);
            ctx.strokeStyle = dotColor(alpha, (avgZ+1)/2);
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }
      }
      for (let i = 0; i < pts.length; i++) {
        const p = pts[i], n = netNodes[i];
        const tw = Math.sin(n.twinkle)*0.5 + 0.5;
        const depth = (p.z + 1)/2;
        ctx.fillStyle = dotColor(0.35 + tw*0.45*depth, depth);
        ctx.beginPath();
        ctx.arc(p.x, p.y, 1 + tw*0.8, 0, Math.PI*2);
        ctx.fill();
      }
    }
    function drawCurrents(proj) {
      if (TWEAKS.currents <= 0 || TWEAKS.curAlpha <= 0) return;
      const baseAlpha = TWEAKS.curAlpha / 100;
      ctx.lineCap = 'round';
      for (const pk of packets) {
        const a = proj[pk.from], b = proj[pk.to];
        if (!a || !b) continue;
        const zAt = a.p.z*(1-pk.t) + b.p.z*pk.t;
        if (zAt < 0.02) continue;
        const x = a.p.x*(1-pk.t) + b.p.x*pk.t;
        const y = a.p.y*(1-pk.t) + b.p.y*pk.t;
        const tailStart = Math.max(0, pk.t - pk.tail);
        const sx = a.p.x*(1-tailStart) + b.p.x*tailStart;
        const sy = a.p.y*(1-tailStart) + b.p.y*tailStart;
        const grad = ctx.createLinearGradient(sx, sy, x, y);
        grad.addColorStop(0, dotColor(0, zAt));
        grad.addColorStop(1, dotColor(0.85*baseAlpha*zAt, zAt));
        ctx.strokeStyle = grad;
        ctx.lineWidth = 1.4;
        ctx.beginPath();
        ctx.moveTo(sx, sy); ctx.lineTo(x, y);
        ctx.stroke();
        ctx.fillStyle = dotColor(0.95*baseAlpha*zAt, zAt);
        ctx.beginPath();
        ctx.arc(x, y, 1.6, 0, Math.PI*2);
        ctx.fill();
      }
      ctx.lineCap = 'butt';
    }

    /* ---------- Init + loop ---------- */
    resize();
    rebuildNetwork(TWEAKS.lines);

    let rafId;
    let last = performance.now();
    function frame(now) {
      const dt = Math.min(0.05, (now - last)/1000);
      last = now;
      const t = now / 1000;
      spin += dt * (TWEAKS.speed / 100) * 0.9;

      ctx.clearRect(0, 0, W, H);
      if (TWEAKS.halo) drawHalo();

      const proj = dots.map(d => ({ ...d, p: project(d.lon, d.lat) }));
      proj.sort((a,b) => a.p.z - b.p.z);

      for (const d of proj) {
        if (d.p.z >= 0) break;
        ctx.fillStyle = dotColor(0.10 + (d.p.z+1)/2*0.05, 0.3);
        ctx.beginPath();
        ctx.arc(d.p.x, d.p.y, d.size*0.7, 0, Math.PI*2);
        ctx.fill();
      }
      if (TWEAKS.grid) drawGrid('back');
      updateNetwork(dt);
      drawNetwork();
      ensurePacketCount(TWEAKS.currents);
      stepPackets(dt);
      drawCurrents(proj);
      for (const d of proj) {
        if (d.p.z < 0) continue;
        const depth = d.p.z;
        ctx.fillStyle = dotColor(0.45 + depth*0.45, depth);
        ctx.beginPath();
        ctx.arc(d.p.x, d.p.y, d.size * (0.75 + depth*0.45), 0, Math.PI*2);
        ctx.fill();
      }
      if (TWEAKS.grid) drawGrid('front');
      drawHotspots(t);
      rafId = requestAnimationFrame(frame);
    }
    rafId = requestAnimationFrame(frame);

    const ro = new ResizeObserver(() => { resize(); rebuildNetwork(TWEAKS.lines); });
    ro.observe(parent);

    return () => {
      cancelAnimationFrame(rafId);
      ro.disconnect();
    };
  }, []);

  /* ---------- Background layer: floating dots + cursor interaction ---------- */
  useEffect(() => {
    const canvas = bgRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    const parent = canvas.parentElement;

    let DPR = Math.min(window.devicePixelRatio || 1, 2);
    let W = 0, H = 0;

    function sizeFor() {
      DPR = Math.min(window.devicePixelRatio || 1, 2);
      const rect = parent.getBoundingClientRect();
      W = rect.width || window.innerWidth;
      H = rect.height || window.innerHeight;
      canvas.width = W * DPR;
      canvas.height = H * DPR;
      canvas.style.width = W + 'px';
      canvas.style.height = H + 'px';
      ctx.setTransform(DPR, 0, 0, DPR, 0, 0);
    }

    function dotColor(alpha) {
      if (CONFIG.red) {
        const sat = CONFIG.redSat / 100;
        const C = 0.005 + sat * 0.24;
        const L = 0.48 - sat * 0.10;
        return `oklch(${L} ${C.toFixed(3)} 25 / ${alpha})`;
      }
      return `oklch(0.35 0.008 250 / ${alpha})`;
    }

    function targetCount() {
      const density = CONFIG.bgDensity / 100;
      const base = Math.min(180, Math.max(60, (W * H) / 14000));
      return Math.round(base * density);
    }

    const dots = [];
    function spawnDot() {
      return {
        x: Math.random() * W,
        y: Math.random() * H,
        vx: (Math.random() - 0.5) * 0.25,
        vy: (Math.random() - 0.5) * 0.25,
        r: 0.8 + Math.random() * 1.4,
        phase: Math.random() * Math.PI * 2,
      };
    }
    function rebuild() {
      const target = targetCount();
      while (dots.length < target) dots.push(spawnDot());
      while (dots.length > target) dots.pop();
    }

    sizeFor();
    rebuild();

    const mouse = { x: -9999, y: -9999, active: false };
    const onMove = (e) => {
      const r = parent.getBoundingClientRect();
      mouse.x = e.clientX - r.left;
      mouse.y = e.clientY - r.top;
      mouse.active = true;
    };
    const onLeave = () => { mouse.active = false; mouse.x = -9999; mouse.y = -9999; };
    const onTouch = (e) => {
      if (e.touches[0]) {
        const r = parent.getBoundingClientRect();
        mouse.x = e.touches[0].clientX - r.left;
        mouse.y = e.touches[0].clientY - r.top;
        mouse.active = true;
      }
    };
    window.addEventListener('mousemove', onMove, { passive: true });
    window.addEventListener('mouseleave', onLeave);
    window.addEventListener('touchmove', onTouch, { passive: true });
    window.addEventListener('touchend', onLeave);

    const INFLUENCE = BG_INFLUENCE;
    const REPEL = BG_REPEL;

    let rafId;
    let last = performance.now();
    function frame(now) {
      const dt = Math.min(0.05, (now - last) / 1000);
      last = now;
      const t = now / 1000;

      ctx.clearRect(0, 0, W, H);

      for (const d of dots) {
        d.x += d.vx;
        d.y += d.vy;
        d.vx += (Math.random() - 0.5) * 0.003;
        d.vy += (Math.random() - 0.5) * 0.003;
        const sp = Math.hypot(d.vx, d.vy);
        if (sp > 0.5) { d.vx = d.vx / sp * 0.5; d.vy = d.vy / sp * 0.5; }

        if (mouse.active) {
          const dx = d.x - mouse.x, dy = d.y - mouse.y;
          const dist = Math.hypot(dx, dy);
          if (dist < INFLUENCE && dist > 0.1) {
            const f = (1 - dist / INFLUENCE) * (REPEL / dist);
            d.x += dx * f * dt;
            d.y += dy * f * dt;
          }
        }

        const m = 20;
        if (d.x < -m) d.x = W + m;
        if (d.x > W + m) d.x = -m;
        if (d.y < -m) d.y = H + m;
        if (d.y > H + m) d.y = -m;
      }

      // cursor-to-dot links only
      ctx.lineWidth = 0.7;
      if (mouse.active) {
        for (const a of dots) {
          const dx = a.x - mouse.x, dy = a.y - mouse.y;
          const dist = Math.hypot(dx, dy);
          if (dist < INFLUENCE) {
            const alpha = (1 - dist / INFLUENCE) * 0.55;
            ctx.strokeStyle = dotColor(alpha);
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(mouse.x, mouse.y);
            ctx.stroke();
          }
        }
      }

      for (const d of dots) {
        const tw = Math.sin(t * 1.4 + d.phase) * 0.25 + 0.75;
        ctx.fillStyle = dotColor(0.45 * tw);
        ctx.beginPath();
        ctx.arc(d.x, d.y, d.r, 0, Math.PI * 2);
        ctx.fill();
      }

      if (mouse.active) {
        ctx.fillStyle = dotColor(0.5);
        ctx.beginPath();
        ctx.arc(mouse.x, mouse.y, 2.5, 0, Math.PI * 2);
        ctx.fill();
      }

      rafId = requestAnimationFrame(frame);
    }
    rafId = requestAnimationFrame(frame);

    const ro = new ResizeObserver(() => { sizeFor(); rebuild(); });
    ro.observe(parent);

    return () => {
      cancelAnimationFrame(rafId);
      ro.disconnect();
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('mouseleave', onLeave);
      window.removeEventListener('touchmove', onTouch);
      window.removeEventListener('touchend', onLeave);
    };
  }, []);

  return (
    <div
      className={className}
      style={{
        position: 'relative',
        width: '100%',
        height: '100%',
        ...style,
      }}
    >
      <canvas
        ref={bgRef}
        style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          display: 'block',
          zIndex: 0,
        }}
      />
      <canvas
        ref={canvasRef}
        style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          display: 'block',
          zIndex: 1,
        }}
      />
    </div>
  );
}
