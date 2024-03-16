import { useState } from "react";
import "./App.css";
import CustomerRegistration from "./Components/CustomerRegistration/CustomerRegistration";
import LandingPage from "./Components/LandingPage/LandingPage";
import Login from "./Components/Login/Login";
import AckSucess from "./Components/AckSucess/AckSucess";
import HomePage from "./Components/HomePage/HomePage";
import PolicySelection from "./Components/PolicySelection/PolicySelection";
import PolicyView from "./Components/PolicyView/PolicyView";
import Nominee from "./Components/Nominee/Nominee";
import Blog from "./Components/Blog/Blog";
import Contact from "./Components/Contact/Contact";
import Feedback from "./Components/Feedback/Feedback";

function App() {
  const [component, setComponent] = useState("LandingPage");

  function loadComponent() {
    console.log(component);

    switch (component) {
      case "LandingPage":
        return <LandingPage setComponent={setComponent} />;
      case "CustomerRegistration":
        return <CustomerRegistration setComponent={setComponent} />;
      case "Login":
        return <Login setComponent={setComponent} />;
      case "HomePage":
        return <HomePage setComponent={setComponent} />;
      case "PolicySelection":
        return <PolicySelection setComponent={setComponent} />;
      case "PolicyView":
        return <PolicyView setComponent={setComponent} />;
      case "AckSucess":
        return <AckSucess setComponent={setComponent} />;
      case "Nominee":
        return <Nominee setComponent={setComponent} />;
      case "Blog":
        return <Blog setComponent={setComponent} />;
      case "Contact":
        return <Contact setComponent={setComponent} />;
      case "Feedback":
        return <Feedback setComponent={setComponent} />;
      default:
        break;
    }
  }
  return (
    <div className="App">
      <header className="App-header">
        <h1>
          Happy <br />
          <span>Insurance Online</span>
        </h1>
      </header>
      <div className="content">{loadComponent()}</div>
      <footer>
        <p>@Happy Insurance Online ❤</p>
      </footer>
    </div>
  );
}

export default App;
