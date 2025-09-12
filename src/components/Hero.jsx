import { Bitcoin, Coins, DollarSign, CreditCard } from "lucide-react";
import "./Hero.css";

const Hero = () => {
  const scrollToSection = (sectionId) => {
    console.log(`Attempting to scroll to section: ${sectionId}`);
    const element = document.getElementById(sectionId);
    console.log(`Element found:`, element);

    if (element) {
      // Get the element's position
      const elementTop = element.offsetTop;
      const headerHeight = 90; // Updated header height
      const scrollToPosition = elementTop - headerHeight;

      console.log(`Scrolling to position: ${scrollToPosition}`);

      // Use window.scrollTo for more reliable scrolling
      window.scrollTo({
        top: scrollToPosition,
        behavior: "smooth",
      });
    } else {
      console.error(`Element with id "${sectionId}" not found`);
    }
  };

  return (
    <section className="hero">
      <div className="hero-background">
        <div className="hero-pattern"></div>
      </div>
      <div className="container">
        <div className="hero-content">
          <div className="hero-text animate-fade-in-left">
            <h1>
              Revolutionizing Digital Commerce with
              <span className="gradient-text"> Crypto Payment Solutions</span>
            </h1>
            <p className="hero-description">
              Big Solution FZ-LLC is pioneering the future of digital
              transactions in the MENA region. We provide seamless, secure
              cryptocurrency payment solutions that empower businesses to
              embrace the digital economy.
            </p>
            <div className="hero-buttons">
              <button
                className="btn btn-primary"
                onClick={() => scrollToSection("contact")}
              >
                Get In Touch
              </button>
            </div>
            <div className="hero-stats">
              <div className="stat">
                <div className="stat-number">2023</div>
                <div className="stat-label">Established</div>
              </div>
              <div className="stat">
                <div className="stat-number">UAE</div>
                <div className="stat-label">Headquarters</div>
              </div>
              <div className="stat">
                <div className="stat-number">MENA</div>
                <div className="stat-label">Region Focus</div>
              </div>
            </div>
          </div>
          <div className="hero-visual animate-fade-in-right">
            <div className="crypto-visual">
              <div className="crypto-card">
                <div className="crypto-icon">
                  <img
                    src="/usdc.webp"
                    alt="Stablecoins"
                    className="crypto-image"
                  />
                </div>
                <div className="crypto-text">Stablecoins</div>
              </div>
              <div className="crypto-card">
                <div className="crypto-icon">
                  <img
                    src="/apiintegration.png"
                    alt="API Integration"
                    className="crypto-image"
                  />
                </div>
                <div className="crypto-text">API Integration</div>
              </div>
            </div>
            <div className="floating-elements">
              <div className="floating-element element-1"></div>
              <div className="floating-element element-2"></div>
              <div className="floating-element element-3"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
