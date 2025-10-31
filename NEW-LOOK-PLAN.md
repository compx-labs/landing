Love it. Here’s a tightly-scoped, **step-by-step implementation plan** you can paste into Cursor/Claude. It’s split into small, testable stages with explicit inputs/outputs, acceptance criteria, and “AI task prompts” so the model doesn’t run off.

---

# CompX “Cruiser Schematics” Landing — Implementation Plan

## 0) Tech & Constraints

* **Stack:** React + Vite (or Next.js), **Tailwind**, **Framer Motion** (for micro-anims), **Lenis** (smooth scroll) or CSS `scroll-behavior: smooth`. No heavy 3D; SVG + CSS only.
* **Design language:** industrial sci-fi, blueprint lines, frosted glass panels, neon edges. Minimal copy.
* **Performance bar:** LCP < 2.5s on mid mobile, no script > 80kb gzipped extra.

---

## 1) Project Bootstrap

**Tasks**

1. Create project scaffold (Vite React + TS).
2. Install deps: `tailwindcss postcss autoprefixer framer-motion @headlessui/react @heroicons/react lenis`.
3. Configure Tailwind and fonts.

**Acceptance**

* App runs, Tailwind classes live, layout container centered.

**AI Task Prompt**

> Set up a Vite + React + TS project named `compx-landing`. Add Tailwind with a config using colors: `nebula-900 #0A0724`, accents `purple #7F4AFF`, `pink #FF73B8`, `teal #00F5C0`, `bronze #F9A826`. Add font “Space Grotesk” and “Inter”. Create a `src/styles/globals.css` with base styles (dark bg, antialiasing). Add a `Layout` component with nav/footer placeholders.

---

## 2) Design Tokens & Theme

**Tasks**

* Tailwind theme tokens + utilities: glass panel, holo border, blueprint grid, orbital lines.

**Acceptance**

* Utility classes available: `.glass`, `.holo-border`, `.blueprint-bg`, `.grid-overlay`.

**AI Task Prompt**

> Extend Tailwind to include utilities: frosted glass (backdrop-blur-md + white/10), holo-border (1px gradient border), blueprint grid (repeating-linear-gradient), and a starfield background using layered radial gradients. Create example in `/sandbox/ThemePreview.tsx`.

---

## 3) Content Model (one source of truth)

**Tasks**

* Create `src/content/ecosystem.ts` with structured data.

**Shape**

```ts
export type AppModule = {
  id: 'compx'|'waypoint'|'orbital';
  name: string;
  tagline: string;
  route: string;          // link to app
  metrics?: { label: string; value: string }[];
  schematic: {
    svgPathId: string;    // id of svg group to highlight
    icon?: string;
  };
  bullets: string[];      // 3 concise points
};

export type Token = {
  id: 'compx'|'xusd'|'calgo';
  name: string;
  role: string;
  color: string;          // hex from theme
};

export const APPS: AppModule[] = [ /* fill copy placeholders */ ];
export const TOKENS: Token[] = [ /* compx, xusd, calgo */ ];
```

**Acceptance**

* Build compiles; content imported without UI.

**AI Task Prompt**

> Create `content/ecosystem.ts` with placeholder copy (≤10 words per line). Add APPS for CompX, Waypoint, Orbital and TOKENS for COMPX, xUSD, cALGO.

---

## 4) Global Shell & Navigation

**Tasks**

* Header with logo + “Enter Ecosystem” CTA.
* Simple sticky progress indicator on the right (3 dots → sections).

**Acceptance**

* Clicking dots scrolls to each section smoothly.

**AI Task Prompt**

> Build `components/Header.tsx` and `components/ProgressNav.tsx`. Use IntersectionObserver to set active dot. Smooth scroll on click.

---

## 5) Section A — **Cruiser Overview Schematic (Top-Down)**

**Tasks**

* Create **single SVG** of ship top-down (industrial schematic style).
* Hotspots for three zones: Engine Core (CompX), Navigation Deck (Waypoint), Docking Bay (Orbital).
* On hover/tap: highlight zone and show **inline glass info card** (no modal).

**Acceptance**

* SVG scales responsively. Hover highlights (`mix-blend-screen` glow).
* Info card displays `APPS[i]` data; “Visit App” button works.

**AI Task Prompt**

> Build `sections/CruiserOverview.tsx` with a responsive SVG cruiser. Define 3 `<g id="zone-...">` groups. On hover/tap, add a purple glow and render `GlassPanel` anchored near the group. Pull copy from `content/ecosystem.ts`. No fixed positions; use `getBBox()` to position the panel.

---

## 6) Section B — **Engine Core (CompX)**

**Tasks**

* Blueprint-style close-up schematic of the engine room (SVG).
* Animated conduits pulsing from **COMPX** and **xUSD**.
* Metrics inline: TVL, Governance Active, Collateralized Assets (placeholder values).

**Acceptance**

* Subtle loop animation (Framer Motion) ≤ 60fps.
* Panel: bullets (3), `Visit App`, `Learn More`.

**AI Task Prompt**

> Build `sections/EngineCore.tsx`. Design an SVG engine cluster with 2–3 animated “conduit” paths using Framer Motion `pathLength` animation. Add a `GlassPanel` with CompX data and three bullet points.

---

## 7) Section C — **Navigation Deck (Waypoint)**

**Tasks**

* Schematic of bridge with **route vectors** projecting outward.
* Small “milestones” glyphs along vectors.
* Copy: routes, milestones, multi-user routes (placeholders).

**Acceptance**

* Lines animate plotting from origin (draw effect).
* CTA “Open Waypoint”.

**AI Task Prompt**

> Build `sections/NavigationDeck.tsx`. Create 3 outward vectors (SVG paths) with animated draw-on. Place small circle milestones. Show a compact stats row: “Active routes”, “Avg fee”, “Supported assets” with placeholder numbers.

---

## 8) Section D — **Docking Bay (Orbital)**

**Tasks**

* Schematic of hangar with **market pods** (3 pods).
* Conduits from Engine Core zone to pods.
* Copy: lending markets, buyouts, liquidations.

**Acceptance**

* Pod hover expands a label (APR, Util placeholder).
* CTA “Open Orbital”.

**AI Task Prompt**

> Build `sections/DockingBay.tsx`. Represent 3 pods as rounded rects with subtle motion on hover (scale 1.02). Add thin pulsing lines from a “main intake” to pods. Include 3 bullet points.

---

## 9) Section E — **Power Cells (Tokens)**

**Tasks**

* Three **energy cores**: COMPX (purple), xUSD (teal), cALGO (gold).
* Short roles under each; faint beams to module icons.

**Acceptance**

* Idle glow + slow pulse; prefers-reduced-motion respected.

**AI Task Prompt**

> Build `sections/PowerCells.tsx`. For each `TOKENS`, render a circular core with inner gradient and animated soft shadow. Add role text and minimal description (≤12 words).

---

## 10) Section F — **Mission Log / Governance (Optional)**

**Tasks**

* Holo terminal card with: “Governance proposals”, “Ecosystem TVL”, “Recent deploys”.
* Placeholder data and “View Governance” CTA.

**Acceptance**

* Card looks like terminal: mono font, subtle scanlines.

**AI Task Prompt**

> Build `sections/MissionLog.tsx`. Use a monospaced font. Add a flashing caret and a faux log list (3 items). Keep CPU-light.

---

## 11) Glass Panel Component

**Tasks**

* Reusable `GlassPanel` with title, tagline, metrics, 0–3 bullets, and 1–2 CTAs.
* Props control width/placement; auto flips if near viewport edge.

**Acceptance**

* Keyboard focusable, ESC closes when used as overlay (if needed).
* Works on touch — tap toggles, second tap closes.

**AI Task Prompt**

> Create `components/GlassPanel.tsx` with ARIA role `dialog` when `asOverlay` and role `region` when inline. Implement edge-aware positioning using bounding rects.

---

## 12) Scroll Orchestration

**Tasks**

* Each section full-screen height with subtle parallax.
* Progress dots sync with active section.
* No hard “scroll-jacking”; just easing and reveal.

**Acceptance**

* Mobile scroll smooth; no stuck states.
* `prefers-reduced-motion` disables parallax/line animations.

**AI Task Prompt**

> Implement `hooks/useActiveSection.ts` using IntersectionObserver and `hooks/useParallax.ts` for subtle translateY/-opacity transforms, respecting reduced motion.

---

## 13) Mobile & Tablet Layout

**Tasks**

* Stack: title → compressed schematic slice → panel below.
* Replace hover with tap.
* Ensure SVG lines ≥ 2px for visibility.

**Acceptance**

* iPhone 12/SE synthetic sizes pass; hit targets ≥ 44px.

**AI Task Prompt**

> Add responsive variants for each section. On mobile, panels are always visible under schematic with a “Details” collapsible. Increase stroke widths and spacing.

---

## 14) Accessibility

**Tasks**

* Keyboard traversal: hotspots in tab order; visible focus rings.
* ARIA labels for SVG zones and panels.
* Color contrast ≥ 4.5:1 for text.

**Acceptance**

* Axe DevTools shows 0 critical issues.

**AI Task Prompt**

> Add `aria-label` to all hotspots and panels, ensure focus styles, and provide `sr-only` descriptions for each schematic.

---

## 15) Performance & Assets

**Tasks**

* Inline critical SVG; lazy-load non-critical sections.
* Use `svgo` to optimize SVG.
* Preload hero font and background gradient.

**Acceptance**

* Lighthouse Performance ≥ 90 on mobile emulation.
* JS bundle ≤ 220kb gz overall (landing only).

**AI Task Prompt**

> Optimize SVGs via SVGO config. Code-split sections with `React.lazy`. Preload fonts properly. Add `content-visibility: auto` to section wrappers.

---

## 16) Footer & CTAs

**Tasks**

* Final CTA: “Enter the Ecosystem”.
* Links to CompX app, Waypoint, Orbital, Docs, Governance.

**Acceptance**

* All external links open correctly; hover states match holo style.

**AI Task Prompt**

> Build `components/Footer.tsx` with CTA and link grid. Keep copy concise.

---

## 17) QA Checklist (copy into PR template)

* [ ] All sections render without CLS.
* [ ] Mobile tap targets ≥ 44px; SVG strokes ≥ 2px.
* [ ] `prefers-reduced-motion` honored.
* [ ] Lighthouse: P≥90, A≥95, SEO≥90.
* [ ] No console warnings.
* [ ] Links verified.
* [ ] Content strings < 12 words per bullet.

---

## 18) File Tree (target)

```
src/
  components/
    GlassPanel.tsx
    Header.tsx
    ProgressNav.tsx
  sections/
    CruiserOverview.tsx
    EngineCore.tsx
    NavigationDeck.tsx
    DockingBay.tsx
    PowerCells.tsx
    MissionLog.tsx
  hooks/
    useActiveSection.ts
    useParallax.ts
  content/
    ecosystem.ts
  styles/
    globals.css
  App.tsx  (or pages/index.tsx in Next)
```

---

## 19) Copy Placeholders (short, non-SaaS)

* **CompX** — Engine core of composable finance.
  Bullets: Governance power • Collateral & yield • xUSD stability
* **Waypoint** — Routes for programmable payments.
  Bullets: Milestones • Multi-user routes • Yield-aware
* **Orbital** — Liquidity dock and lending markets.
  Bullets: Borrow & supply • Buyouts • Risk controls
* **COMPX** — Command core fuel
* **xUSD** — Stabilization coolant
* **cALGO** — Yield reactor output

---

### Final “Do This Next” for Claude/Cursor

1. **Execute steps 1–3** (bootstrap, theme, content model).
2. Implement **Section A** with working hotspots + GlassPanel.
3. Add Sections **B–E** one by one; keep copy short.
4. Wire **ProgressNav** + scroll hooks.
5. Ship QA checklist.

If you want, I can also provide **starter SVGs** for the cruiser and zones (line-art, ready for Tailwind classes).
