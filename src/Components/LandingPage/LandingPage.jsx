import { Link } from "react-router-dom";
import { insuranceInfo as Info } from "../../utils/Constants";
import Image from "../../images/pexels-emma-bauso-2253879.jpg";
import reputationImage from "../../images/reputation.png";
import satisfactionImage from "../../images/customer-satisfaction.png";
import supportImage from "../../images/customer-service.png";
import "./LandingPage.css";

function LandingPage() {
  return (
    <div className="landing-container">
      <div className="greeting">
        <h2>We care about your health.</h2>
        <p>Protect your loved ones with the best insurance coverage.</p>
      </div>
      <div className="register-container">
        <img src={Image} alt="not available" />
        <div className="register-nav">
          <h2>
            Let's find you <br />
            the <span>Best Insurance.</span>
          </h2>
          <div className="register-btn-container">
            <h1>New User?</h1>
            <br />
            <Link id="register-btn" className="App-link" to={"create-account"}>
              Register <i className="right"></i>
            </Link>
          </div>
        </div>
      </div>
      <div className="insurance-intro">
        <h2>Know more about Insurance</h2>
        <p>
          Insurance is a contract in which the individual or an entity gets the
          financial protection, in other words, reimbursement from the insurance
          company for the damage (big or small) caused to their property. The
          insurer and the insured enter a legal contract for the insurance
          called the insurance policy that provides financial security from the
          future uncertainties.
        </p>
      </div>
      <div>
        {Info &&
          Info.map((insurance) => {
            return (
              <div
                key={insurance.id}
                id={insurance.classname}
                className="info-container"
              >
                <div className="info">
                  <h2>{insurance.topic}</h2>
                  <p>{insurance.def}</p>
                </div>
              </div>
            );
          })}
      </div>
      <div className="about-us">
        <h2>Why choose us?</h2>
        <p>India's favourite places to buy insurance</p>
        <div className="cards-container">
          <div className="about-card">
            <img src={reputationImage} alt="" />
            <h3>Super-Simple Claims</h3>
            <p>Smartphone enabled self-inspection processes takes minutes!</p>
          </div>
          <div className="about-card">
            <img src={satisfactionImage} alt="" />
            <h3>Loved by Customers</h3>
            <p>We are trusted by 3 Crore+ customers.</p>
          </div>
          <div className="about-card">
            <img src={supportImage} alt="" />
            <h3>Support Customers</h3>
            <p>We are are available 24/7 to help you.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
