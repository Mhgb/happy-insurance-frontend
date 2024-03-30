import { useState } from "react";
import { Link, useNavigate, useOutletContext } from "react-router-dom";
import { URL } from "../../utils/Constants";
import "./Login.css";

function Login() {
  const context = useOutletContext();
  const navigate = useNavigate();

  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg, toggleErrorMsg] = useState(false);

  function handleLogin() {
    if (userId !== "" && password !== "") {
      fetch(URL + "/login", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          userId: userId,
          password: password,
        }),
      })
        .then((result) => result.json())
        .then((responseData) => {
          console.log(responseData);

          if (responseData["validCustomer"] === "true") {
            sessionStorage.setItem("userId", responseData["userId"]);
            sessionStorage.setItem("isAdmin", responseData["isAdmin"]);

            context.setUser(responseData["username"]);
            navigate("/home");
          } else {
            toggleErrorMsg(true);
          }
        })
        .catch((error) => {
          console.log(error);
          throw Error("Failed to Login. Try again");
        });
    } else {
      toggleErrorMsg(true);
    }
  }
  return (
    <div className="login-container">
      <div className="login-form">
        <span>
          <h1>Log In</h1>
        </span>
        {errorMsg && (
          <span id="errorMsg">
            Username/ password not valid. Please try again.
          </span>
        )}
        <span className="form-elements">
          <label htmlFor="userId">UserId</label>
          <input
            type="text"
            id="userId"
            maxLength={50}
            value={userId}
            onChange={(e) => setUserId(e.target.value)}
          />
          <i id="userIdErrorMsg" className="errMsg"></i>
        </span>
        <span className="form-elements">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            maxLength={50}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <i id="passwordErrorMsg" className="errMsg"></i>
        </span>
        <input
          type="submit"
          value="Log In"
          onClick={handleLogin}
          className="submit-btn"
        />
      </div>
      <div className="navigation-links-container">
        <Link className="navigate" to={"../"}>
          Home
        </Link>
        <Link className="navigate" to={"../create-account"}>
          Register?
        </Link>
      </div>
    </div>
  );
}

export default Login;
