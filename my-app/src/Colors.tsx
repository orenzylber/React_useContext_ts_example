import React, { useContext } from "react";
import { MyContext } from "./MyContext";
const Colors = () => {
  const { someValue, someMethod } = useContext(MyContext);

  return (
    <div>
      Colors
      <h1>{someValue}</h1>
      <button onClick={() => someMethod("green")}> Green </button>
      <button onClick={() => someMethod("red")}> red </button>
      <button onClick={() => someMethod("yellow")}> yellow </button>
    </div>
  );
};

export default Colors;