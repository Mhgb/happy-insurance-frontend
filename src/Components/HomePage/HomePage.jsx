function HomePage({ setComponent }) {
  return (
    <div>
      <p className="navigate">Welcome {sessionStorage.getItem("username")}</p>
      <p className="navigate" onClick={() => setComponent("PolicySelection")}>
        Choose Policy
      </p>
      <p className="navigate" onClick={() => setComponent("PolicyView")}>
        View Your Polices
      </p>
      <p className="navigate" onClick={() => setComponent("Nominee")}>
        Edit Nominee Details
      </p>
      <p
        className="navigate"
        onClick={() => {
          sessionStorage.clear();
          setComponent("Login");
        }}
      >
        Logout
      </p>
    </div>
  );
}

export default HomePage;
