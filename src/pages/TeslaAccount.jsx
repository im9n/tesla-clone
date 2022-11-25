import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Menu from "../components/Menu";
import Nav from "../components/Nav";
import SidebarItem from "../components/SidebarItem";
import "./TeslaAccount.css";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import CreditCardOutlinedIcon from "@mui/icons-material/CreditCardOutlined";
import BoltOutlinedIcon from "@mui/icons-material/BoltOutlined";
import { IoShirtOutline } from "react-icons/io5";
import { BsBoxArrowRight } from "react-icons/bs";
import { auth } from "../firebase";
import { useDispatch } from "react-redux";
import { logout } from "../features/userSlice";

const TeslaAccount = ({ menuOpen, setMenuOpen }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  async function signOut() {
    await auth.signOut();

       navigate("/");

    dispatch(logout());
  }

  return (
    <div className="account">
      <Nav menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      {menuOpen && (
        <>
          <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
          <div className="blur-bg" data-aos="fade-in"></div>
        </>
      )}
      <div className="account__info">
        <div className="account__sidebar">
          <SidebarItem
            text="dashboard"
            icon={<HomeOutlinedIcon />}
            selected
            cursor
          />
          <Link to="/teslaaccount/settings" style={{ textDecoration: "none" }}>
            <SidebarItem
              text="profile settings"
              icon={<PersonOutlineOutlinedIcon />}
              cursor
            />
          </Link>
          <SidebarItem
            text="payment method"
            icon={<CreditCardOutlinedIcon />}
          />
          <SidebarItem text="charging" icon={<BoltOutlinedIcon />} />
          <SidebarItem text="order history" icon={<IoShirtOutline />} />
          <SidebarItem
            text="sign out"
            icon={<BsBoxArrowRight />}
            cursor
            onClick={() => signOut()}
          />
        </div>
        <div className="account__content">
          <h1>Dashboard</h1>
          <div className="account__content--wrapper">
            <div className="account__content--item">
              <figure className="account__content--img">
                <img
                  src="https://tesla-cdn.thron.com/delivery/public/image/tesla/19cd4858-858c-4e41-adcb-a7399da113a8/aaovse/std/636x300/dscf6059-4"
                  alt=""
                />
              </figure>
              <div className="account__content--text">
                <p>Reserve a Car</p>
                <span>Browse our models</span>
                <Link to="/">Shop Now</Link>
              </div>
            </div>
            <div className="account__content--item">
              <figure className="account__content--img">
                <img
                  src="https://tesla-cdn.thron.com/delivery/public/image/tesla/73bbc04a-67ec-47f6-9e07-86183688bd46/jzqmrw/std/636x300/third-party-car_636x300"
                  alt=""
                />
              </figure>
              <div className="account__content--text flex-row">
                <p>Purchased a car from a third party?</p>
                <a className="not-allowed" href="#">
                  Add
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeslaAccount;
