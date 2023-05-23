import React, { useContext } from 'react'
import { MyContext } from "./MyContext";

const ChosenColor = () => {
    const { someValue, someMethod } = useContext(MyContext);
  return (
    <div>
        Chosen Color
        <h1>The chosen color is {someValue}</h1>
    </div>
  )
}

export default ChosenColor