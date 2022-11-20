import React, { useState } from "react";
import "./ChangeForm.css";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import VisibilityOffOutlinedIcon from "@mui/icons-material/VisibilityOffOutlined";
import { useForm } from "react-hook-form";
import CloseIcon from "@mui/icons-material/Close";
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();


const PasswordForm = ({setPasswordFormShow}) => {

  const [passwordShow, setPasswordShow] = useState(false);
  const { register, handleSubmit } = useForm();

  return (
    <div className="user__change" data-aos='fade-in'>
      <CloseIcon className="user__change--close" onClick={() => setPasswordFormShow(false)}/>
      <h1>Edit Password</h1>
      <form className="user__change--form">
        <div className="user__change--inputs password__inputs">
          <div className="user__change--input">
            <p>Password</p>
            <div className="user__change--inputWrapper">
              <input
                type={passwordShow ? "text" : "password"}
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
        </div>
        <button className="user__change--submit" type="submit">
          Update
        </button>
      </form>
    </div>
  );
};

export default PasswordForm;
