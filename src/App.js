import React, { useState } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<Home menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>} />
      </Routes>
    </Router>
  );
}

export default App;
