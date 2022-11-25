import React from "react";
import "./SidebarItem.css";

const SidebarItem = ({ text, icon, cursor, selected, onClick }) => {
  return (
    <div className={`account__sidebar--item ${!cursor && 'not-allowed'}`} onClick={onClick} >
      <div
        className="account__sidebar--icon"
        style={{
          backgroundColor: selected && "#eee",
          color: selected && "rgb(34, 34, 34)",
        }}
      >
        {icon}
      </div>
      <p
        style={{
          color: selected && "rgb(34, 34, 34)",
        }}
      >
        {text}
      </p>
    </div>
  );
};

export default SidebarItem;
