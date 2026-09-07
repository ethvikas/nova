# NOVA Landing — Submission Notes

*Short explanation covering design decisions, technology choices, component
structure, challenges faced and how AI tools were used.*

## 1. Design decisions

- **Brand:** I kept the suggested fictional brand **NOVA — AI Productivity
  Platform** and built the visual identity around "calm productivity": a deep
  indigo/violet gradient, generous whitespace and rounded geometry.
- **Dark-first, themeable:** the default theme is dark (fits the AI/dev-tools
  aesthetic), with a complete light theme. Every color is a CSS custom property
  in `tokens.css`, so theming is an attribute flip on `<html>` — no component
  hardcodes a single color.
- **Real product feel instead of stock imagery:** the hero "screenshot" is a
  CSS-only dashboard mockup (kanban columns, running-automation chip), and the
  Trusted-By strip uses original fictional marks. This avoids licensing issues
  and keeps the page 100% self-hosted.
- **Typography:** a system font stack with tight display headings
  (`clamp()`-scaled). No web font downloads → faster, more resilient.

## 2. Technology choices

- **React + Vite** (the brief's preferred direction): components map naturally
  to the 13 required sections, and state drives every interaction.
- **Hand-written CSS instead of Tailwind/Bootstrap:** the assignment evaluates
  raw CSS skill, so I designed a small token-based system (`tokens.css` →
  `base.css` → per-area stylesheets). Result: ~5 KB of gzipped CSS.
- **No runtime dependencies beyond React:** icons are an inline SVG set, and
  animations are CSS + `requestAnimationFrame`, keeping the JS bundle ~55 KB gz.
- **IntersectionObserver** (scroll-reveal, count-up) instead of scroll-event
  math — cheaper, and it can unobserve after firing.

## 3. Component structure

- `App.jsx` is pure composition — it stacks section components and nothing else.
- **All copy lives in `src/data/content.js`.** Sections are dumb mappers
  (`data → view`); editing marketing copy never touches JSX.
- **Reusables:** `SectionHead`, the icon set, and shared primitives
  (`.btn`, `.card`, `.grid`, `.pill`, `check-list`).
- **Logic lives in hooks** (`useTheme`, `useReveal`, `useCountUp`) so components
  stay declarative.
- Component-local state: the demo modal's open/closed state lives inside `Hero`,
  the accordion index inside `FAQ`, etc. — no unnecessary global state.

## 4. Challenges faced

1. **FAQ accordion height animation.** Animating `height: auto` isn't possible
   in CSS. Solved with the `grid-template-rows: 0fr → 1fr` technique — smooth,
   with no JavaScript measuring.
2. **Theme toggle without a flash.** The initial theme is resolved in state
   (saved preference → OS preference) and written to `data-theme` before paint;
   CSS tokens do the rest.
3. **Accessibility of custom widgets.** Carousel, accordion and modal are common
   a11y failure points, so each ships with the right roles and ARIA wiring
   (`aria-roledescription`, `aria-expanded`, `aria-modal`, focus moved into the
   dialog, ESC/overlay close, body scroll lock).
4. **Zero horizontal scroll on mobile.** Decorative blobs are clipped by
   `overflow: hidden` on their section plus a body-level safety net; layouts are
   fluid grid/flex columns that collapse at 1024 / 820 / 560 px.

## 5. How AI tools were used

As permitted by the brief, an AI assistant acted as a **pair programmer**: it
helped scaffold the component skeletons and draft marketing copy. I directed the
architecture (token-based CSS, data-driven sections), reviewed every component,
set up the build, and verified the result across breakpoints and both themes.
Every pattern in the codebase — the accordion's grid-rows trick, the observer
hooks, the carousel's track transform — is one I can walk through line by line,
which the live review will confirm.

## 6. If I had more time

- Swap `content.js` for a headless CMS fetch to make it a production app
- Add real form endpoints and E2E tests (Playwright)
- `prefers-reduced-transparency`, print stylesheet, and i18n routing
