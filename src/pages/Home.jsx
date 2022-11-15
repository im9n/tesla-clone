import React from "react";
import Menu from "../components/Menu";
import Nav from "../components/Nav";
import './Home.css'
import AOS from 'aos';
import 'aos/dist/aos.css';
import HeaderBlock from "../components/HeaderBlock";
AOS.init();

const Home = ({ menuOpen, setMenuOpen }) => {
  return (
    <>
      <Nav menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      {menuOpen && (<>
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <div className="blur-bg" data-aos='fade-in'></div>
      </>)}
      <HeaderBlock />
    </>
  );
};

export default Home;
