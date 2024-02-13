import React from "react";
import { ContextData } from "../App";

export default function About() {
  const data = React.useContext(ContextData);

  const handleClick = () => {
    data.name = "About Alterando Name";
    data.onClick('Eu venho do About')
  }

  return (
    <h2>
      About
      <u>{data.name}</u>
      <button onClick={handleClick}>Click</button>
    </h2>
  );
}
