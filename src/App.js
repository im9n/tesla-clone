import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Route,
  BrowserRouter as Router,
  Routes,
  Navigate,
} from "react-router-dom";
import "./App.css";
import { login, selectUser } from "./features/userSlice";
import { auth, persistance } from "./firebase";
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
          element={
            user ? (
              <Settings menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
            ) : (
              <Navigate to="/login" />
            )
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
