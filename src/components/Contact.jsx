import { FaEnvelope, FaPlay } from 'react-icons/fa'
import Reveal from './Reveal'

const mailtoHref =
  'mailto:jensoneldho@gmail.com' +
  '?subject=' + encodeURIComponent('Project Inquiry') +
  '&body=' + encodeURIComponent(
    "Hi Jenson,\n\n" +
    "I found your portfolio and I'm interested in discussing a video editing project.\n\n" +
    "Looking forward to hearing from you.\n\n" +
    "Best regards,"
  )

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
            <a href={mailtoHref} className="btn btn-white">
              <FaEnvelope /> Get In Touch
            </a>
            <a href="#showreel" className="btn btn-outline-white"><FaPlay /> Watch Showreel</a>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
