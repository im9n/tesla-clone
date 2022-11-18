import React from "react";
import "./minimalNav.css";
import { Link } from "react-router-dom";
import LanguageIcon from "@mui/icons-material/Language";

const MinimalNav = () => {
  return (
    <div className="minimalNav">
      <div className="minimalNav__logo">
        <Link to="/">
          <img
            className="minimalNav__logo--img"
            src="https://assets.website-files.com/5e8fceb1c9af5c3915ec97a0/5ec2f037975ed372da9f6286_Tesla-Logo-PNG-HD.png"
            alt=""
          />
        </Link>
      </div>
      <div className="minimalNav__language">
        <LanguageIcon />
        <span>en-AU</span>
      </div>
    </div>
  );
};

export default MinimalNav;
