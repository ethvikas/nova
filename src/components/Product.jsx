import { IconCheck, IconBolt } from './icons.jsx'
import useReveal from '../hooks/useReveal.js'

const BULLETS = [
  'Automations run 24/7 — retries and error logs included',
  'Every change tracked with human-readable AI summaries',
  'Privacy-first: your data never trains shared models'
]

/** Product / About section: copy on one side, a task-card visual on the other. */
export default function Product() {
  const left = useReveal()
  const right = useReveal()
  return (
    <section className="section" id="product">
      <div className="container split">
        <div className="split-copy reveal" ref={left}>
          <p className="eyebrow pill">The product</p>
          <h2>One workspace for tasks, docs and automation</h2>
          <p className="section-sub left">
            Stop stitching work together across five apps. NOVA keeps projects, documents
            and AI automations in one place, so context never gets lost between tools.
          </p>
          <ul className="check-list">
            {BULLETS.map(b => (
              <li key={b}><span className="check"><IconCheck /></span>{b}</li>
            ))}
          </ul>
          <a className="btn btn-ghost" href="#how">See how it works →</a>
        </div>

        <div className="split-visual reveal" ref={right}>
          <div className="task-card" role="img" aria-label="Automation card example">
            <div className="task-top">
              <span className="pill pill-green">Automation · Running</span>
              <IconBolt />
            </div>
            <h3>When a bug is reported → assign on-call engineer</h3>
            <div className="task-meta"><span>1,284 runs</span><span>0 failures this week</span></div>
            <div className="task-progress"><i style={{ width: '78%' }} /></div>
            <div className="task-foot"><span className="avatar-xs">RM</span><span>Created by Riya · updated 2h ago</span></div>
          </div>
          <div className="task-card ghost-card" aria-hidden="true" />
        </div>
      </div>
    </section>
  )
}
