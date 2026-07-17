import { FaPlay, FaDownload } from 'react-icons/fa'
import { stats } from '../data/content'

export default function Hero() {
  return (
    <header id="top" className="hero">
      <div className="container hero-grid">
        <div className="hero-copy">
          <p className="hero-hi">Hi, I&apos;m</p>
          <h1>Jenson Eldho</h1>
          <p className="hero-role">Creative Video Editor &amp; Videographer</p>
          <p className="hero-sub">
            I create cinematic visuals from concept to final delivery—combining
            professional videography, creative editing, color grading, sound design,
            and motion graphics to craft stories that connect with audiences across
            brands, events, and social media.
          </p>

          <div className="hero-stats">
            {stats.map((s) => (
              <div key={s.label}>
                <div className="stat-num">{s.num}</div>
                <div className="stat-label">{s.label}</div>
              </div>
            ))}
          </div>

          <div className="hero-cta">
            <a href="#showreel" className="btn btn-primary">
              <FaPlay /> Watch Showreel
            </a>
            <a
              href={`${import.meta.env.BASE_URL}Jenson-Eldho-CV.pdf`}
              className="btn btn-ghost"
              download
              target="_blank"
              rel="noreferrer"
            >
              <FaDownload /> Download CV
            </a>
          </div>
        </div>

        <div className="hero-visual">
          <div className="hero-glow" />
          <img className="hero-cutout" src={`${import.meta.env.BASE_URL}person.png`} alt="Jenson Eldho, professional video editor" />
        </div>
      </div>
    </header>
  )
}
