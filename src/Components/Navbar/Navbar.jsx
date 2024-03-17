import { Link } from "react-router-dom";
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
          <Link className="App-link" to={"blog"}>
            Blog
          </Link>
        </li>
        <li>
          <Link className="App-link" to={"contact-us"}>
            Contact
          </Link>
        </li>
        <li>
          <Link className="App-link" to={"feedback"}>
            Feedback
          </Link>
        </li>
        <li>
          <Link className="App-link" to={"sign-in"}>
            SignIn
          </Link>
        </li>
      </ul>
    </nav>
  );
}
