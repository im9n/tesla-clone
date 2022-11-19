import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import LanguageIcon from "@mui/icons-material/Language";
import { useForm } from "react-hook-form";
import "./Login.css";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import VisibilityOffOutlinedIcon from "@mui/icons-material/VisibilityOffOutlined";
import ButtonPrimary from "../components/ButtonPrimary";
import ButtonSecondary from "../components/ButtonSecondary";
import auth from "../firebase";
import { useDispatch } from "react-redux";
import { login } from "../features/userSlice";
import MinimalNav from "../components/minimalNav";

const Login = () => {
  const { register, handleSubmit } = useForm();
  const [passwordShow, setPasswordShow] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function onSubmit(data) {
    auth
      .signInWithEmailAndPassword(data.email, data.password)
      .then((userAuth) => {
        dispatch(
          login({
            email: userAuth.user.email,
            displayName: userAuth.user.displayName,
            uid: userAuth.user.id,
          })
        );

        navigate("/teslaaccount");
      })
      .catch((error) => alert(error.message));
  }

  return (
    <div className="login">
      <MinimalNav />
      <div className="login__info">
        <h1>Sign In</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="login__info--email">
            <p className="login__info--label">Email Address</p>
            <div className="login__info--wrapper">
              <input
                type="email"
                className="login__info--input"
                {...register("email", { required: "Required" })}
              />
            </div>
          </div>
          <div className="login__info--password">
            <p className="login__info--label">Password</p>
            <div className="login__info--wrapper">
              <input
                type={passwordShow ? "text" : "password"}
                className="login__info--input"
                {...register("password", { required: "Required" })}
                autoComplete="off"
              />
              {passwordShow ? (
                <VisibilityOffOutlinedIcon
                  onClick={() => setPasswordShow(!passwordShow)}
                />
              ) : (
                <VisibilityOutlinedIcon
                  onClick={() => setPasswordShow(!passwordShow)}
                />
              )}
            </div>
          </div>
          <ButtonPrimary text={"sign in"} />
        </form>
        <span className="login__divider">Or</span>
        <Link to="/register">
          <ButtonSecondary text={"create account"} />
        </Link>
      </div>
    </div>
  );
};

export default Login;
