import React from "react";
import "./Menu.css";
import Menuitem from "./Menuitem";
import CloseIcon from "@mui/icons-material/Close";
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

const Menu = ({ menuOpen, setMenuOpen }) => {
  return (
    <div className="menu"  data-aos='fade-left'>
      <CloseIcon onClick={() => setMenuOpen(!menuOpen)}/>
      <Menuitem title="existing inventory" />
      <Menuitem title="used inventory" />
      <Menuitem title="trade-in" />
      <Menuitem title="test drive" />
      <Menuitem title="company cars" />
      <Menuitem title="roadster" />
      <Menuitem title="commercial energy" />
      <Menuitem title="utilities" />
      <Menuitem title="energy" />
      <Menuitem title="charging" />
      <Menuitem title="find us" />
      <Menuitem title="events" />
      <Menuitem title="support" />
      <Menuitem title="investor relations" />
    </div>
  );
};

export default Menu;
