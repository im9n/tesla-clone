import React from "react";
import './ButtonSecondary.css'

const ButtonSecondary = ({ text }) => {
  return (
    <button className="buttonSecondary" type="submit ">
      {text}
    </button>
  );
};

export default ButtonSecondary;
