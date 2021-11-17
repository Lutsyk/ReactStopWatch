import React from "react";
import BtnComponent from "./components/BtnComponent";
import DisplayComponent from "./components/DisplayComponent";

function App() {
  return (
    <div className="main-section">
      <div className="clock-holder">
        <div className="stopwatch"></div>
          <DisplayComponent/>
          <BtnComponent/>
      </div>
    </div>
  );
}

export default App;
