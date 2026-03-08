/* ═══════════════════════════════════════════════════════════
   app.js  —  Timetable Editor: Application State & Logic

   Sections:
     1. STATE           — timetable data model
     2. PANEL TOGGLE    — sidebar open/close
     3. THEME GRID      — builds the layout picker swatches
     4. RENDER          — re-draws the timetable preview
     5. EDIT CELL       — inline cell editing
     6. COLUMN/ROW MGMT — add, remove, update columns & rows
     7. SAVE / LOAD     — JSON file persistence
     8. EXPORT HTML     — standalone clean export
     9. TOAST           — notification helper
    10. INIT            — entry point
   ═══════════════════════════════════════════════════════════ */

// ══════════════════════════════════════════════════════════════
//  1. STATE
// ══════════════════════════════════════════════════════════════
let state = {
  columns: [
    {id:'c1', date:'05/03/2026', day:'Thursday',  type:'exam'},
    {id:'c2', date:'06/03/2026', day:'Friday',    type:'exam'},
    {id:'c3', date:'07/03/2026', day:'Saturday',  type:'exam'},
    {id:'c4', date:'09/03/2026', day:'Monday',    type:'exam'},
    {id:'c5', date:'10/03/2026', day:'Tuesday',   type:'exam'},
    {id:'c6', date:'11/03/2026', day:'Wednesday', type:'exam'},
    {id:'c7', date:'12,13&14',  day:'Nazira',    type:'nazira'},
    {id:'c8', date:'16 & 17',   day:'Oral',      type:'oral'},
  ],
  rows: [
    {id:'r1',  label:'Nur', cells:{c1:'English',c2:'—',c3:'Urdu',c4:'—',c5:'Maths',c6:'—',c7:'Nazira',c8:'Oral'}},
    {id:'r2',  label:'KG',  cells:{c1:'English',c2:'—',c3:'Urdu',c4:'—',c5:'Maths',c6:'—',c7:'Nazira',c8:'Oral'}},
    {id:'r3',  label:'1st', cells:{c1:'—',c2:'English',c3:'—',c4:'Urdu',c5:'—',c6:'Maths',c7:'Nazira',c8:'Oral'}},
    {id:'r4',  label:'2nd', cells:{c1:'—',c2:'English',c3:'—',c4:'Urdu',c5:'—',c6:'Maths',c7:'Nazira',c8:'Oral'}},
    {id:'r5',  label:'3rd', cells:{c1:'English',c2:'—',c3:'Urdu',c4:'—',c5:'Maths',c6:'—',c7:'Nazira',c8:'Oral'}},
    {id:'r6',  label:'4th', cells:{c1:'English',c2:'—',c3:'Maths',c4:'Science',c5:'—',c6:'Urdu',c7:'Nazira',c8:'Oral'}},
    {id:'r7',  label:'5th', cells:{c1:'Namaz',c2:'Urdu',c3:'Science',c4:'English',c5:'Maths',c6:'Grammar',c7:'Nazira',c8:'Oral'}},
    {id:'r8',  label:'6th', cells:{c1:'Maths',c2:'English',c3:'Islamiat',c4:'Urdu',c5:'Science',c6:'Grammar',c7:'Nazira',c8:'Oral'}},
    {id:'r9',  label:'7th', cells:{c1:'English',c2:'Maths',c3:'Science',c4:'Islamiat',c5:'Urdu',c6:'Grammar',c7:'Nazira',c8:'Oral'}},
    {id:'r10', label:'8th', cells:{c1:'Biology',c2:'Urdu',c3:'Maths',c4:'English',c5:'Grammar',c6:'Islamiat',c7:'Nazira',c8:'Oral'}},
  ]
};

let uid = 20;
function newId() { return 'x' + (++uid); }

let currentTheme = 'forest';

// ══════════════════════════════════════════════════════════════
//  2. PANEL TOGGLE
// ══════════════════════════════════════════════════════════════
let panelOpen = true;
const isMobile = () => window.innerWidth <= 768;

function togglePanel() {
  panelOpen = !panelOpen;
  const panel   = document.getElementById('side-panel');
  const overlay = document.getElementById('panel-overlay');
  const icon    = document.getElementById('toggle-icon');
  if (panelOpen) {
    panel.classList.remove('collapsed');
    icon.textContent = isMobile() ? '✕' : '☰';
    if (isMobile()) overlay.classList.add('show');
  } else {
    panel.classList.add('collapsed');
    icon.textContent = '☰';
    overlay.classList.remove('show');
  }
}

window.addEventListener('DOMContentLoaded', () => {
  if (isMobile()) { panelOpen = true; togglePanel(); }
});
window.addEventListener('resize', () => {
  if (!isMobile()) document.getElementById('panel-overlay').classList.remove('show');
  document.getElementById('toggle-icon').textContent =
    panelOpen ? (isMobile() ? '✕' : '☰') : '☰';
});

// ══════════════════════════════════════════════════════════════
//  3. THEME GRID
// ══════════════════════════════════════════════════════════════
function buildThemeGrid() {
  const grid = document.getElementById('theme-grid');
  grid.innerHTML = '';
  THEMES.forEach(t => {
    const div = document.createElement('div');
    div.className = 'theme-swatch' + (t.id === currentTheme ? ' active' : '');
    div.onclick = () => applyTheme(t.id);
    div.innerHTML = `
      <div class="sw-h" style="background:${t.c1}"><span>${t.name}</span></div>
      <div class="sw-b">
        <i style="background:${t.c2}"></i>
        <i style="background:${t.c3}"></i>
        <i style="background:${t.c4}"></i>
      </div>
      <span class="sw-check">✔</span>`;
    grid.appendChild(div);
  });
}

function applyTheme(id) {
  currentTheme = id;
  buildThemeGrid();
  renderPage();
  showToast('Layout: ' + THEMES.find(t => t.id === id).name);
}

// ══════════════════════════════════════════════════════════════
//  4. RENDER
// ══════════════════════════════════════════════════════════════
function getCfg() {
  return {
    school:   document.getElementById('cfg-school').value,
    subtitle: document.getElementById('cfg-subtitle').value,
    badge:    document.getElementById('cfg-badge').value,
    footer:   document.getElementById('cfg-footer').value,
  };
}

function onCfgChange() { renderPage(); }

function buildTheadHTML() {
  const t   = THEMES.find(t => t.id === currentTheme);
  const css = t.theadStyle();
  let h1 = '<tr><th>Class</th>';
  let h2 = '<tr><th></th>';
  state.columns.forEach(c => {
    h1 += `<th>${c.date}</th>`;
    h2 += `<th>${c.day}</th>`;
  });
  h1 += '</tr>'; h2 += '</tr>';
  return `<style>${css} .cell-empty{color:#ccc!important;font-weight:400!important}</style>${h1}${h2}`;
}

function buildTbodyHTML() {
  let html = '';
  state.rows.forEach(row => {
    html += '<tr>';
    html += `<td>${row.label}</td>`;
    state.columns.forEach(col => {
      const val   = row.cells[col.id] || '';
      const empty = val === '—' || val === '';
      const cls   = col.type === 'nazira' ? 'col-nazira'
                  : col.type === 'oral'   ? 'col-oral'
                  : 'editable-cell';
      const eCls  = (empty && col.type === 'exam') ? 'cell-empty' : '';
      const cur   = col.type === 'exam' ? 'pointer' : 'default';
      html += `<td class="${cls} ${eCls}" onclick="editCell(this,'${row.id}','${col.id}')" style="cursor:${cur}">${val || '—'}</td>`;
    });
    html += '</tr>';
  });
  return html;
}

function renderPage() {
  const { school, subtitle, badge, footer } = getCfg();
  const t  = THEMES.find(t => t.id === currentTheme);
  const th = buildTheadHTML();
  const tb = buildTbodyHTML();
  document.getElementById('timetable-page').innerHTML = t.render(school, subtitle, badge, footer, th, tb);
}

function renderSidePanel() {
  // — Columns —
  const colList = document.getElementById('col-list');
  colList.innerHTML = '';
  state.columns.forEach(col => {
    const div = document.createElement('div');
    div.className = 'col-item';
    div.innerHTML = `
      <div style="flex:1;min-width:0">
        <input type="text" value="${col.date}" placeholder="Date"
          oninput="updateCol('${col.id}','date',this.value)"
          style="width:100%;margin-bottom:2px">
        <input type="text" value="${col.day}" placeholder="Day"
          oninput="updateCol('${col.id}','day',this.value)"
          style="width:100%;font-size:10px;color:#888">
      </div>
      <select class="col-type-select" onchange="updateCol('${col.id}','type',this.value)">
        <option value="exam"   ${col.type==='exam'   ?'selected':''}>Exam</option>
        <option value="nazira" ${col.type==='nazira' ?'selected':''}>Nazira</option>
        <option value="oral"   ${col.type==='oral'   ?'selected':''}>Oral</option>
      </select>
      <button class="col-remove" onclick="removeColumn('${col.id}')">×</button>`;
    colList.appendChild(div);
  });

  // — Rows —
  const rowList = document.getElementById('row-list');
  rowList.innerHTML = '';
  state.rows.forEach(row => {
    const div = document.createElement('div');
    div.className = 'row-item';
    div.innerHTML = `
      <input type="text" value="${row.label}" placeholder="Class"
        oninput="updateRowLabel('${row.id}',this.value)">
      <button class="row-remove" onclick="removeRow('${row.id}')">×</button>`;
    rowList.appendChild(div);
  });
}

function render() { renderSidePanel(); renderPage(); }

// ══════════════════════════════════════════════════════════════
//  5. EDIT CELL (inline)
// ══════════════════════════════════════════════════════════════
function editCell(td, rowId, colId) {
  const col = state.columns.find(c => c.id === colId);
  if (col && col.type !== 'exam') return;

  const current = (state.rows.find(r => r.id === rowId)?.cells[colId] || '').trim();
  const inp = document.createElement('input');
  inp.value = current === '—' ? '' : current;
  inp.placeholder = '—';
  inp.style.cssText =
    'width:100%;border:none;background:transparent;font-family:inherit;' +
    'font-size:inherit;font-weight:inherit;text-align:center;color:inherit;padding:0;outline:none';
  td.innerHTML = '';
  td.appendChild(inp);
  inp.focus();
  inp.select();

  function commit() {
    const val = inp.value.trim() || '—';
    const row = state.rows.find(r => r.id === rowId);
    if (row) row.cells[colId] = val;
    renderPage();
  }
  inp.addEventListener('blur', commit);
  inp.addEventListener('keydown', e => {
    if (e.key === 'Enter')  { e.preventDefault(); inp.blur(); }
    if (e.key === 'Escape') { inp.value = current; inp.blur(); }
  });
}

// ══════════════════════════════════════════════════════════════
//  6. COLUMN / ROW MANAGEMENT
// ══════════════════════════════════════════════════════════════
function addColumn() {
  const id = newId();
  state.columns.push({ id, date: 'New Date', day: 'Day', type: 'exam' });
  state.rows.forEach(r => { r.cells[id] = '—'; });
  render();
  showToast('Column added');
}
function removeColumn(id) {
  if (state.columns.length <= 1) return showToast('Need at least 1 column');
  state.columns = state.columns.filter(c => c.id !== id);
  state.rows.forEach(r => { delete r.cells[id]; });
  render();
  showToast('Column removed');
}
function updateCol(id, key, value) {
  const col = state.columns.find(c => c.id === id);
  if (col) { col[key] = value; renderPage(); }
}

function addRow() {
  const id    = newId();
  const cells = {};
  state.columns.forEach(c => {
    cells[c.id] = c.type === 'nazira' ? 'Nazira'
                : c.type === 'oral'   ? 'Oral'
                : '—';
  });
  state.rows.push({ id, label: 'New Class', cells });
  render();
  showToast('Row added');
}
function removeRow(id) {
  if (state.rows.length <= 1) return showToast('Need at least 1 row');
  state.rows = state.rows.filter(r => r.id !== id);
  render();
  showToast('Row removed');
}
function updateRowLabel(id, value) {
  const row = state.rows.find(r => r.id === id);
  if (row) { row.label = value; renderPage(); }
}

// ══════════════════════════════════════════════════════════════
//  7. SAVE / LOAD JSON
// ══════════════════════════════════════════════════════════════
function saveToFile() {
  const { school, subtitle, badge, footer } = getCfg();
  const data = { school, subtitle, badge, footer, theme: currentTheme, columns: state.columns, rows: state.rows };
  const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
  const a = document.createElement('a');
  a.href = URL.createObjectURL(blob);
  a.download = 'timetable.json';
  a.click();
  showToast('Saved as timetable.json');
}

function loadFromFile(event) {
  const file = event.target.files[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = e => {
    try {
      const d = JSON.parse(e.target.result);
      if (d.school)   document.getElementById('cfg-school').value   = d.school;
      if (d.subtitle) document.getElementById('cfg-subtitle').value = d.subtitle;
      if (d.badge)    document.getElementById('cfg-badge').value    = d.badge;
      if (d.footer)   document.getElementById('cfg-footer').value   = d.footer;
      if (d.theme)    currentTheme = d.theme;
      if (d.columns)  state.columns = d.columns;
      if (d.rows)     state.rows    = d.rows;
      render();
      buildThemeGrid();
      showToast('Timetable loaded!');
    } catch {
      showToast('Invalid JSON file');
    }
  };
  reader.readAsText(file);
  event.target.value = '';
}

// ══════════════════════════════════════════════════════════════
//  8. EXPORT CLEAN HTML
// ══════════════════════════════════════════════════════════════
function showExportModal()  { document.getElementById('export-modal').classList.add('open'); }
function closeExportModal() { document.getElementById('export-modal').classList.remove('open'); }

function exportCleanHTML() {
  closeExportModal();
  const { school, subtitle, badge, footer } = getCfg();
  const t = THEMES.find(t => t.id === currentTheme);

  // Build table head
  let h1 = '<tr><th style="width:70px">Class</th>';
  let h2 = '<tr><th></th>';
  state.columns.forEach(c => { h1 += `<th>${c.date}</th>`; h2 += `<th>${c.day}</th>`; });
  h1 += '</tr>'; h2 += '</tr>';

  // Build table body
  let tbody = '';
  state.rows.forEach(row => {
    tbody += '<tr>';
    tbody += `<td>${row.label}</td>`;
    state.columns.forEach(col => {
      const val = row.cells[col.id] || '—';
      const cls = col.type === 'nazira' ? 'col-nazira'
                : col.type === 'oral'   ? 'col-oral'
                : val === '—'           ? 'empty' : '';
      tbody += `<td class="${cls}">${val}</td>`;
    });
    tbody += '</tr>';
  });

  const theadCSS = t.theadStyle();
  const inner = t.render(
    school, subtitle, badge, footer,
    `<style>${theadCSS} .empty,.cell-empty{color:#ccc!important;font-weight:400!important}</style>${h1}${h2}`,
    tbody
  );

  const html = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width,initial-scale=1.0">
<title>Datesheet – ${school}</title>
<link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@600;700&family=Libre+Baskerville:ital@0;1&family=Nunito:wght@400;600;700&family=Montserrat:wght@600;700;800&family=Merriweather:wght@700&family=Raleway:wght@600;700;800&family=Poppins:wght@500;600;700&family=Oswald:wght@500;600;700&family=Lato:wght@400;700;900&display=swap" rel="stylesheet">
<style>
*,*::before,*::after{box-sizing:border-box;margin:0;padding:0}
body{background:#e8e0d4;font-family:'Nunito',sans-serif;min-height:100vh;display:flex;flex-direction:column;align-items:center;justify-content:center;padding:30px 16px;gap:16px}
.page{width:100%;max-width:960px;overflow:hidden;box-shadow:0 20px 80px rgba(0,0,0,.2)}
table{width:100%;min-width:460px}
.table-wrap{overflow-x:auto;-webkit-overflow-scrolling:touch}
.site-credit{font-size:11px;color:rgba(0,0,0,.4);font-family:'Nunito',sans-serif;text-align:center}
.site-credit b{color:#1a3a2a;font-weight:700}
.site-credit span{color:#c9a84c;font-weight:600}
@media print{body{background:#fff;padding:0}.page{page-break-inside:avoid}}
</style>
</head>
<body>
<div class="page">${inner}</div>
<div class="site-credit">Developed by <b>Taj Wali</b>&nbsp;·&nbsp;<span>03429067901</span></div>
</body>
</html>`;

  const blob = new Blob([html], { type: 'text/html' });
  const a = document.createElement('a');
  a.href = URL.createObjectURL(blob);
  a.download = 'timetable-export.html';
  a.click();
  showToast('Exported: ' + t.name);
}

// ══════════════════════════════════════════════════════════════
//  9. TOAST
// ══════════════════════════════════════════════════════════════
let toastTimer;
function showToast(msg) {
  const t = document.getElementById('toast');
  t.textContent = msg;
  t.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => t.classList.remove('show'), 2500);
}

// ══════════════════════════════════════════════════════════════
//  10. INIT
// ══════════════════════════════════════════════════════════════
buildThemeGrid();
render();
