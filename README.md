# 📋 Timetable Editor
**Iqra Roza Tul Quran Model School**
Developed by Taj Wali · 03429067901

---

## 📁 Project Structure

```
timetable-app/
│
├── index.html          ← Main page (open this in your browser)
│
├── css/
│   └── editor.css      ← All editor UI styles
│                          (toolbar, side panel, theme picker,
│                           preview area, toast, modal, footer)
│
└── js/
    ├── layouts.js      ← All 22 layout/theme definitions
    │                      (each has: id, name, colors, render(),
    │                       theadStyle() — easy to add new ones)
    └── app.js          ← Application logic
                           (state, render, edit, save/load,
                            export, panel toggle, toast)
```

---

## 🚀 How to Use

1. Open `index.html` in any modern browser
2. Pick a layout from the **🎨 Layout & Theme** panel
3. Edit school name, subtitle, term, and footer in **School Info**
4. Manage columns (dates/days) and rows (class names) in the panel
5. Click any exam cell to edit it inline
6. Use the toolbar buttons:
   - **💾 Save** — downloads `timetable.json` (restore any time)
   - **📂 Load** — loads a previously saved `.json` file
   - **🖨️ Print** — browser print dialog
   - **⬇ Export HTML** — standalone printable HTML file

---

## 🎨 Available Layouts (22 total)

| # | ID           | Name              | Style                        |
|---|--------------|-------------------|------------------------------|
| 1 | forest       | Forest Gold       | Classic centered header      |
| 2 | diagonal     | Diagonal Banner   | Skewed diagonal accent       |
| 3 | sidebar      | Split Sidebar     | Left sidebar header          |
| 4 | newspaper    | Bold Newspaper    | Editorial print style        |
| 5 | ribbon       | Ribbon Cards      | Modern ribbon header         |
| 6 | darkglow     | Dark Glow         | Dark mode with glow effects  |
| 7 | corporate    | Clean Corporate   | Professional minimal         |
| 8 | vintage      | Vintage Badge     | Classic ornate diploma       |
| 9 | wave         | Ocean Wave        | SVG wave divider             |
|10 | pinstripe    | Pinstripe Formal  | Pinstripe pattern header     |
|11 | blocks       | Color Blocks      | Split color block header     |
|12 | islamic      | Islamic Geo       | Geometric pattern overlay    |
|13 | neon         | Neon Strip        | Dark neon glow               |
|14 | pastel       | Pastel Soft       | Soft gradient pastels        |
|15 | triband      | Tri-Band Flag     | Three-color flag bands       |
|16 | timeline     | Timeline Cards    | Info cards in header         |
|17 | certificate  | Certificate       | Ornate diploma corners       |
|18 | pills        | Pill Rows         | Rounded pill-style rows      |
|19 | accentbar    | Accent Bar        | Bold vertical left bar       |
|20 | magazine     | Magazine Cover    | Editorial magazine spine     |
|21 | geometric    | Geo Corners       | SVG geometric corner shapes  |
|22 | sunset       | Sunset Gradient   | Warm deep sunset gradient    |

---

## ➕ Adding a New Layout

Open `js/layouts.js` and add a new entry to the `THEMES` array:

```js
{
  id: 'myLayout',
  name: 'My Layout',
  c1: '#111',  // swatch color 1 (header)
  c2: '#333',  // swatch color 2
  c3: '#fff',  // swatch color 3
  c4: '#f00',  // swatch color 4
  c5: '#fafafa', // background

  render(s, sub, badge, foot, th, tb) {
    // s    = school name
    // sub  = subtitle
    // badge = term/badge text
    // foot = footer note
    // th   = <thead> HTML (includes <style> tag for table CSS)
    // tb   = <tbody> HTML
    return `
      <div style="background:#111;padding:30px;text-align:center">
        <div style="color:#fff;font-size:24px">${s}</div>
        <div style="color:#aaa">${sub}</div>
      </div>
      <div style="padding:20px;overflow-x:auto">
        <table style="width:100%;border-collapse:collapse">
          <thead>${th}</thead>
          <tbody>${tb}</tbody>
        </table>
      </div>
      <div style="padding:10px;text-align:center;color:#555">${foot}</div>`;
  },

  theadStyle() {
    // Return CSS for thead, tbody, td styling
    return `
      thead th { background:#111; color:#fff; padding:10px; text-align:center; }
      tbody td { padding:8px; text-align:center; border-bottom:1px solid #eee; }
      td:first-child { background:#111; color:#fff; font-weight:700; }
      .col-nazira { background:#e8f5ee!important; color:#1a6b3a!important; }
      .col-oral   { background:#fff8e8!important; color:#b8860b!important; }`;
  }
}
```

---

## 💾 Data Format (timetable.json)

```json
{
  "school": "School Name",
  "subtitle": "Academic Examination Schedule",
  "badge": "Final Term 2026",
  "footer": "Please arrive 15 minutes early",
  "theme": "forest",
  "columns": [
    { "id": "c1", "date": "05/03/2026", "day": "Thursday", "type": "exam" }
  ],
  "rows": [
    { "id": "r1", "label": "Class 1", "cells": { "c1": "English" } }
  ]
}
```

Column `type` can be: `"exam"` | `"nazira"` | `"oral"`
