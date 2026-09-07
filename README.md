# NOVA — AI Productivity Platform (Landing Page)

A fully responsive, modern marketing landing page for the fictional company **NOVA** —
an AI-powered productivity platform that helps teams manage projects, automate
repetitive tasks and collaborate efficiently.

> Tagline: **Build Better. Work Smarter.**

---

## ✨ Features

**All 13 required sections**

1. Sticky navigation bar (logos, links, CTA, theme toggle)
2. Hero with headline, dual CTAs and a pure-CSS product mockup
3. "Trusted by" logo strip (6 fictional companies)
4. Features grid — 6 cards
5. Product / About split section
6. How It Works — 4 numbered steps
7. Statistics band
8. Solutions / Use Cases — 4 audience cards
9. Testimonials — 3 customer quotes
10. Pricing — 3 plans
11. FAQ — 6 questions
12. Final CTA band
13. Footer (4 link columns + newsletter + copyright bar)

**Required interactions**

- Fully responsive navbar with **mobile hamburger menu**
- **Smooth scrolling** with sticky-header offset (`scroll-margin-top`)
- Working **FAQ accordion** (pure CSS height animation)
- Button **hover effects** and **card hover effects**
- All navigation links resolve to real sections

**Bonus interactions**

- 🌗 **Dark / light mode** (remembers choice, respects OS preference)
- 🔢 **Animated statistics** (count-up when scrolled into view)
- ✨ **Scroll-reveal animations** (`IntersectionObserver`)
- 🎠 **Testimonial carousel** (auto-play, arrows, dots, pause on hover)
- 💸 **Monthly / annual pricing toggle**
- 🎬 **Demo modal** (ESC / overlay close, body scroll lock, focus management)
- 📧 **Newsletter form validation** (inline error / success states)
- ⬆️ **Back-to-top button**

**Accessibility & performance**

- Semantic HTML (`header/nav/main/section/footer/figure/blockquote`)
- Skip-to-content link, `aria-expanded`/`aria-controls`/roles on interactive widgets
- Visible focus states, `prefers-reduced-motion` support, AA contrast in both themes
- Zero external assets (icons are inline SVG, mockups are pure CSS) → fast first paint
- Production bundle: **~55 KB JS gzip, ~5 KB CSS gzip**

---

## 🛠 Technologies

| Layer | Choice |
|---|---|
| Framework | **React 18** (functional components + hooks) |
| Build tool | **Vite 5** |
| Styling | Hand-written **CSS** with custom properties (design tokens) |
| State | React `useState` / `useEffect` / `useRef` — no external state libs |
| Assets | Inline SVG icon set, CSS-only illustrations |
| Fonts | System font stack (no web-font download = faster load) |

No UI frameworks (Tailwind/Bootstrap) were used on purpose: custom CSS written
against design tokens demonstrates raw CSS skill and keeps the bundle tiny.

---

## 🚀 Getting started

```bash
# 1. Install dependencies
npm install

# 2. Start the dev server
npm run dev          # http://localhost:5173

# 3. Production build
npm run build        # outputs to dist/

# 4. Preview the production build locally
npm run preview      # http://localhost:4173
```

---

## 📁 Project structure

```
nova-landing/
├── index.html
├── package.json
├── vite.config.js
├── README.md
├── SUBMISSION_NOTES.md        <- design / tech / AI-usage explanation
└── src/
    ├── main.jsx               <- entry, imports stylesheets
    ├── App.jsx                <- page composition (sections only)
    ├── data/
    │   └── content.js         <- ALL page copy: features, plans, FAQs…
    ├── hooks/
    │   ├── useReveal.js       <- IntersectionObserver scroll-reveal
    │   ├── useCountUp.js      <- animated numbers
    │   └── useTheme.js        <- dark/light mode
    ├── styles/
    │   ├── tokens.css         <- colors, radii, shadows (both themes)
    │   ├── base.css           <- reset, buttons, grids, utilities
    │   ├── navbar.css         ├── hero.css     ├── sections.css
    │   ├── pricing.css        └── footer.css
    └── components/
        ├── icons.jsx          <- inline SVG icon set + logo
        ├── SectionHead.jsx    <- reusable section header
        ├── Navbar.jsx   Hero.jsx (incl. DemoModal)
        ├── TrustedBy.jsx      Features.jsx
        ├── Product.jsx        HowItWorks.jsx
        ├── Stats.jsx          Solutions.jsx
        ├── Testimonials.jsx   Pricing.jsx
        ├── FAQ.jsx            CTA.jsx
        ├── Footer.jsx         BackToTop.jsx
```

**Architecture in one line:** content lives in `data/content.js`; components are
pure "data → view" mappers. Updating the entire page copy means editing one file.

---

## 📸 Screenshots

| Dark theme | Light theme |
|---|---|
| ![NOVA landing page — dark theme](docs/screenshot-dark.png) | ![NOVA landing page — light theme](docs/screenshot-light.png) |

*(Captured at 1440px; mobile layout verified at 390px.)*

## 🔗 Live demo

**https://nova-landing-yourname.vercel.app** ← replace with the deployed URL

*(Deploys in ~2 minutes: `npm run build`, then drop the `dist/` folder on
[Netlify Drop](https://app.netlify.com/drop) or `vercel --prod`.)*

---

## 🤖 AI tools used

Built with AI assistance (as allowed by the brief): an AI pair-programmer helped
scaffold components and content, after which every section was reviewed, themed,
tested at multiple breakpoints and refined by hand (see `SUBMISSION_NOTES.md`
for details, decisions and challenges).
