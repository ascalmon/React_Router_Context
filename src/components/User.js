import React from "react";
import { ContextData } from "../App";

export default function Users() {
    const data = React.useContext(ContextData);
    console.log('Home Data', data)
    return <h2>Users - {data.name}</h2>;
}
