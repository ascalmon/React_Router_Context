import React from "react";
import { ContextData } from "../App";

export default function Home() {
    const data = React.useContext(ContextData);
    console.log('Home Data', data)
    return <h2>Home - {data.name}</h2>;
}


