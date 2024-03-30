import { useState } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import "./App.css";

function App() {
  const [user, setUser] = useState(null);

  const loginUser = () => {
    setUser(1);
  };

  return (
    <div className="App">
      <Navbar user={user} />
      <div className="content">
        <Outlet context={{ user, setUser, loginUser }} />
      </div>
      <footer>
        <p>@Happy Insurance Online ❤</p>
      </footer>
    </div>
  );
}

export default App;
