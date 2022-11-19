import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import MinimalNav from "../components/minimalNav";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import VisibilityOffOutlinedIcon from "@mui/icons-material/VisibilityOffOutlined";
import ButtonPrimary from "../components/ButtonPrimary";
import ButtonSecondary from "../components/ButtonSecondary";
import { useForm } from "react-hook-form";
import "./Register.css";
import auth from "../firebase";
import { login } from "../features/userSlice";
import { useDispatch } from "react-redux";

const Register = () => {
  const { register, handleSubmit } = useForm();
  const [passwordShow, setPasswordShow] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  async function onSubmit(data) {
    const userAuth = await auth.createUserWithEmailAndPassword(data.email, data.password)
   
    await userAuth.user.updateProfile({
      displayName: data.firstName
    })

    try{
     dispatch(login({
      email: userAuth.user.email,
      uid: userAuth.user.uid,
      displayName: data.firstName,
     }))
     navigate('/teslaaccount')
    }
    catch(e){
      alert(e.message)
    }
  }

  return (
    <div className="register">
      <MinimalNav />
      <div className="register__info">
        <h1>Create Account</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="register__info--firstName">
            <p className="register__info--label">First Name</p>
            <div className="register__info--wrapper">
              <input
                type="text"
                className="register__info--input"
                {...register("firstName", { required: "Required" })}
              />
            </div>
          </div>
          <div className="register__info--lastName">
            <p className="register__info--label">Last Name</p>
            <div className="register__info--wrapper">
              <input
                type="text"
                className="register__info--input"
                {...register("lastName", { required: "Required" })}
              />
            </div>
          </div>
          <div className="register__info--email">
            <p className="register__info--label">Email Address</p>
            <div className="register__info--wrapper">
              <input
                type="email"
                className="register__info--input"
                {...register("email", { required: "Required" })}
              />
            </div>
          </div>
          <div className="register__info--password">
            <p className="register__info--label">Password</p>
            <div className="register__info--wrapper">
              <input
                type={passwordShow ? "text" : "password"}
                className="register__info--input"
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
          <ButtonPrimary text={"create account"} />
        </form>
        <span className="register__divider">Or</span>
        <Link to="/login">
          <ButtonSecondary
            text={"sign in"}
            className="register__buttonSecondary"
          />
        </Link>
      </div>
    </div>
  );
};

export default Register;
