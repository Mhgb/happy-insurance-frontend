import { Link } from "react-router-dom";
import "./LandingPage.css";

function LandingPage({ setComponent }) {
  return (
    <div className="landing-container">
      <h1>New User?</h1>
      <Link className="App-link" to={"create-account"}>
        Register
      </Link>
    </div>
  );
}

export default LandingPage;
