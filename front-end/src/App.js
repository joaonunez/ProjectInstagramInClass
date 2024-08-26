import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Home } from "./views/Home";
import injectContext from "./store/Context";
import NavBar from "./components/NavBar";
import Events from "./views/Events";
import PostDetail from "./views/PostDetail";
function App() {
  return (
    <>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/post/:id" element={< PostDetail />} />
          <Route path="/events" element={<Events/>} />
        </Routes>
      </Router>
    </>
  );
}

export default injectContext(App);
