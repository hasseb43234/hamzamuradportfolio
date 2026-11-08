/* House construction flipbook — injected after the page has loaded */
(function () {
  "use strict";

  var SVG_OPEN = '<svg viewBox="0 0 300 220" xmlns="http://www.w3.org/2000/svg" role="img" aria-hidden="true" class="fb-svg">';
  var PATTERNS =
    '<defs>' +
    '<pattern id="fbHatch" width="6" height="6" patternUnits="userSpaceOnUse" patternTransform="rotate(45)"><line x1="0" y1="0" x2="0" y2="6" stroke="#1d2733" stroke-width=".6" opacity=".45"/></pattern>' +
    '<pattern id="fbSoil" width="10" height="10" patternUnits="userSpaceOnUse"><circle cx="2" cy="3" r=".8" fill="#8a6d45"/><circle cx="7" cy="8" r=".6" fill="#8a6d45"/><path d="M5 2l2 1" stroke="#8a6d45" stroke-width=".5"/></pattern>' +
    '<pattern id="fbBrick" width="16" height="8" patternUnits="userSpaceOnUse"><path d="M0 0H16M0 4H16M4 0V4M12 4V8" stroke="#1d2733" stroke-width=".4" opacity=".55"/></pattern>' +
    '<pattern id="fbConc" width="12" height="12" patternUnits="userSpaceOnUse"><circle cx="3" cy="3" r=".7" fill="#1d2733" opacity=".5"/><path d="M8 7l2 1-2 1z" fill="#1d2733" opacity=".45"/></pattern>' +
    '</defs>';
  function svg(body) { return SVG_OPEN + PATTERNS + body + "</svg>"; }

  /* ---------- original technical drawings ---------- */
  var D = {};

  D.cover = svg(
    '<g fill="none" stroke="#f5a523" stroke-width="1.4">' +
    '<path d="M40 190H260"/><path d="M60 190V105L150 50L240 105V190"/><path d="M48 112L150 42L252 112"/>' +
    '<rect x="128" y="140" width="44" height="50"/><rect x="80" y="120" width="32" height="28"/><rect x="188" y="120" width="32" height="28"/>' +
    '<path d="M96 120V148M80 134H112M204 120V148M188 134H220"/></g>' +
    '<g fill="none" stroke="#ffffff55" stroke-width=".6" stroke-dasharray="3 3"><path d="M60 205H240"/><path d="M60 200V210M240 200V210"/><path d="M270 50V190"/><path d="M265 50H275M265 190H275"/></g>' +
    '<g fill="#ffffff90" font-size="8" font-family="Inter,sans-serif" text-anchor="middle"><text x="150" y="216">12.0 m</text><text x="284" y="124" transform="rotate(90 284 124)">7.5 m</text></g>'
  );

  D.survey = svg(
    '<rect x="40" y="34" width="220" height="146" fill="#ffffff70" stroke="#1d2733" stroke-width="1.6"/>' +
    '<g stroke="#1d2733" stroke-width=".5" stroke-dasharray="5 3" opacity=".7"><path d="M70 26V188M130 26V188M190 26V188M250 26V188"/><path d="M32 60H268M32 110H268M32 160H268"/></g>' +
    '<g fill="#fff" stroke="#1d2733" stroke-width=".8"><circle cx="70" cy="16" r="7"/><circle cx="130" cy="16" r="7"/><circle cx="190" cy="16" r="7"/><circle cx="250" cy="16" r="7"/><circle cx="20" cy="60" r="7"/><circle cx="20" cy="110" r="7"/><circle cx="20" cy="160" r="7"/></g>' +
    '<g font-size="8" font-family="Inter,sans-serif" text-anchor="middle" fill="#1d2733"><text x="70" y="19">A</text><text x="130" y="19">B</text><text x="190" y="19">C</text><text x="250" y="19">D</text><text x="20" y="63">1</text><text x="20" y="113">2</text><text x="20" y="163">3</text></g>' +
    '<g stroke="#d98e0b" stroke-width="1.4">' +
    [70, 130, 190, 250].map(function (x) { return [60, 110, 160].map(function (y) { return '<path d="M' + (x - 4) + ' ' + y + 'h8M' + x + ' ' + (y - 4) + 'v8"/>'; }).join(""); }).join("") +
    '</g>' +
    '<path d="M52 176l6-10 6 10z" fill="#d98e0b"/><text x="68" y="176" font-size="7" font-family="Inter,sans-serif" fill="#1d2733">TBM +100.00</text>' +
    '<g stroke="#1d2733" stroke-width=".6"><path d="M40 202H260M40 197v10M260 197v10"/></g><text x="150" y="214" font-size="8" text-anchor="middle" font-family="Inter,sans-serif" fill="#1d2733">18.0 m plot frontage</text>' +
    '<g transform="translate(280 196)"><circle r="9" fill="none" stroke="#1d2733" stroke-width=".7"/><path d="M0 -8L3 3L0 1L-3 3Z" fill="#1d2733"/><text y="-11" font-size="7" text-anchor="middle" font-family="Inter,sans-serif" fill="#1d2733">N</text></g>'
  );

  D.foundation = svg(
    '<rect x="10" y="60" width="280" height="150" fill="url(#fbSoil)" opacity=".7"/>' +
    '<path d="M10 60H100V196H200V60H290" fill="none" stroke="#1d2733" stroke-width="1.4"/>' +
    '<rect x="100" y="186" width="100" height="10" fill="url(#fbHatch)" stroke="#1d2733" stroke-width=".8"/>' +
    '<rect x="110" y="160" width="80" height="26" fill="#e7e1d4" stroke="#1d2733" stroke-width="1.4"/><rect x="110" y="160" width="80" height="26" fill="url(#fbConc)"/>' +
    '<rect x="138" y="40" width="24" height="120" fill="#e7e1d4" stroke="#1d2733" stroke-width="1.4"/><rect x="138" y="40" width="24" height="120" fill="url(#fbConc)"/>' +
    '<g stroke="#d98e0b" stroke-width="1.3" fill="none"><path d="M116 180H184"/><path d="M143 30V178H131M157 30V178H169"/></g>' +
    '<g fill="#d98e0b"><circle cx="122" cy="176" r="1.6"/><circle cx="134" cy="176" r="1.6"/><circle cx="146" cy="176" r="1.6"/><circle cx="154" cy="176" r="1.6"/><circle cx="166" cy="176" r="1.6"/><circle cx="178" cy="176" r="1.6"/></g>' +
    '<g stroke="#1d2733" stroke-width=".6" fill="none"><path d="M240 60V196M235 60h10M235 196h10"/><path d="M110 206H190M110 201v10M190 201v10"/></g>' +
    '<g font-size="7.5" font-family="Inter,sans-serif" fill="#1d2733"><text x="246" y="132">1.5 m</text><text x="150" y="217" text-anchor="middle">1.8 m pad footing</text>' +
    '<text x="16" y="52">FGL</text><text x="204" y="176">Blinding 75 mm</text><text x="204" y="166">C25/30 pad</text><text x="168" y="52">Column starter bars</text></g>'
  );

  D.plinth = svg(
    '<rect x="10" y="140" width="280" height="70" fill="url(#fbSoil)" opacity=".6"/>' +
    '<path d="M10 140H290" stroke="#1d2733" stroke-width="1"/>' +
    '<rect x="70" y="120" width="160" height="34" fill="#e7e1d4" stroke="#1d2733" stroke-width="1.4"/><rect x="70" y="120" width="160" height="34" fill="url(#fbConc)"/>' +
    '<g stroke="#d98e0b" stroke-width="1.2" fill="none"><rect x="78" y="126" width="144" height="22" rx="2"/></g>' +
    '<rect x="70" y="116" width="160" height="4" fill="#d98e0b"/>' +
    '<rect x="105" y="20" width="90" height="96" fill="url(#fbBrick)" stroke="#1d2733" stroke-width="1.4"/>' +
    '<path d="M70 168H230" stroke="#2f6fb5" stroke-width="1.2" stroke-dasharray="4 3"/>' +
    '<g stroke="#1d2733" stroke-width=".6"><path d="M232 118H262M232 137H262M196 60H262M232 168H262"/></g>' +
    '<g font-size="7.5" font-family="Inter,sans-serif" fill="#1d2733"><text x="264" y="121">DPC</text><text x="264" y="140">Plinth</text><text x="264" y="148">beam</text><text x="264" y="63">Wall</text><text x="264" y="171">Anti-</text><text x="264" y="179">termite</text>' +
    '<text x="14" y="134">NGL</text><text x="14" y="112">FFL ±0.00</text></g>' +
    '<path d="M14 116H60" stroke="#1d2733" stroke-width=".6" stroke-dasharray="3 2"/>'
  );

  D.frame = svg(
    '<path d="M10 200H290" stroke="#1d2733" stroke-width="1.2"/>' +
    '<g fill="#e7e1d4" stroke="#1d2733" stroke-width="1.3">' +
    '<rect x="30" y="40" width="14" height="160"/><rect x="113" y="40" width="14" height="160"/><rect x="196" y="40" width="14" height="160"/><rect x="262" y="40" width="14" height="160"/>' +
    '<rect x="30" y="108" width="246" height="14"/><rect x="30" y="30" width="246" height="14"/></g>' +
    '<g stroke="#d98e0b" stroke-width=".9" fill="none"><path d="M34 34H272M34 40H272M34 112H272M34 118H272"/><path d="M34 34V200M40 34V200M117 34V200M123 34V200M200 34V200M206 34V200M266 34V200M272 34V200"/></g>' +
    '<g fill="#fff" stroke="#1d2733" stroke-width=".7"><circle cx="37" cy="216" r="0"/></g>' +
    '<g font-size="7.5" font-family="Inter,sans-serif" fill="#1d2733">' +
    '<text x="70" y="104" text-anchor="middle">B1 230×450</text><text x="160" y="104" text-anchor="middle">B1</text><text x="236" y="104" text-anchor="middle">B2</text>' +
    '<text x="70" y="26" text-anchor="middle">RB1 roof beam</text><text x="48" y="160">C1</text><text x="131" y="160">C1</text><text x="214" y="160">C2</text>' +
    '<text x="150" y="214" text-anchor="middle">Ground + 1 · 3-bay RC moment frame</text></g>' +
    '<g stroke="#1d2733" stroke-width=".5" stroke-dasharray="3 3" fill="none"><path d="M284 122V200M284 44V108"/></g>' +
    '<g font-size="7" font-family="Inter,sans-serif" fill="#1d2733"><text x="287" y="165" transform="rotate(90 287 165)">3.2 m</text><text x="287" y="80" transform="rotate(90 287 80)">3.0 m</text></g>'
  );

  D.slab = svg(
    '<rect x="30" y="20" width="240" height="170" fill="#e7e1d470" stroke="#1d2733" stroke-width="1.6"/>' +
    '<g stroke="#d98e0b" stroke-width=".9">' + (function () { var s = ""; for (var x = 42; x < 270; x += 12) s += '<path d="M' + x + ' 26V184"/>'; return s; })() + '</g>' +
    '<g stroke="#2f6fb5" stroke-width=".9">' + (function () { var s = ""; for (var y = 32; y < 190; y += 12) s += '<path d="M36 ' + y + 'H264"/>'; return s; })() + '</g>' +
    '<g fill="#1d2733"><rect x="26" y="16" width="10" height="10"/><rect x="145" y="16" width="10" height="10"/><rect x="264" y="16" width="10" height="10"/><rect x="26" y="184" width="10" height="10"/><rect x="145" y="184" width="10" height="10"/><rect x="264" y="184" width="10" height="10"/></g>' +
    '<rect x="60" y="80" width="120" height="44" fill="#f6f3ec" stroke="#1d2733" stroke-width=".7"/>' +
    '<g font-size="7.5" font-family="Inter,sans-serif" fill="#1d2733"><text x="66" y="94">Slab 150 mm · C25/30</text><text x="66" y="106" fill="#b8770a">T12 @ 150 c/c bottom</text><text x="66" y="118" fill="#2f6fb5">T10 @ 200 c/c dist.</text>' +
    '<text x="150" y="212" text-anchor="middle">First floor slab · reinforcement plan</text></g>'
  );

  D.elevation = svg(
    '<path d="M10 196H290" stroke="#1d2733" stroke-width="1.4"/>' +
    '<rect x="50" y="56" width="200" height="140" fill="url(#fbBrick)" stroke="#1d2733" stroke-width="1.4"/>' +
    '<rect x="44" y="46" width="212" height="10" fill="#e7e1d4" stroke="#1d2733" stroke-width="1.2"/>' +
    '<rect x="50" y="122" width="200" height="6" fill="#e7e1d4" stroke="#1d2733" stroke-width=".8"/>' +
    '<g fill="#dbe7f3" stroke="#1d2733" stroke-width="1.2"><rect x="70" y="72" width="40" height="36"/><rect x="130" y="72" width="40" height="36"/><rect x="190" y="72" width="40" height="36"/><rect x="70" y="142" width="40" height="34"/><rect x="190" y="142" width="40" height="34"/></g>' +
    '<g stroke="#1d2733" stroke-width=".7"><path d="M90 72V108M70 90H110M150 72V108M130 90H170M210 72V108M190 90H230M90 142V176M210 142V176"/></g>' +
    '<rect x="132" y="138" width="36" height="58" fill="#c79a5b" stroke="#1d2733" stroke-width="1.2"/><circle cx="160" cy="168" r="1.6" fill="#1d2733"/>' +
    '<g fill="#d98e0b"><rect x="66" y="68" width="48" height="4"/><rect x="126" y="68" width="48" height="4"/><rect x="186" y="68" width="48" height="4"/><rect x="66" y="138" width="48" height="4"/><rect x="128" y="134" width="44" height="4"/><rect x="186" y="138" width="48" height="4"/></g>' +
    '<g font-size="7.5" font-family="Inter,sans-serif" fill="#1d2733"><text x="150" y="212" text-anchor="middle">Front elevation · lintels shown in amber</text><text x="258" y="100">230 mm</text><text x="258" y="108">brick wall</text></g>'
  );

  D.mep = svg(
    '<rect x="30" y="20" width="240" height="170" fill="#ffffff70" stroke="#1d2733" stroke-width="2"/>' +
    '<g stroke="#1d2733" stroke-width="1.2"><path d="M150 20V110M30 110H200M200 110V190"/></g>' +
    '<g fill="none" stroke="#2f6fb5" stroke-width="1.4"><path d="M262 30H170V70H120"/><path d="M170 70V150H230"/></g>' +
    '<g fill="#2f6fb5"><circle cx="120" cy="70" r="3"/><circle cx="230" cy="150" r="3"/><rect x="258" y="24" width="10" height="12"/></g>' +
    '<g fill="none" stroke="#d98e0b" stroke-width="1.1" stroke-dasharray="4 3"><path d="M44 34H130M44 34V96M88 34V60M44 124H180M180 124V176"/></g>' +
    '<g fill="#fff" stroke="#d98e0b" stroke-width="1.2"><circle cx="88" cy="62" r="5"/><circle cx="130" cy="34" r="4"/><circle cx="44" cy="96" r="4"/><circle cx="110" cy="124" r="4"/><circle cx="180" cy="176" r="4"/></g>' +
    '<rect x="36" y="28" width="12" height="12" fill="#d98e0b"/>' +
    '<g font-size="7" font-family="Inter,sans-serif" fill="#1d2733"><text x="52" y="38">DB</text><text x="84" y="80">Bedroom</text><text x="196" y="60">Kitchen</text><text x="70" y="160">Living</text><text x="214" y="176">Bath</text><text x="236" y="45">Tank</text></g>' +
    '<g font-size="7" font-family="Inter,sans-serif"><path d="M40 204h14" stroke="#2f6fb5" stroke-width="1.4"/><text x="58" y="207" fill="#1d2733">Cold water supply</text><path d="M150 204h14" stroke="#d98e0b" stroke-width="1.2" stroke-dasharray="4 3"/><text x="168" y="207" fill="#1d2733">Lighting / power circuit</text></g>'
  );

  D.finishes = svg(
    '<rect x="40" y="20" width="70" height="180" fill="url(#fbBrick)" stroke="#1d2733" stroke-width="1.2"/>' +
    '<rect x="110" y="20" width="16" height="180" fill="#e7e1d4" stroke="#1d2733" stroke-width="1"/>' +
    '<rect x="126" y="20" width="5" height="180" fill="#f1ede4" stroke="#1d2733" stroke-width=".6"/>' +
    '<rect x="131" y="20" width="4" height="180" fill="#d98e0b"/>' +
    '<g stroke="#1d2733" stroke-width=".6" fill="none"><path d="M75 60H200M118 92H200M128 124H200M133 156H200"/></g>' +
    '<g fill="#1d2733"><circle cx="75" cy="60" r="1.8"/><circle cx="118" cy="92" r="1.8"/><circle cx="128" cy="124" r="1.8"/><circle cx="133" cy="156" r="1.8"/></g>' +
    '<g font-size="8" font-family="Inter,sans-serif" fill="#1d2733"><text x="204" y="63">230 mm brick</text><text x="204" y="95">12 mm cement plaster</text><text x="204" y="127">Wall putty / skim</text><text x="204" y="159">Primer + 2 coats paint</text></g>' +
    '<g stroke="#1d2733" stroke-width=".6"><path d="M110 208H135M110 204v8M135 204v8"/></g><text x="122" y="218" font-size="7" text-anchor="middle" font-family="Inter,sans-serif" fill="#1d2733">finish build-up</text>'
  );

  D.plan = svg(
    '<g fill="none" stroke="#1d2733" stroke-width="3"><rect x="30" y="20" width="240" height="170"/></g>' +
    '<g fill="none" stroke="#1d2733" stroke-width="1.8"><path d="M140 20V100M30 100H112M128 100H200M200 100V190M200 140H270M140 100V120"/></g>' +
    '<g fill="none" stroke="#1d2733" stroke-width=".7"><path d="M112 100A16 16 0 0 1 128 84M112 100V84"/><path d="M200 156A14 14 0 0 1 214 142"/><path d="M130 190A20 20 0 0 1 150 170V190"/></g>' +
    '<rect x="130" y="186" width="20" height="8" fill="#f6f3ec"/>' +
    '<g stroke="#2f6fb5" stroke-width="2.5"><path d="M60 20h40M180 20h50M30 130v40M270 50v30M230 190h25"/></g>' +
    '<g font-size="8" font-family="Inter,sans-serif" fill="#1d2733" text-anchor="middle"><text x="85" y="58">BEDROOM 1</text><text x="85" y="68" font-size="6.5" fill="#5b6573">3.6 × 2.4 m</text>' +
    '<text x="205" y="58">KITCHEN / DINING</text><text x="205" y="68" font-size="6.5" fill="#5b6573">4.0 × 2.4 m</text>' +
    '<text x="110" y="148">LIVING</text><text x="110" y="158" font-size="6.5" fill="#5b6573">5.4 × 2.7 m</text>' +
    '<text x="235" y="122">BATH</text><text x="235" y="170">STORE</text><text x="140" y="206">ENTRANCE</text></g>' +
    '<g stroke="#1d2733" stroke-width=".6"><path d="M30 10H270M30 6v8M270 6v8"/></g><text x="150" y="8" font-size="6.5" text-anchor="middle" font-family="Inter,sans-serif" fill="#1d2733">12.0 m</text>'
  );

  D.timeline = (function () {
    var rows = [["Setting out", 0, 1], ["Excavation", 1, 2], ["Foundations", 2, 4], ["Plinth & DPC", 5, 2], ["RC frame", 6, 8], ["Slabs & roof", 10, 6], ["Masonry", 12, 6], ["MEP first fix", 16, 5], ["Plaster", 19, 5], ["Finishes", 23, 6], ["Snagging", 29, 3]];
    var s = '<g font-size="7" font-family="Inter,sans-serif" fill="#5b6573">';
    for (var w = 0; w <= 32; w += 4) s += '<text x="' + (84 + w * 6.4) + '" y="12" text-anchor="middle">W' + w + '</text><path d="M' + (84 + w * 6.4) + ' 16V' + (22 + rows.length * 17) + '" stroke="#c9c1b1" stroke-width=".5"/>';
    s += "</g>";
    rows.forEach(function (r, i) {
      var y = 22 + i * 17;
      s += '<text x="6" y="' + (y + 9) + '" font-size="7.5" font-family="Inter,sans-serif" fill="#1d2733">' + r[0] + '</text>';
      s += '<rect x="' + (84 + r[1] * 6.4) + '" y="' + (y + 2) + '" width="' + r[2] * 6.4 + '" height="9" rx="2" fill="' + (i % 2 ? "#2f6fb5" : "#d98e0b") + '"/>';
    });
    return svg(s);
  })();

  /* ---------- page templates ---------- */
  function page(o) {
    return '<div class="pg">' +
      '<div class="pg-top"><span>HM · House Build</span><span>' + o.n + "</span></div>" +
      '<div class="pg-no">' + o.stage + "</div>" +
      '<div class="pg-title">' + o.title + "</div>" +
      (o.photo ? '<div class="pg-photo"><img src="' + o.photo + '" alt="' + o.alt + '" loading="lazy"></div>' : '<div class="pg-draw">' + o.draw + "</div>") +
      (o.html || "<ul>" + o.notes.map(function (t) { return "<li>" + t + "</li>"; }).join("") + "</ul>") +
      '<div class="pg-foot"><span>' + o.foot + "</span><span>Sheet <b>" + o.n + "</b></span></div></div>";
  }

  var FACES = [
    '<div class="pg pg-cover"><div class="pg-top"><span>Project flipbook</span><span>Vol. 01</span></div>' +
      '<h3>Building a <em>home,</em> stage by stage.</h3>' +
      '<p class="pg-sub">A civil engineer’s walkthrough of a two-storey residential build — from setting out to handover.</p>' +
      '<div class="pg-draw">' + D.cover + "</div>" +
      '<div class="pg-foot"><span><b>Hamza Murad</b> · Civil Site Engineer</span><span>Tap to open</span></div></div>',

    '<div class="pg"><div class="pg-top"><span>HM · House Build</span><span>02</span></div>' +
      '<div class="pg-title" style="margin-top:6cqw">Contents</div>' +
      '<ul class="pg-toc">' +
      [["01", "Site survey & setting out", "03"], ["02", "Excavation & foundations", "04"], ["03", "Plinth beam & DPC", "05"], ["04", "RC frame — columns & beams", "06"], ["05", "Slab reinforcement & casting", "07"], ["06", "On site", "08"], ["07", "Masonry & openings", "09"], ["08", "MEP services", "10"], ["09", "Plaster & finishes", "11"], ["10", "Ground floor plan", "12"], ["11", "QA / QC record", "13"], ["12", "Programme", "14"], ["13", "Handover", "15"]]
        .map(function (r) { return "<li><span>" + r[0] + "</span><span>" + r[1].replace("&", "&amp;") + "</span><span>" + r[2] + "</span></li>"; }).join("") +
      "</ul>" +
      '<div class="pg-foot" style="margin-top:auto"><span>Illustrative project sheets</span><span>Sheet <b>02</b></span></div></div>',

    page({ n: "03", stage: "01", title: "Site survey &amp; setting out", draw: D.survey, foot: "Total station · TBM", notes: ["Boundary verified against title plan", "Grid lines A–D / 1–3 pegged and offset", "Levels transferred from temporary benchmark"] }),
    page({ n: "04", stage: "02", title: "Excavation &amp; foundations", draw: D.foundation, foot: "Pad footings · C25/30", notes: ["Formation level inspected before blinding", "Reinforcement checked for cover &amp; laps", "Concrete poured with slump and cube samples"] }),
    page({ n: "05", stage: "03", title: "Plinth beam &amp; DPC", draw: D.plinth, foot: "Ground beam · DPC", notes: ["Anti-termite treatment to soil before backfill", "Continuous DPC laid at plinth level", "Backfill compacted in 150 mm layers"] }),
    page({ n: "06", stage: "04", title: "RC frame — columns &amp; beams", draw: D.frame, foot: "Moment frame · B500B", notes: ["Column verticality checked each lift", "Formwork props and bracing inspected", "Beam–column joints detailed per drawings"] }),
    page({ n: "07", stage: "05", title: "Slab reinforcement &amp; casting", draw: D.slab, foot: "150 mm slab · two-way", notes: ["Bar spacing and cover blocks signed off", "Pour sequence planned to avoid cold joints", "Curing maintained for 7+ days"] }),
    page({ n: "08", stage: "06", title: "On site", photo: "/site/site-cologne.jpg", alt: "Construction site with tower cranes", foot: "Site record", notes: ["Daily logs, progress photos and labour returns", "Toolbox talks and permit-to-work checks"] }),
    page({ n: "09", stage: "07", title: "Masonry &amp; openings", draw: D.elevation, foot: "Brickwork · lintels", notes: ["Brick courses kept level and plumb", "RC lintels cast over every opening", "Wall ties fixed to frame at set centres"] }),
    page({ n: "10", stage: "08", title: "MEP services", draw: D.mep, foot: "First fix · conduits", notes: ["Conduits and sleeves placed before plaster", "Water lines pressure-tested", "Coordination with electrician &amp; plumber"] }),
    page({ n: "11", stage: "09", title: "Plaster &amp; finishes", draw: D.finishes, foot: "Internal finishes", notes: ["Plaster thickness and line checked", "Moisture checked before painting", "Tiling, joinery and fixtures installed"] }),
    page({ n: "12", stage: "10", title: "Ground floor plan", draw: D.plan, foot: "Scale 1:100 (not to scale here)", notes: ["Open living space with separate kitchen", "Wet areas grouped to shorten pipe runs"] }),
    page({
      n: "13", stage: "11", title: "QA / QC record", foot: "Inspection &amp; test plan", draw: "",
      html: '<table class="pg-table"><thead><tr><th>Check</th><th>Stage</th><th style="text-align:right">Status</th></tr></thead><tbody>' +
        [["Setting-out survey", "01"], ["Formation inspection", "02"], ["Rebar & cover", "02–05"], ["Concrete slump test", "02–05"], ["Cube tests (7 / 28 day)", "02–05"], ["DPC continuity", "03"], ["Wall plumb & level", "07"], ["Pipe pressure test", "08"], ["Snag list closed", "13"]]
          .map(function (r) { return "<tr><td>" + r[0].replace("&", "&amp;") + "</td><td>" + r[1] + '</td><td class="ok">✓</td></tr>'; }).join("") + "</tbody></table>"
    }).replace('<div class="pg-draw"></div>', ""),
    page({ n: "14", stage: "12", title: "Programme", draw: D.timeline, foot: "32-week build", notes: ["Critical path: frame → slabs → masonry", "Weekly look-ahead with all trades"] }),
    page({
      n: "15", stage: "13", title: "Handover", foot: "Practical completion", draw: "",
      html: '<div class="pg-specs"><div><b>2</b><span>Storeys</span></div><div><b>2,200</b><span>Sq ft covered</span></div><div><b>C25/30</b><span>Concrete grade</span></div><div><b>32 wks</b><span>Programme</span></div><div><b>0</b><span>Lost-time incidents</span></div><div><b>100%</b><span>Snags closed</span></div></div>' +
        '<ul style="margin-top:5cqw"><li>As-built drawings and O&amp;M manuals issued</li><li>Final walk-through with client</li></ul>'
    }).replace('<div class="pg-draw"></div>', ""),

    '<div class="pg pg-cover" style="justify-content:space-between"><div class="pg-top"><span>Hamza Murad</span><span>Civil Site Engineer</span></div>' +
      '<div><h3 style="margin-top:0">Let’s build something <em>solid.</em></h3><p class="pg-sub">Site supervision, QA/QC and project delivery across the UK and Pakistan.</p></div>' +
      '<div class="pg-foot"><span>hamzamurad147@gmail.com</span><span>+44 7880 560664</span></div></div>'
  ];

  /* ---------- build section ---------- */
  function buildSection() {
    var sec = document.createElement("section");
    sec.id = "flipbook";
    sec.className = "fb-section mx-auto max-w-6xl px-6 pb-20";
    sec.setAttribute("aria-label", "House construction flipbook");
    sec.innerHTML =
      '<div class="fb-head"><div><p class="section-label mb-3">Flipbook</p>' +
      '<h2 class="font-display text-3xl sm:text-4xl">From setting out to handover.</h2>' +
      '<p class="fb-lead">Flip through the stages of a residential house build — drawings, checks and site notes the way a site engineer sees them.</p></div></div>' +
      '<div class="fb-wrap"><div class="fb-stage" tabindex="0" aria-roledescription="flipbook"><div class="fb-book"><div class="fb-shadow"></div></div></div></div>' +
      '<div class="fb-controls"><button type="button" class="fb-btn fb-prev" aria-label="Previous page">←</button><span class="fb-count" aria-live="polite"></span><button type="button" class="fb-btn fb-next" aria-label="Next page">→</button></div>' +
      '<p class="fb-hint">Click a page, swipe, or use the arrow keys</p>';
    return sec;
  }

  function init(sec) {
    var stage = sec.querySelector(".fb-stage");
    var book = sec.querySelector(".fb-book");
    var prev = sec.querySelector(".fb-prev");
    var next = sec.querySelector(".fb-next");
    var count = sec.querySelector(".fb-count");
    var mq = window.matchMedia("(max-width: 640px)");
    var single = null, leaves = [], cur = 0;

    function layout() {
      var wasSingle = single;
      single = mq.matches;
      if (wasSingle === single) return;
      var firstFace = wasSingle === null ? 0 : (wasSingle ? cur : Math.max(0, cur * 2 - 1));
      leaves.forEach(function (l) { l.remove(); });
      leaves = [];
      var pairs = [];
      if (single) FACES.forEach(function (f) { pairs.push([f, ""]); });
      else for (var i = 0; i < FACES.length; i += 2) pairs.push([FACES[i], FACES[i + 1] || ""]);
      pairs.forEach(function (p, i) {
        var leaf = document.createElement("div");
        leaf.className = "fb-leaf";
        leaf.innerHTML = '<div class="fb-face fb-front">' + p[0] + '</div><div class="fb-face fb-back">' + p[1] + "</div>";
        leaf.addEventListener("click", function () { go(leaf.classList.contains("is-flipped") ? i : i + 1); });
        book.appendChild(leaf);
        leaves.push(leaf);
      });
      stage.classList.toggle("is-single", single);
      cur = single ? firstFace : Math.ceil(firstFace / 2);
      render(true);
    }

    function render(instant) {
      var n = leaves.length;
      leaves.forEach(function (l, i) {
        var flipped = i < cur;
        if (instant) l.style.transition = "none";
        var changed = l.classList.contains("is-flipped") !== flipped;
        l.classList.toggle("is-flipped", flipped);
        if (changed && !instant) {
          l.style.zIndex = 2 * n + 1;
          clearTimeout(l._t);
          l._t = setTimeout(function () { l.style.zIndex = flipped ? i + 1 : n - i; }, 900);
        } else {
          l.style.zIndex = flipped ? i + 1 : n - i;
        }
        if (instant) { void l.offsetWidth; l.style.transition = ""; }
      });
      stage.classList.toggle("is-closed-front", !single && cur === 0);
      stage.classList.toggle("is-closed-back", !single && cur === n);
      prev.disabled = cur === 0;
      next.disabled = cur === n || (single && cur === n - 1);
      var total = FACES.length;
      if (single) count.textContent = "Page " + (cur + 1) + " / " + total;
      else if (cur === 0) count.textContent = "Cover";
      else if (cur === n) count.textContent = "Back cover";
      else count.textContent = "Pages " + (cur * 2) + "–" + (cur * 2 + 1) + " / " + total;
    }

    function go(to) {
      var max = single ? leaves.length - 1 : leaves.length;
      to = Math.max(0, Math.min(max, to));
      if (to === cur) return;
      cur = to;
      render(false);
    }

    prev.addEventListener("click", function () { go(cur - 1); });
    next.addEventListener("click", function () { go(cur + 1); });
    stage.addEventListener("keydown", function (e) {
      if (e.key === "ArrowRight") { go(cur + 1); e.preventDefault(); }
      if (e.key === "ArrowLeft") { go(cur - 1); e.preventDefault(); }
    });
    var sx = null, sy = null;
    stage.addEventListener("touchstart", function (e) { sx = e.touches[0].clientX; sy = e.touches[0].clientY; }, { passive: true });
    stage.addEventListener("touchend", function (e) {
      if (sx === null) return;
      var dx = e.changedTouches[0].clientX - sx, dy = e.changedTouches[0].clientY - sy;
      if (Math.abs(dx) > 40 && Math.abs(dx) > Math.abs(dy)) { go(cur + (dx < 0 ? 1 : -1)); e.preventDefault(); }
      sx = null;
    });
    if (mq.addEventListener) mq.addEventListener("change", layout); else mq.addListener(layout);
    layout();
  }

  /* ---------- insert after the "On site" section ---------- */
  var section = null;
  function findAnchor() {
    var labels = document.querySelectorAll("section .section-label");
    for (var i = 0; i < labels.length; i++) if (labels[i].textContent.trim() === "On site") return labels[i].closest("section");
    return document.getElementById("contact") ? document.getElementById("contact").previousElementSibling : null;
  }
  function place() {
    if (section && document.body.contains(section)) return;
    var anchor = findAnchor();
    if (!anchor) return;
    if (!section) { section = buildSection(); anchor.after(section); init(section); }
    else anchor.after(section);
  }
  function start() {
    setTimeout(function () {
      place();
      new MutationObserver(function () { if (!document.body.contains(section)) place(); }).observe(document.body, { childList: true, subtree: true });
    }, 400);
  }
  if (document.readyState === "complete") start(); else window.addEventListener("load", start);
})();
