import { FaFolderOpen, FaCheck } from 'react-icons/fa'
import Reveal from './Reveal'
import { aboutPoints } from '../data/content'

export default function About() {
  return (
    <section id="about" className="section">
      <div className="container about-grid">
        <Reveal className="about-media">
          <img src={`${import.meta.env.BASE_URL}person.png`} alt="Jenson Eldho" loading="lazy" />
          <div className="about-exp">
            1+<span>Year<br />Experience</span>
          </div>
        </Reveal>
        <Reveal className="about-copy">
          <span className="eyebrow">About Me</span>
          <h2 className="section-title">Cinematic edits, told with intention</h2>
          <p>
            I’m Jenson Eldho, a Creative Video Editor &amp; Videographer passionate
            about transforming ideas into compelling visual stories. From planning
            and filming to editing, color grading, sound design, and motion graphics,
            I manage every stage of the creative process to produce engaging,
            platform-ready content.
          </p>
          <p>
            Whether it’s promotional videos, event coverage, social media campaigns,
            or short films, my focus is always on delivering polished visuals that
            leave a lasting impression.
          </p>
          <ul className="about-points">
            {aboutPoints.map((p) => (
              <li key={p}><FaCheck /> {p}</li>
            ))}
          </ul>
          <a href="#work" className="btn btn-primary">
            <FaFolderOpen /> View My Projects
          </a>
        </Reveal>
      </div>
    </section>
  )
}
