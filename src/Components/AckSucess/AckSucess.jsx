import "./AckSucess.css";

function AckSucess({ setComponent }) {
  return (
    <div className="register-success">
      <p>Customer Registration Successfull</p>
      <p>Customer ID: </p>
      <p>Customer Name: </p>
      <p>Customer Email: </p>
      <footer>
        <p onClick={() => setComponent("LandingPage")}>Home</p>
      </footer>
    </div>
  );
}

export default AckSucess;
