import { Link, NavLink, Outlet, useOutletContext } from "react-router-dom";
import StarIcon from "../../images/star.png";
import menuIcon from "../../images/menu (2).png";
import { URL } from "../../utils/Constants";
import "./HomePage.css";
import { useState } from "react";

function HomePage() {
  const context = useOutletContext();
  const userId = sessionStorage.getItem("userId");
  const isAdmin = sessionStorage.getItem("isAdmin");

  const [navbar, toggleNavbar] = useState(false);
  const [policyEditing, togglePolicyEditing] = useState(false);

  function handleDeactivate() {
    fetch(URL + "/deactivate-account/" + userId, {
      method: "DELETE",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    });
  }

  return (
    <div className="home-container">
      <div className="home-content-left">
        <span className="home-greeting">
          <img
            src={menuIcon}
            alt="menu"
            id="home-menu-icon"
            onClick={() => toggleNavbar((prev) => !prev)}
          />
          <p className={navbar ? "hide" : ""}>Welcome {context.user} </p>
        </span>
        <div className={navbar ? "hide" : "home-options"}>
          <div className="links-container">
            <NavLink className="navigate options-link" to={"select-policy"}>
              Choose Policy
            </NavLink>
            <br />
            <NavLink className="navigate" to={"view-policies"}>
              View Your Polices
            </NavLink>
            <br />
            <NavLink className="navigate" to={"edit-nominee"}>
              Edit Nominee Details
            </NavLink>

            <br />
            {isAdmin === "agent" && (
              <>
                <div
                  className="navigate"
                  id="modify-policy"
                  onClick={() => togglePolicyEditing((prev) => !prev)}
                >
                  <img src={StarIcon} alt="" className="star-icon" />
                  Modify Policy
                  <i className={policyEditing ? "down" : "right"}></i>
                </div>
                <div
                  className={
                    policyEditing ? "drop-down-navigate" : "close-dropdown"
                  }
                >
                  <NavLink to={"add-policy"} className="navigate">
                    New Policy
                  </NavLink>
                  <NavLink to={"delete-policy"} className="navigate">
                    Delete Policy
                  </NavLink>
                </div>
                <br />
              </>
            )}
            <Link
              className="navigate"
              onClick={() => {
                sessionStorage.clear();
                context.setUser(null);
              }}
              to={"../sign-in"}
            >
              Logout
            </Link>
          </div>
          <div className="link-deacticate-container">
            <Link
              to={"../sign-in"}
              className="deactivate-btn"
              onClick={() => {
                sessionStorage.clear();
                handleDeactivate();
              }}
            >
              deactivate account
            </Link>
          </div>
        </div>
      </div>
      <div className="home-main-content">
        <Outlet context={context} />
      </div>
    </div>
  );
}

export default HomePage;
