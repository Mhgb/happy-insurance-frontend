import { useState } from "react";
import "./Login.css";
import { Link, useNavigate, Navigate } from "react-router-dom";

function Login({ setComponent }) {
  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg, toggleErrorMsg] = useState(false);

  const navigate = useNavigate();

  function handleLogin() {
    if (userId !== "" && password !== "") {
      fetch("http://localhost:8080/login", {
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
            sessionStorage.setItem("username", responseData["username"]);
            navigate("/happy-insurance/home");
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
          <h1>Login</h1>
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
            type="text"
            id="password"
            maxLength={50}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <i id="passwordErrorMsg" className="errMsg"></i>
        </span>
        <input
          type="submit"
          value="Login"
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
