import { FaEnvelope, FaPlay } from 'react-icons/fa'
import Reveal from './Reveal'

export default function Contact() {
  return (
    <section id="contact" className="section contact">
      <div className="container">
        <Reveal className="contact-box">
          <h2>Let’s make something worth watching</h2>
          <p>
            Have footage that deserves a cinematic edit? Tell me about your
            project — I reply within 24 hours.
          </p>
          <div className="hero-cta" style={{ justifyContent: 'center' }}>
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=jensoneldho@gmail.com"
              className="btn btn-white"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaEnvelope /> Get In Touch
            </a>
            <a href="#showreel" className="btn btn-outline-white"><FaPlay /> Watch Showreel</a>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
