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

  const [subDD, toogleSubDD] = useState(false);
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
      <div
        className={navbar ? "home-content-left collapse" : "home-content-left"}
      >
        <span className="home-greeting">
          <img
            src={menuIcon}
            alt="menu"
            id="home-menu-icon"
            onClick={() => toggleNavbar((prev) => !prev)}
          />
          <p className="home-greeting-txt">Welcome {context.user} </p>
        </span>
        <div className="home-options">
          <div className="links-container">
            <NavLink className="navigate" to={"select-policy"}>
              Choose Policy
            </NavLink>
            <br />
            <NavLink className="navigate" to={"view-policies"}>
              Purchased policies
            </NavLink>
            <br />
            <NavLink className="navigate" to={"edit-nominee"}>
              Edit Nominee Details
            </NavLink>

            <br />
            {isAdmin === "agent" && (
              <div
                className={
                  policyEditing ? "dd-container dd-collapse" : "dd-container"
                }
              >
                <div
                  className="navigate"
                  id="modify-policy"
                  onClick={() => togglePolicyEditing((prev) => !prev)}
                >
                  <img src={StarIcon} alt="" className="star-icon" />
                  Modify Policy
                  <i className={policyEditing ? "down" : "right"}></i>
                </div>
                <NavLink to={"add-policy"} className="navigate sub-nav-link">
                  New Policy
                </NavLink>
                <NavLink to={"delete-policy"} className="navigate sub-nav-link">
                  Delete Policy
                </NavLink>
                <br />
              </div>
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
      <div
        className={
          navbar ? "home-main-content m-50" : "home-main-content m-250"
        }
      >
        <Outlet context={context} />
      </div>
    </div>
  );
}

export default HomePage;
