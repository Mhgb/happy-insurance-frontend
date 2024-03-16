function LandingPage({ setComponent }) {
  return (
    <div>
      <p className="App-link" onClick={() => setComponent("Blog")}>
        Blog
      </p>
      <br />
      <p className="App-link" onClick={() => setComponent("Contact")}>
        Contact
      </p>
      <br />
      <p className="App-link" onClick={() => setComponent("Feedback")}>
        Feedback
      </p>
      <br />
      <p className="App-link" onClick={() => setComponent("Login")}>
        SignIn
      </p>
      <br />
      <p
        className="App-link"
        onClick={() => setComponent("CustomerRegistration")}
      >
        Register
      </p>
    </div>
  );
}

export default LandingPage;
