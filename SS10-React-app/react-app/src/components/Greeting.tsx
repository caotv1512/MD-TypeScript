import React, { useState } from "react";
import { GreetingProps } from "./../types/types";
import { Child } from "./Child";

function Greeting<T extends GreetingProps>(props: T): JSX.Element {
  const [data, setData] = useState("hello");

  return (
    <div className="App">
      <p> Hello, {props.name}</p>

      <Child name = {data}/>
    </div>
  );
}

export default Greeting;
