import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  return (
    <nav className="App-header">
      <div>
        <h1>
          Happy <br />
          <span>Insurance Online</span>
        </h1>
      </div>
      <ul className="navlink-container">
        <li>
          <Link className="App-link" to={""}>
            Home
          </Link>
        </li>
        <li>
          <NavLink activeclassname="active" className="App-link" to={"blog"}>
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
          <NavLink activeclassname="active" className="App-link" to={"sign-in"}>
            SignIn
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
