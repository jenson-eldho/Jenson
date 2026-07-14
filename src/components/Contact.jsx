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
            <a href="mailto:hello@jensoneldho.example" className="btn btn-white">Hire Me</a>
            <a href="#showreel" className="btn btn-outline-white">▶ Watch Showreel</a>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
