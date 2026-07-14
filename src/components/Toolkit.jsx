import Reveal from './Reveal'
import { software, skillBars, skillTags } from '../data/content'

export default function Toolkit() {
  return (
    <section id="skills" className="section">
      <div className="container">
        <Reveal className="section-head">
          <span className="eyebrow">My toolkit</span>
          <h2 className="section-title">Editing Software &amp; Skills</h2>
          <p className="section-sub">The industry-standard tools and the craft behind every cut.</p>
        </Reveal>

        <div className="software-grid" style={{ marginBottom: 64 }}>
          {software.map((s, i) => (
            <Reveal key={s.name} className="card soft" style={{ transitionDelay: `${i * 60}ms` }}>
              <div className="soft-logo" style={{ background: '#1b2130', color: s.color }}>
                {s.letters}
              </div>
              <h4>{s.name}</h4>
              <span>{s.short}</span>
            </Reveal>
          ))}
        </div>

        <Reveal className="skills-wrap">
          <div>
            <h3 className="section-title" style={{ textAlign: 'left', fontSize: '1.7rem', margin: '0 0 12px' }}>
              Where I’m strongest
            </h3>
            <p className="section-sub">Years of cutting across genres — refined into a versatile skill set.</p>
            <div className="skill-tags" style={{ marginTop: 22 }}>
              {skillTags.map((t) => (
                <span key={t}>{t}</span>
              ))}
            </div>
          </div>
          <div>
            {skillBars.map((s) => (
              <div className="skill" key={s.name}>
                <div className="skill-top">
                  <span>{s.name}</span>
                  <span>{s.level}%</span>
                </div>
                <div className="skill-bar">
                  <div className="skill-fill" style={{ '--w': `${s.level}%` }} />
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
