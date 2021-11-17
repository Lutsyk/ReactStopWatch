import React, { useState }from "react";
import BtnComponent from "./components/BtnComponent";
import DisplayComponent from "./components/DisplayComponent";


function App() {

  const[time, setTime] = useState({ms:0, s:0, m:0, h:0})
  const[interv, setInterv] = useState()
  const[status, setStatus] = useState(0)

  const start = () => {
    run();
    setStatus(1)
    setInterv(setInterval(run,10))
  }

  const stop = () => {
    clearInterval(interv)
    setStatus(2)
  }

  const reset = () => {
    clearInterval(interv)
    setStatus(0)
    setTime({ms:0, s:0, m:0, h:0})
  }

  const resume = () => start()

  let updateMS = time.ms, updateS = time.s, updateM = time.m, updateH = time.h;

  const run = () => {
    if(updateH === 24){
      updateH = 0;
    }
    if(updateM === 60){
      updateH++;
      updateM = 0;
    }
    if(updateS === 60){
      updateM++;
      updateS = 0;
    }
    if(updateMS === 100){
      updateS++;
      updateMS = 0;
    }
    updateMS++
    return setTime({ms:updateMS, s:updateS, m:updateM, h:updateH})
  }

  return (
    <div className="main-section">
      <div className="clock-holder">
        <div className="stopwatch">
          <DisplayComponent time={time}/>
          <BtnComponent status={status} stop={stop} reset={reset} resume={resume} start={start}/>
        </div>
      </div>
    </div>
  );
}

export default App;
