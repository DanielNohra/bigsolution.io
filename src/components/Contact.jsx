import { MapPin, Globe, Mail, Phone } from "lucide-react";
import "./Contact.css";

const Contact = () => {
  const contactInfo = [
    {
      icon: MapPin,
      title: "Location",
      details: "VUNEO198 Ras Al Khaimah Industrial Zone, UAE",
      link: "https://maps.google.com/?q=VUNEO198+Ras+Al+Khaimah+Industrial+Zone+UAE",
      type: "maps",
    },
    {
      icon: Globe,
      title: "Website",
      details: "www.bigsolution.io",
      link: "https://www.bigsolution.io",
      type: "website",
    },
    {
      icon: Mail,
      title: "Email",
      details: "info@bigsolution.io",
      link: "mailto:info@bigsolution.io",
      type: "email",
    },
    {
      icon: Phone,
      title: "Phone",
      details: "+961 3 25 23 23",
      link: "tel:+9613252323",
      type: "phone",
    },
  ];

  return (
    <section id="contact" className="section contact">
      <div className="container">
        <div className="section-title">
          <h2>Contact Us</h2>
          <p className="section-subtitle">
            Have questions or need more information? We'd love to hear from you.
          </p>
        </div>

        <div className="contact-content">
          <div className="contact-info">
            <h3>Get In Touch</h3>
            <p>
              Ready to revolutionize your payment system? Contact our team to
              learn more about our crypto payment solutions and how they can
              benefit your business.
            </p>

            <div className="contact-details">
              {contactInfo.map((info, index) => (
                <a
                  key={index}
                  href={info.link}
                  target={
                    info.type === "website" || info.type === "maps"
                      ? "_blank"
                      : "_self"
                  }
                  rel={
                    info.type === "website" || info.type === "maps"
                      ? "noopener noreferrer"
                      : ""
                  }
                  className={`contact-item contact-${info.type}`}
                >
                  <div className="contact-icon">
                    <info.icon size={24} />
                  </div>
                  <div className="contact-text">
                    <h4>{info.title}</h4>
                    <p>{info.details}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
