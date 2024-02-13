import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { Home, About, Users } from "./components";

const data = {
  name: " Text context react router v6",
  onClick: (msg) => {
    console.log("this event onclick from context", msg);
  }
};

export const ContextData = React.createContext();

export default function App() {
  return (
    <BrowserRouter>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
          </ul>
        </nav>

        <Routes>


          <Route path="/about" element={<ContextData.Provider value={data}><About /></ContextData.Provider>} />
          <Route path="/users" element={<ContextData.Provider value={data}><Users /></ContextData.Provider>} />
          <Route path="/" element={<ContextData.Provider value={data}><Home /></ContextData.Provider>} />


        </Routes>
      </div>
    </BrowserRouter>
  );
}



