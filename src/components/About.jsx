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
            I’m Jenson Eldho — a professional video editor obsessed with pacing,
            emotion, and the details that make footage feel like film. From
            documentaries and brand spots to music videos and short-form, I turn
            raw clips into stories people actually finish watching.
          </p>
          <p>
            Every project is a collaboration. I listen to your goals, protect the
            story, and sweat the frame-level craft — so the final cut looks
            premium and performs.
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
