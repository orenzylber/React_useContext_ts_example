import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { MyContext } from "./MyContext";
import Colors from "./Colors";
import ChosenColor from "./ChosenColor";

const App = () => {
  const [color, setcolor] = useState("red");
  const someMethod = (clr: string) => {
    setcolor(clr);
  };
  return (
    <div className="App">
      <div style={{ backgroundColor: color }}>
        <h1>{color}</h1>
      </div>
      <MyContext.Provider value={{ someValue: color, someMethod }}>
        <Colors></Colors>
        <br />
        <ChosenColor></ChosenColor>
      </MyContext.Provider>
    </div>
  );
};

export default App;