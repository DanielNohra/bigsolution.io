import "./Partnerships.css";

const Partnerships = () => {
  const partnerships = [
    {
      name: "Betarabia Lebanon",
      description:
        "An exclusive partnership with Betarabia, Lebanon's premier betting platform powered by Casino du Liban, to provide seamless crypto payment options.",
      type: "Exclusive Partnership",
      status: "Active",
    },
    {
      name: "Money Transfer Companies",
      description:
        "An LOT agreement with leading money transfer companies in Beirut, allowing them to integrate crypto payments into their wallet applications.",
      type: "LOT Agreement",
      status: "Pending",
    },
  ];

  return (
    <section id="partnerships" className="section partnerships">
      <div className="container">
        <div className="section-title">
          <h2>Strategic Partnerships</h2>
          <p className="section-subtitle">
            Building the future of digital payments through strategic alliances
            and innovative collaborations
          </p>
        </div>

        <div className="partnerships-grid">
          {partnerships.map((partnership, index) => (
            <div key={index} className="partnership-card">
              <div className="partnership-header">
                <h3>{partnership.name}</h3>
                <span
                  className={`partnership-status ${partnership.status.toLowerCase()}`}
                >
                  {partnership.status}
                </span>
              </div>
              <p className="partnership-description">
                {partnership.description}
              </p>
              <div className="partnership-type">
                <span className="type-label">Partnership Type:</span>
                <span className="type-value">{partnership.type}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="partnerships-cta">
          <div className="cta-content">
            <h3>Future Goals</h3>
            <p>
              Big Solution FZ-LLC is committed to expanding its services to
              support a broader range of cryptocurrencies, including
              stablecoins, to meet evolving market needs. Our vision is to
              establish ourselves as the leading crypto payment solution
              provider across the MENA region.
            </p>
            <div className="goals-list">
              <div className="goal-item">
                <span className="goal-number">01</span>
                <span className="goal-text">Expand cryptocurrency support</span>
              </div>
              <div className="goal-item">
                <span className="goal-number">02</span>
                <span className="goal-text">MENA region leadership</span>
              </div>
              <div className="goal-item">
                <span className="goal-number">03</span>
                <span className="goal-text">Stablecoin integration</span>
              </div>
              <div className="goal-item">
                <span className="goal-number">04</span>
                <span className="goal-text">
                  To accept more currencies than stablecoins
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partnerships;
