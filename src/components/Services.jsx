import { CreditCard, Plug, BarChart3, Shield } from "lucide-react";
import "./Services.css";

const Services = () => {
  const services = [
    {
      icon: CreditCard,
      title: "Crypto Payment Solutions",
      description:
        "Enabling businesses to accept cryptocurrency payments securely with our advanced payment processing technology.",
      features: ["Real-time processing", "Fraud protection", "PCI compliance"],
    },
    {
      icon: Plug,
      title: "API Integration",
      description:
        "A seamless and secure API that easily integrates crypto payments into existing systems and platforms.",
      features: [
        "RESTful API",
        "SDK support",
        "Webhook notifications",
        "Documentation",
      ],
    },
    {
      icon: BarChart3,
      title: "Interactive Dashboard",
      description:
        "A user-friendly dashboard providing real-time transaction data for accessible crypto management.",
      features: [
        "Real-time analytics",
        "Transaction history",
        "Reporting tools",
        "Custom alerts",
      ],
    },
    {
      icon: Shield,
      title: "AML Check",
      description:
        "Comprehensive Anti-Money Laundering compliance solutions to ensure regulatory adherence and risk mitigation.",
      features: [
        "Regular Internal Check",
        "Transaction Monitoring",
        "Suspicious Activity Reporting",
        "Risk Assessment",
      ],
    },
  ];

  return (
    <section id="services" className="section services">
      <div className="container">
        <div className="section-title">
          <h2>Our Services</h2>
          <p className="section-subtitle">
            Comprehensive crypto payment solutions tailored for your business
            needs with cutting-edge technology
          </p>
        </div>

        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <div className="service-icon">
                <service.icon size={32} />
              </div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <ul className="service-features">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex}>
                    <span className="feature-icon">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
