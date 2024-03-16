import { useState } from "react";
import "./Login.css";

function Login({ setComponent }) {
  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

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

          if (responseData["validCustomer"]) {
            sessionStorage.setItem("userId", responseData["userId"]);
            sessionStorage.setItem("username", responseData["username"]);
            setComponent("HomePage");
          } else {
            alert("Username/ password not valid. Please try again");
          }
        });
    } else {
      setErrorMsg("Username/ password not valid. Please try again");
    }
  }
  return (
    <div className="login-container">
      <span>
        <h1>Login</h1>
      </span>
      <div className="login-form">
        <span id="errorMsg">{errorMsg}</span>
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
      <footer>
        <span>
          <p
            className="navigate"
            onClick={() => {
              setComponent("LandingPage");
            }}
          >
            Home
          </p>
        </span>
        <span>
          <p
            className="navigate"
            onClick={() => {
              setComponent("CustomerRegistration");
            }}
          >
            Register?
          </p>
        </span>
      </footer>
    </div>
  );
}

export default Login;
