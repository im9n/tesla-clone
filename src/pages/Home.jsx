import React, { useEffect, useState } from "react";
import Menu from "../components/Menu";
import Nav from "../components/Nav";
import "./Home.css";
import AOS from "aos";
import "aos/dist/aos.css";
import HeaderBlock from "../components/HeaderBlock";
AOS.init();

const Home = ({ menuOpen, setMenuOpen }) => {
  return (
    <>
      <Nav menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      {menuOpen && (
        <>
          <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
          <div className="blur-bg" data-aos="fade-in"></div>
        </>
      )}
        <HeaderBlock
          model={"Model Y"}
          caption={"ANCAP 5-Star Safety Rating"}
          button1={"Custom Order"}
          button2={"Existing Inventory"}
          imageUrl={
            "https://tesla-cdn.thron.com/delivery/public/image/tesla/8e2df1b9-a4bf-4eb9-beec-2cf5cc77fca0/bvlatuR/std/0x0/8e2df1b9-a4bf-4eb9-beec-2cf5cc77fca0"
          }
          id={1}
        />
        <HeaderBlock
          model={"Model 3"}
          caption={"Order Online for Touchless Delivery"}
          button1={"Custom Order"}
          button2={"Existing Inventory"}
          imageUrl={"https://tesla.com/ns_videos/model-3-social.jpg"}
          id={2}
        />
        <HeaderBlock
          model={"Solar and Powerwall"}
          caption={
            "Rebates are now available in selected states on Powerwall and solar. Learn more"
          }
          button1={"Learn More"}
          imageUrl={
            "https://tesla-cdn.thron.com/delivery/public/image/tesla/45992f1c-a33a-4a04-b1f0-338aff182f8e/bvlatuR/std/2880x1800/_25-Hero-D"
          }
          id={3}
        />
        <HeaderBlock
          model={"Model S"}
          caption={"Order Online for Touchless Delivery"}
          button1={"Custom Order"}
          button2={"Existing Inventory"}
          imageUrl={
            "https://tesla-cdn.thron.com/delivery/public/image/tesla/538ac149-d103-4834-9d38-641d8ae447ef/bvlatuR/std/4096x2560/Homepage-Model-S-Desktop-LHD"
          }
          id={4}
        />
        <HeaderBlock
          model={"Model X"}
          caption={"Order Online for Touchless Delivery"}
          button1={"Custom Order"}
          button2={"Existing Inventory"}
          imageUrl={
            "https://tesla-cdn.thron.com/delivery/public/image/tesla/8e2b1be8-91e2-441c-bf0f-4a1490fd22f0/bvlatuR/std/4096x2560/Homepage-Model-X-Desktop-RHD"
          }
          id={5}
        />
    </>
  );
};

export default Home;
