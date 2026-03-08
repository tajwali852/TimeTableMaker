/* ═══════════════════════════════════════════════════════════
   layouts.js  —  All 22 Timetable Layout / Theme Definitions
   
   Each entry in the THEMES array contains:
     id          — unique string key
     name        — display name shown in the picker
     c1–c5       — colours used for the swatch preview
     render()    — returns full inner HTML for .page element
     theadStyle()— returns CSS string for thead/tbody table styles
   
   To add a new layout: copy an existing entry, give it a new
   id and name, customise render() and theadStyle(), and add
   it to the end of the array.
   ═══════════════════════════════════════════════════════════ */
// ══════════════════════════════════════════════════════════════
//  THEME / LAYOUT DEFINITIONS
//  Each entry has: id, name, colors (for swatch), and a
//  renderHTML(school, subtitle, badge, footer, thead, tbody) function
//  that returns the full inner HTML of .page
// ══════════════════════════════════════════════════════════════

const THEMES = [

// ── 1. Forest Gold (classic centered header) ─────────────────
{ id:'forest', name:'Forest Gold', c1:'#1a3a2a', c2:'#2d5a3d', c3:'#e8c96b', c4:'#c9a84c', c5:'#f9f6f0',
  render(s,sub,badge,foot,th,tb){
    return `
<div style="height:8px;background:linear-gradient(90deg,#1a3a2a,#2d6a4f 40%,#c9a84c 60%,#e8c96b)"></div>
<div style="background:linear-gradient(135deg,#1a3a2a,#2d5a3d 60%,#1a3a2a);padding:36px 40px 30px;text-align:center;position:relative;overflow:hidden">
  <div style="position:absolute;top:-60px;right:-60px;width:200px;height:200px;border-radius:50%;background:rgba(201,168,76,.08)"></div>
  <div style="position:absolute;bottom:-80px;left:-40px;width:250px;height:250px;border-radius:50%;background:rgba(201,168,76,.06)"></div>
  <div style="width:56px;height:56px;margin:0 auto 14px;border:2px solid rgba(201,168,76,.6);border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:24px">📖</div>
  <div class="tt-school-name" style="font-family:'Playfair Display',serif;font-size:clamp(16px,3vw,28px);color:#e8c96b;letter-spacing:.5px;line-height:1.2;text-shadow:0 2px 12px rgba(0,0,0,.3)">${s}</div>
  <div style="width:80px;height:2px;background:linear-gradient(90deg,transparent,#c9a84c,transparent);margin:12px auto"></div>
  <div class="tt-subtitle" style="font-family:'Libre Baskerville',serif;font-size:clamp(11px,1.5vw,15px);font-style:italic;color:rgba(255,255,255,.75);letter-spacing:1px">${sub}</div>
  <div class="tt-badge" style="display:inline-block;margin-top:12px;padding:5px 20px;border:1px solid rgba(201,168,76,.5);border-radius:20px;font-size:11px;font-weight:700;letter-spacing:2px;text-transform:uppercase;color:#e8c96b">${badge}</div>
</div>
<div style="padding:28px 24px 40px;overflow-x:auto"><table style="width:100%;border-collapse:separate;border-spacing:0;min-width:460px;font-family:'Nunito',sans-serif">
<thead>${th}</thead><tbody>${tb}</tbody></table></div>
<div style="background:#f7f3ec;border-top:2px solid #c9a84c;padding:14px 24px;display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:8px">
  <span class="tt-footer-note" style="font-size:11px;color:#888;font-style:italic">${foot}</span>
  <span class="tt-footer-logo" style="font-family:'Playfair Display',serif;font-size:12px;color:#2d5a3d;font-weight:600">${s} · ${badge}</span>
</div>
<div style="background:#1a3a2a;padding:7px 24px;text-align:center;font-size:10.5px;color:rgba(255,255,255,.45)">Developed by <b style="color:#e8c96b">Taj Wali</b>&nbsp;·&nbsp;<span style="color:#c9a84c">03429067901</span></div>
<div style="height:6px;background:linear-gradient(90deg,#c9a84c,#2d6a4f,#1a3a2a)"></div>`;
  },
  theadStyle(){ return `thead tr:first-child th{background:#1a3a2a;color:#e8c96b;font-size:12px;font-weight:700;padding:11px 5px 4px;text-align:center}thead tr:first-child th:first-child{border-radius:8px 0 0 0}thead tr:first-child th:last-child{border-radius:0 8px 0 0}thead tr:last-child th{background:#2d5a3d;color:rgba(255,255,255,.75);font-size:10px;font-weight:600;letter-spacing:.8px;text-transform:uppercase;padding:3px 5px 11px;text-align:center;border-bottom:3px solid #c9a84c}td:first-child{background:#1a3a2a;color:#e8c96b;font-weight:700;font-size:13px;text-align:center;padding:11px 12px;border-bottom:1px solid rgba(255,255,255,.08);white-space:nowrap}tbody tr:last-child td:first-child{border-radius:0 0 0 8px}tbody td:not(:first-child){text-align:center;padding:10px 5px;font-size:13px;font-weight:600;color:#2d3a30;border-bottom:1px solid #e8e3d8;border-right:1px solid #f0ebe3;min-width:65px}tbody tr:last-child td:last-child{border-radius:0 0 8px 0}tbody tr:nth-child(even) td:not(:first-child){background:#f9f6f0}tbody tr:nth-child(odd) td:not(:first-child){background:#fff}.col-nazira{background:#e8f5ee!important;color:#1a6b3a!important;font-weight:700!important}.col-oral{background:#fff8e8!important;color:#b8860b!important;font-weight:700!important}`; }
},

// ── 2. Diagonal Banner ───────────────────────────────────────
{ id:'diagonal', name:'Diagonal Banner', c1:'#1e3a5f', c2:'#2563eb', c3:'#fbbf24', c4:'#1e3a5f', c5:'#f0f4ff',
  render(s,sub,badge,foot,th,tb){
    return `
<div style="background:#1e3a5f;padding:0;position:relative;overflow:hidden;min-height:120px">
  <div style="position:absolute;right:-60px;top:-30px;width:320px;height:200px;background:#2563eb;transform:skewX(-18deg)"></div>
  <div style="position:absolute;right:60px;top:-20px;width:80px;height:200px;background:#fbbf24;transform:skewX(-18deg);opacity:.7"></div>
  <div style="position:relative;z-index:2;padding:28px 36px 24px">
    <div style="font-family:'Oswald',sans-serif;font-size:clamp(14px,2.8vw,26px);color:#fff;font-weight:700;letter-spacing:2px;text-transform:uppercase" class="tt-school-name">${s}</div>
    <div style="font-size:clamp(10px,1.3vw,13px);color:#93c5fd;letter-spacing:2px;text-transform:uppercase;margin-top:4px" class="tt-subtitle">${sub}</div>
    <div style="display:inline-block;margin-top:12px;background:#fbbf24;color:#1e3a5f;font-size:11px;font-weight:800;letter-spacing:2px;text-transform:uppercase;padding:5px 18px;border-radius:2px" class="tt-badge">${badge}</div>
  </div>
</div>
<div style="height:5px;background:linear-gradient(90deg,#fbbf24 30%,#2563eb 70%)"></div>
<div style="padding:24px 24px 36px;overflow-x:auto;background:#f8fbff"><table style="width:100%;border-collapse:collapse;min-width:460px;font-family:'Nunito',sans-serif">
<thead>${th}</thead><tbody>${tb}</tbody></table></div>
<div style="border-top:3px solid #1e3a5f;padding:12px 24px;display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:8px;background:#fff">
  <span class="tt-footer-note" style="font-size:11px;color:#64748b;font-style:italic">${foot}</span>
  <span class="tt-footer-logo" style="font-family:'Oswald',sans-serif;font-size:12px;color:#1e3a5f;font-weight:600;letter-spacing:1px;text-transform:uppercase">${s}</span>
</div>
<div style="background:#1e3a5f;padding:7px 24px;text-align:center;font-size:10.5px;color:rgba(255,255,255,.45)">Developed by <b style="color:#fbbf24">Taj Wali</b>&nbsp;·&nbsp;<span style="color:#93c5fd">03429067901</span></div>
<div style="height:5px;background:#fbbf24"></div>`;
  },
  theadStyle(){return `thead tr:first-child th{background:#1e3a5f;color:#fbbf24;font-size:12px;font-weight:700;padding:11px 6px 4px;text-align:center;border-bottom:none}thead tr:last-child th{background:#2563eb;color:#e0f2fe;font-size:10px;font-weight:600;letter-spacing:.8px;text-transform:uppercase;padding:3px 5px 10px;text-align:center;border-bottom:3px solid #fbbf24}td:first-child{background:#1e3a5f;color:#fbbf24;font-weight:700;font-size:13px;text-align:center;padding:11px 12px;border-bottom:1px solid #2d4e7d;white-space:nowrap}tbody td:not(:first-child){text-align:center;padding:10px 5px;font-size:13px;font-weight:600;color:#1e293b;border-bottom:1px solid #e2e8f0;border-right:1px solid #f1f5f9;min-width:65px}tbody tr:nth-child(even) td:not(:first-child){background:#eff6ff}tbody tr:nth-child(odd) td:not(:first-child){background:#fff}.col-nazira{background:#dbeafe!important;color:#1e40af!important;font-weight:700!important}.col-oral{background:#fef3c7!important;color:#92400e!important;font-weight:700!important}`;}
},

// ── 3. Split Sidebar Layout ──────────────────────────────────
{ id:'sidebar', name:'Split Sidebar', c1:'#7c3aed', c2:'#8b5cf6', c3:'#fde68a', c4:'#6d28d9', c5:'#faf5ff',
  render(s,sub,badge,foot,th,tb){
    return `
<div style="display:flex;min-height:300px">
  <div style="width:160px;flex-shrink:0;background:linear-gradient(180deg,#7c3aed,#5b21b6);display:flex;flex-direction:column;align-items:center;justify-content:center;padding:24px 12px;text-align:center;position:relative;overflow:hidden">
    <div style="position:absolute;top:-40px;left:-40px;width:120px;height:120px;border-radius:50%;background:rgba(253,230,138,.07)"></div>
    <div style="position:absolute;bottom:-30px;right:-30px;width:100px;height:100px;border-radius:50%;background:rgba(253,230,138,.05)"></div>
    <div style="font-size:36px;margin-bottom:16px;position:relative">📖</div>
    <div style="font-family:'Raleway',sans-serif;font-size:clamp(11px,1.5vw,14px);font-weight:800;color:#fde68a;letter-spacing:1px;line-height:1.3;text-align:center;position:relative" class="tt-school-name">${s}</div>
    <div style="width:40px;height:2px;background:rgba(253,230,138,.5);margin:10px auto"></div>
    <div style="font-size:10px;color:rgba(255,255,255,.65);letter-spacing:1px;text-align:center;position:relative" class="tt-subtitle">${sub}</div>
    <div style="margin-top:14px;padding:4px 10px;border:1px solid rgba(253,230,138,.4);border-radius:12px;font-size:9px;font-weight:700;color:#fde68a;letter-spacing:1.5px;text-transform:uppercase;position:relative" class="tt-badge">${badge}</div>
  </div>
  <div style="flex:1;overflow-x:auto;background:#faf5ff">
    <div style="padding:20px 20px 28px;min-width:400px">
      <table style="width:100%;border-collapse:collapse;font-family:'Nunito',sans-serif"><thead>${th}</thead><tbody>${tb}</tbody></table>
    </div>
    <div style="border-top:2px solid #ede9fe;padding:10px 20px;display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:6px;background:#f5f3ff">
      <span class="tt-footer-note" style="font-size:11px;color:#6d28d9;font-style:italic">${foot}</span>
      <span class="tt-footer-logo" style="font-family:'Raleway',sans-serif;font-size:11px;color:#5b21b6;font-weight:800">${s} · ${badge}</span>
    </div>
  </div>
</div>
<div style="background:#5b21b6;padding:7px 24px;text-align:center;font-size:10.5px;color:rgba(255,255,255,.45)">Developed by <b style="color:#fde68a">Taj Wali</b>&nbsp;·&nbsp;<span style="color:#c4b5fd">03429067901</span></div>
<div style="height:5px;background:linear-gradient(90deg,#fde68a,#7c3aed,#5b21b6)"></div>`;
  },
  theadStyle(){return `thead tr:first-child th{background:#7c3aed;color:#fde68a;font-size:11px;font-weight:700;padding:10px 5px 3px;text-align:center}thead tr:last-child th{background:#8b5cf6;color:rgba(255,255,255,.8);font-size:9px;font-weight:600;letter-spacing:.8px;text-transform:uppercase;padding:3px 5px 10px;text-align:center;border-bottom:3px solid #fde68a}td:first-child{background:#7c3aed;color:#fde68a;font-weight:700;font-size:12px;text-align:center;padding:10px 10px;border-bottom:1px solid rgba(255,255,255,.1);white-space:nowrap}tbody td:not(:first-child){text-align:center;padding:9px 5px;font-size:12px;font-weight:600;color:#3b0764;border-bottom:1px solid #ede9fe;border-right:1px solid #f5f3ff;min-width:62px}tbody tr:nth-child(even) td:not(:first-child){background:#f5f3ff}tbody tr:nth-child(odd) td:not(:first-child){background:#fff}.col-nazira{background:#e0e7ff!important;color:#3730a3!important;font-weight:700!important}.col-oral{background:#fce7f3!important;color:#9d174d!important;font-weight:700!important}`;}
},

// ── 4. Bold Newspaper ────────────────────────────────────────
{ id:'newspaper', name:'Bold Newspaper', c1:'#111827', c2:'#374151', c3:'#f59e0b', c4:'#111827', c5:'#f9fafb',
  render(s,sub,badge,foot,th,tb){
    return `
<div style="background:#fff;border-bottom:3px double #111827;padding:28px 32px 16px">
  <div style="border-bottom:2px solid #111827;padding-bottom:8px;margin-bottom:8px;display:flex;align-items:flex-end;gap:16px;flex-wrap:wrap">
    <div style="flex:1;min-width:200px">
      <div class="tt-school-name" style="font-family:'Merriweather',serif;font-size:clamp(18px,3.5vw,34px);color:#111827;font-weight:700;letter-spacing:-0.5px;line-height:1.1">${s}</div>
    </div>
    <div style="text-align:right;flex-shrink:0">
      <div style="background:#f59e0b;color:#111827;font-family:'Oswald',sans-serif;font-size:11px;font-weight:700;letter-spacing:2px;text-transform:uppercase;padding:5px 14px" class="tt-badge">${badge}</div>
    </div>
  </div>
  <div style="display:flex;align-items:center;gap:12px;flex-wrap:wrap">
    <div class="tt-subtitle" style="font-family:'Lato',sans-serif;font-size:clamp(10px,1.3vw,13px);color:#6b7280;letter-spacing:3px;text-transform:uppercase">${sub}</div>
    <div style="flex:1;height:1px;background:#d1d5db;min-width:20px"></div>
    <div style="font-family:'Lato',sans-serif;font-size:11px;color:#9ca3af">📅 Examination Schedule</div>
  </div>
</div>
<div style="padding:20px 24px 32px;overflow-x:auto;background:#f9fafb"><table style="width:100%;border-collapse:collapse;min-width:460px;font-family:'Nunito',sans-serif">
<thead>${th}</thead><tbody>${tb}</tbody></table></div>
<div style="background:#111827;padding:12px 24px;display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:8px">
  <span class="tt-footer-note" style="font-size:11px;color:rgba(255,255,255,.55);font-style:italic">${foot}</span>
  <span class="tt-footer-logo" style="font-family:'Merriweather',serif;font-size:11px;color:#f59e0b;font-weight:700">${s}</span>
</div>
<div style="background:#111827;padding:6px 24px;text-align:center;font-size:10.5px;color:rgba(255,255,255,.35);border-top:1px solid #374151">Developed by <b style="color:#f59e0b">Taj Wali</b>&nbsp;·&nbsp;<span style="color:#9ca3af">03429067901</span></div>`;
  },
  theadStyle(){return `thead tr:first-child th{background:#111827;color:#f59e0b;font-size:12px;font-weight:700;padding:11px 6px 4px;text-align:center}thead tr:last-child th{background:#374151;color:rgba(255,255,255,.7);font-size:10px;font-weight:600;letter-spacing:.8px;text-transform:uppercase;padding:3px 5px 10px;text-align:center;border-bottom:3px solid #f59e0b}td:first-child{background:#111827;color:#f59e0b;font-weight:700;font-size:13px;text-align:center;padding:11px 12px;border-bottom:1px solid #374151;white-space:nowrap}tbody td:not(:first-child){text-align:center;padding:10px 5px;font-size:13px;font-weight:600;color:#111827;border-bottom:1px solid #e5e7eb;border-right:1px solid #f3f4f6;min-width:65px}tbody tr:nth-child(even) td:not(:first-child){background:#f3f4f6}tbody tr:nth-child(odd) td:not(:first-child){background:#fff}.col-nazira{background:#fef3c7!important;color:#78350f!important;font-weight:700!important}.col-oral{background:#d1fae5!important;color:#065f46!important;font-weight:700!important}`;}
},

// ── 5. Ribbon + Cards ────────────────────────────────────────
{ id:'ribbon', name:'Ribbon Cards', c1:'#be123c', c2:'#e11d48', c3:'#fda4af', c4:'#fff1f2', c5:'#fff5f6',
  render(s,sub,badge,foot,th,tb){
    return `
<div style="background:linear-gradient(90deg,#be123c,#e11d48);padding:20px 32px;display:flex;align-items:center;gap:20px;flex-wrap:wrap">
  <div style="width:60px;height:60px;background:rgba(255,255,255,.15);border-radius:12px;display:flex;align-items:center;justify-content:center;font-size:28px;flex-shrink:0;border:2px solid rgba(255,255,255,.3)">📖</div>
  <div style="flex:1;min-width:200px">
    <div class="tt-school-name" style="font-family:'Poppins',sans-serif;font-size:clamp(14px,2.5vw,24px);color:#fff;font-weight:700;line-height:1.2">${s}</div>
    <div class="tt-subtitle" style="font-size:clamp(10px,1.3vw,13px);color:rgba(255,255,255,.75);margin-top:3px">${sub}</div>
  </div>
  <div style="background:#fff;border-radius:8px;padding:8px 20px;text-align:center;flex-shrink:0">
    <div style="font-size:9px;color:#be123c;font-weight:800;letter-spacing:1.5px;text-transform:uppercase">Term</div>
    <div class="tt-badge" style="font-family:'Poppins',sans-serif;font-size:13px;color:#be123c;font-weight:700">${badge}</div>
  </div>
</div>
<div style="height:4px;background:linear-gradient(90deg,#fda4af,#be123c,#fda4af)"></div>
<div style="padding:24px 20px 32px;overflow-x:auto;background:#fff5f6"><table style="width:100%;border-collapse:separate;border-spacing:0 6px;min-width:460px;font-family:'Nunito',sans-serif">
<thead>${th}</thead><tbody>${tb}</tbody></table></div>
<div style="background:#fff1f2;border-top:2px solid #fda4af;padding:12px 24px;display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:8px">
  <span class="tt-footer-note" style="font-size:11px;color:#9f1239;font-style:italic">${foot}</span>
  <span class="tt-footer-logo" style="font-family:'Poppins',sans-serif;font-size:11px;color:#be123c;font-weight:700">${s} · ${badge}</span>
</div>
<div style="background:#be123c;padding:7px 24px;text-align:center;font-size:10.5px;color:rgba(255,255,255,.5)">Developed by <b style="color:#fda4af">Taj Wali</b>&nbsp;·&nbsp;<span style="color:#fecdd3">03429067901</span></div>`;
  },
  theadStyle(){return `thead tr:first-child th{background:#be123c;color:#fff;font-size:11px;font-weight:700;padding:10px 5px 3px;text-align:center}thead tr:last-child th{background:#e11d48;color:rgba(255,255,255,.8);font-size:9px;font-weight:600;letter-spacing:.8px;text-transform:uppercase;padding:3px 5px 10px;text-align:center;border-bottom:3px solid #fda4af}td:first-child{background:#be123c;color:#fff;font-weight:700;font-size:12px;text-align:center;padding:10px 10px;border-bottom:1px solid rgba(255,255,255,.15);white-space:nowrap;border-radius:6px 0 0 6px}tbody td:not(:first-child){text-align:center;padding:10px 5px;font-size:12px;font-weight:600;color:#1c0707;border-bottom:1px solid #ffe4e6;border-right:1px solid #fff1f2;min-width:62px}tbody tr:nth-child(even) td:not(:first-child){background:#fff1f2}tbody tr:nth-child(odd) td:not(:first-child){background:#fff}tbody tr:last-child td:last-child{border-radius:0 6px 6px 0}.col-nazira{background:#fef3c7!important;color:#78350f!important;font-weight:700!important}.col-oral{background:#dcfce7!important;color:#14532d!important;font-weight:700!important}`;}
},

// ── 6. Gradient Glow (dark mode) ─────────────────────────────
{ id:'darkglow', name:'Dark Glow', c1:'#0f0f1a', c2:'#1a1a3e', c3:'#818cf8', c4:'#a78bfa', c5:'#13131f',
  render(s,sub,badge,foot,th,tb){
    return `
<div style="background:linear-gradient(135deg,#0f0f1a,#1a1a3e,#0d1b3e);padding:40px 36px 32px;text-align:center;position:relative;overflow:hidden">
  <div style="position:absolute;top:-80px;left:50%;transform:translateX(-50%);width:300px;height:300px;border-radius:50%;background:radial-gradient(circle,rgba(129,140,248,.18),transparent 70%)"></div>
  <div style="position:absolute;bottom:-60px;right:-60px;width:200px;height:200px;border-radius:50%;background:radial-gradient(circle,rgba(167,139,250,.12),transparent 70%)"></div>
  <div style="font-size:32px;margin-bottom:14px;position:relative">✨</div>
  <div class="tt-school-name" style="font-family:'Raleway',sans-serif;font-size:clamp(16px,3vw,28px);font-weight:800;background:linear-gradient(135deg,#818cf8,#a78bfa,#c084fc);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;letter-spacing:1px;position:relative">${s}</div>
  <div style="width:60px;height:1px;background:linear-gradient(90deg,transparent,#818cf8,transparent);margin:12px auto"></div>
  <div class="tt-subtitle" style="font-size:clamp(10px,1.3vw,13px);color:rgba(165,180,252,.7);letter-spacing:2px;text-transform:uppercase;position:relative">${sub}</div>
  <div class="tt-badge" style="display:inline-block;margin-top:14px;padding:6px 22px;border:1px solid rgba(129,140,248,.4);border-radius:20px;font-size:11px;font-weight:700;letter-spacing:2px;text-transform:uppercase;color:#818cf8;background:rgba(129,140,248,.1);position:relative">${badge}</div>
</div>
<div style="height:1px;background:linear-gradient(90deg,transparent,#818cf8,#a78bfa,transparent)"></div>
<div style="padding:24px 24px 36px;overflow-x:auto;background:#13131f"><table style="width:100%;border-collapse:separate;border-spacing:0;min-width:460px;font-family:'Nunito',sans-serif">
<thead>${th}</thead><tbody>${tb}</tbody></table></div>
<div style="background:#0f0f1a;border-top:1px solid rgba(129,140,248,.2);padding:12px 24px;display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:8px">
  <span class="tt-footer-note" style="font-size:11px;color:rgba(165,180,252,.5);font-style:italic">${foot}</span>
  <span class="tt-footer-logo" style="font-family:'Raleway',sans-serif;font-size:11px;color:#818cf8;font-weight:700">${s}</span>
</div>
<div style="background:#0f0f1a;padding:7px 24px;text-align:center;font-size:10.5px;color:rgba(255,255,255,.3);border-top:1px solid rgba(129,140,248,.1)">Developed by <b style="color:#a78bfa">Taj Wali</b>&nbsp;·&nbsp;<span style="color:#818cf8">03429067901</span></div>
<div style="height:3px;background:linear-gradient(90deg,#818cf8,#a78bfa,#c084fc,#a78bfa,#818cf8)"></div>`;
  },
  theadStyle(){return `thead tr:first-child th{background:#1a1a3e;color:#a78bfa;font-size:11px;font-weight:700;padding:11px 5px 4px;text-align:center;border-bottom:none}thead tr:last-child th{background:#1e1e4a;color:rgba(165,180,252,.7);font-size:9px;font-weight:600;letter-spacing:.8px;text-transform:uppercase;padding:3px 5px 10px;text-align:center;border-bottom:2px solid rgba(129,140,248,.4)}td:first-child{background:#1a1a3e;color:#a78bfa;font-weight:700;font-size:12px;text-align:center;padding:10px 10px;border-bottom:1px solid rgba(129,140,248,.15);white-space:nowrap}tbody td:not(:first-child){text-align:center;padding:10px 5px;font-size:12px;font-weight:600;color:#e0e7ff;border-bottom:1px solid rgba(129,140,248,.12);border-right:1px solid rgba(129,140,248,.06);min-width:62px}tbody tr:nth-child(even) td:not(:first-child){background:#16163a}tbody tr:nth-child(odd) td:not(:first-child){background:#13131f}.col-nazira{background:rgba(52,211,153,.12)!important;color:#34d399!important;font-weight:700!important}.col-oral{background:rgba(251,191,36,.1)!important;color:#fbbf24!important;font-weight:700!important}`;}
},

// ── 7. Clean Corporate ───────────────────────────────────────
{ id:'corporate', name:'Clean Corporate', c1:'#0f4c81', c2:'#1d6fa4', c3:'#e2f0fb', c4:'#0f4c81', c5:'#f0f7ff',
  render(s,sub,badge,foot,th,tb){
    return `
<div style="background:#fff;border-bottom:4px solid #0f4c81;padding:24px 32px 20px">
  <div style="display:flex;align-items:center;gap:20px;flex-wrap:wrap">
    <div style="width:52px;height:52px;background:#0f4c81;border-radius:8px;display:flex;align-items:center;justify-content:center;font-size:24px;flex-shrink:0">📚</div>
    <div style="flex:1;min-width:200px">
      <div class="tt-school-name" style="font-family:'Montserrat',sans-serif;font-size:clamp(14px,2.5vw,22px);color:#0f4c81;font-weight:800;letter-spacing:-.3px;line-height:1.2">${s}</div>
      <div class="tt-subtitle" style="font-family:'Montserrat',sans-serif;font-size:clamp(9px,1.2vw,12px);color:#64748b;letter-spacing:2px;text-transform:uppercase;margin-top:3px;font-weight:600">${sub}</div>
    </div>
    <div style="border:2px solid #0f4c81;border-radius:6px;padding:6px 18px;text-align:center;flex-shrink:0">
      <div style="font-size:8px;color:#64748b;font-weight:700;letter-spacing:1px;text-transform:uppercase">Examination</div>
      <div class="tt-badge" style="font-family:'Montserrat',sans-serif;font-size:14px;color:#0f4c81;font-weight:800;line-height:1.2">${badge}</div>
    </div>
  </div>
</div>
<div style="height:3px;background:linear-gradient(90deg,#0f4c81,#1d6fa4,#38bdf8)"></div>
<div style="padding:24px 24px 36px;overflow-x:auto;background:#f8fbff"><table style="width:100%;border-collapse:collapse;min-width:460px;font-family:'Nunito',sans-serif">
<thead>${th}</thead><tbody>${tb}</tbody></table></div>
<div style="border-top:1px solid #dbeafe;padding:12px 24px;display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:8px;background:#eff6ff">
  <span class="tt-footer-note" style="font-size:11px;color:#3b82f6;font-style:italic">${foot}</span>
  <span class="tt-footer-logo" style="font-family:'Montserrat',sans-serif;font-size:11px;color:#0f4c81;font-weight:700">${s} · ${badge}</span>
</div>
<div style="background:#0f4c81;padding:7px 24px;text-align:center;font-size:10.5px;color:rgba(255,255,255,.45)">Developed by <b style="color:#93c5fd">Taj Wali</b>&nbsp;·&nbsp;<span style="color:#60a5fa">03429067901</span></div>`;
  },
  theadStyle(){return `thead tr:first-child th{background:#0f4c81;color:#e2f0fb;font-size:12px;font-weight:700;padding:11px 6px 4px;text-align:center}thead tr:last-child th{background:#1d6fa4;color:rgba(255,255,255,.8);font-size:10px;font-weight:600;letter-spacing:.8px;text-transform:uppercase;padding:3px 6px 10px;text-align:center;border-bottom:2px solid #38bdf8}td:first-child{background:#0f4c81;color:#e2f0fb;font-weight:700;font-size:12px;text-align:center;padding:10px 12px;border-bottom:1px solid #1d6fa4;white-space:nowrap}tbody td:not(:first-child){text-align:center;padding:10px 6px;font-size:12px;font-weight:600;color:#0c2a48;border-bottom:1px solid #dbeafe;border-right:1px solid #eff6ff;min-width:65px}tbody tr:nth-child(even) td:not(:first-child){background:#f0f7ff}tbody tr:nth-child(odd) td:not(:first-child){background:#fff}.col-nazira{background:#d1fae5!important;color:#065f46!important;font-weight:700!important}.col-oral{background:#fef3c7!important;color:#78350f!important;font-weight:700!important}`;}
},

// ── 8. Vintage Badge ─────────────────────────────────────────
{ id:'vintage', name:'Vintage Badge', c1:'#78350f', c2:'#92400e', c3:'#fcd34d', c4:'#fef3c7', c5:'#fffbf0',
  render(s,sub,badge,foot,th,tb){
    return `
<div style="background:linear-gradient(135deg,#fef3c7,#fde68a,#fef3c7);border-bottom:3px solid #b45309;padding:32px 36px 24px;text-align:center;position:relative">
  <div style="position:absolute;top:0;left:0;right:0;bottom:0;background-image:repeating-linear-gradient(45deg,transparent,transparent 10px,rgba(180,83,9,.02) 10px,rgba(180,83,9,.02) 20px)"></div>
  <div style="position:relative">
    <div style="display:inline-block;border:2px solid #b45309;border-radius:50%;width:60px;height:60px;margin-bottom:14px;font-size:26px;display:flex;align-items:center;justify-content:center;margin:0 auto 14px;background:#fff8e7">🎓</div>
    <div style="font-size:10px;letter-spacing:4px;text-transform:uppercase;color:#b45309;font-weight:700;margin-bottom:6px" class="tt-subtitle">${sub}</div>
    <div class="tt-school-name" style="font-family:'Playfair Display',serif;font-size:clamp(18px,3.5vw,30px);color:#78350f;font-weight:700;letter-spacing:.5px">${s}</div>
    <div style="width:120px;height:1px;background:linear-gradient(90deg,transparent,#b45309,transparent);margin:10px auto"></div>
    <div style="display:inline-flex;align-items:center;gap:8px">
      <span style="font-size:10px;color:#92400e">❖</span>
      <span class="tt-badge" style="font-family:'Playfair Display',serif;font-size:13px;color:#78350f;font-weight:700;letter-spacing:1px">${badge}</span>
      <span style="font-size:10px;color:#92400e">❖</span>
    </div>
  </div>
</div>
<div style="padding:24px 24px 36px;overflow-x:auto;background:#fffbf0"><table style="width:100%;border-collapse:separate;border-spacing:0;min-width:460px;font-family:'Nunito',sans-serif">
<thead>${th}</thead><tbody>${tb}</tbody></table></div>
<div style="background:#fef3c7;border-top:2px solid #b45309;padding:12px 24px;display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:8px">
  <span class="tt-footer-note" style="font-size:11px;color:#92400e;font-style:italic">${foot}</span>
  <span class="tt-footer-logo" style="font-family:'Playfair Display',serif;font-size:12px;color:#78350f;font-weight:700">${s}</span>
</div>
<div style="background:#78350f;padding:7px 24px;text-align:center;font-size:10.5px;color:rgba(255,255,255,.45)">Developed by <b style="color:#fcd34d">Taj Wali</b>&nbsp;·&nbsp;<span style="color:#fde68a">03429067901</span></div>
<div style="height:6px;background:repeating-linear-gradient(90deg,#b45309 0px,#b45309 12px,#fcd34d 12px,#fcd34d 24px)"></div>`;
  },
  theadStyle(){return `thead tr:first-child th{background:#78350f;color:#fcd34d;font-size:12px;font-weight:700;padding:11px 5px 4px;text-align:center}thead tr:first-child th:first-child{border-radius:6px 0 0 0}thead tr:first-child th:last-child{border-radius:0 6px 0 0}thead tr:last-child th{background:#92400e;color:rgba(255,255,255,.8);font-size:10px;font-weight:600;letter-spacing:.8px;text-transform:uppercase;padding:3px 5px 10px;text-align:center;border-bottom:3px solid #fcd34d}td:first-child{background:#78350f;color:#fcd34d;font-weight:700;font-size:12px;text-align:center;padding:10px 12px;border-bottom:1px solid rgba(255,255,255,.1);white-space:nowrap}tbody tr:last-child td:first-child{border-radius:0 0 0 6px}tbody td:not(:first-child){text-align:center;padding:10px 5px;font-size:13px;font-weight:600;color:#451a03;border-bottom:1px solid #fde68a;border-right:1px solid #fef9e7;min-width:65px}tbody tr:last-child td:last-child{border-radius:0 0 6px 0}tbody tr:nth-child(even) td:not(:first-child){background:#fef9e7}tbody tr:nth-child(odd) td:not(:first-child){background:#fffbf0}.col-nazira{background:#d1fae5!important;color:#065f46!important;font-weight:700!important}.col-oral{background:#fee2e2!important;color:#991b1b!important;font-weight:700!important}`;}
},

// ── 9. Top-Wave Shape ────────────────────────────────────────
{ id:'wave', name:'Ocean Wave', c1:'#0e7490', c2:'#0891b2', c3:'#a5f3fc', c4:'#083344', c5:'#f0fdff',
  render(s,sub,badge,foot,th,tb){
    return `
<div style="background:#0e7490;padding:32px 36px 50px;text-align:center;position:relative;overflow:hidden">
  <div style="position:absolute;top:0;left:0;right:0;bottom:0;opacity:.15;background:repeating-linear-gradient(0deg,transparent,transparent 18px,rgba(255,255,255,.15) 18px,rgba(255,255,255,.15) 19px)"></div>
  <div style="position:relative">
    <div class="tt-school-name" style="font-family:'Poppins',sans-serif;font-size:clamp(15px,3vw,27px);color:#fff;font-weight:700;line-height:1.2">${s}</div>
    <div style="width:60px;height:3px;background:#a5f3fc;margin:10px auto;border-radius:2px"></div>
    <div class="tt-subtitle" style="font-size:clamp(10px,1.3vw,13px);color:rgba(165,243,252,.8);letter-spacing:2px;text-transform:uppercase">${sub}</div>
    <div class="tt-badge" style="display:inline-block;margin-top:12px;background:rgba(255,255,255,.15);backdrop-filter:blur(4px);border:1px solid rgba(165,243,252,.4);color:#a5f3fc;padding:5px 20px;border-radius:30px;font-size:11px;font-weight:700;letter-spacing:2px;text-transform:uppercase">${badge}</div>
  </div>
</div>
<div style="margin-top:-20px;position:relative;z-index:2">
  <svg viewBox="0 0 960 40" xmlns="http://www.w3.org/2000/svg" style="display:block;width:100%;height:40px" preserveAspectRatio="none"><path d="M0,0 C200,40 760,40 960,0 L960,40 L0,40 Z" fill="#f0fdff"/></svg>
</div>
<div style="padding:4px 24px 36px;overflow-x:auto;background:#f0fdff"><table style="width:100%;border-collapse:separate;border-spacing:0;min-width:460px;font-family:'Nunito',sans-serif">
<thead>${th}</thead><tbody>${tb}</tbody></table></div>
<div style="background:#e0f9ff;border-top:2px solid #a5f3fc;padding:12px 24px;display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:8px">
  <span class="tt-footer-note" style="font-size:11px;color:#0e7490;font-style:italic">${foot}</span>
  <span class="tt-footer-logo" style="font-family:'Poppins',sans-serif;font-size:11px;color:#0e7490;font-weight:700">${s} · ${badge}</span>
</div>
<div style="background:#083344;padding:7px 24px;text-align:center;font-size:10.5px;color:rgba(255,255,255,.45)">Developed by <b style="color:#a5f3fc">Taj Wali</b>&nbsp;·&nbsp;<span style="color:#67e8f9">03429067901</span></div>`;
  },
  theadStyle(){return `thead tr:first-child th{background:#0e7490;color:#a5f3fc;font-size:12px;font-weight:700;padding:11px 5px 4px;text-align:center;border-radius:0}thead tr:first-child th:first-child{border-radius:8px 0 0 0}thead tr:first-child th:last-child{border-radius:0 8px 0 0}thead tr:last-child th{background:#0891b2;color:rgba(255,255,255,.8);font-size:10px;font-weight:600;letter-spacing:.8px;text-transform:uppercase;padding:3px 5px 10px;text-align:center;border-bottom:3px solid #a5f3fc}td:first-child{background:#0e7490;color:#a5f3fc;font-weight:700;font-size:12px;text-align:center;padding:10px 12px;border-bottom:1px solid rgba(255,255,255,.1);white-space:nowrap}tbody tr:last-child td:first-child{border-radius:0 0 0 8px}tbody td:not(:first-child){text-align:center;padding:10px 5px;font-size:13px;font-weight:600;color:#083344;border-bottom:1px solid #cffafe;border-right:1px solid #e0f9ff;min-width:65px}tbody tr:last-child td:last-child{border-radius:0 0 8px 0}tbody tr:nth-child(even) td:not(:first-child){background:#e0f9ff}tbody tr:nth-child(odd) td:not(:first-child){background:#f0fdff}.col-nazira{background:#d1fae5!important;color:#065f46!important;font-weight:700!important}.col-oral{background:#fef3c7!important;color:#78350f!important;font-weight:700!important}`;}
},

// ── 10. Pinstripe Formal ─────────────────────────────────────
{ id:'pinstripe', name:'Pinstripe Formal', c1:'#1f2937', c2:'#374151', c3:'#d1fae5', c4:'#6ee7b7', c5:'#f9fafb',
  render(s,sub,badge,foot,th,tb){
    return `
<div style="background:repeating-linear-gradient(90deg,#1f2937 0px,#1f2937 28px,#263040 28px,#263040 30px);padding:36px 40px 28px;text-align:center;position:relative">
  <div style="background:rgba(0,0,0,.25);border:1px solid rgba(255,255,255,.1);border-radius:4px;padding:20px 28px;display:inline-block;min-width:min(400px,90%)">
    <div style="font-size:10px;letter-spacing:5px;color:#6ee7b7;text-transform:uppercase;font-weight:700;margin-bottom:8px" class="tt-subtitle">${sub}</div>
    <div class="tt-school-name" style="font-family:'Oswald',sans-serif;font-size:clamp(16px,3vw,28px);color:#fff;font-weight:600;letter-spacing:2px;text-transform:uppercase">${s}</div>
    <div style="height:1px;background:linear-gradient(90deg,transparent,#6ee7b7,transparent);margin:10px 0"></div>
    <div class="tt-badge" style="font-family:'Oswald',sans-serif;font-size:12px;color:#6ee7b7;letter-spacing:3px;text-transform:uppercase;font-weight:500">${badge}</div>
  </div>
</div>
<div style="height:4px;background:linear-gradient(90deg,#6ee7b7,#10b981,#6ee7b7)"></div>
<div style="padding:24px 24px 36px;overflow-x:auto;background:#f9fafb"><table style="width:100%;border-collapse:collapse;min-width:460px;font-family:'Nunito',sans-serif">
<thead>${th}</thead><tbody>${tb}</tbody></table></div>
<div style="background:#1f2937;padding:12px 24px;display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:8px">
  <span class="tt-footer-note" style="font-size:11px;color:rgba(255,255,255,.5);font-style:italic">${foot}</span>
  <span class="tt-footer-logo" style="font-family:'Oswald',sans-serif;font-size:12px;color:#6ee7b7;font-weight:500;letter-spacing:1px;text-transform:uppercase">${s}</span>
</div>
<div style="background:#111827;padding:6px 24px;text-align:center;font-size:10.5px;color:rgba(255,255,255,.35)">Developed by <b style="color:#6ee7b7">Taj Wali</b>&nbsp;·&nbsp;<span style="color:#34d399">03429067901</span></div>
<div style="height:4px;background:repeating-linear-gradient(90deg,#6ee7b7 0,#6ee7b7 4px,transparent 4px,transparent 8px)"></div>`;
  },
  theadStyle(){return `thead tr:first-child th{background:#1f2937;color:#6ee7b7;font-size:12px;font-weight:700;padding:11px 5px 4px;text-align:center}thead tr:last-child th{background:#374151;color:rgba(255,255,255,.7);font-size:10px;font-weight:600;letter-spacing:.8px;text-transform:uppercase;padding:3px 5px 10px;text-align:center;border-bottom:3px solid #6ee7b7}td:first-child{background:#1f2937;color:#6ee7b7;font-weight:700;font-size:12px;text-align:center;padding:10px 12px;border-bottom:1px solid #374151;white-space:nowrap}tbody td:not(:first-child){text-align:center;padding:10px 5px;font-size:13px;font-weight:600;color:#111827;border-bottom:1px solid #e5e7eb;border-right:1px solid #f3f4f6;min-width:65px}tbody tr:nth-child(even) td:not(:first-child){background:#f3f4f6}tbody tr:nth-child(odd) td:not(:first-child){background:#fff}.col-nazira{background:#d1fae5!important;color:#065f46!important;font-weight:700!important}.col-oral{background:#fef3c7!important;color:#78350f!important;font-weight:700!important}`;}
},

// ── 11. Colorful Blocks ──────────────────────────────────────
{ id:'blocks', name:'Color Blocks', c1:'#f97316', c2:'#fb923c', c3:'#fff7ed', c4:'#ea580c', c5:'#fff7ed',
  render(s,sub,badge,foot,th,tb){
    return `
<div style="display:grid;grid-template-columns:1fr 1fr;min-height:110px">
  <div style="background:#f97316;padding:24px 20px 24px 28px;display:flex;flex-direction:column;justify-content:center">
    <div class="tt-school-name" style="font-family:'Poppins',sans-serif;font-size:clamp(13px,2.2vw,20px);color:#fff;font-weight:700;line-height:1.25">${s}</div>
    <div class="tt-subtitle" style="font-size:clamp(9px,1.1vw,12px);color:rgba(255,255,255,.7);margin-top:6px;letter-spacing:1px;text-transform:uppercase">${sub}</div>
  </div>
  <div style="background:#1c1c1e;padding:20px;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:8px">
    <div style="font-size:28px">📅</div>
    <div class="tt-badge" style="background:#f97316;color:#fff;font-family:'Poppins',sans-serif;font-size:12px;font-weight:700;padding:4px 16px;border-radius:20px;letter-spacing:1px;text-align:center">${badge}</div>
  </div>
</div>
<div style="height:5px;background:linear-gradient(90deg,#f97316,#fbbf24,#f97316)"></div>
<div style="padding:24px 20px 32px;overflow-x:auto;background:#fff7ed"><table style="width:100%;border-collapse:separate;border-spacing:0;min-width:460px;font-family:'Nunito',sans-serif">
<thead>${th}</thead><tbody>${tb}</tbody></table></div>
<div style="background:#1c1c1e;padding:12px 24px;display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:8px">
  <span class="tt-footer-note" style="font-size:11px;color:rgba(255,255,255,.5);font-style:italic">${foot}</span>
  <span class="tt-footer-logo" style="font-family:'Poppins',sans-serif;font-size:11px;color:#fb923c;font-weight:700">${s}</span>
</div>
<div style="background:#111;padding:6px 24px;text-align:center;font-size:10.5px;color:rgba(255,255,255,.35)">Developed by <b style="color:#fb923c">Taj Wali</b>&nbsp;·&nbsp;<span style="color:#fbbf24">03429067901</span></div>
<div style="height:5px;background:linear-gradient(90deg,#f97316 25%,#fbbf24 50%,#f97316 75%)"></div>`;
  },
  theadStyle(){return `thead tr:first-child th{background:#ea580c;color:#fff7ed;font-size:12px;font-weight:700;padding:11px 5px 4px;text-align:center}thead tr:first-child th:first-child{border-radius:8px 0 0 0}thead tr:first-child th:last-child{border-radius:0 8px 0 0}thead tr:last-child th{background:#fb923c;color:rgba(255,255,255,.9);font-size:10px;font-weight:600;letter-spacing:.8px;text-transform:uppercase;padding:3px 5px 10px;text-align:center;border-bottom:3px solid #fbbf24}td:first-child{background:#ea580c;color:#fff7ed;font-weight:700;font-size:12px;text-align:center;padding:10px 12px;border-bottom:1px solid rgba(255,255,255,.15);white-space:nowrap}tbody tr:last-child td:first-child{border-radius:0 0 0 8px}tbody td:not(:first-child){text-align:center;padding:10px 5px;font-size:13px;font-weight:600;color:#431407;border-bottom:1px solid #fed7aa;border-right:1px solid #fff7ed;min-width:65px}tbody tr:last-child td:last-child{border-radius:0 0 8px 0}tbody tr:nth-child(even) td:not(:first-child){background:#fff7ed}tbody tr:nth-child(odd) td:not(:first-child){background:#fff}.col-nazira{background:#d1fae5!important;color:#065f46!important;font-weight:700!important}.col-oral{background:#dbeafe!important;color:#1e40af!important;font-weight:700!important}`;}
},

// ── 12. Islamic Geometric ────────────────────────────────────
{ id:'islamic', name:'Islamic Geo', c1:'#064e3b', c2:'#065f46', c3:'#fcd34d', c4:'#10b981', c5:'#f0fdf4',
  render(s,sub,badge,foot,th,tb){
    return `
<div style="background:#064e3b;padding:0 0 0 0;position:relative;overflow:hidden">
  <div style="position:absolute;inset:0;opacity:.12;background-image:radial-gradient(circle at 25% 25%,#fcd34d 2px,transparent 2px),radial-gradient(circle at 75% 75%,#fcd34d 2px,transparent 2px);background-size:30px 30px"></div>
  <div style="position:absolute;inset:0;opacity:.06;background-image:repeating-linear-gradient(45deg,#fcd34d 0,#fcd34d 1px,transparent 0,transparent 50%),repeating-linear-gradient(-45deg,#fcd34d 0,#fcd34d 1px,transparent 0,transparent 50%);background-size:30px 30px"></div>
  <div style="position:relative;padding:30px 36px 26px;text-align:center">
    <div style="display:inline-block;width:50px;height:50px;border:2px solid #fcd34d;transform:rotate(45deg);margin:0 auto 18px;position:relative">
      <span style="position:absolute;inset:0;display:flex;align-items:center;justify-content:center;transform:rotate(-45deg);font-size:20px">☪️</span>
    </div>
    <div class="tt-school-name" style="font-family:'Playfair Display',serif;font-size:clamp(16px,3vw,27px);color:#fcd34d;letter-spacing:.5px;font-weight:700;text-shadow:0 2px 8px rgba(0,0,0,.4)">${s}</div>
    <div style="display:flex;align-items:center;gap:10px;justify-content:center;margin:10px 0">
      <span style="flex:1;height:1px;background:linear-gradient(90deg,transparent,rgba(252,211,77,.4))"></span>
      <span class="tt-subtitle" style="font-size:clamp(10px,1.3vw,13px);color:rgba(252,211,77,.75);letter-spacing:2px;text-transform:uppercase">${sub}</span>
      <span style="flex:1;height:1px;background:linear-gradient(90deg,rgba(252,211,77,.4),transparent)"></span>
    </div>
    <div class="tt-badge" style="display:inline-block;border:1px solid rgba(252,211,77,.5);padding:5px 22px;border-radius:3px;font-size:11px;font-weight:700;letter-spacing:2px;text-transform:uppercase;color:#fcd34d">${badge}</div>
  </div>
</div>
<div style="height:5px;background:repeating-linear-gradient(90deg,#064e3b 0,#064e3b 10px,#fcd34d 10px,#fcd34d 20px,#064e3b 20px,#064e3b 30px,#10b981 30px,#10b981 40px)"></div>
<div style="padding:24px 24px 36px;overflow-x:auto;background:#f0fdf4"><table style="width:100%;border-collapse:separate;border-spacing:0;min-width:460px;font-family:'Nunito',sans-serif">
<thead>${th}</thead><tbody>${tb}</tbody></table></div>
<div style="background:#f0fdf4;border-top:2px solid #10b981;padding:12px 24px;display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:8px">
  <span class="tt-footer-note" style="font-size:11px;color:#065f46;font-style:italic">${foot}</span>
  <span class="tt-footer-logo" style="font-family:'Playfair Display',serif;font-size:12px;color:#064e3b;font-weight:700">${s} · ${badge}</span>
</div>
<div style="background:#064e3b;padding:7px 24px;text-align:center;font-size:10.5px;color:rgba(255,255,255,.45)">Developed by <b style="color:#fcd34d">Taj Wali</b>&nbsp;·&nbsp;<span style="color:#10b981">03429067901</span></div>
<div style="height:5px;background:repeating-linear-gradient(90deg,#064e3b 0,#064e3b 10px,#fcd34d 10px,#fcd34d 20px,#064e3b 20px,#064e3b 30px,#10b981 30px,#10b981 40px)"></div>`;
  },
  theadStyle(){return `thead tr:first-child th{background:#064e3b;color:#fcd34d;font-size:12px;font-weight:700;padding:11px 5px 4px;text-align:center}thead tr:first-child th:first-child{border-radius:8px 0 0 0}thead tr:first-child th:last-child{border-radius:0 8px 0 0}thead tr:last-child th{background:#065f46;color:rgba(255,255,255,.8);font-size:10px;font-weight:600;letter-spacing:.8px;text-transform:uppercase;padding:3px 5px 10px;text-align:center;border-bottom:3px solid #10b981}td:first-child{background:#064e3b;color:#fcd34d;font-weight:700;font-size:12px;text-align:center;padding:10px 12px;border-bottom:1px solid rgba(255,255,255,.08);white-space:nowrap}tbody tr:last-child td:first-child{border-radius:0 0 0 8px}tbody td:not(:first-child){text-align:center;padding:10px 5px;font-size:13px;font-weight:600;color:#052e16;border-bottom:1px solid #bbf7d0;border-right:1px solid #dcfce7;min-width:65px}tbody tr:last-child td:last-child{border-radius:0 0 8px 0}tbody tr:nth-child(even) td:not(:first-child){background:#dcfce7}tbody tr:nth-child(odd) td:not(:first-child){background:#f0fdf4}.col-nazira{background:#fef3c7!important;color:#78350f!important;font-weight:700!important}.col-oral{background:#dbeafe!important;color:#1e40af!important;font-weight:700!important}`;}
},

// ── 13. Neon Strip ───────────────────────────────────────────
{ id:'neon', name:'Neon Strip', c1:'#0a0a0a', c2:'#111', c3:'#00ff88', c4:'#00d4ff', c5:'#0d0d0d',
  render(s,sub,badge,foot,th,tb){
    return `
<div style="background:#0a0a0a;padding:4px 0 0 0">
  <div style="height:3px;background:linear-gradient(90deg,#00ff88,#00d4ff,#ff00ff,#00d4ff,#00ff88)"></div>
  <div style="padding:28px 36px 24px;text-align:center;position:relative">
    <div style="position:absolute;top:0;left:50%;transform:translateX(-50%);width:300px;height:100%;background:radial-gradient(ellipse at top,rgba(0,255,136,.06),transparent 60%);pointer-events:none"></div>
    <div class="tt-school-name" style="font-family:'Montserrat',sans-serif;font-size:clamp(15px,3vw,26px);color:#fff;font-weight:800;letter-spacing:2px;text-transform:uppercase;text-shadow:0 0 20px rgba(0,255,136,.3)">${s}</div>
    <div style="width:80px;height:1px;background:linear-gradient(90deg,transparent,#00ff88,transparent);margin:10px auto"></div>
    <div class="tt-subtitle" style="font-size:clamp(10px,1.2vw,12px);color:rgba(0,212,255,.7);letter-spacing:3px;text-transform:uppercase">${sub}</div>
    <div class="tt-badge" style="display:inline-block;margin-top:12px;border:1px solid #00ff88;color:#00ff88;padding:5px 20px;border-radius:3px;font-size:11px;font-weight:700;letter-spacing:2px;text-transform:uppercase;text-shadow:0 0 8px rgba(0,255,136,.5);box-shadow:0 0 8px rgba(0,255,136,.15)">${badge}</div>
  </div>
</div>
<div style="height:2px;background:linear-gradient(90deg,transparent,#00d4ff,transparent)"></div>
<div style="padding:20px 24px 32px;overflow-x:auto;background:#0d0d0d"><table style="width:100%;border-collapse:separate;border-spacing:0;min-width:460px;font-family:'Nunito',sans-serif">
<thead>${th}</thead><tbody>${tb}</tbody></table></div>
<div style="background:#0a0a0a;border-top:1px solid rgba(0,255,136,.2);padding:12px 24px;display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:8px">
  <span class="tt-footer-note" style="font-size:11px;color:rgba(0,212,255,.5);font-style:italic">${foot}</span>
  <span class="tt-footer-logo" style="font-family:'Montserrat',sans-serif;font-size:11px;color:#00ff88;font-weight:700;letter-spacing:1px;text-transform:uppercase">${s}</span>
</div>
<div style="background:#000;padding:6px 24px;text-align:center;font-size:10.5px;color:rgba(255,255,255,.3)">Developed by <b style="color:#00ff88">Taj Wali</b>&nbsp;·&nbsp;<span style="color:#00d4ff">03429067901</span></div>
<div style="height:3px;background:linear-gradient(90deg,#00ff88,#00d4ff,#ff00ff,#00d4ff,#00ff88)"></div>`;
  },
  theadStyle(){return `thead tr:first-child th{background:#111;color:#00ff88;font-size:11px;font-weight:700;padding:11px 5px 4px;text-align:center;border-bottom:none}thead tr:last-child th{background:#161616;color:rgba(0,212,255,.7);font-size:9px;font-weight:600;letter-spacing:.8px;text-transform:uppercase;padding:3px 5px 10px;text-align:center;border-bottom:2px solid rgba(0,255,136,.3)}td:first-child{background:#111;color:#00ff88;font-weight:700;font-size:12px;text-align:center;padding:10px 10px;border-bottom:1px solid rgba(0,255,136,.1);white-space:nowrap}tbody td:not(:first-child){text-align:center;padding:10px 5px;font-size:12px;font-weight:600;color:#e0ffe0;border-bottom:1px solid rgba(0,255,136,.08);border-right:1px solid rgba(0,255,136,.04);min-width:62px}tbody tr:nth-child(even) td:not(:first-child){background:#131313}tbody tr:nth-child(odd) td:not(:first-child){background:#0d0d0d}.col-nazira{background:rgba(0,255,136,.1)!important;color:#00ff88!important;font-weight:700!important}.col-oral{background:rgba(0,212,255,.1)!important;color:#00d4ff!important;font-weight:700!important}`;}
},

// ── 14. Pastel Soft ──────────────────────────────────────────
{ id:'pastel', name:'Pastel Soft', c1:'#db2777', c2:'#ec4899', c3:'#fce7f3', c4:'#fdf2f8', c5:'#fff',
  render(s,sub,badge,foot,th,tb){
    return `
<div style="background:linear-gradient(135deg,#fce7f3,#ede9fe,#dbeafe);padding:36px 40px 32px;text-align:center;position:relative;overflow:hidden">
  <div style="position:absolute;top:-30px;right:-30px;width:120px;height:120px;border-radius:50%;background:rgba(219,39,119,.08)"></div>
  <div style="position:absolute;bottom:-20px;left:-20px;width:100px;height:100px;border-radius:50%;background:rgba(99,102,241,.08)"></div>
  <div style="font-size:36px;margin-bottom:10px">🌸</div>
  <div class="tt-school-name" style="font-family:'Poppins',sans-serif;font-size:clamp(15px,3vw,26px);color:#831843;font-weight:700;line-height:1.2">${s}</div>
  <div style="display:flex;align-items:center;gap:8px;justify-content:center;margin:10px 0">
    <span style="flex:1;height:1px;background:linear-gradient(90deg,transparent,#fbcfe8)"></span>
    <span class="tt-subtitle" style="font-size:clamp(10px,1.3vw,13px);color:#9d174d;font-style:italic">${sub}</span>
    <span style="flex:1;height:1px;background:linear-gradient(90deg,#fbcfe8,transparent)"></span>
  </div>
  <div class="tt-badge" style="display:inline-block;background:#fff;border:2px solid #f9a8d4;border-radius:20px;padding:5px 20px;font-size:11px;font-weight:700;color:#db2777;letter-spacing:1px">${badge}</div>
</div>
<div style="height:4px;background:linear-gradient(90deg,#f9a8d4,#c4b5fd,#93c5fd,#c4b5fd,#f9a8d4)"></div>
<div style="padding:24px 24px 36px;overflow-x:auto;background:#fff"><table style="width:100%;border-collapse:separate;border-spacing:0;min-width:460px;font-family:'Nunito',sans-serif">
<thead>${th}</thead><tbody>${tb}</tbody></table></div>
<div style="background:#fdf2f8;border-top:2px solid #fbcfe8;padding:12px 24px;display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:8px">
  <span class="tt-footer-note" style="font-size:11px;color:#9d174d;font-style:italic">${foot}</span>
  <span class="tt-footer-logo" style="font-family:'Poppins',sans-serif;font-size:11px;color:#831843;font-weight:700">${s} · ${badge}</span>
</div>
<div style="background:#831843;padding:7px 24px;text-align:center;font-size:10.5px;color:rgba(255,255,255,.5)">Developed by <b style="color:#fbcfe8">Taj Wali</b>&nbsp;·&nbsp;<span style="color:#f9a8d4">03429067901</span></div>
<div style="height:5px;background:linear-gradient(90deg,#f9a8d4,#c4b5fd,#93c5fd)"></div>`;
  },
  theadStyle(){return `thead tr:first-child th{background:#db2777;color:#fce7f3;font-size:12px;font-weight:700;padding:11px 5px 4px;text-align:center}thead tr:first-child th:first-child{border-radius:8px 0 0 0}thead tr:first-child th:last-child{border-radius:0 8px 0 0}thead tr:last-child th{background:#ec4899;color:rgba(255,255,255,.85);font-size:10px;font-weight:600;letter-spacing:.8px;text-transform:uppercase;padding:3px 5px 10px;text-align:center;border-bottom:3px solid #f9a8d4}td:first-child{background:#db2777;color:#fce7f3;font-weight:700;font-size:12px;text-align:center;padding:10px 12px;border-bottom:1px solid rgba(255,255,255,.15);white-space:nowrap}tbody tr:last-child td:first-child{border-radius:0 0 0 8px}tbody td:not(:first-child){text-align:center;padding:10px 5px;font-size:13px;font-weight:600;color:#831843;border-bottom:1px solid #fce7f3;border-right:1px solid #fdf2f8;min-width:65px}tbody tr:last-child td:last-child{border-radius:0 0 8px 0}tbody tr:nth-child(even) td:not(:first-child){background:#fdf2f8}tbody tr:nth-child(odd) td:not(:first-child){background:#fff}.col-nazira{background:#d1fae5!important;color:#065f46!important;font-weight:700!important}.col-oral{background:#ede9fe!important;color:#4c1d95!important;font-weight:700!important}`;}
},

// ── 15. Flag-Style Tri-Band ──────────────────────────────────
{ id:'triband', name:'Tri-Band Flag', c1:'#166534', c2:'#15803d', c3:'#ffffff', c4:'#dc2626', c5:'#f9fafb',
  render(s,sub,badge,foot,th,tb){
    return `
<div style="display:flex;height:90px">
  <div style="flex:1;background:#166534"></div>
  <div style="flex:2;background:#fff;display:flex;flex-direction:column;align-items:center;justify-content:center;padding:10px 16px;text-align:center">
    <div class="tt-school-name" style="font-family:'Montserrat',sans-serif;font-size:clamp(13px,2vw,19px);color:#14532d;font-weight:800;letter-spacing:.5px;line-height:1.2">${s}</div>
    <div class="tt-subtitle" style="font-size:clamp(9px,1.1vw,11px);color:#64748b;letter-spacing:2px;text-transform:uppercase;margin-top:3px">${sub}</div>
  </div>
  <div style="flex:1;background:#dc2626;display:flex;align-items:center;justify-content:center">
    <div class="tt-badge" style="background:rgba(255,255,255,.15);border:1px solid rgba(255,255,255,.4);padding:5px 10px;border-radius:3px;font-size:10px;font-weight:800;color:#fff;text-align:center;letter-spacing:1px;text-transform:uppercase">${badge}</div>
  </div>
</div>
<div style="height:6px;background:linear-gradient(90deg,#166534 33%,#fff 33%,#fff 66%,#dc2626 66%)"></div>
<div style="padding:24px 24px 36px;overflow-x:auto;background:#f9fafb"><table style="width:100%;border-collapse:collapse;min-width:460px;font-family:'Nunito',sans-serif">
<thead>${th}</thead><tbody>${tb}</tbody></table></div>
<div style="background:#14532d;padding:12px 24px;display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:8px">
  <span class="tt-footer-note" style="font-size:11px;color:rgba(255,255,255,.6);font-style:italic">${foot}</span>
  <span class="tt-footer-logo" style="font-family:'Montserrat',sans-serif;font-size:11px;color:#86efac;font-weight:700">${s} · ${badge}</span>
</div>
<div style="background:#0f2d1a;padding:6px 24px;text-align:center;font-size:10.5px;color:rgba(255,255,255,.35)">Developed by <b style="color:#86efac">Taj Wali</b>&nbsp;·&nbsp;<span style="color:#4ade80">03429067901</span></div>
<div style="height:6px;background:linear-gradient(90deg,#166534 33%,#fff 33%,#fff 66%,#dc2626 66%)"></div>`;
  },
  theadStyle(){return `thead tr:first-child th{background:#166534;color:#d1fae5;font-size:12px;font-weight:700;padding:11px 5px 4px;text-align:center}thead tr:last-child th{background:#15803d;color:rgba(255,255,255,.8);font-size:10px;font-weight:600;letter-spacing:.8px;text-transform:uppercase;padding:3px 5px 10px;text-align:center;border-bottom:3px solid #dc2626}td:first-child{background:#166534;color:#d1fae5;font-weight:700;font-size:12px;text-align:center;padding:10px 12px;border-bottom:1px solid rgba(255,255,255,.1);white-space:nowrap}tbody td:not(:first-child){text-align:center;padding:10px 5px;font-size:13px;font-weight:600;color:#111827;border-bottom:1px solid #e5e7eb;border-right:1px solid #f3f4f6;min-width:65px}tbody tr:nth-child(even) td:not(:first-child){background:#f0fdf4}tbody tr:nth-child(odd) td:not(:first-child){background:#fff}.col-nazira{background:#fef3c7!important;color:#78350f!important;font-weight:700!important}.col-oral{background:#fee2e2!important;color:#991b1b!important;font-weight:700!important}`;}
},

// ── 16. Timeline / Horizontal Cards ─────────────────────────
{ id:'timeline', name:'Timeline Cards', c1:'#1e1b4b', c2:'#312e81', c3:'#fbbf24', c4:'#6366f1', c5:'#f5f3ff',
  render(s,sub,badge,foot,th,tb){
    return `
<div style="background:#1e1b4b;padding:32px 36px 28px;display:flex;flex-direction:column;gap:0">
  <div style="display:flex;align-items:flex-start;gap:20px;flex-wrap:wrap">
    <div style="flex-shrink:0;width:64px;height:64px;background:linear-gradient(135deg,#6366f1,#8b5cf6);border-radius:16px;display:flex;align-items:center;justify-content:center;font-size:28px;box-shadow:0 8px 24px rgba(99,102,241,.4)">📖</div>
    <div style="flex:1;min-width:180px">
      <div class="tt-school-name" style="font-family:'Raleway',sans-serif;font-size:clamp(16px,3vw,26px);color:#fff;font-weight:800;line-height:1.2">${s}</div>
      <div class="tt-subtitle" style="font-size:clamp(10px,1.3vw,13px);color:rgba(165,180,252,.75);letter-spacing:2px;text-transform:uppercase;margin-top:5px">${sub}</div>
    </div>
    <div style="background:linear-gradient(135deg,#fbbf24,#f59e0b);padding:8px 20px;border-radius:10px;font-family:'Raleway',sans-serif;font-size:12px;font-weight:800;color:#1e1b4b;white-space:nowrap;box-shadow:0 4px 14px rgba(251,191,36,.35)" class="tt-badge">${badge}</div>
  </div>
  <div style="display:flex;gap:6px;margin-top:20px;flex-wrap:wrap">
    <div style="flex:1;min-width:80px;background:rgba(99,102,241,.15);border:1px solid rgba(99,102,241,.3);border-radius:8px;padding:8px 12px;text-align:center">
      <div style="font-size:9px;color:rgba(165,180,252,.6);text-transform:uppercase;letter-spacing:1px">Type</div>
      <div style="font-size:12px;color:#a5b4fc;font-weight:700;margin-top:2px">Written</div>
    </div>
    <div style="flex:1;min-width:80px;background:rgba(251,191,36,.1);border:1px solid rgba(251,191,36,.25);border-radius:8px;padding:8px 12px;text-align:center">
      <div style="font-size:9px;color:rgba(251,191,36,.6);text-transform:uppercase;letter-spacing:1px">Classes</div>
      <div style="font-size:12px;color:#fbbf24;font-weight:700;margin-top:2px">Nur – 8th</div>
    </div>
    <div style="flex:1;min-width:80px;background:rgba(52,211,153,.1);border:1px solid rgba(52,211,153,.25);border-radius:8px;padding:8px 12px;text-align:center">
      <div style="font-size:9px;color:rgba(52,211,153,.6);text-transform:uppercase;letter-spacing:1px">Session</div>
      <div style="font-size:12px;color:#34d399;font-weight:700;margin-top:2px">2026</div>
    </div>
  </div>
</div>
<div style="height:3px;background:linear-gradient(90deg,#6366f1,#8b5cf6,#fbbf24)"></div>
<div style="padding:24px 24px 36px;overflow-x:auto;background:#f5f3ff"><table style="width:100%;border-collapse:separate;border-spacing:0;min-width:460px;font-family:'Nunito',sans-serif"><thead>${th}</thead><tbody>${tb}</tbody></table></div>
<div style="background:#312e81;padding:12px 24px;display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:8px">
  <span class="tt-footer-note" style="font-size:11px;color:rgba(165,180,252,.6);font-style:italic">${foot}</span>
  <span class="tt-footer-logo" style="font-family:'Raleway',sans-serif;font-size:11px;color:#fbbf24;font-weight:700">${s} · ${badge}</span>
</div>
<div style="background:#1e1b4b;padding:6px 24px;text-align:center;font-size:10.5px;color:rgba(255,255,255,.35)">Developed by <b style="color:#fbbf24">Taj Wali</b>&nbsp;·&nbsp;<span style="color:#a5b4fc">03429067901</span></div>
<div style="height:3px;background:linear-gradient(90deg,#fbbf24,#6366f1,#8b5cf6)"></div>`;
  },
  theadStyle(){return `thead tr:first-child th{background:#312e81;color:#fbbf24;font-size:12px;font-weight:700;padding:11px 5px 4px;text-align:center}thead tr:first-child th:first-child{border-radius:8px 0 0 0}thead tr:first-child th:last-child{border-radius:0 8px 0 0}thead tr:last-child th{background:#4338ca;color:rgba(165,180,252,.85);font-size:10px;font-weight:600;letter-spacing:.8px;text-transform:uppercase;padding:3px 5px 10px;text-align:center;border-bottom:3px solid #fbbf24}td:first-child{background:#312e81;color:#fbbf24;font-weight:700;font-size:12px;text-align:center;padding:10px 12px;border-bottom:1px solid rgba(255,255,255,.08);white-space:nowrap}tbody tr:last-child td:first-child{border-radius:0 0 0 8px}tbody td:not(:first-child){text-align:center;padding:10px 5px;font-size:13px;font-weight:600;color:#1e1b4b;border-bottom:1px solid #ddd6fe;border-right:1px solid #ede9fe;min-width:65px}tbody tr:last-child td:last-child{border-radius:0 0 8px 0}tbody tr:nth-child(even) td:not(:first-child){background:#ede9fe}tbody tr:nth-child(odd) td:not(:first-child){background:#f5f3ff}.col-nazira{background:#d1fae5!important;color:#065f46!important;font-weight:700!important}.col-oral{background:#fef3c7!important;color:#78350f!important;font-weight:700!important}`;}
},

// ── 17. Certificate / Diploma Style ─────────────────────────
{ id:'certificate', name:'Certificate', c1:'#5c3a1e', c2:'#7c5230', c3:'#f5e6c8', c4:'#c9a84c', c5:'#fdfaf3',
  render(s,sub,badge,foot,th,tb){
    return `
<div style="background:linear-gradient(145deg,#fdfaf3,#f5e6c8,#fdfaf3);border:8px solid transparent;position:relative;padding:0">
  <div style="position:absolute;inset:0;border:4px solid #c9a84c;pointer-events:none;z-index:3"></div>
  <div style="position:absolute;top:8px;left:8px;right:8px;bottom:8px;border:1px solid rgba(201,168,76,.35);pointer-events:none;z-index:3"></div>
  <div style="position:absolute;top:14px;left:14px;width:40px;height:40px;border-top:2px solid #c9a84c;border-left:2px solid #c9a84c;pointer-events:none;z-index:3"></div>
  <div style="position:absolute;top:14px;right:14px;width:40px;height:40px;border-top:2px solid #c9a84c;border-right:2px solid #c9a84c;pointer-events:none;z-index:3"></div>
  <div style="position:absolute;bottom:14px;left:14px;width:40px;height:40px;border-bottom:2px solid #c9a84c;border-left:2px solid #c9a84c;pointer-events:none;z-index:3"></div>
  <div style="position:absolute;bottom:14px;right:14px;width:40px;height:40px;border-bottom:2px solid #c9a84c;border-right:2px solid #c9a84c;pointer-events:none;z-index:3"></div>
  <div style="padding:44px 44px 20px;text-align:center;position:relative">
    <div style="font-size:9px;letter-spacing:5px;color:#c9a84c;text-transform:uppercase;font-weight:700;margin-bottom:10px">— Official Document —</div>
    <div style="font-size:36px;margin-bottom:8px">🏛️</div>
    <div class="tt-school-name" style="font-family:'Playfair Display',serif;font-size:clamp(18px,3.5vw,32px);color:#5c3a1e;letter-spacing:.5px;line-height:1.15">${s}</div>
    <div style="width:200px;height:1px;background:linear-gradient(90deg,transparent,#c9a84c,transparent);margin:12px auto"></div>
    <div class="tt-subtitle" style="font-family:'Libre Baskerville',serif;font-size:clamp(11px,1.5vw,15px);font-style:italic;color:#7c5230;letter-spacing:1px">${sub}</div>
    <div style="display:inline-flex;align-items:center;gap:10px;margin-top:14px">
      <span style="font-size:12px;color:#c9a84c">✦</span>
      <span class="tt-badge" style="font-family:'Playfair Display',serif;font-size:14px;color:#5c3a1e;font-weight:700;letter-spacing:1px">${badge}</span>
      <span style="font-size:12px;color:#c9a84c">✦</span>
    </div>
  </div>
  <div style="padding:16px 44px 44px;overflow-x:auto"><table style="width:100%;border-collapse:separate;border-spacing:0;min-width:460px;font-family:'Nunito',sans-serif"><thead>${th}</thead><tbody>${tb}</tbody></table></div>
  <div style="border-top:1px solid rgba(201,168,76,.4);padding:12px 44px;display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:8px;background:rgba(201,168,76,.06)">
    <span class="tt-footer-note" style="font-size:11px;color:#7c5230;font-style:italic">${foot}</span>
    <span class="tt-footer-logo" style="font-family:'Playfair Display',serif;font-size:12px;color:#5c3a1e;font-weight:700">— Sealed & Issued —</span>
  </div>
</div>
<div style="background:#5c3a1e;padding:7px 24px;text-align:center;font-size:10.5px;color:rgba(255,255,255,.45)">Developed by <b style="color:#f5e6c8">Taj Wali</b>&nbsp;·&nbsp;<span style="color:#c9a84c">03429067901</span></div>`;
  },
  theadStyle(){return `thead tr:first-child th{background:#5c3a1e;color:#f5e6c8;font-size:12px;font-weight:700;padding:11px 5px 4px;text-align:center}thead tr:first-child th:first-child{border-radius:6px 0 0 0}thead tr:first-child th:last-child{border-radius:0 6px 0 0}thead tr:last-child th{background:#7c5230;color:rgba(245,230,200,.8);font-size:10px;font-weight:600;letter-spacing:.8px;text-transform:uppercase;padding:3px 5px 10px;text-align:center;border-bottom:3px solid #c9a84c}td:first-child{background:#5c3a1e;color:#f5e6c8;font-weight:700;font-size:12px;text-align:center;padding:10px 12px;border-bottom:1px solid rgba(255,255,255,.1);white-space:nowrap}tbody tr:last-child td:first-child{border-radius:0 0 0 6px}tbody td:not(:first-child){text-align:center;padding:10px 5px;font-size:13px;font-weight:600;color:#3a1a00;border-bottom:1px solid rgba(201,168,76,.2);border-right:1px solid rgba(201,168,76,.1);min-width:65px}tbody tr:last-child td:last-child{border-radius:0 0 6px 0}tbody tr:nth-child(even) td:not(:first-child){background:rgba(201,168,76,.06)}tbody tr:nth-child(odd) td:not(:first-child){background:rgba(253,250,243,.5)}.col-nazira{background:rgba(16,185,129,.12)!important;color:#065f46!important;font-weight:700!important}.col-oral{background:rgba(239,68,68,.08)!important;color:#991b1b!important;font-weight:700!important}`;}
},

// ── 18. Stacked Pill Rows ─────────────────────────────────────
{ id:'pills', name:'Pill Rows', c1:'#0f172a', c2:'#1e293b', c3:'#38bdf8', c4:'#0ea5e9', c5:'#f0f9ff',
  render(s,sub,badge,foot,th,tb){
    return `
<div style="background:linear-gradient(160deg,#0f172a 0%,#0c2a4a 100%);padding:32px 32px 28px;position:relative;overflow:hidden">
  <div style="position:absolute;right:-80px;top:-80px;width:260px;height:260px;border-radius:50%;background:radial-gradient(circle,rgba(56,189,248,.15),transparent 70%)"></div>
  <div style="display:flex;align-items:center;gap:16px;flex-wrap:wrap">
    <div style="flex:1;min-width:200px">
      <div class="tt-school-name" style="font-family:'Montserrat',sans-serif;font-size:clamp(14px,2.8vw,24px);color:#fff;font-weight:800;line-height:1.2">${s}</div>
      <div class="tt-subtitle" style="font-size:clamp(10px,1.3vw,12px);color:rgba(56,189,248,.7);letter-spacing:2px;text-transform:uppercase;margin-top:5px">${sub}</div>
    </div>
    <div style="display:flex;flex-direction:column;gap:6px;align-items:flex-end;flex-shrink:0">
      <div class="tt-badge" style="background:rgba(56,189,248,.15);border:1px solid rgba(56,189,248,.3);color:#38bdf8;padding:5px 18px;border-radius:20px;font-size:11px;font-weight:700;letter-spacing:1px;white-space:nowrap">${badge}</div>
      <div style="font-size:10px;color:rgba(255,255,255,.4);letter-spacing:1px">Examination Schedule</div>
    </div>
  </div>
</div>
<div style="height:2px;background:linear-gradient(90deg,#38bdf8,#0ea5e9,#38bdf8)"></div>
<div style="padding:20px 20px 32px;overflow-x:auto;background:#f0f9ff"><table style="width:100%;border-collapse:separate;border-spacing:0 5px;min-width:460px;font-family:'Nunito',sans-serif"><thead>${th}</thead><tbody>${tb}</tbody></table></div>
<div style="background:#0f172a;padding:12px 24px;display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:8px">
  <span class="tt-footer-note" style="font-size:11px;color:rgba(56,189,248,.5);font-style:italic">${foot}</span>
  <span class="tt-footer-logo" style="font-family:'Montserrat',sans-serif;font-size:11px;color:#38bdf8;font-weight:700">${s}</span>
</div>
<div style="background:#020617;padding:6px 24px;text-align:center;font-size:10.5px;color:rgba(255,255,255,.3)">Developed by <b style="color:#38bdf8">Taj Wali</b>&nbsp;·&nbsp;<span style="color:#7dd3fc">03429067901</span></div>`;
  },
  theadStyle(){return `thead tr:first-child th{background:#0f172a;color:#38bdf8;font-size:12px;font-weight:700;padding:11px 5px 4px;text-align:center;border-radius:8px 0 0 0}thead tr:first-child th:last-child{border-radius:0 8px 0 0}thead tr:last-child th{background:#1e293b;color:rgba(56,189,248,.7);font-size:10px;font-weight:600;letter-spacing:.8px;text-transform:uppercase;padding:3px 5px 10px;text-align:center;border-bottom:3px solid #38bdf8}td:first-child{background:#0f172a;color:#38bdf8;font-weight:700;font-size:12px;text-align:center;padding:10px 14px;border-bottom:none;white-space:nowrap;border-radius:8px 0 0 8px}tbody td:not(:first-child){text-align:center;padding:10px 5px;font-size:13px;font-weight:600;color:#0c4a6e;border-bottom:none;border-right:1px solid #e0f2fe;min-width:65px;background:#fff}tbody tr:last-child td:last-child{border-radius:0 8px 8px 0}.col-nazira{background:#d1fae5!important;color:#065f46!important;font-weight:700!important}.col-oral{background:#fef9c3!important;color:#78350f!important;font-weight:700!important}tbody tr:nth-child(even) td:not(:first-child){background:#e0f2fe}tbody tr:nth-child(odd) td:not(:first-child){background:#fff}`;}
},

// ── 19. Left Accent Bar ───────────────────────────────────────
{ id:'accentbar', name:'Accent Bar', c1:'#7e22ce', c2:'#9333ea', c3:'#fdf4ff', c4:'#e879f9', c5:'#fdf4ff',
  render(s,sub,badge,foot,th,tb){
    return `
<div style="display:flex;min-height:110px">
  <div style="width:10px;background:linear-gradient(180deg,#7e22ce,#e879f9,#7e22ce);flex-shrink:0"></div>
  <div style="flex:1;background:linear-gradient(135deg,#fdf4ff,#faf5ff);padding:28px 32px 24px;display:flex;align-items:center;gap:24px;flex-wrap:wrap">
    <div style="width:64px;height:64px;background:linear-gradient(135deg,#7e22ce,#9333ea);border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:26px;flex-shrink:0;box-shadow:0 6px 20px rgba(126,34,206,.3)">🎓</div>
    <div style="flex:1;min-width:180px">
      <div class="tt-school-name" style="font-family:'Poppins',sans-serif;font-size:clamp(14px,2.6vw,24px);color:#3b0764;font-weight:700;line-height:1.2">${s}</div>
      <div class="tt-subtitle" style="font-size:clamp(10px,1.2vw,13px);color:#a855f7;letter-spacing:1px;margin-top:4px">${sub}</div>
    </div>
    <div style="border-left:3px solid #e879f9;padding-left:16px;flex-shrink:0">
      <div style="font-size:9px;color:#a855f7;font-weight:700;letter-spacing:2px;text-transform:uppercase">Term</div>
      <div class="tt-badge" style="font-family:'Poppins',sans-serif;font-size:15px;color:#3b0764;font-weight:700;margin-top:2px">${badge}</div>
    </div>
  </div>
</div>
<div style="display:flex">
  <div style="width:10px;background:linear-gradient(180deg,#7e22ce,#e879f9);flex-shrink:0"></div>
  <div style="flex:1;padding:20px 32px 32px;overflow-x:auto;background:#fdf4ff">
    <table style="width:100%;border-collapse:collapse;min-width:460px;font-family:'Nunito',sans-serif"><thead>${th}</thead><tbody>${tb}</tbody></table>
  </div>
</div>
<div style="display:flex">
  <div style="width:10px;background:#7e22ce;flex-shrink:0"></div>
  <div style="flex:1;background:#faf5ff;border-top:2px solid #e9d5ff;padding:12px 32px;display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:8px">
    <span class="tt-footer-note" style="font-size:11px;color:#7e22ce;font-style:italic">${foot}</span>
    <span class="tt-footer-logo" style="font-family:'Poppins',sans-serif;font-size:11px;color:#3b0764;font-weight:700">${s} · ${badge}</span>
  </div>
</div>
<div style="background:#3b0764;padding:7px 24px;text-align:center;font-size:10.5px;color:rgba(255,255,255,.45)">Developed by <b style="color:#e879f9">Taj Wali</b>&nbsp;·&nbsp;<span style="color:#c084fc">03429067901</span></div>
<div style="height:4px;background:linear-gradient(90deg,#7e22ce,#e879f9,#7e22ce)"></div>`;
  },
  theadStyle(){return `thead tr:first-child th{background:#7e22ce;color:#fdf4ff;font-size:12px;font-weight:700;padding:11px 5px 4px;text-align:center}thead tr:last-child th{background:#9333ea;color:rgba(255,255,255,.8);font-size:10px;font-weight:600;letter-spacing:.8px;text-transform:uppercase;padding:3px 5px 10px;text-align:center;border-bottom:3px solid #e879f9}td:first-child{background:#7e22ce;color:#fdf4ff;font-weight:700;font-size:12px;text-align:center;padding:10px 12px;border-bottom:1px solid rgba(255,255,255,.12);white-space:nowrap}tbody td:not(:first-child){text-align:center;padding:10px 5px;font-size:13px;font-weight:600;color:#3b0764;border-bottom:1px solid #f3e8ff;border-right:1px solid #faf5ff;min-width:65px}tbody tr:nth-child(even) td:not(:first-child){background:#f3e8ff}tbody tr:nth-child(odd) td:not(:first-child){background:#fdf4ff}.col-nazira{background:#d1fae5!important;color:#065f46!important;font-weight:700!important}.col-oral{background:#fef3c7!important;color:#78350f!important;font-weight:700!important}`;}
},

// ── 20. Magazine Cover ───────────────────────────────────────
{ id:'magazine', name:'Magazine Cover', c1:'#dc2626', c2:'#ef4444', c3:'#fff', c4:'#fca5a5', c5:'#fff',
  render(s,sub,badge,foot,th,tb){
    return `
<div style="background:#dc2626;padding:0">
  <div style="display:flex;align-items:stretch;min-height:130px">
    <div style="background:#111;width:56px;flex-shrink:0;display:flex;align-items:center;justify-content:center">
      <div style="writing-mode:vertical-lr;transform:rotate(180deg);font-family:'Oswald',sans-serif;font-size:11px;font-weight:600;color:rgba(255,255,255,.4);letter-spacing:3px;text-transform:uppercase">SCHEDULE</div>
    </div>
    <div style="flex:1;padding:22px 28px;position:relative;overflow:hidden">
      <div style="position:absolute;top:-20px;right:-20px;width:150px;height:150px;border-radius:50%;background:rgba(255,255,255,.06)"></div>
      <div style="font-size:9px;letter-spacing:4px;text-transform:uppercase;color:rgba(255,255,255,.5);font-weight:700;margin-bottom:6px">ACADEMIC EDITION</div>
      <div class="tt-school-name" style="font-family:'Oswald',sans-serif;font-size:clamp(16px,3.5vw,32px);color:#fff;font-weight:700;text-transform:uppercase;letter-spacing:1px;line-height:1.1">${s}</div>
      <div style="height:3px;background:#fff;width:60px;margin:10px 0"></div>
      <div class="tt-subtitle" style="font-size:clamp(10px,1.3vw,12px);color:rgba(255,255,255,.7);text-transform:uppercase;letter-spacing:2px">${sub}</div>
    </div>
    <div style="background:#111;padding:16px 14px;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:6px;flex-shrink:0;min-width:80px">
      <div style="font-size:9px;color:rgba(255,255,255,.4);letter-spacing:1px;text-transform:uppercase;text-align:center">TERM</div>
      <div class="tt-badge" style="font-family:'Oswald',sans-serif;font-size:13px;color:#fca5a5;font-weight:600;text-align:center;text-transform:uppercase">${badge}</div>
    </div>
  </div>
  <div style="height:4px;background:linear-gradient(90deg,#fff 33%,#dc2626 33%,#dc2626 66%,#111 66%)"></div>
</div>
<div style="padding:24px 24px 36px;overflow-x:auto;background:#fff"><table style="width:100%;border-collapse:collapse;min-width:460px;font-family:'Nunito',sans-serif"><thead>${th}</thead><tbody>${tb}</tbody></table></div>
<div style="background:#111;padding:12px 24px;display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:8px">
  <span class="tt-footer-note" style="font-size:11px;color:rgba(255,255,255,.5);font-style:italic">${foot}</span>
  <span class="tt-footer-logo" style="font-family:'Oswald',sans-serif;font-size:12px;color:#fca5a5;font-weight:600;letter-spacing:1px;text-transform:uppercase">${s}</span>
</div>
<div style="background:#000;padding:6px 24px;text-align:center;font-size:10.5px;color:rgba(255,255,255,.3)">Developed by <b style="color:#fca5a5">Taj Wali</b>&nbsp;·&nbsp;<span style="color:#ef4444">03429067901</span></div>`;
  },
  theadStyle(){return `thead tr:first-child th{background:#dc2626;color:#fff;font-size:12px;font-weight:700;padding:11px 5px 4px;text-align:center;font-family:'Oswald',sans-serif;letter-spacing:.5px}thead tr:last-child th{background:#ef4444;color:rgba(255,255,255,.85);font-size:10px;font-weight:600;letter-spacing:.8px;text-transform:uppercase;padding:3px 5px 10px;text-align:center;border-bottom:3px solid #111}td:first-child{background:#dc2626;color:#fff;font-weight:700;font-size:12px;text-align:center;padding:10px 12px;border-bottom:1px solid rgba(255,255,255,.15);white-space:nowrap;font-family:'Oswald',sans-serif;letter-spacing:.5px}tbody td:not(:first-child){text-align:center;padding:10px 5px;font-size:13px;font-weight:600;color:#111;border-bottom:1px solid #fee2e2;border-right:1px solid #fff5f5;min-width:65px}tbody tr:nth-child(even) td:not(:first-child){background:#fff5f5}tbody tr:nth-child(odd) td:not(:first-child){background:#fff}.col-nazira{background:#d1fae5!important;color:#065f46!important;font-weight:700!important}.col-oral{background:#fef9c3!important;color:#78350f!important;font-weight:700!important}`;}
},

// ── 21. Geometric Corner Accents ─────────────────────────────
{ id:'geometric', name:'Geo Corners', c1:'#155e75', c2:'#0e7490', c3:'#ecfeff', c4:'#22d3ee', c5:'#f0fdff',
  render(s,sub,badge,foot,th,tb){
    return `
<div style="background:#fff;position:relative;padding:0">
  <svg style="position:absolute;top:0;left:0;width:100%;height:100%;pointer-events:none;z-index:1" preserveAspectRatio="none" viewBox="0 0 960 600" xmlns="http://www.w3.org/2000/svg">
    <polygon points="0,0 80,0 0,80" fill="#155e75" opacity="0.9"/>
    <polygon points="960,0 880,0 960,80" fill="#155e75" opacity="0.9"/>
    <polygon points="0,600 80,600 0,520" fill="#0e7490" opacity="0.6"/>
    <polygon points="960,600 880,600 960,520" fill="#0e7490" opacity="0.6"/>
    <polygon points="0,0 140,0 0,140" fill="#22d3ee" opacity="0.25"/>
    <polygon points="960,0 820,0 960,140" fill="#22d3ee" opacity="0.25"/>
  </svg>
  <div style="position:relative;z-index:2;padding:36px 56px 26px;text-align:center">
    <div style="display:inline-flex;align-items:center;gap:12px;justify-content:center;flex-wrap:wrap">
      <div style="width:2px;height:40px;background:linear-gradient(180deg,#155e75,#22d3ee)"></div>
      <div>
        <div class="tt-school-name" style="font-family:'Montserrat',sans-serif;font-size:clamp(15px,2.8vw,26px);color:#155e75;font-weight:800;letter-spacing:.5px">${s}</div>
        <div class="tt-subtitle" style="font-size:clamp(10px,1.2vw,13px);color:#0e7490;letter-spacing:2px;text-transform:uppercase;margin-top:4px">${sub}</div>
      </div>
      <div style="width:2px;height:40px;background:linear-gradient(180deg,#22d3ee,#155e75)"></div>
    </div>
    <div style="margin-top:14px">
      <span class="tt-badge" style="display:inline-block;background:#155e75;color:#ecfeff;padding:5px 24px;clip-path:polygon(10px 0%, 100% 0%, calc(100% - 10px) 100%, 0% 100%);font-size:11px;font-weight:700;letter-spacing:2px;text-transform:uppercase">${badge}</span>
    </div>
  </div>
  <div style="position:relative;z-index:2;padding:16px 32px 36px;overflow-x:auto;background:#f0fdff"><table style="width:100%;border-collapse:separate;border-spacing:0;min-width:460px;font-family:'Nunito',sans-serif"><thead>${th}</thead><tbody>${tb}</tbody></table></div>
  <div style="position:relative;z-index:2;background:#ecfeff;border-top:2px solid #22d3ee;padding:12px 32px;display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:8px">
    <span class="tt-footer-note" style="font-size:11px;color:#0e7490;font-style:italic">${foot}</span>
    <span class="tt-footer-logo" style="font-family:'Montserrat',sans-serif;font-size:11px;color:#155e75;font-weight:800">${s} · ${badge}</span>
  </div>
  <div style="position:relative;z-index:2;background:#155e75;padding:7px 24px;text-align:center;font-size:10.5px;color:rgba(255,255,255,.45)">Developed by <b style="color:#a5f3fc">Taj Wali</b>&nbsp;·&nbsp;<span style="color:#22d3ee">03429067901</span></div>
  <div style="height:5px;background:linear-gradient(90deg,#155e75 33%,#22d3ee 50%,#155e75 66%)"></div>
</div>`;
  },
  theadStyle(){return `thead tr:first-child th{background:#155e75;color:#ecfeff;font-size:12px;font-weight:700;padding:11px 5px 4px;text-align:center}thead tr:first-child th:first-child{border-radius:8px 0 0 0}thead tr:first-child th:last-child{border-radius:0 8px 0 0}thead tr:last-child th{background:#0e7490;color:rgba(255,255,255,.8);font-size:10px;font-weight:600;letter-spacing:.8px;text-transform:uppercase;padding:3px 5px 10px;text-align:center;border-bottom:3px solid #22d3ee}td:first-child{background:#155e75;color:#ecfeff;font-weight:700;font-size:12px;text-align:center;padding:10px 12px;border-bottom:1px solid rgba(255,255,255,.1);white-space:nowrap}tbody tr:last-child td:first-child{border-radius:0 0 0 8px}tbody td:not(:first-child){text-align:center;padding:10px 5px;font-size:13px;font-weight:600;color:#083344;border-bottom:1px solid #cffafe;border-right:1px solid #ecfeff;min-width:65px}tbody tr:last-child td:last-child{border-radius:0 0 8px 0}tbody tr:nth-child(even) td:not(:first-child){background:#ecfeff}tbody tr:nth-child(odd) td:not(:first-child){background:#f0fdff}.col-nazira{background:#d1fae5!important;color:#065f46!important;font-weight:700!important}.col-oral{background:#fef3c7!important;color:#78350f!important;font-weight:700!important}`;}
},

// ── 22. Sunset Gradient ───────────────────────────────────────
{ id:'sunset', name:'Sunset Gradient', c1:'#7c2d12', c2:'#c2410c', c3:'#fde68a', c4:'#fb923c', c5:'#fff7ed',
  render(s,sub,badge,foot,th,tb){
    return `
<div style="background:linear-gradient(135deg,#7c2d12 0%,#9a3412 25%,#c2410c 50%,#ea580c 75%,#f97316 100%);padding:40px 40px 36px;text-align:center;position:relative;overflow:hidden">
  <div style="position:absolute;inset:0;background:radial-gradient(ellipse at 70% 30%,rgba(253,230,138,.15),transparent 60%)"></div>
  <div style="position:absolute;bottom:-60px;left:10%;width:300px;height:300px;border-radius:50%;background:radial-gradient(circle,rgba(253,230,138,.08),transparent 70%)"></div>
  <div style="position:relative">
    <div style="display:inline-block;padding:6px 14px;border:1px solid rgba(253,230,138,.35);border-radius:4px;font-size:9px;letter-spacing:3px;text-transform:uppercase;color:rgba(253,230,138,.7);font-weight:700;margin-bottom:16px">Academic Institution</div>
    <div class="tt-school-name" style="font-family:'Playfair Display',serif;font-size:clamp(17px,3.5vw,32px);color:#fde68a;letter-spacing:.5px;line-height:1.15;text-shadow:0 2px 20px rgba(0,0,0,.3)">${s}</div>
    <div style="width:100px;height:2px;background:linear-gradient(90deg,transparent,#fde68a,transparent);margin:14px auto"></div>
    <div class="tt-subtitle" style="font-family:'Libre Baskerville',serif;font-size:clamp(11px,1.4vw,15px);font-style:italic;color:rgba(253,230,138,.75);letter-spacing:1px">${sub}</div>
    <div class="tt-badge" style="display:inline-block;margin-top:14px;background:rgba(253,230,138,.15);border:2px solid rgba(253,230,138,.4);padding:6px 24px;border-radius:30px;font-size:11px;font-weight:700;color:#fde68a;letter-spacing:2px;text-transform:uppercase">${badge}</div>
  </div>
</div>
<div style="height:5px;background:linear-gradient(90deg,#fde68a,#fb923c,#f97316,#fde68a)"></div>
<div style="padding:28px 24px 40px;overflow-x:auto;background:#fff7ed"><table style="width:100%;border-collapse:separate;border-spacing:0;min-width:460px;font-family:'Nunito',sans-serif"><thead>${th}</thead><tbody>${tb}</tbody></table></div>
<div style="background:#fff7ed;border-top:2px solid #fed7aa;padding:14px 24px;display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:8px">
  <span class="tt-footer-note" style="font-size:11px;color:#9a3412;font-style:italic">${foot}</span>
  <span class="tt-footer-logo" style="font-family:'Playfair Display',serif;font-size:12px;color:#7c2d12;font-weight:700">${s} · ${badge}</span>
</div>
<div style="background:#7c2d12;padding:7px 24px;text-align:center;font-size:10.5px;color:rgba(255,255,255,.45)">Developed by <b style="color:#fde68a">Taj Wali</b>&nbsp;·&nbsp;<span style="color:#fb923c">03429067901</span></div>
<div style="height:5px;background:linear-gradient(90deg,#7c2d12,#ea580c,#fde68a)"></div>`;
  },
  theadStyle(){return `thead tr:first-child th{background:#7c2d12;color:#fde68a;font-size:12px;font-weight:700;padding:11px 5px 4px;text-align:center}thead tr:first-child th:first-child{border-radius:8px 0 0 0}thead tr:first-child th:last-child{border-radius:0 8px 0 0}thead tr:last-child th{background:#9a3412;color:rgba(253,230,138,.8);font-size:10px;font-weight:600;letter-spacing:.8px;text-transform:uppercase;padding:3px 5px 10px;text-align:center;border-bottom:3px solid #fb923c}td:first-child{background:#7c2d12;color:#fde68a;font-weight:700;font-size:12px;text-align:center;padding:10px 12px;border-bottom:1px solid rgba(255,255,255,.1);white-space:nowrap}tbody tr:last-child td:first-child{border-radius:0 0 0 8px}tbody td:not(:first-child){text-align:center;padding:10px 5px;font-size:13px;font-weight:600;color:#431407;border-bottom:1px solid #fed7aa;border-right:1px solid #fff7ed;min-width:65px}tbody tr:last-child td:last-child{border-radius:0 0 8px 0}tbody tr:nth-child(even) td:not(:first-child){background:#fff7ed}tbody tr:nth-child(odd) td:not(:first-child){background:#fff}.col-nazira{background:#d1fae5!important;color:#065f46!important;font-weight:700!important}.col-oral{background:#dbeafe!important;color:#1e40af!important;font-weight:700!important}`;}
},

];

