import React from "react"
import {BrowserRouter as Router, Route, Routes } from "react-router-dom"
import { Home } from "./views/Home";
function App() {
  return (
    <>
      <Router>
        <Route path="/" element={<Home/>}/>
      </Router>
    </>
  );

}

export default App;
