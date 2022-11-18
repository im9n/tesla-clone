import React from "react";
import "./ButtonPrimary.css";

const ButtonPrimary = ({ text }) => {
  return (
    <button className="buttonPrimary" type="submit">
      {text}
    </button>
  );
};

export default ButtonPrimary;
