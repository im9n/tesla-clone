import React from "react";
import { Link } from "react-router-dom";
import LanguageIcon from "@mui/icons-material/Language";
import { useForm } from "react-hook-form";
import "./Login.css";
import ButtonPrimary from "../components/ButtonPrimary";

const Login = () => {
  const { register, handleSubmit } = useForm();

  function signIn(){
    
  }

  return (
    <div className="login">
      <div className="login__nav">
        <div className="login__logo">
          <Link to="/">
            <img
              className="login__logo--img"
              src="https://assets.website-files.com/5e8fceb1c9af5c3915ec97a0/5ec2f037975ed372da9f6286_Tesla-Logo-PNG-HD.png"
              alt=""
            />
          </Link>
        </div>
        <div className="login__language">
          <LanguageIcon />
          <span>en-AU</span>
        </div>
        <div className="login__info">
          <form>
            <div className="login__info--email">
                <p className="login__info--label">Email Address</p>
                <input type="email" className="login__info--input" />
            </div>
            <div className="login__info--password">
                <p className="login__info--label">Password</p>
                <input type="password" className="login__info--input" />
            </div>
            <ButtonPrimary name='Sign In' type='submit' onClick={signIn}/>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
