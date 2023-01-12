import React from "react";
import "./App.css";
import Profile from "./Profile/Profile";
import tof from "./assets/454545632.jpg";

function App() {
  return (
    <div className="App">
      <div>
        <Profile Fullname="bachar ben mamia" Bio="Student" Profession="Web developer">
        <img style={{ width: "10%", height: "10%" }} src={tof} alt="tof" />
        </Profile>
      </div>
    </div>
  );
}

export default App;

