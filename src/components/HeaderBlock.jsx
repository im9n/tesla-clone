import React from "react";
import "./HeaderBlock.css";

const HeaderBlock = () => {
  return (
    <div className="headerBlock">
      <div className="headerBlock__info">
        <div className="headerBlock__info--text">
          <h1>Model Y</h1>
          <h4>ANCAP 5-Star Safety Rating</h4>
        </div>
        <div className="headerBlock__buttons">
            <a href="" className="headerBlock__button headerBlock__button1">
                <button>Custom Order</button>
            </a>
            <a href="" className="headerBlock__button headerBlock__button2">
                <button>Existing Inventory</button>
            </a>
        </div>
      </div>
    </div>
  );
};

export default HeaderBlock;
