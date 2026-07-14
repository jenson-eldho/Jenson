import { stats, softwareBadges } from '../data/content'

export default function Hero() {
  return (
    <header id="top" className="hero">
      <div className="container hero-grid">
        <div>
          <span className="eyebrow">🎬 Available for freelance</span>
          <h1>
            Professional <span className="accent">Video Editor</span>
          </h1>
          <p className="hero-sub">
            I create cinematic, engaging videos that hold attention and move
            people — cutting for rhythm, grading for mood, and shaping sound
            that makes every frame feel alive.
          </p>
          <div className="hero-cta">
            <a href="#showreel" className="btn btn-primary">▶ Watch Showreel</a>
            <a href="#contact" className="btn btn-ghost">Hire Me</a>
          </div>
          <div className="hero-stats">
            {stats.map((s) => (
              <div key={s.label}>
                <div className="stat-num">{s.num}</div>
                <div className="stat-label">{s.label}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="hero-visual">
          <div className="hero-glow" />
          <img className="hero-cutout" src="/person.webp" alt="Jenson Eldho, video editor" />

          {softwareBadges.map((b, i) => (
            <div key={b.name} className={`float-badge fb${i + 1}`}>
              <span className="fb-logo" style={{ color: b.color }}>{b.letters}</span>
              {b.name}
            </div>
          ))}

          <div className="hero-badge b1">
            <span className="dot" /> Available now
          </div>
        </div>
      </div>
    </header>
  )
}
