import { FaEnvelope, FaPlay } from 'react-icons/fa'
import Reveal from './Reveal'

const mailtoHref =
  "https://mail.google.com/mail/?view=cm&fs=1&to=jensoneldho@gmail.com&su=Project%20Inquiry&body=Hi%20Jenson,%0A%0AI%20found%20your%20portfolio%20and%20I'm%20interested%20in%20discussing%20a%20video%20editing%20project.%0A%0ALooking%20forward%20to%20hearing%20from%20you.%0A%0ABest%20regards,"

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
            <a href={mailtoHref} className="btn btn-white" target="_blank" rel="noopener noreferrer">
              <FaEnvelope /> Get In Touch
            </a>
            <a href="#showreel" className="btn btn-outline-white"><FaPlay /> Watch Showreel</a>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
