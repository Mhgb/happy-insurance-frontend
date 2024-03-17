import { Link } from "react-router-dom";

function LandingPage({ setComponent }) {
  return (
    <div>
      <Link className="App-link" to={"create-account"}>
        Register
      </Link>
    </div>
  );
}

export default LandingPage;
