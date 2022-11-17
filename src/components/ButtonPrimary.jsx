import React from "react";

const ButtonPrimary = ({ name, type, onClick }) => {
  return (
    <div className="buttonPrimary" type={type} onClick={onClick}>
      {name}
    </div>
  );
};

export default ButtonPrimary;
