/**
 * Central content store for the whole page.
 * Sections stay dumb: they import these arrays and render them with .map().
 * Editing the site = editing this file.
 */

export const NAV_LINKS = [
  { label: 'Features', href: '#features' },
  { label: 'Product', href: '#product' },
  { label: 'How it works', href: '#how' },
  { label: 'Solutions', href: '#solutions' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'FAQ', href: '#faq' }
]

export const LOGOS = [
  { name: 'Northwind', glyph: 'triangle' },
  { name: 'FinEdge', glyph: 'diamond' },
  { name: 'Brightline', glyph: 'star' },
  { name: 'Kova', glyph: 'circle' },
  { name: 'Hexon Labs', glyph: 'hex' },
  { name: 'Aster & Co', glyph: 'asterisk' }
]

export const FEATURES = [
  {
    icon: 'bolt',
    title: 'AI Task Automation',
    desc: 'Describe a workflow in plain English and NOVA turns it into a running automation — no rules engine, no scripts.'
  },
  {
    icon: 'board',
    title: 'Smart Project Boards',
    desc: 'Auto-prioritised boards that re-order work by deadline, effort and team load, so the right task is always on top.'
  },
  {
    icon: 'users',
    title: 'Real-time Collaboration',
    desc: 'Live cursors, inline comments and @mentions keep everyone in context — meetings optional.'
  },
  {
    icon: 'note',
    title: 'AI Meeting Notes',
    desc: 'Every call is summarised into decisions and action items, auto-assigned to the right project.'
  },
  {
    icon: 'plug',
    title: '100+ Integrations',
    desc: 'Slack, GitHub, Figma, Google Workspace and more — your tools finally talk to each other.'
  },
  {
    icon: 'chart',
    title: 'Analytics & Insights',
    desc: 'Team velocity, workload balance and blocker detection, explained in plain language by AI.'
  }
]

export const STEPS = [
  { n: '01', title: 'Connect your tools', desc: 'Plug in the apps your team already uses. NOVA syncs tasks, docs and calendars in minutes.' },
  { n: '02', title: 'Describe your workflow', desc: 'Type what you want automated — "assign bug reports to on-call" — and AI drafts the flow.' },
  { n: '03', title: 'AI builds & runs it', desc: 'Approve the draft and NOVA executes it 24/7, retrying and logging every run.' },
  { n: '04', title: 'Track & optimise', desc: 'Dashboards show time saved and bottlenecks, with suggestions to shave off even more.' }
]

export const STATS = [
  { value: 12400, suffix: '+', label: 'teams run on NOVA', decimals: 0 },
  { value: 4.2, suffix: 'M', label: 'tasks automated / month', decimals: 1 },
  { value: 38, suffix: '%', label: 'average time saved weekly', decimals: 0 },
  { value: 99.98, suffix: '%', label: 'uptime, last 12 months', decimals: 2 }
]

export const SOLUTIONS = [
  {
    tag: 'Startups',
    title: 'Ship faster with a tiny team',
    points: ['AI drafts standups & status updates', 'Auto-triage incoming issues', 'Zero admin overhead']
  },
  {
    tag: 'Agencies',
    title: 'Every client, one calm dashboard',
    points: ['Per-client workspaces & permissions', 'Automated progress reports', 'Billable-hours insight']
  },
  {
    tag: 'Enterprise',
    title: 'Scale without chaos',
    points: ['SSO, SCIM & audit logs', 'Cross-team dependency mapping', 'SOC 2 Type II compliance']
  },
  {
    tag: 'Remote teams',
    title: 'Async-first collaboration',
    points: ['Meeting notes without the meeting', 'Timezone-aware handoffs', 'Focus-time protection']
  }
]

export const TESTIMONIALS = [
  {
    quote: 'NOVA cut our sprint planning from three hours to twenty minutes. The auto-prioritisation is scarily accurate.',
    name: 'Riya Menon',
    role: 'Product Lead, Northwind',
    initials: 'RM'
  },
  {
    quote: 'We replaced four tools with NOVA. Automations that took a developer a day now take a PM five minutes.',
    name: 'Daniel Osei',
    role: 'CTO, FinEdge',
    initials: 'DO'
  },
  {
    quote: 'AI meeting notes alone pay for the plan. Action items land on boards before the call even ends.',
    name: 'Sara Ali',
    role: 'Ops Director, Brightline',
    initials: 'SA'
  }
]

export const PLANS = [
  {
    name: 'Starter',
    monthly: 0,
    annual: 0,
    blurb: 'For individuals trying NOVA',
    cta: 'Start free',
    features: ['Up to 3 projects', 'Basic automations (10 runs/day)', 'Kanban & list views', 'Community support']
  },
  {
    name: 'Pro',
    monthly: 15,
    annual: 12,
    blurb: 'For teams that ship daily',
    cta: 'Start 14-day trial',
    popular: true,
    features: ['Unlimited projects & automations', 'AI meeting notes & summaries', '100+ integrations', 'Workload & velocity analytics', 'Priority support']
  },
  {
    name: 'Enterprise',
    monthly: null,
    annual: null,
    blurb: 'For organisations at scale',
    cta: 'Talk to sales',
    features: ['SSO / SAML & SCIM', 'Dedicated success manager', 'Custom security review', '99.99% uptime SLA', 'Onboarding & training']
  }
]

export const FAQS = [
  {
    q: 'Is there a free trial?',
    a: 'Yes. The Starter plan is free forever, and every Pro workspace gets a 14-day full-feature trial — no credit card required.'
  },
  {
    q: 'How does NOVA handle my data?',
    a: 'All data is encrypted in transit and at rest. Your workspace data is never used to train shared AI models, and NOVA is SOC 2 Type II certified.'
  },
  {
    q: 'Can I cancel anytime?',
    a: 'Absolutely. Monthly plans cancel with one click; annual plans are refunded pro-rata. Your data stays exportable for 90 days.'
  },
  {
    q: 'Which tools does NOVA integrate with?',
    a: 'Over 100 apps including Slack, GitHub, GitLab, Figma, Notion, Google Workspace, Outlook and Zapier — plus a public API and webhooks.'
  },
  {
    q: 'Do non-technical teammates need training?',
    a: 'No. Automations are written in plain English, and most teams are productive within their first hour. Guided templates cover common workflows.'
  },
  {
    q: 'Can NOVA replace our current project management tool?',
    a: 'Yes — boards, docs, goals and reporting are built in. Migration importers for Jira, Trello, Asana and Linear move your history in one click.'
  }
]

export const FOOTER_COLS = [
  { title: 'Product', links: ['Features', 'Integrations', 'Pricing', 'Changelog', 'Roadmap'] },
  { title: 'Company', links: ['About', 'Careers', 'Blog', 'Press kit', 'Contact'] },
  { title: 'Resources', links: ['Documentation', 'API reference', 'Community', 'Templates', 'Status'] },
  { title: 'Legal', links: ['Privacy', 'Terms', 'Security', 'Cookies', 'DPA'] }
]
