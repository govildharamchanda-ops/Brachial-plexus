/* ============================================================
   VĀGDEVI — anatomy study app (vanilla JS, PWA build)
   Content module: Upper Limb — Brachial Plexus
   ============================================================ */

(function () {
  "use strict";

  /* ---------------- CONTENT ---------------- */

  const NOTES = {
    id: "brachial-plexus",
    title: "Brachial Plexus",
    subject: "Anatomy",
    region: "Upper Limb",
    sections: [
      {
        heading: "Formation",
        body:
          "Formed by the ventral rami of C5–C8 and T1. Sometimes called the 'roots' of the plexus (not to be confused with nerve roots at the spinal cord). A contribution from C4 (prefixed) or T2 (postfixed) occasionally occurs.",
        points: [
          "Roots: C5, C6, C7, C8, T1",
          "Trunks: Upper (C5–C6), Middle (C7), Lower (C8–T1)",
          "Divisions: each trunk splits into anterior and posterior",
          "Cords: Lateral, Posterior, Medial — named by relation to axillary artery",
          "Branches: terminal nerves arise from the cords",
        ],
        diagram: "plexus",
      },
      {
        heading: "The 'Roots → Trunks → Divisions → Cords → Branches' mnemonic",
        body:
          "Randy Travis Drinks Cold Beer — a classic mnemonic for remembering the five-part sequence of the plexus: Roots, Trunks, Divisions, Cords, Branches.",
        points: [],
      },
      {
        heading: "Cords and their position",
        body:
          "The three cords are named by their relationship to the second part of the axillary artery, behind pectoralis minor.",
        points: [
          "Lateral cord — lateral to axillary artery",
          "Posterior cord — posterior to axillary artery",
          "Medial cord — medial to axillary artery",
        ],
      },
      {
        heading: "Terminal branches",
        body:
          "Five major terminal branches arise from the cords, each carrying a predictable root value.",
        points: [
          "Musculocutaneous nerve (C5–C7) — from lateral cord",
          "Axillary nerve (C5–C6) — from posterior cord",
          "Radial nerve (C5–C8, T1) — from posterior cord",
          "Median nerve (C6–C8, T1) — from lateral + medial cords",
          "Ulnar nerve (C8–T1) — from medial cord",
        ],
      },
      {
        heading: "Branches above the clavicle (supraclavicular)",
        body:
          "These arise from roots or trunks before the plexus passes behind the clavicle.",
        points: [
          "Dorsal scapular nerve (C5) — rhomboids, levator scapulae",
          "Long thoracic nerve (C5–C7) — serratus anterior",
          "Suprascapular nerve (C5–C6) — supraspinatus, infraspinatus",
          "Nerve to subclavius (C5–C6)",
        ],
      },
      {
        heading: "Clinical correlation — Erb's palsy",
        body:
          "Upper trunk injury (C5–C6), classically from a difficult birth (excessive traction on the head during delivery) or a fall onto the shoulder. Produces the characteristic 'waiter's tip' posture.",
        points: [
          "Arm hangs adducted and medially rotated",
          "Forearm pronated",
          "Elbow extended",
          "Affected: deltoid, biceps, brachialis, supraspinatus, infraspinatus",
        ],
        diagram: "erb",
      },
      {
        heading: "Clinical correlation — Klumpke's palsy",
        body:
          "Lower trunk injury (C8–T1), classically from excessive traction on an abducted arm (e.g., grabbing a branch while falling, or breech delivery with arm extended above the head).",
        points: [
          "Claw hand deformity",
          "Affects intrinsic hand muscles supplied by ulnar/median fibers",
          "May involve Horner's syndrome if T1 sympathetic fibers are damaged (ptosis, miosis, anhidrosis)",
        ],
        diagram: "klumpke",
      },
    ],
  };

  const QUIZ_BANK = [
    {
      id: "q1",
      question: "The brachial plexus is formed by ventral rami of which spinal segments?",
      options: ["C1–C5", "C5–T1", "T1–T5", "C3–C7"],
      answer: 1,
      explain: "Roots of the plexus: C5, C6, C7, C8, T1 (with occasional C4 or T2 contribution).",
    },
    {
      id: "q2",
      question: "Which cord lies posterior to the axillary artery?",
      options: ["Lateral cord", "Medial cord", "Posterior cord", "Upper trunk"],
      answer: 2,
      explain: "Cords are named for their position relative to the axillary artery — posterior cord sits behind it.",
    },
    {
      id: "q3",
      question: "The radial nerve arises from which cord?",
      options: ["Lateral cord", "Medial cord", "Posterior cord", "Upper trunk directly"],
      answer: 2,
      explain: "Both the axillary and radial nerves are branches of the posterior cord.",
    },
    {
      id: "q4",
      question:
        "A newborn presents with the affected arm adducted, internally rotated, with forearm pronated ('waiter's tip'). Which structure is injured?",
      options: ["Lower trunk (C8–T1)", "Upper trunk (C5–C6)", "Posterior cord", "Long thoracic nerve"],
      answer: 1,
      explain: "This is Erb's palsy from upper trunk (C5–C6) injury during a difficult delivery.",
    },
    {
      id: "q5",
      question: "Klumpke's palsy classically involves injury to which part of the plexus?",
      options: ["Upper trunk", "Middle trunk", "Lower trunk", "Lateral cord"],
      answer: 2,
      explain: "Lower trunk (C8–T1) injury — can also damage T1 sympathetic fibers, causing Horner's syndrome.",
    },
    {
      id: "q6",
      question: "Which nerve supplies serratus anterior, and what happens if it's damaged?",
      options: [
        "Suprascapular nerve — weak shoulder abduction",
        "Long thoracic nerve — winging of the scapula",
        "Dorsal scapular nerve — weak rhomboids",
        "Axillary nerve — deltoid paralysis",
      ],
      answer: 1,
      explain: "Long thoracic nerve (C5–C7) supplies serratus anterior; injury produces a classic winged scapula.",
    },
    {
      id: "q7",
      question: "The median nerve is formed from contributions of which cords?",
      options: ["Lateral and posterior", "Medial and posterior", "Lateral and medial", "Posterior cord alone"],
      answer: 2,
      explain: "Median nerve = lateral root (from lateral cord) + medial root (from medial cord).",
    },
    {
      id: "q8",
      question: "What is the correct mnemonic order for the parts of the brachial plexus?",
      options: [
        "Roots, Cords, Trunks, Divisions, Branches",
        "Roots, Trunks, Divisions, Cords, Branches",
        "Trunks, Roots, Divisions, Cords, Branches",
        "Roots, Trunks, Cords, Divisions, Branches",
      ],
      answer: 1,
      explain: "Randy Travis Drinks Cold Beer: Roots → Trunks → Divisions → Cords → Branches.",
    },
  ];

  const DEFAULT_FLASHCARDS = [
    { id: "f1", front: "Roots of the brachial plexus", back: "C5, C6, C7, C8, T1" },
    { id: "f2", front: "Upper trunk is formed by", back: "C5 + C6" },
    { id: "f3", front: "Lower trunk is formed by", back: "C8 + T1" },
    { id: "f4", front: "Posterior cord → terminal branches", back: "Axillary nerve + Radial nerve" },
    { id: "f5", front: "Median nerve root value", back: "C6, C7, C8, T1" },
    { id: "f6", front: "Erb's palsy — site of injury", back: "Upper trunk (C5–C6)" },
    { id: "f7", front: "Klumpke's palsy — site of injury", back: "Lower trunk (C8–T1)" },
    { id: "f8", front: "Nerve responsible for winged scapula", back: "Long thoracic nerve (C5–C7)" },
  ];

  /* ---------------- STORAGE ---------------- */

  function loadJSON(key, fallback) {
    try {
      const raw = localStorage.getItem(key);
      return raw ? JSON.parse(raw) : fallback;
    } catch {
      return fallback;
    }
  }
  function saveJSON(key, value) {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch {}
  }

  const state = {
    quizStats: loadJSON("vagdevi-quiz-stats", {}),
    cardStats: loadJSON("vagdevi-card-stats", {}),
    customCards: loadJSON("vagdevi-custom-cards", []),
  };

  function persist() {
    saveJSON("vagdevi-quiz-stats", state.quizStats);
    saveJSON("vagdevi-card-stats", state.cardStats);
    saveJSON("vagdevi-custom-cards", state.customCards);
  }

  /* ---------------- DOM HELPERS ---------------- */

  function el(tag, attrs, children) {
    const node = document.createElement(tag);
    if (attrs) {
      for (const [k, v] of Object.entries(attrs)) {
        if (k === "class") node.className = v;
        else if (k === "html") node.innerHTML = v;
        else if (k.startsWith("on") && typeof v === "function") {
          node.addEventListener(k.slice(2).toLowerCase(), v);
        } else if (v !== null && v !== undefined) {
          node.setAttribute(k, v);
        }
      }
    }
    if (children) {
      (Array.isArray(children) ? children : [children]).forEach((c) => {
        if (c === null || c === undefined) return;
        node.appendChild(typeof c === "string" ? document.createTextNode(c) : c);
      });
    }
    return node;
  }

  function svgEl(tag, attrs, children) {
    const node = document.createElementNS("http://www.w3.org/2000/svg", tag);
    if (attrs) {
      for (const [k, v] of Object.entries(attrs)) {
        node.setAttribute(k, v);
      }
    }
    if (children) {
      (Array.isArray(children) ? children : [children]).forEach((c) => node.appendChild(c));
    }
    return node;
  }

  function clear(node) {
    while (node.firstChild) node.removeChild(node.firstChild);
  }

  function shuffle(arr) {
    const a = [...arr];
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }

  /* ---------------- ICONS ---------------- */

  function icon(name, cls) {
    const paths = {
      book: '<path d="M4 4.5A2.5 2.5 0 0 1 6.5 2H20v17H6.5A2.5 2.5 0 0 0 4 21.5V4.5Z" stroke-linejoin="round"/><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" stroke-linejoin="round"/>',
      quiz: '<circle cx="12" cy="12" r="9"/><path d="M9.5 9.2a2.5 2.5 0 1 1 3.7 2.2c-.7.5-1.2.9-1.2 1.9" stroke-linecap="round"/><circle cx="12" cy="16.6" r=".4" fill="currentColor" stroke="none"/>',
      cards: '<rect x="3" y="6" width="13" height="15" rx="2" transform="rotate(-6 9 13)"/><rect x="7" y="3" width="13" height="15" rx="2"/>',
      chart: '<path d="M4 20V10M11 20V4M18 20v-7" stroke-linecap="round"/>',
      check: '<path d="M5 13l4 4L19 7" stroke-linecap="round" stroke-linejoin="round"/>',
      x: '<path d="M6 6l12 12M18 6L6 18" stroke-linecap="round"/>',
      flip: '<path d="M17 2.1l4 4-4 4" stroke-linecap="round" stroke-linejoin="round"/><path d="M21 6.1H8a5 5 0 0 0-5 5" stroke-linecap="round"/><path d="M7 21.9l-4-4 4-4" stroke-linecap="round" stroke-linejoin="round"/><path d="M3 17.9h13a5 5 0 0 0 5-5" stroke-linecap="round"/>',
      plus: '<path d="M12 5v14M5 12h14" stroke-linecap="round"/>',
      trash: '<path d="M4 6h16M9 6V4.5A1.5 1.5 0 0 1 10.5 3h3A1.5 1.5 0 0 1 15 4.5V6m1 0-.6 13.4A2 2 0 0 1 13.4 21h-2.8a2 2 0 0 1-2-1.6L8 6" stroke-linecap="round" stroke-linejoin="round"/>',
      diagram: '<circle cx="6" cy="6" r="2.3"/><circle cx="18" cy="6" r="2.3"/><circle cx="12" cy="18" r="2.3"/><path d="M7.8 7.6 10.4 16M16.2 7.6 13.6 16M8.3 6h7.4" stroke-linecap="round"/>',
    };
    // Safari has a long-standing bug computing SVG height from percentage
    // values (width works, height silently collapses to 0). We avoid the
    // whole class of bugs by giving every icon an explicit pixel size that
    // matches its CSS class, rather than relying on width/height:100%.
    const PIXEL_SIZES = {
      "nav-icon": 18,
      "note-diagram-flag": 16,
      "quiz-option-icon": 18,
      "flash-hint-icon": 13,
      "btn-icon": 16,
      "icon-btn-svg": 15,
    };
    const size = PIXEL_SIZES[cls] || 18;
    const span = document.createElement("span");
    span.className = `icon ${cls || ""}`;
    span.innerHTML = `<svg viewBox="0 0 24 24" width="${size}" height="${size}" fill="none" stroke="currentColor" stroke-width="1.6">${paths[name] || ""}</svg>`;
    return span;
  }

  window.Vagdevi = { NOTES, QUIZ_BANK, DEFAULT_FLASHCARDS, state, persist, el, svgEl, clear, shuffle, icon, loadJSON, saveJSON };
})();
/* ---------------- DIAGRAMS ---------------- */
(function () {
  "use strict";
  const { svgEl, el } = window.Vagdevi;

  function observeInView(node, cls) {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            node.classList.add(cls);
            obs.disconnect();
          }
        });
      },
      { threshold: 0.3 }
    );
    obs.observe(node);
  }

  function plexusDiagram() {
    const wrap = el("div", { class: "diagram-card" });
    wrap.appendChild(el("div", { class: "diagram-tag" }, "Roots → Trunks → Divisions → Cords → Branches"));

    const svg = svgEl("svg", { viewBox: "0 0 760 220", class: "plexus-svg" });

    const roots = [
      { y: 24, label: "C5" },
      { y: 50, label: "C6" },
      { y: 76, label: "C7" },
      { y: 102, label: "C8" },
      { y: 128, label: "T1" },
    ];

    const gRoots = svgEl("g", { class: "tier tier-roots" });
    roots.forEach((r, i) => {
      const c = svgEl("circle", { cx: 60, cy: r.y, r: 13, style: `animation-delay:${i * 70}ms` });
      const t = svgEl("text", { x: 60, y: r.y + 4, style: `animation-delay:${i * 70}ms` });
      t.textContent = r.label;
      gRoots.appendChild(c);
      gRoots.appendChild(t);
    });
    svg.appendChild(gRoots);

    const rootLines = svgEl("g", { class: "tier tier-roots-lines" }, [
      svgEl("path", { d: "M73,24 L165,45" }),
      svgEl("path", { d: "M73,50 L165,45" }),
      svgEl("path", { d: "M73,76 L165,76" }),
      svgEl("path", { d: "M73,102 L165,107" }),
      svgEl("path", { d: "M73,128 L165,107" }),
    ]);
    svg.appendChild(rootLines);

    const trunkData = [
      { y: 32, label: "Upper", ty: 49 },
      { y: 63, label: "Middle", ty: 80 },
      { y: 94, label: "Lower", ty: 111 },
    ];
    const gTrunks = svgEl("g", { class: "tier tier-trunks" });
    trunkData.forEach((t) => {
      gTrunks.appendChild(svgEl("rect", { x: 165, y: t.y, width: 78, height: 26, rx: 7 }));
      const txt = svgEl("text", { x: 204, y: t.ty });
      txt.textContent = t.label;
      gTrunks.appendChild(txt);
    });
    svg.appendChild(gTrunks);

    const trunkLines = svgEl("g", { class: "tier tier-trunk-lines" }, [
      svgEl("path", { d: "M243,40 L320,28" }),
      svgEl("path", { d: "M243,52 L320,58" }),
      svgEl("path", { d: "M243,71 L320,58" }),
      svgEl("path", { d: "M243,83 L320,88" }),
      svgEl("path", { d: "M243,100 L320,88" }),
      svgEl("path", { d: "M243,112 L320,118" }),
    ]);
    svg.appendChild(trunkLines);

    const gDiv = svgEl("g", { class: "tier tier-divisions" }, [
      svgEl("circle", { cx: 330, cy: 28, r: 7 }),
      svgEl("circle", { cx: 330, cy: 58, r: 7 }),
      svgEl("circle", { cx: 330, cy: 88, r: 7 }),
      svgEl("circle", { cx: 330, cy: 118, r: 7 }),
    ]);
    svg.appendChild(gDiv);

    const divLines = svgEl("g", { class: "tier tier-div-lines" }, [
      svgEl("path", { d: "M337,28 L430,38" }),
      svgEl("path", { d: "M337,58 L430,55" }),
      svgEl("path", { d: "M337,58 L430,100" }),
      svgEl("path", { d: "M337,88 L430,100" }),
      svgEl("path", { d: "M337,118 L430,140" }),
    ]);
    svg.appendChild(divLines);

    const cordData = [
      { y: 26, label: "Lateral", ty: 44, cls: "cord-lateral" },
      { y: 86, label: "Posterior", ty: 104, cls: "cord-posterior" },
      { y: 126, label: "Medial", ty: 144, cls: "cord-medial" },
    ];
    const gCords = svgEl("g", { class: "tier tier-cords" });
    cordData.forEach((c) => {
      gCords.appendChild(svgEl("rect", { x: 430, y: c.y, width: 92, height: 28, rx: 8, class: c.cls }));
      const txt = svgEl("text", { x: 476, y: c.ty });
      txt.textContent = c.label;
      gCords.appendChild(txt);
    });
    svg.appendChild(gCords);

    const cordLines = svgEl("g", { class: "tier tier-cord-lines" }, [
      svgEl("path", { d: "M522,38 L600,20" }),
      svgEl("path", { d: "M522,46 L600,48" }),
      svgEl("path", { d: "M522,96 L600,76" }),
      svgEl("path", { d: "M522,108 L600,104" }),
      svgEl("path", { d: "M522,108 L600,132" }),
      svgEl("path", { d: "M522,138 L600,160" }),
    ]);
    svg.appendChild(cordLines);

    const branchData = [
      { y: 8, label: "Musculocutaneous", ty: 24 },
      { y: 36, label: "Axillary", ty: 52 },
      { y: 64, label: "Radial", ty: 80 },
      { y: 92, label: "Median", ty: 108 },
      { y: 148, label: "Ulnar", ty: 164 },
    ];
    const gBranch = svgEl("g", { class: "tier tier-branches" });
    branchData.forEach((b) => {
      gBranch.appendChild(svgEl("rect", { x: 600, y: b.y, width: 148, height: 24, rx: 7 }));
      const txt = svgEl("text", { x: 674, y: b.ty });
      txt.textContent = b.label;
      gBranch.appendChild(txt);
    });
    svg.appendChild(gBranch);

    wrap.appendChild(svg);

    const legend = el("div", { class: "diagram-legend" }, [
      el("span", null, [el("i", { class: "dot dot-lateral" }), "Lateral cord"]),
      el("span", null, [el("i", { class: "dot dot-posterior" }), "Posterior cord"]),
      el("span", null, [el("i", { class: "dot dot-medial" }), "Medial cord"]),
    ]);
    wrap.appendChild(legend);

    observeInView(svg, "is-in-view");
    return wrap;
  }

  function clinicalDiagram(variant) {
    const isErb = variant === "erb";
    const wrap = el("div", { class: "diagram-card diagram-card-clinical" });
    wrap.appendChild(
      el(
        "div",
        { class: "diagram-tag" },
        isErb ? "Erb's palsy — upper trunk (C5–C6)" : "Klumpke's palsy — lower trunk (C8–T1)"
      )
    );

    const svg = svgEl("svg", { viewBox: "0 0 320 240", class: "clinical-svg" });

    svg.appendChild(
      svgEl("path", {
        class: "body-outline",
        d: "M140 20c14 0 26 11 26 26 0 9-4 17-11 22 18 6 31 18 36 36l10 70c1 8-5 15-13 15-7 0-13-5-14-12l-10-58",
      })
    );
    svg.appendChild(
      svgEl("path", {
        class: "body-outline",
        d: "M140 20c-14 0-26 11-26 26 0 9 4 17 11 22-18 6-31 18-36 36l-10 70c-1 8 5 15 13 15 7 0 13-5 14-12l10-58",
      })
    );

    if (!isErb) {
      svg.appendChild(svgEl("path", { class: "arm-line arm-affected", d: "M150 95 C 190 70, 215 35, 222 8" }));
      svg.appendChild(svgEl("circle", { class: "hand-claw", cx: 222, cy: 8, r: 6 }));
      svg.appendChild(
        svgEl("g", { class: "claw-fingers" }, [
          svgEl("path", { d: "M222 8 l10 -10 M222 8 l4 -13 M222 8 l-4 -13" }),
        ])
      );
    } else {
      svg.appendChild(svgEl("path", { class: "arm-line arm-affected", d: "M150 95 C 158 130, 158 165, 150 200" }));
      svg.appendChild(svgEl("circle", { class: "hand-claw", cx: 150, cy: 200, r: 6 }));
    }

    const caption = svgEl("text", { x: 160, y: 232, "text-anchor": "middle", class: "clinical-caption" });
    caption.textContent = isErb ? "“Waiter's tip” posture" : "Claw hand";
    svg.appendChild(caption);

    wrap.appendChild(svg);

    const points = isErb
      ? ["Arm: adducted, medially rotated", "Elbow: extended", "Forearm: pronated"]
      : [
          "Intrinsic hand muscles weak/paralysed",
          "Fingers held in claw position",
          "± Horner's syndrome (T1 sympathetic fibers)",
        ];
    const ul = el("ul", { class: "diagram-points" });
    points.forEach((p) => ul.appendChild(el("li", null, p)));
    wrap.appendChild(ul);

    observeInView(svg, "is-in-view");
    return wrap;
  }

  window.Vagdevi.diagrams = {
    plexus: plexusDiagram,
    erb: () => clinicalDiagram("erb"),
    klumpke: () => clinicalDiagram("klumpke"),
  };
})();
/* ---------------- VIEWS: Notes + Quiz ---------------- */
(function () {
  "use strict";
  const { NOTES, QUIZ_BANK, state, persist, el, clear, shuffle, icon } = window.Vagdevi;

  function inkHeading(text, size) {
    const wrap = el("div", { class: "ink-wrap" });
    wrap.appendChild(el("h2", { class: `ink-h ink-h-${size || "md"}` }, text));
    const svgWrap = document.createElement("div");
    svgWrap.innerHTML = `
      <svg class="ink-svg" viewBox="0 0 240 14" preserveAspectRatio="none">
        <path d="M2 8 C 40 2, 80 11, 120 6 C 160 1, 200 10, 238 6" fill="none" stroke="var(--gold)"
          stroke-width="2.5" stroke-linecap="round" pathLength="1" class="ink-path"
          style="stroke-dasharray:1; stroke-dashoffset:1;" />
      </svg>`;
    wrap.appendChild(svgWrap.firstElementChild);
    return wrap;
  }

  function renderNotes(container) {
    clear(container);
    const view = el("div", { class: "view fade-in" });

    const head = el("div", { class: "view-head" });
    head.appendChild(el("div", { class: "eyebrow" }, `${NOTES.subject} · ${NOTES.region}`));
    head.appendChild(inkHeading(NOTES.title, "lg"));
    view.appendChild(head);

    const list = el("div", { class: "notes-list" });
    const openSet = new Set([0]);

    NOTES.sections.forEach((sec, i) => {
      const card = el("div", { class: "note-card", style: `animation-delay:${i * 45}ms` });

      const headBtn = el("button", { class: "note-card-head" });
      headBtn.appendChild(el("span", { class: "note-index" }, String(i + 1).padStart(2, "0")));
      headBtn.appendChild(el("span", { class: "note-title" }, sec.heading));
      if (sec.diagram) headBtn.appendChild(icon("diagram", "note-diagram-flag"));
      const chevron = el("span", { class: "note-chevron" }, "⌄");
      headBtn.appendChild(chevron);

      const body = el("div", { class: "note-card-body" });
      const inner = el("div", { class: "note-card-inner" });
      inner.appendChild(el("p", null, sec.body));
      if (sec.points.length > 0) {
        const ul = el("ul");
        sec.points.forEach((p, j) => {
          ul.appendChild(el("li", { style: `animation-delay:${j * 35}ms` }, p));
        });
        inner.appendChild(ul);
      }
      let diagramRendered = false;
      body.appendChild(inner);

      function setOpen(open) {
        if (open) {
          openSet.add(i);
          card.classList.add("is-open");
          chevron.classList.add("is-open");
          if (sec.diagram && !diagramRendered) {
            const slot = el("div", { class: "diagram-slot" });
            slot.appendChild(window.Vagdevi.diagrams[sec.diagram]());
            inner.appendChild(slot);
            diagramRendered = true;
          }
          // measure after content is in place
          requestAnimationFrame(() => {
            body.style.maxHeight = body.scrollHeight + "px";
          });
        } else {
          openSet.delete(i);
          card.classList.remove("is-open");
          chevron.classList.remove("is-open");
          body.style.maxHeight = "0px";
        }
      }

      headBtn.addEventListener("click", () => setOpen(!openSet.has(i)));

      card.appendChild(headBtn);
      card.appendChild(body);
      list.appendChild(card);

      if (openSet.has(i)) setOpen(true);
    });

    view.appendChild(list);
    container.appendChild(view);
  }

  function renderQuiz(container) {
    clear(container);
    const view = el("div", { class: "view fade-in" });

    const head = el("div", { class: "view-head" });
    head.appendChild(el("div", { class: "eyebrow" }, `Quiz · ${NOTES.title}`));
    head.appendChild(inkHeading("Test yourself", "lg"));
    view.appendChild(head);

    const order = shuffle(QUIZ_BANK);
    let idx = 0;
    let session = { correct: 0, total: 0 };

    const progressTrack = el("div", { class: "quiz-progress-track" });
    const progressFill = el("div", { class: "quiz-progress-fill" });
    progressTrack.appendChild(progressFill);
    const meta = el("div", { class: "quiz-meta" });

    view.appendChild(progressTrack);
    view.appendChild(meta);

    const cardSlot = el("div");
    view.appendChild(cardSlot);
    container.appendChild(view);

    function renderQuestion() {
      const q = order[idx];
      progressFill.style.width = `${(idx / order.length) * 100}%`;
      meta.textContent = `Question ${idx + 1} of ${order.length}`;

      clear(cardSlot);
      const card = el("div", { class: "quiz-card" });
      card.appendChild(el("div", { class: "quiz-question" }, q.question));

      const optionsWrap = el("div", { class: "quiz-options" });
      let revealed = false;
      let selected = null;

      const explainSlot = el("div");
      const nextSlot = el("div");

      q.options.forEach((opt, i) => {
        const btn = el("button", { class: "quiz-option", style: `animation-delay:${i * 50}ms` });
        btn.appendChild(el("span", { class: "quiz-option-letter" }, String.fromCharCode(65 + i)));
        btn.appendChild(el("span", null, opt));

        btn.addEventListener("click", () => {
          if (revealed) return;
          revealed = true;
          selected = i;
          const correct = i === q.answer;
          session.correct += correct ? 1 : 0;
          session.total += 1;

          const cur = state.quizStats[q.id] || { seen: 0, correct: 0 };
          state.quizStats[q.id] = { seen: cur.seen + 1, correct: cur.correct + (correct ? 1 : 0) };
          persist();

          Array.from(optionsWrap.children).forEach((child, j) => {
            child.disabled = true;
            if (j === q.answer) {
              child.classList.add("is-correct");
              child.appendChild(icon("check", "quiz-option-icon"));
            } else if (j === i) {
              child.classList.add("is-wrong");
              child.appendChild(icon("x", "quiz-option-icon"));
            } else {
              child.classList.add("is-disabled");
            }
          });

          clear(explainSlot);
          const explain = el("div", { class: "quiz-explain fade-in" });
          explain.appendChild(el("strong", null, correct ? "Correct. " : "Not quite. "));
          explain.appendChild(document.createTextNode(q.explain));
          explainSlot.appendChild(explain);

          clear(nextSlot);
          const nextBtn = el(
            "button",
            { class: "btn-primary quiz-next" },
            idx + 1 >= order.length ? "Finish" : "Next question"
          );
          nextBtn.addEventListener("click", () => {
            if (idx + 1 >= order.length) {
              renderDone();
            } else {
              idx += 1;
              renderQuestion();
            }
          });
          nextSlot.appendChild(nextBtn);
        });

        optionsWrap.appendChild(btn);
      });

      card.appendChild(optionsWrap);
      card.appendChild(explainSlot);
      card.appendChild(nextSlot);
      cardSlot.appendChild(card);
    }

    function renderDone() {
      clear(container);
      const doneView = el("div", { class: "view fade-in" });
      const pct = Math.round((session.correct / session.total) * 100);

      const doneWrap = el("div", { class: "quiz-done" });
      const logoImg = el("img", { src: "icon-96.png", alt: "", class: "quiz-done-logo" });
      const ring = el("div", { class: "quiz-done-ring", style: `--pct:${pct}; background: conic-gradient(var(--gold) calc(${pct}*1%), var(--parchment-dim) 0);` });
      ring.appendChild(el("span", null, `${pct}%`));

      doneWrap.appendChild(logoImg);
      doneWrap.appendChild(ring);
      doneWrap.appendChild(el("h3", null, "Session complete"));
      doneWrap.appendChild(el("p", null, `${session.correct} of ${session.total} correct — ${NOTES.title}`));
      const retakeBtn = el("button", { class: "btn-primary" }, "Retake quiz");
      retakeBtn.addEventListener("click", () => renderQuiz(container));
      doneWrap.appendChild(retakeBtn);

      doneView.appendChild(doneWrap);
      container.appendChild(doneView);
    }

    renderQuestion();
  }

  window.Vagdevi.renderNotes = renderNotes;
  window.Vagdevi.renderQuiz = renderQuiz;
  window.Vagdevi.inkHeading = inkHeading;
})();
/* ---------------- VIEWS: Flashcards + Progress ---------------- */
(function () {
  "use strict";
  const { NOTES, QUIZ_BANK, DEFAULT_FLASHCARDS, state, persist, el, clear, shuffle, icon, inkHeading } = window.Vagdevi;

  function renderFlashcards(container) {
    clear(container);
    const view = el("div", { class: "view fade-in" });

    const headRow = el("div", { class: "view-head view-head-row" });
    const headLeft = el("div");
    headLeft.appendChild(el("div", { class: "eyebrow" }, `Flashcards · ${NOTES.title}`));
    headLeft.appendChild(inkHeading("Flip and recall", "lg"));
    headRow.appendChild(headLeft);

    const newCardBtn = el("button", { class: "btn-ghost" });
    newCardBtn.appendChild(icon("plus", "btn-icon"));
    newCardBtn.appendChild(document.createTextNode(" New card"));
    headRow.appendChild(newCardBtn);
    view.appendChild(headRow);

    const createSlot = el("div");
    view.appendChild(createSlot);

    let showCreate = false;
    newCardBtn.addEventListener("click", () => {
      showCreate = !showCreate;
      renderCreateForm();
    });

    function renderCreateForm() {
      clear(createSlot);
      if (!showCreate) return;
      const form = el("div", { class: "create-card fade-in" });
      const frontInput = el("input", { class: "create-input", placeholder: "Front — question or term" });
      const backInput = el("textarea", { class: "create-input create-textarea", placeholder: "Back — answer" });
      form.appendChild(frontInput);
      form.appendChild(backInput);

      const actions = el("div", { class: "create-actions" });
      const addBtn = el("button", { class: "btn-primary" }, "Add to deck");
      const cancelBtn = el("button", { class: "btn-ghost" }, "Cancel");
      addBtn.addEventListener("click", () => {
        const f = frontInput.value.trim();
        const b = backInput.value.trim();
        if (!f || !b) return;
        state.customCards.push({ id: `custom-${Date.now()}`, front: f, back: b });
        persist();
        showCreate = false;
        renderCreateForm();
        renderFlashcards(container); // rebuild deck to include new card
      });
      cancelBtn.addEventListener("click", () => {
        showCreate = false;
        renderCreateForm();
      });
      actions.appendChild(addBtn);
      actions.appendChild(cancelBtn);
      form.appendChild(actions);
      createSlot.appendChild(form);
    }

    const allCards = [...DEFAULT_FLASHCARDS, ...state.customCards];
    const deck = shuffle(allCards);
    let idx = 0;

    const stage = el("div", { class: "flash-stage" });
    view.appendChild(stage);
    const counter = el("div", { class: "flash-counter" });
    view.appendChild(counter);
    const rateSlot = el("div");
    view.appendChild(rateSlot);

    function renderCard() {
      clear(stage);
      const card = deck[idx % deck.length];
      let flipped = false;

      const cardEl = el("div", { class: "flash-card flash-card-enter" });
      cardEl.addEventListener(
        "animationend",
        () => cardEl.classList.remove("flash-card-enter"),
        { once: true }
      );
      const front = el("div", { class: "flash-face flash-front" });
      front.appendChild(el("span", { class: "flash-label" }, "Question"));
      front.appendChild(el("p", null, card.front));
      const hint = el("span", { class: "flash-hint" });
      hint.appendChild(icon("flip", "flash-hint-icon"));
      hint.appendChild(document.createTextNode(" tap to flip"));
      front.appendChild(hint);

      const back = el("div", { class: "flash-face flash-back" });
      back.appendChild(el("span", { class: "flash-label" }, "Answer"));
      back.appendChild(el("p", null, card.back));

      cardEl.appendChild(front);
      cardEl.appendChild(back);

      cardEl.addEventListener("click", () => {
        flipped = !flipped;
        cardEl.classList.toggle("is-flipped", flipped);
        renderRate(flipped, card);
      });

      stage.appendChild(cardEl);
      counter.textContent = `${(idx % deck.length) + 1} / ${deck.length}`;
      renderRate(false, card);
    }

    function renderRate(flipped, card) {
      clear(rateSlot);
      if (!flipped) {
        rateSlot.appendChild(el("div", { class: "flash-rate flash-rate-placeholder" }, "Flip the card to rate your recall"));
        return;
      }
      const rateWrap = el("div", { class: "flash-rate fade-in" });
      const noBtn = el("button", { class: "btn-rate btn-rate-no" });
      noBtn.appendChild(icon("x", "btn-icon"));
      noBtn.appendChild(document.createTextNode(" Didn't know"));
      const yesBtn = el("button", { class: "btn-rate btn-rate-yes" });
      yesBtn.appendChild(icon("check", "btn-icon"));
      yesBtn.appendChild(document.createTextNode(" Knew it"));

      function rate(knewIt) {
        const cur = state.cardStats[card.id] || { seen: 0, known: 0 };
        state.cardStats[card.id] = { seen: cur.seen + 1, known: cur.known + (knewIt ? 1 : 0) };
        persist();
        idx = (idx + 1) % deck.length;
        renderCard();
      }
      noBtn.addEventListener("click", () => rate(false));
      yesBtn.addEventListener("click", () => rate(true));
      rateWrap.appendChild(noBtn);
      rateWrap.appendChild(yesBtn);
      rateSlot.appendChild(rateWrap);
    }

    renderCard();

    if (state.customCards.length > 0) {
      const customWrap = el("div", { class: "custom-deck" });
      customWrap.appendChild(el("div", { class: "custom-deck-label" }, "Your custom cards"));
      state.customCards.forEach((c) => {
        const item = el("div", { class: "custom-deck-item" });
        item.appendChild(el("span", null, c.front));
        const delBtn = el("button", { class: "icon-btn" });
        delBtn.appendChild(icon("trash", "icon-btn-svg"));
        delBtn.addEventListener("click", () => {
          state.customCards = state.customCards.filter((x) => x.id !== c.id);
          persist();
          renderFlashcards(container);
        });
        item.appendChild(delBtn);
        customWrap.appendChild(item);
      });
      view.appendChild(customWrap);
    }

    container.appendChild(view);
  }

  function statCard(label, value, sub, tone, delay) {
    const card = el("div", { class: `stat-card stat-${tone}`, style: `animation-delay:${delay}ms` });
    card.appendChild(el("div", { class: "stat-label" }, label));
    card.appendChild(el("div", { class: "stat-value" }, value));
    card.appendChild(el("div", { class: "stat-sub" }, sub));
    return card;
  }

  function renderProgress(container) {
    clear(container);
    const view = el("div", { class: "view fade-in" });

    const head = el("div", { class: "view-head" });
    head.appendChild(el("div", { class: "eyebrow" }, "Progress"));
    head.appendChild(inkHeading(NOTES.title, "lg"));
    view.appendChild(head);

    const quizEntries = Object.values(state.quizStats);
    const quizSeen = quizEntries.reduce((a, b) => a + b.seen, 0);
    const quizCorrect = quizEntries.reduce((a, b) => a + b.correct, 0);
    const quizAccuracy = quizSeen ? Math.round((quizCorrect / quizSeen) * 100) : 0;
    const quizCoverage = Math.round((Object.keys(state.quizStats).length / QUIZ_BANK.length) * 100);

    const cardEntries = Object.values(state.cardStats);
    const cardSeen = cardEntries.reduce((a, b) => a + b.seen, 0);
    const cardKnown = cardEntries.reduce((a, b) => a + b.known, 0);
    const cardMastery = cardSeen ? Math.round((cardKnown / cardSeen) * 100) : 0;
    const cardCount = DEFAULT_FLASHCARDS.length + state.customCards.length;
    const cardCoverage = Math.round((Object.keys(state.cardStats).length / cardCount) * 100);

    const grid = el("div", { class: "progress-grid" });
    grid.appendChild(statCard("Quiz accuracy", `${quizAccuracy}%`, `${quizCorrect} of ${quizSeen} correct`, "accent", 0));
    grid.appendChild(
      statCard(
        "Quiz coverage",
        `${quizCoverage}%`,
        `${Object.keys(state.quizStats).length} of ${QUIZ_BANK.length} questions seen`,
        "sage",
        60
      )
    );
    grid.appendChild(statCard("Card mastery", `${cardMastery}%`, `${cardKnown} of ${cardSeen} marked known`, "accent", 120));
    grid.appendChild(
      statCard(
        "Deck coverage",
        `${cardCoverage}%`,
        `${Object.keys(state.cardStats).length} of ${cardCount} cards reviewed`,
        "sage",
        180
      )
    );
    view.appendChild(grid);

    if (quizSeen === 0 && cardSeen === 0) {
      const empty = el("div", { class: "empty-state" });
      empty.appendChild(el("p", null, "No activity yet. Take a quiz or flip a few flashcards — your progress will show up here."));
      view.appendChild(empty);
    }

    if (quizEntries.length > 0) {
      const breakdown = el("div", { class: "breakdown" });
      breakdown.appendChild(el("div", { class: "breakdown-label" }, "Question-level accuracy"));
      QUIZ_BANK.filter((q) => state.quizStats[q.id]).forEach((q, i) => {
        const s = state.quizStats[q.id];
        const pct = Math.round((s.correct / s.seen) * 100);
        const row = el("div", { class: "breakdown-row", style: `animation-delay:${i * 40}ms` });
        row.appendChild(el("span", { class: "breakdown-q" }, q.question));
        const track = el("div", { class: "breakdown-bar-track" });
        const fill = el("div", {
          class: "breakdown-bar-fill",
          style: `width:${pct}%; background:${pct >= 70 ? "var(--sage)" : pct >= 40 ? "var(--gold)" : "var(--deep-red)"};`,
        });
        track.appendChild(fill);
        row.appendChild(track);
        row.appendChild(el("span", { class: "breakdown-pct" }, `${pct}%`));
        breakdown.appendChild(row);
      });
      view.appendChild(breakdown);
    }

    container.appendChild(view);
  }

  window.Vagdevi.renderFlashcards = renderFlashcards;
  window.Vagdevi.renderProgress = renderProgress;
})();

/* ---------------- APP SHELL ---------------- */
(function () {
  "use strict";
  const { NOTES, el, icon, renderNotes, renderQuiz, renderFlashcards, renderProgress } = window.Vagdevi;

  const NAV = [
    { id: "notes", label: "Notes", icon: "book" },
    { id: "quiz", label: "Quiz", icon: "quiz" },
    { id: "cards", label: "Flashcards", icon: "cards" },
    { id: "progress", label: "Progress", icon: "chart" },
  ];

  const RENDERERS = {
    notes: renderNotes,
    quiz: renderQuiz,
    cards: renderFlashcards,
    progress: renderProgress,
  };

  function buildShell() {
    const root = document.getElementById("app");

    const sidebar = el("aside", { class: "sidebar" });

    const brand = el("div", { class: "brand" });
    brand.appendChild(el("img", { src: "icon-96.png", alt: "Vāgdevi", class: "brand-logo" }));
    const brandText = el("div", { class: "brand-text" });
    brandText.appendChild(el("div", { class: "brand-name" }, "vāgdevi"));
    brandText.appendChild(el("div", { class: "brand-tag" }, "your study, undistracted"));
    brand.appendChild(brandText);
    sidebar.appendChild(brand);

    const nav = el("nav", { class: "nav" });
    const navButtons = {};
    NAV.forEach((item) => {
      const btn = el("button", { class: "nav-item" });
      btn.appendChild(icon(item.icon, "nav-icon"));
      btn.appendChild(el("span", null, item.label));
      btn.addEventListener("click", () => setActive(item.id));
      navButtons[item.id] = btn;
      nav.appendChild(btn);
    });
    sidebar.appendChild(nav);

    const moduleBox = el("div", { class: "sidebar-module" });
    moduleBox.appendChild(el("div", { class: "module-eyebrow" }, "Subject"));
    moduleBox.appendChild(el("div", { class: "module-name" }, "Anatomy"));
    moduleBox.appendChild(el("div", { class: "module-sub" }, `${NOTES.region} — ${NOTES.title}`));
    sidebar.appendChild(moduleBox);

    const main = el("main", { class: "main" });

    root.appendChild(sidebar);
    root.appendChild(main);

    function setActive(id) {
      Object.entries(navButtons).forEach(([key, btn]) => {
        btn.classList.toggle("is-active", key === id);
      });
      RENDERERS[id](main);
      try {
        localStorage.setItem("vagdevi-active-view", id);
      } catch {}
    }

    let initial = "notes";
    try {
      const saved = localStorage.getItem("vagdevi-active-view");
      if (saved && RENDERERS[saved]) initial = saved;
    } catch {}
    setActive(initial);
  }

  document.addEventListener("DOMContentLoaded", () => {
    buildShell();
    requestAnimationFrame(() => {
      setTimeout(() => {
        document.querySelector(".app")?.classList.add("is-loaded");
      }, 80);
    });
  });

  // Once a *card entrance* animation finishes, drop the animation styling
  // (CSS animations always win over transitions for the same property,
  // even after the animation ends with `forwards`/`both`), so a later
  // hover/flip transition on the same element isn't silently blocked.
  // Scoped tightly to card-entrance classes only — diagram reveal
  // animations (popIn/lineIn on .tier elements) rely on their fill-forward
  // state to stay visible and must NOT be stripped.
  const STRIP_ON_SELECTOR = ".note-card, .quiz-card, .quiz-option, .stat-card, .flash-card-enter, .install-banner";
  document.addEventListener(
    "animationend",
    (e) => {
      const target = e.target;
      if (!(target instanceof Element)) return;
      if (target.matches(STRIP_ON_SELECTOR)) {
        target.style.animation = "none";
      }
    },
    true
  );
})();
