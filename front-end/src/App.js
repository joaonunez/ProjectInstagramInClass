import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Home } from "./views/Home";
import injectContext from "./store/Context";
import NavBar from "./components/NavBar";
function App() {
  return (
    <>
      <NavBar/>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </>
  );
}

export default injectContext(App);
