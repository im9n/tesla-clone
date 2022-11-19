import React from "react";
import "./SidebarItem.css";

const SidebarItem = ({ text, icon, onClick, selected }) => {
  return (
    <div className={`account__sidebar--item ${!onClick && 'not-allowed'}`}>
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