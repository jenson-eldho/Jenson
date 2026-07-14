import Reveal from './Reveal'
import { process } from '../data/content'

export default function Process() {
  return (
    <section className="section">
      <div className="container">
        <Reveal className="section-head">
          <span className="eyebrow">How it works</span>
          <h2 className="section-title">A simple, collaborative process</h2>
        </Reveal>
        <div className="process-grid">
          {process.map((p, i) => (
            <Reveal key={p.n} className="card step" style={{ transitionDelay: `${i * 70}ms` }}>
              <div className="step-num">{p.n}</div>
              <h3>{p.title}</h3>
              <p>{p.desc}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
