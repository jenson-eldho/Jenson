import Reveal from './Reveal'
import { statsBig } from '../data/content'

export default function Statistics() {
  return (
    <section className="section section-tight">
      <div className="container">
        <Reveal className="stats-band">
          {statsBig.map((s) => (
            <div className="stat-cell" key={s.label}>
              <div className="stat-big">{s.num}</div>
              <p>{s.label}</p>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  )
}
