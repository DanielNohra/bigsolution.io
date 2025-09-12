import { Building2, Globe, Shield, Zap } from "lucide-react";
import "./About.css";

const About = () => {
  return (
    <section id="about" className="section about">
      <div className="container">
        <div className="section-title">
          <h2>About Big Solution FZ-LLC</h2>
          <p className="section-subtitle">
            Pioneering the future of digital commerce in the MENA region
          </p>
        </div>

        <div className="about-content">
          <div className="about-text">
            <div className="about-card">
              <h3>Company Overview</h3>
              <p>
                Big Solution FZ-LLC is a pioneering provider of crypto payment
                solutions headquartered in the UAE. Established in 2023, the
                company offers seamless, secure digital transaction solutions
                through its advanced API integration and interactive dashboard,
                empowering businesses to adopt and manage cryptocurrency
                payments with ease.
              </p>
            </div>

            <div className="about-card">
              <h3>Our Vision</h3>
              <p>
                To become the most trusted crypto payment solution provider in
                the region, known for its reliability, security, and commitment
                to advancing digital financial solutions.
              </p>
            </div>

            <div className="about-card">
              <h3>Our Mission</h3>
              <p>
                Our mission is to bridge traditional and digital finance by
                providing businesses in the MENA region with reliable and
                efficient cryptocurrency payment options.
              </p>
            </div>
          </div>

          <div className="about-visual">
            <div className="visual-card">
              <div className="visual-icon">
                <Building2 size={32} />
              </div>
              <h4>Established 2023</h4>
              <p>Founded in the UAE with a vision for digital transformation</p>
            </div>
            <div className="visual-card">
              <div className="visual-icon">
                <Globe size={32} />
              </div>
              <h4>MENA Focus</h4>
              <p>Serving businesses across the Middle East and North Africa</p>
            </div>
            <div className="visual-card">
              <div className="visual-icon">
                <Shield size={32} />
              </div>
              <h4>Secure Solutions</h4>
              <p>Advanced security protocols for all transactions</p>
            </div>
            <div className="visual-card">
              <div className="visual-icon">
                <Zap size={32} />
              </div>
              <h4>Fast Integration</h4>
              <p>Seamless API integration for existing systems</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
