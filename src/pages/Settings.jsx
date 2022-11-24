import React, { useEffect, useState } from "react";
import Menu from "../components/Menu";
import Nav from "../components/Nav";
import SidebarItem from "../components/SidebarItem";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import CreditCardOutlinedIcon from "@mui/icons-material/CreditCardOutlined";
import BoltOutlinedIcon from "@mui/icons-material/BoltOutlined";
import { IoShirtOutline } from "react-icons/io5";
import { BsBoxArrowRight } from "react-icons/bs";
import { Link, Navigate, useNavigate } from "react-router-dom";
import "./Settings.css";
import { useDispatch, useSelector } from "react-redux";
import { login, selectUser } from "../features/userSlice";
import AddIcon from "@mui/icons-material/Add";
import PasswordForm from "../components/PasswordForm";
import EmailForm from "../components/EmailForm";
import NameForm from "../components/NameForm";
import { auth } from "../firebase";
import Loading from "../components/Loading";

const Settings = ({ menuOpen, setMenuOpen }) => {
  const user = useSelector(selectUser);
  const [passwordFormShow, setPasswordFormShow] = useState(false);
  const [emailFormShow, setEmailFormShow] = useState(false);
  const [nameFormShow, setNameFormShow] = useState(false);
  const [deleteClicked, setDeleteClicked] = useState(false);
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const loginDetails = useSelector(selectUser);

  useEffect(() => {
    setTimeout(() => setDeleteClicked(false), 8000);
  }, [deleteClicked]);

  async function deleteAccount() {
    try {
      setLoading(true);

      const user = auth.currentUser;

      await auth.signInWithEmailAndPassword(
        loginDetails.email,
        loginDetails.password
      );

      await user.delete();

      dispatch(login(null));

      setLoading(false);

      navigate("/login");

      console.log(loginDetails)
    } catch (e) {
      setLoading(false);
      alert(e.message);
    }
  }

  return (
    <>
      {loading && <Loading />}
      <div className="settings">
        <Nav menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        {menuOpen && (
          <>
            <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
            <div className="blur-bg" data-aos="fade-up"></div>
          </>
        )}
        {passwordFormShow && (
          <>
            <PasswordForm setPasswordFormShow={setPasswordFormShow} />
            <div className="blur-bg" data-aos="fade-in"></div>
          </>
        )}
        {emailFormShow && (
          <>
            <EmailForm setEmailFormShow={setEmailFormShow} />
            <div className="blur-bg" data-aos="fade-in"></div>
          </>
        )}
        {nameFormShow && (
          <>
            <NameForm setNameFormShow={setNameFormShow} />
            <div className="blur-bg" data-aos="fade-in"></div>
          </>
        )}
        <div className="settings__info">
          <div className="settings__sidebar">
            <Link to="/teslaaccount" style={{ textDecoration: "none" }}>
              <SidebarItem
                text="dashboard"
                icon={<HomeOutlinedIcon />}
                cursor
              />
            </Link>
            <SidebarItem
              text="profile settings"
              icon={<PersonOutlineOutlinedIcon />}
              cursor
              selected
            />
            <SidebarItem
              text="payment method"
              icon={<CreditCardOutlinedIcon />}
            />
            <SidebarItem text="charging" icon={<BoltOutlinedIcon />} />
            <SidebarItem text="order history" icon={<IoShirtOutline />} />
            <SidebarItem text="sign out" icon={<BsBoxArrowRight />} cursor />
          </div>
          <div className="settings__content">
            <h1>Profile Settings</h1>
            <div className="settings__content--wrapper">
              <div className="settings__content--item">
                <h4>Full Name</h4>
                <p>{user?.displayName}</p>
                <span onClick={() => setNameFormShow(true)}>Edit</span>
              </div>
              <div className="settings__content--item">
                <h4>Address</h4>
                <div className="settings__content--add not-allowed">
                  <AddIcon />
                  <span>Add New</span>
                </div>
              </div>
              <div className="settings__content--item">
                <h4>Contact phone number</h4>
                <div className="settings__content--add not-allowed">
                  <AddIcon />
                  <span>Add New</span>
                </div>
              </div>
            </div>
            <h2>Security</h2>
            <div className="settings__content--wrapper">
              <div className="settings__content--item">
                <h4>Email</h4>
                <p>{user?.email}</p>
                <span onClick={() => setEmailFormShow(true)}>Edit</span>
              </div>
              <div className="settings__content--item">
                <h4>Password</h4>
                <p className="settings__content--password">
                  * * * * * * * * * * *
                </p>
                <span onClick={() => setPasswordFormShow(true)}>Reset</span>
              </div>
              <div className="settings__content--item">
                <h4>Multi-factor authentification</h4>
                <p>Add an additional layer of security to your account</p>
                <span className="not-allowed">Manage</span>
              </div>
            </div>
            <p
              className="settings__delete"
              onClick={
                !deleteClicked
                  ? () => setDeleteClicked(true)
                  : () => deleteAccount()
              }
            >
              {deleteClicked ? "Are you sure?" : "Delete Account"}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Settings;
