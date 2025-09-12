import { useState, useEffect } from "react";
import "./Header.css";

const Header = ({ isScrolled }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMobileMenuOpen(false);
  };

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isMobileMenuOpen && !event.target.closest(".header")) {
        setIsMobileMenuOpen(false);
      }
    };

    if (isMobileMenuOpen) {
      document.addEventListener("click", handleClickOutside);
      document.body.style.overflow = "hidden"; // Prevent background scroll
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.removeEventListener("click", handleClickOutside);
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

  // Close mobile menu on escape key
  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === "Escape" && isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [isMobileMenuOpen]);

  return (
    <header className={`header ${isScrolled ? "scrolled" : ""}`}>
      <div className="container">
        <div className="header-content">
          <div className="logo">
            <img
              src="/logo.png"
              alt="Big Solution Logo"
              className="logo-image"
            />
          </div>

          <nav className={`nav ${isMobileMenuOpen ? "open" : ""}`}>
            <ul className="nav-links">
              <li>
                <a href="#about" onClick={() => scrollToSection("about")}>
                  About
                </a>
              </li>
              <li>
                <a href="#services" onClick={() => scrollToSection("services")}>
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#partnerships"
                  onClick={() => scrollToSection("partnerships")}
                >
                  Partnerships
                </a>
              </li>
              <li>
                <a href="#contact" onClick={() => scrollToSection("contact")}>
                  Contact
                </a>
              </li>
            </ul>
            <div className="mobile-menu-footer">
              <div className="mobile-contact-info">
                <p>Get in touch with us</p>
                <a href="mailto:info@bigsolution.io" className="mobile-email">
                  info@bigsolution.io
                </a>
              </div>
            </div>
          </nav>

          <button
            className={`mobile-menu-toggle ${isMobileMenuOpen ? "open" : ""}`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle mobile menu"
            aria-expanded={isMobileMenuOpen}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>

      {/* Mobile menu overlay */}
      {isMobileMenuOpen && <div className="mobile-menu-overlay"></div>}
    </header>
  );
};

export default Header;
