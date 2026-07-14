import { FaPlay } from 'react-icons/fa'
import Reveal from './Reveal'
import { projects } from '../data/content'

export default function Projects() {
  return (
    <section id="work" className="section">
      <div className="container">
        <Reveal className="section-head">
          <span className="eyebrow">Selected work</span>
          <h2 className="section-title">Featured projects</h2>
          <p className="section-sub">
            A snapshot of recent edits across documentary, music, brand, and social.
          </p>
        </Reveal>
        <div className="grid grid-3">
          {projects.map((p, i) => (
            <Reveal
              as="a"
              key={p.id}
              className="project"
              href={p.video || undefined}
              target={p.video ? '_blank' : undefined}
              rel={p.video ? 'noreferrer' : undefined}
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              <img src={p.src} alt={p.title} loading="lazy" />
              <div className="project-body">
                <span className="project-cat">{p.cat}</span>
                <span className="play-sm"><FaPlay /></span>
                <div className="project-meta">
                  <strong>{p.title}</strong>
                  <span>{p.views}</span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
