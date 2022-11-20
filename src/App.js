import React, { useState } from "react";
import { useSelector } from "react-redux";
import {
  Route,
  BrowserRouter as Router,
  Routes,
  Navigate,
} from "react-router-dom";
import "./App.css";
import { selectUser } from "./features/userSlice";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Settings from "./pages/Settings";
import TeslaAccount from "./pages/TeslaAccount";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const user = useSelector(selectUser);

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          exact
          element={<Home menuOpen={menuOpen} setMenuOpen={setMenuOpen} />}
        />
        <Route
          path="/login"
          element={user ? <Navigate to="/teslaaccount" /> : <Login />}
        />
        <Route path="/register" element={<Register />} />
        <Route
          path="/teslaaccount"
          element={
            user ? (
              <TeslaAccount menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
            ) : (
              <Navigate to="/login" />
            )
          }
        />
        <Route
          path="/teslaaccount/settings"
          element={<Settings menuOpen={menuOpen} setMenuOpen={setMenuOpen} />}
        />
      </Routes>
    </Router>
  );
}

export default App;
