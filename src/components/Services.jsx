import Reveal from './Reveal'
import { services } from '../data/content'

export default function Services() {
  return (
    <section id="services" className="section">
      <div className="container">
        <Reveal className="section-head">
          <span className="eyebrow">What I do</span>
          <h2 className="section-title">Services that elevate your footage</h2>
          <p className="section-sub">
            From first cut to final export — everything your video needs to look
            and feel premium.
          </p>
        </Reveal>
        <div className="grid grid-3">
          {services.map((s, i) => (
            <Reveal key={s.title} className="card service" style={{ transitionDelay: `${i * 60}ms` }}>
              <div className="service-icon"><s.icon /></div>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
              <div className="service-tags">
                {s.tags.map((t) => (
                  <span key={t}>{t}</span>
                ))}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
