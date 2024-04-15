import { NavLink } from "react-router-dom";
import menuIcon from "../../images/menu.png";
import "./Navbar.css";
import { useState } from "react";

export default function Navbar({ user }) {
  const [navbar, updateNavbar] = useState(true);
  const [displayMenuIcon, toggleDisplayMenuIcon] = useState(false);

  const handleScroll = () => {
    updateNavbar(window.scrollY > 80 ? false : true);
  };

  window.addEventListener("scroll", handleScroll);

  return (
    <nav className="App-header">
      <div>
        <h1>
          <span>Happy </span>
          {navbar && <br />}
          Insurance Online
        </h1>
      </div>
      {!user && (
        <div>
          <img
            src={menuIcon}
            alt="menu"
            className="menu-icon"
            onClick={() => toggleDisplayMenuIcon((prev) => !prev)}
          />
          {/* <div className="menu">
            <span></span>
            <span></span>
            <span></span>
          </div> */}
          <ul
            className={
              displayMenuIcon ? "navlink-container" : "close navlink-container"
            }
          >
            <li>
              <NavLink activeclassname="active" className="App-link" to={""}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                activeclassname="active"
                className="App-link"
                to={"blog"}
              >
                Blog
              </NavLink>
            </li>
            <li>
              <NavLink
                activeclassname="active"
                className="App-link"
                to={"contact-us"}
              >
                Contact
              </NavLink>
            </li>
            <li>
              <NavLink
                activeclassname="active"
                className="App-link"
                to={"feedback"}
              >
                Feedback
              </NavLink>
            </li>
            <li>
              <NavLink
                activeclassname="active"
                className="App-link"
                to={"sign-in"}
              >
                SignIn
              </NavLink>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
