/* Estimation projects section (sample estimates) — injected after "Selected projects" */
(function () {
  "use strict";

  var PROJECTS = [
    {
      tag: "Residential · UK", title: "Two-storey detached house", size: "140 m² GIA",
      scope: "Full cost plan and BOQ from architectural and structural drawings, measured to NRM2.",
      qty: [["Concrete", "48 m³"], ["Reinforcement", "3.6 t"], ["Blockwork", "310 m²"], ["Roof covering", "95 m²"]],
      total: "£238,000", rate: "≈ £1,700 / m²", tools: "PlanSwift · Excel · NRM2",
      split: [["Substructure", 14], ["Frame & upper floors", 18], ["External envelope", 26], ["Roof", 10], ["MEP services", 17], ["Finishes", 15]],
      cur: "£", amount: 238000
    },
    {
      tag: "Industrial · Pakistan", title: "Steel portal frame warehouse", size: "24 × 60 m · 1,440 m²",
      scope: "Quantity takeoff from ETABS model and shop drawings; tender BOQ with supplier quotations.",
      qty: [["Structural steel", "58 t"], ["Floor slab concrete", "360 m³"], ["Roof & wall cladding", "2,600 m²"], ["Pad footings", "32 nos"]],
      total: "PKR 182 M", rate: "≈ PKR 126,000 / m²", tools: "ETABS · AutoCAD · Excel",
      split: [["Substructure", 22], ["Steel frame", 34], ["Cladding & roof", 21], ["Floor slab", 13], ["MEP services", 10]],
      cur: "PKR ", amount: 182000000
    },
    {
      tag: "Infrastructure · Pakistan", title: "Rural access road", size: "2.4 km · 6.1 m carriageway",
      scope: "Earthwork cut/fill from cross-sections, pavement layer quantities and drainage BOQ.",
      qty: [["Earthwork cut", "9,800 m³"], ["Earthwork fill", "7,200 m³"], ["Granular subbase", "2,900 m³"], ["Asphalt wearing course", "1,150 t"]],
      total: "PKR 96 M", rate: "≈ PKR 40 M / km", tools: "Civil 3D sections · Excel",
      split: [["Earthworks", 24], ["Subbase & base", 31], ["Asphalt", 33], ["Drainage", 8], ["Road furniture", 4]],
      cur: "PKR ", amount: 96000000
    },
    {
      tag: "Residential · Pakistan", title: "G+3 apartment block — frame", size: "4 floors · 1,850 m²",
      scope: "RC frame quantities (columns, beams, slabs, stairs), bar bending schedule and rate analysis.",
      qty: [["RCC concrete", "1,050 m³"], ["Reinforcement steel", "118 t"], ["Formwork", "7,400 m²"], ["Brick masonry", "620 m³"]],
      total: "PKR 245 M", rate: "≈ PKR 132,000 / m²", tools: "BBS · Rate analysis · Excel",
      split: [["Foundations", 16], ["Columns & walls", 21], ["Beams & slabs", 34], ["Staircases", 5], ["Masonry", 24]],
      cur: "PKR ", amount: 245000000
    }
  ];
  var COLORS = ["#f0890a", "#f6b25a", "#1d2228", "#6a707b", "#c7c2b8", "#2f6fb5"];

  function money(cur, n) {
    if (cur === "£") return "£" + Math.round(n).toLocaleString("en-GB");
    return cur + (n / 1e6).toFixed(1) + " M";
  }

  var CSS =
    ".est-grid{display:grid;gap:1.5rem}@media(min-width:768px){.est-grid{grid-template-columns:1fr 1fr}}" +
    ".est-card{position:relative;display:flex;flex-direction:column}" +
    ".est-badge{position:absolute;top:1.25rem;right:1.25rem;font-size:.65rem;letter-spacing:.14em;text-transform:uppercase;padding:.3rem .6rem;border-radius:999px;border:1px dashed var(--primary);color:var(--primary)}" +
    ".est-tag{font-size:.7rem;letter-spacing:.16em;text-transform:uppercase;color:var(--muted-foreground)}" +
    ".est-size{margin-top:.15rem;font-size:.85rem;color:var(--muted-foreground)}" +
    ".est-qty{display:grid;grid-template-columns:1fr 1fr;gap:.6rem;margin-top:1.1rem}" +
    ".est-qty div{border:1px solid var(--border);border-radius:.75rem;padding:.6rem .75rem;background:var(--background)}" +
    ".est-qty b{display:block;font-family:var(--font-display),Georgia,serif;font-size:1.15rem;font-weight:400;color:var(--foreground)}" +
    ".est-qty span{font-size:.72rem;color:var(--muted-foreground)}" +
    ".est-total{display:flex;flex-wrap:wrap;align-items:baseline;justify-content:space-between;gap:.5rem;margin-top:1.25rem;padding-top:1rem;border-top:1px solid var(--border)}" +
    ".est-total strong{font-family:var(--font-display),Georgia,serif;font-size:1.6rem;font-weight:400;color:var(--primary)}" +
    ".est-total small{font-size:.8rem;color:var(--muted-foreground)}" +
    ".est-bar{display:flex;height:.55rem;border-radius:999px;overflow:hidden;margin-top:.9rem;background:var(--muted)}" +
    ".est-bar i{display:block;height:100%}" +
    ".est-card details{margin-top:1rem}" +
    ".est-card summary{cursor:pointer;font-size:.85rem;font-weight:500;color:var(--foreground);list-style:none;display:inline-flex;align-items:center;gap:.4rem}" +
    ".est-card summary::-webkit-details-marker{display:none}" +
    ".est-card summary::after{content:'+';color:var(--primary);font-size:1.05rem;line-height:1}" +
    ".est-card details[open] summary::after{content:'–'}" +
    ".est-card summary:focus-visible{outline:2px solid var(--primary);outline-offset:3px;border-radius:4px}" +
    ".est-boq{width:100%;border-collapse:collapse;margin-top:.75rem;font-size:.82rem}" +
    ".est-boq td{padding:.45rem 0;border-bottom:1px solid var(--border);color:var(--muted-foreground)}" +
    ".est-boq td:last-child,.est-boq td:nth-child(3){text-align:right;color:var(--foreground);font-variant-numeric:tabular-nums}" +
    ".est-boq .sw{display:inline-block;width:.6rem;height:.6rem;border-radius:2px;margin-right:.5rem;vertical-align:middle}" +
    ".est-tools{margin-top:.9rem;font-size:.75rem;letter-spacing:.06em;color:var(--muted-foreground)}" +
    ".est-title{margin-top:.4rem;padding-right:7rem}.est-tag{padding-right:8rem}@media(max-width:520px){.est-badge{position:static;display:inline-block;margin-bottom:.75rem}.est-title,.est-tag{padding-right:0}}" +
    ".est-note{margin-top:1.25rem;font-size:.78rem;color:var(--muted-foreground)}";

  function card(p) {
    var bar = p.split.map(function (s, i) { return '<i style="width:' + s[1] + "%;background:" + COLORS[i % COLORS.length] + '" title="' + s[0] + " " + s[1] + '%"></i>'; }).join("");
    var rows = p.split.map(function (s, i) {
      return '<tr><td><span class="sw" style="background:' + COLORS[i % COLORS.length] + '"></span>' + s[0] + "</td><td></td><td>" + s[1] + "%</td><td>" + money(p.cur, p.amount * s[1] / 100) + "</td></tr>";
    }).join("");
    return '<article class="est-card rounded-2xl border border-border bg-card p-6">' +
      '<span class="est-badge">Sample estimate</span>' +
      '<p class="est-tag">' + p.tag + "</p>" +
      '<h3 class="est-title font-display text-lg">' + p.title + "</h3>" +
      '<p class="est-size">' + p.size + "</p>" +
      '<p class="mt-3 text-sm leading-6 text-muted-foreground">' + p.scope + "</p>" +
      '<div class="est-qty">' + p.qty.map(function (q) { return "<div><b>" + q[1] + "</b><span>" + q[0] + "</span></div>"; }).join("") + "</div>" +
      '<div class="est-total"><span><strong>' + p.total + "</strong></span><small>" + p.rate + "</small></div>" +
      '<div class="est-bar" role="img" aria-label="Cost split: ' + p.split.map(function (s) { return s[0] + " " + s[1] + "%"; }).join(", ") + '">' + bar + "</div>" +
      "<details><summary>Cost breakdown</summary><table class=\"est-boq\"><tbody>" + rows + "</tbody></table></details>" +
      '<p class="est-tools">' + p.tools + "</p></article>";
  }

  function build() {
    var style = document.createElement("style");
    style.textContent = CSS;
    document.head.appendChild(style);
    var sec = document.createElement("section");
    sec.id = "estimation";
    sec.className = "mx-auto max-w-6xl px-6 pb-20";
    sec.innerHTML =
      '<p class="section-label mb-3">Estimation</p>' +
      '<h2 class="font-display mb-4 text-3xl sm:text-4xl">Quantities, rates &amp; BOQs.</h2>' +
      '<p class="mb-10 max-w-2xl text-sm leading-6 text-muted-foreground">Typical estimation work — quantity takeoffs, bills of quantities and cost plans across residential, industrial and infrastructure projects.</p>' +
      '<div class="est-grid">' + PROJECTS.map(card).join("") + "</div>" +
      '<p class="est-note">Sample estimates for illustration of method and format. Figures are indicative and not taken from client projects.</p>';
    return sec;
  }

  var section = null;
  function anchor() {
    return document.getElementById("projects");
  }
  function place() {
    if (section && document.body.contains(section)) return;
    var a = anchor();
    if (!a) return;
    if (!section) section = build();
    a.after(section);
  }
  function start() {
    setTimeout(function () {
      place();
      new MutationObserver(function () { if (!document.body.contains(section)) place(); }).observe(document.body, { childList: true, subtree: true });
    }, 400);
  }
  if (document.readyState === "complete") start(); else window.addEventListener("load", start);
})();
