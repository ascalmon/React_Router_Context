import React from "react";
import { ContextData } from "../App";

export default function About() {
  const data = React.useContext(ContextData);
  return (
    <h2>
      About
      <u>{data.name}</u>
      <button onClick={data.onClick}>Click</button>
    </h2>
  );
}
