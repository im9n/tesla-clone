import React from "react";
import { Link } from "react-router-dom";
import Menu from "./Menu";
import "./Nav.css";

const Nav = ({ menuOpen, setMenuOpen }) => {
  return (
    <nav>
      <div className="nav__logo">
        <Link to="/">
          <img
            className="nav__logo--img"
            src="https://assets.website-files.com/5e8fceb1c9af5c3915ec97a0/5ec2f037975ed372da9f6286_Tesla-Logo-PNG-HD.png"
            alt=""
          />
        </Link>
      </div>
      <div className="nav__links">
        <Link to="/">Model S</Link>
        <Link to="/">Model 3</Link>
        <Link to="/">Model X</Link>
        <Link to="/">Model Y</Link>
        <Link to="/">CyberTruck</Link>
        <Link to="/">Powerwall</Link>
      </div>
      <div className="nav__right">
        <Link to="/">Shop</Link>
        <Link to="/">Account</Link>
        <a onClick={() => setMenuOpen(!menuOpen)}>Menu</a>
      </div>
      {menuOpen && (<Menu />)}
    </nav>
  );
};

export default Nav;
