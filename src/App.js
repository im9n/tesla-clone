import React, { useState } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Login from "./pages/Login";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<Home menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
