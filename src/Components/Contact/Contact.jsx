import "./Contact.css";

function Contact() {
  return (
    <div>
      <div className="contact-us">
        <div id="contact-card-container">
          <div id="motor-insurance" className="contact-card">
            <h2>Motor Insurance</h2>
            <span className="mobile-no">
              <h3>CALL US</h3>
              <h1>967 767 4091</h1>
              <p>
                (Mon to Sun 24/7 Available excluding national and gazetted
                holidays)
              </p>
            </span>
            <span className="email">
              <h3>E-MAIL</h3>
              <h2>support@happyinsurance.com</h2>
            </span>
          </div>
          <div id="health-insurance" className="contact-card">
            <h2>Health Insurance</h2>
            <span className="mobile-no">
              <h3>CALL US</h3>
              <h1>967 767 4091</h1>
              <p>
                (Mon to Sun 24/7 Available excluding national and gazetted
                holidays)
              </p>
            </span>
            <span className="email">
              <h3>E-MAIL</h3>
              <h2>support@happyinsurance.com</h2>
            </span>
          </div>
        </div>
        <div className="office-addr">
          <h2>Our Office</h2>
          <h3>Trichy Office</h3>
          <p>
            Happy Insurance Private Limited,
            <br /> Plot no.301, Phase 2,
            <br /> Udyog Vihar, Trichy-670009,
            <br />
            Tamil Nadu,
            <br />
            India.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Contact;
