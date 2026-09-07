/**
 * Inline SVG icon set — zero external requests, infinitely recolorable
 * (icons inherit `currentColor` from CSS).
 */

const base = {
  width: 24, height: 24, viewBox: '0 0 24 24',
  fill: 'none', stroke: 'currentColor', strokeWidth: 2,
  strokeLinecap: 'round', strokeLinejoin: 'round', 'aria-hidden': true
}

export const IconBolt = (p) => <svg {...base} {...p}><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>
export const IconBoard = (p) => <svg {...base} {...p}><rect x="3" y="3" width="18" height="18" rx="2"/><line x1="9" y1="3" x2="9" y2="21"/><line x1="15" y1="3" x2="15" y2="21"/></svg>
export const IconUsers = (p) => <svg {...base} {...p}><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
export const IconNote = (p) => <svg {...base} {...p}><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="8" y1="13" x2="16" y2="13"/><line x1="8" y1="17" x2="13" y2="17"/></svg>
export const IconPlug = (p) => <svg {...base} {...p}><path d="M9 7V2M15 7V2"/><path d="M12 22v-4"/><path d="M7 7h10v5a5 5 0 0 1-10 0z"/></svg>
export const IconChart = (p) => <svg {...base} {...p}><line x1="4" y1="20" x2="20" y2="20"/><rect x="5" y="10" width="4" height="10" rx="1"/><rect x="11" y="4" width="4" height="16" rx="1"/><rect x="17" y="13" width="4" height="7" rx="1"/></svg>
export const IconCheck = (p) => <svg {...base} {...p}><polyline points="20 6 9 17 4 12"/></svg>
export const IconArrowUp = (p) => <svg {...base} {...p}><line x1="12" y1="19" x2="12" y2="5"/><polyline points="5 12 12 5 19 12"/></svg>
export const IconPlay = (p) => <svg {...base} {...p}><circle cx="12" cy="12" r="10"/><polygon points="10 8 16 12 10 16 10 8" fill="currentColor" stroke="none"/></svg>
export const IconChevron = (p) => <svg {...base} {...p}><polyline points="6 9 12 15 18 9"/></svg>
export const IconArrowLeft = (p) => <svg {...base} {...p}><line x1="19" y1="12" x2="5" y2="12"/><polyline points="12 19 5 12 12 5"/></svg>
export const IconArrowRight = (p) => <svg {...base} {...p}><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 5"/></svg>
export const IconSun = (p) => <svg {...base} {...p}><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>
export const IconMoon = (p) => <svg {...base} {...p}><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>
export const IconMenu = (p) => <svg {...base} {...p}><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></svg>
export const IconX = (p) => <svg {...base} {...p}><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>

export const FEATURE_ICONS = {
  bolt: IconBolt, board: IconBoard, users: IconUsers,
  note: IconNote, plug: IconPlug, chart: IconChart
}

/** NOVA logo mark + wordmark */
export function Logo({ size = 30 }) {
  return (
    <span className="logo" aria-label="NOVA home">
      <svg width={size} height={size} viewBox="0 0 32 32" aria-hidden="true">
        <defs>
          <linearGradient id="logoG" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#6d7cff"/><stop offset="1" stopColor="#b06dff"/>
          </linearGradient>
        </defs>
        <rect width="32" height="32" rx="8" fill="url(#logoG)"/>
        <path d="M10 22V10l12 12V10" stroke="#fff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
      </svg>
      <span className="logo-word">NOVA</span>
    </span>
  )
}

/** Simple company glyph for the "Trusted by" strip */
export function Glyph({ type }) {
  const s = { width: 18, height: 18, viewBox: '0 0 24 24', fill: 'currentColor', 'aria-hidden': true }
  switch (type) {
    case 'triangle': return <svg {...s}><path d="M12 3 22 21H2z"/></svg>
    case 'diamond': return <svg {...s}><path d="M12 2 22 12 12 22 2 12z"/></svg>
    case 'star': return <svg {...s}><path d="m12 2 2.6 6.9H22l-5.6 4.4 2 7.7-6.4-4.5-6.4 4.5 2-7.7L2 8.9h7.4z"/></svg>
    case 'circle': return <svg {...s}><circle cx="12" cy="12" r="9"/></svg>
    case 'hex': return <svg {...s}><path d="M12 2 21 7v10l-9 5-9-5V7z"/></svg>
    default: return <svg {...s}><path d="M12 2v20M2 12h20M4.9 4.9l14.2 14.2M19.1 4.9 4.9 19.1"/></svg>
  }
}
