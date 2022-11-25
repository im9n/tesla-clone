import React, { useEffect, useRef, useState } from "react";
import "./HeaderBlock.css";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

const HeaderBlock = ({ model, caption, button1, button2, imageUrl, id }) => {
  const closeHeight = 800 * id;
  const openHeight = 801 * (id - 1);
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className="headerBlock"
      style={{
        backgroundImage: `url(${imageUrl})`,
      }}
    >
      <div
        className={`headerBlock__info`}
        style={{
          visibility:
            (scrollPosition > closeHeight || scrollPosition < openHeight) && 'hidden',
          opacity: 
          (scrollPosition > closeHeight || scrollPosition < openHeight) && 0,
        }}
        data-aos="fade-in"
      >
        <div className="headerBlock__info--text" >
          <h1>{model}</h1>
          <h4>{caption}</h4>
        </div>
        <div className="headerBlock__buttons" style={{display: 'flex', justifyContent: !button2 && 'center'}}>
            <button className="headerBlock__button headerBlock__button1 not-allowed"  style={{margin: !button2 && '0'}}>{button1}</button>
          {button2 && (
              <button className="headerBlock__button headerBlock__button2 not-allowed">{button2}</button>
          )}
        </div>
      </div>
    </div>
  );
};

export default HeaderBlock;
