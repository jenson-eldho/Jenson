import { FaYoutube, FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">
          <div className="footer-brand">
            <a href="#top" className="logo">
              <span className="logo-mark">JE</span>
              Jenson Eldho
            </a>
            <p>
              Professional video editor crafting cinematic stories for brands,
              artists, and creators worldwide.
            </p>
          </div>
          <div className="footer-cols">
            <div className="footer-col">
              <h5>Services</h5>
              <a href="#services">Video Editing</a>
              <a href="#services">Motion Graphics</a>
              <a href="#services">Color Grading</a>
              <a href="#services">Short-form</a>
            </div>
            <div className="footer-col">
              <h5>Explore</h5>
              <a href="#work">Work</a>
              <a href="#pricing">Pricing</a>
              <a href="#showreel">Showreel</a>
            </div>
            <div className="footer-col">
              <h5>Contact</h5>
              <a href="mailto:hello@jensoneldho.example">hello@jensoneldho.example</a>
              <a href="#contact">Start a project</a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} Jenson Eldho. All rights reserved.</span>
          <div className="socials">
            <a href="#" aria-label="YouTube"><FaYoutube /></a>
            <a href="#" aria-label="Instagram"><FaInstagram /></a>
            <a href="#" aria-label="LinkedIn"><FaLinkedin /></a>
            <a href="#" aria-label="GitHub"><FaGithub /></a>
          </div>
        </div>
      </div>
    </footer>
  )
}
