import "./Team.css";

const Team = () => {
  const teamMembers = [
    {
      name: "Imad Saab",
      role: "Co-Founder & Financial Expert",
      description:
        "A seasoned entrepreneur with over 21 years in private banking with SGBL, Imad brings expertise in private wealth management, ensuring financial security and trustworthiness in all Big Solution offerings.",
      experience: "21+ years private banking",
      expertise: "Private Wealth Management",
    },
    {
      name: "Saad Breidy",
      role: "Co-Founder & Technical Lead",
      description:
        "An engineer and entrepreneur, Saad brings extensive digital marketing experience from InnovateX Media FZE and co-founding experience from BigPay SAL, a payment gateway in Lebanon. With 8 years in cryptocurrency trading, Saad is instrumental in guiding Big Solution's strategic development.",
      experience: "8+ years crypto trading",
      expertise: "Digital Marketing & Fintech",
    },
    {
      name: "Jad Mouawad",
      role: "Co-Founder & Strategic Advisor",
      description:
        "A civil engineer and accomplished entrepreneur, Jad also co-founded BigPay SAL and brings 9 years of experience in digital marketing from InnovateX Media FZE. His strategic insights strengthen Big Solution's market approach.",
      experience: "9+ years digital marketing",
      expertise: "Strategic Development",
    },
  ];

  return (
    <section id="team" className="section team">
      <div className="container">
        <div className="section-title">
          <h2>Leadership Team</h2>
          <p className="section-subtitle">
            Experienced entrepreneurs and financial experts driving innovation
          </p>
        </div>

        <div className="team-grid">
          {teamMembers.map((member, index) => (
            <div key={index} className="team-card">
              <div className="member-avatar">
                <div className="avatar-placeholder">
                  <span className="avatar-initial">
                    {member.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </span>
                </div>
              </div>
              <div className="member-info">
                <h3>{member.name}</h3>
                <h4>{member.role}</h4>
                <p>{member.description}</p>
                <div className="member-details">
                  <div className="detail-item">
                    <span className="detail-label">Experience:</span>
                    <span className="detail-value">{member.experience}</span>
                  </div>
                  <div className="detail-item">
                    <span className="detail-label">Expertise:</span>
                    <span className="detail-value">{member.expertise}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="team-summary">
          <div className="summary-card">
            <h3>Our Leadership Philosophy</h3>
            <p>
              Big Solution FZ-LLC is led by a team of experienced entrepreneurs
              and financial experts with a strong background in digital
              marketing, private wealth management, and business development.
              Our diverse expertise ensures comprehensive solutions for our
              clients.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
