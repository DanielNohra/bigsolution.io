import "./Footer.css";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-brand">
            <div className="footer-logo">
              <img
                src="/logo.png"
                alt="Big Solution Logo"
                className="footer-logo-image"
              />
            </div>
            <p className="footer-description">
              Revolutionizing digital commerce with cutting-edge crypto payment
              solutions. Empowering businesses across the MENA region to embrace
              the future of finance.
            </p>
          </div>

          <div className="footer-links">
            <div className="footer-column">
              <h4>Company</h4>
              <ul>
                <li>
                  <a href="#about">About Us</a>
                </li>
                <li>
                  <a href="#services">Services</a>
                </li>
                <li>
                  <a href="#team">Leadership</a>
                </li>
                <li>
                  <a href="#partnerships">Partnerships</a>
                </li>
              </ul>
            </div>

            <div className="footer-column">
              <h4>Services</h4>
              <ul>
                <li>
                  <a href="#services">Crypto Payments</a>
                </li>
                <li>
                  <a href="#services">API Integration</a>
                </li>
                <li>
                  <a href="#services">Dashboard</a>
                </li>
                <li>
                  <a href="#contact">Support</a>
                </li>
              </ul>
            </div>

            <div className="footer-column">
              <h4>Contact</h4>
              <ul>
                <li>
                  <a
                    href="https://maps.google.com/?q=VUNEO198+Ras+Al+Khaimah+Industrial+Zone+UAE"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="footer-contact-link"
                  >
                    VUNEO198 Ras Al Khaimah Industrial Zone, UAE
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:info@bigsolution.io"
                    className="footer-contact-link"
                  >
                    info@bigsolution.io
                  </a>
                </li>
                <li>
                  <a href="tel:+9613252323" className="footer-contact-link">
                    +961 3 25 23 23
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.bigsolution.io"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="footer-contact-link"
                  >
                    www.bigsolution.io
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-copyright">
            <p>
              &copy; {new Date().getFullYear()} Big Solution FZ-LLC. All rights
              reserved.
            </p>
          </div>
          <div className="footer-legal">
            <a href="#privacy">Privacy Policy</a>
            <a href="#terms">Terms of Service</a>
            <a href="#cookies">Cookie Policy</a>
          </div>
          <button
            className="scroll-to-top"
            onClick={scrollToTop}
            aria-label="Scroll to top"
          >
            ↑
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
