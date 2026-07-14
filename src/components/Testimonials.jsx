import Reveal from './Reveal'
import { testimonials } from '../data/content'

export default function Testimonials() {
  return (
    <section className="section">
      <div className="container">
        <Reveal className="section-head">
          <span className="eyebrow">Kind words</span>
          <h2 className="section-title">What clients say</h2>
        </Reveal>
        <div className="grid grid-3">
          {testimonials.map((t, i) => (
            <Reveal key={t.name} className="card testi" style={{ transitionDelay: `${i * 70}ms` }}>
              <div className="testi-stars">★★★★★</div>
              <p>“{t.quote}”</p>
              <div className="testi-user">
                <img src={t.avatar} alt={t.name} loading="lazy" />
                <div>
                  <strong>{t.name}</strong>
                  <span>{t.role}</span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
