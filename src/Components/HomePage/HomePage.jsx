import { Link, Outlet } from "react-router-dom";
import "./HomePage.css";

function HomePage({ setComponent }) {
  return (
    <div className="home-container">
      <div className="home-options">
        <p>Welcome {sessionStorage.getItem("username")} </p>
        <Link className="navigate" to={"select-policy"}>
          Choose Policy
        </Link>
        <br />
        <Link className="navigate" to={"view-policies"}>
          View Your Polices
        </Link>
        <br />
        <Link className="navigate" to={"edit-nominee"}>
          Edit Nominee Details
        </Link>
        <br />
        <Link
          className="navigate"
          onClick={() => {
            sessionStorage.clear();
          }}
          to={"../sign-in"}
        >
          Logout
        </Link>
      </div>
      <div className="home-main-content">
        <Outlet />
      </div>
    </div>
  );
}

export default HomePage;
