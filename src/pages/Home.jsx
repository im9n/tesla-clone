import React from "react";
import Nav from "../components/Nav";

const Home = ({ menuOpen, setMenuOpen }) => {
  return (
    <>
      <Nav menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
    </>
  );
};

export default Home;
