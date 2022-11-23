import React, { useState } from "react";
import "./ChangeForm.css";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import VisibilityOffOutlinedIcon from "@mui/icons-material/VisibilityOffOutlined";
import { useForm } from "react-hook-form";
import CloseIcon from "@mui/icons-material/Close";
import AOS from "aos";
import "aos/dist/aos.css";
import { auth } from "../firebase";
import { useDispatch, useSelector } from "react-redux";
import { login, selectUser } from "../features/userSlice";
import UserFormComplete from "./UserFormComplete";
AOS.init();

const PasswordForm = ({ setPasswordFormShow }) => {
  const [passwordShow, setPasswordShow] = useState(false);
  const [passwordChanged, setPasswordChanged] = useState(false);
  const loginDetails = useSelector(selectUser);
  const { register, handleSubmit } = useForm();
  const dispatch = useDispatch();

  async function changePassword(data) {
    try {
      const user = auth.currentUser;

      await auth.signInWithEmailAndPassword(
        loginDetails.email,
        loginDetails.password
      );

      await user.updatePassword(data.newPassword);

      dispatch(login({ ...loginDetails, password: data.newPassword }));

      setPasswordChanged(true);
    } catch (e) {
      alert(e.message);
    }
  }

  return !passwordChanged ? (
    <div className="user__change" data-aos="fade-in">
      <CloseIcon
        className="user__change--close"
        onClick={() => setPasswordFormShow(false)}
      />
      <h1>Edit Password</h1>
      <form
        className="user__change--form"
        onSubmit={handleSubmit(changePassword)}
      >
        <div className="user__change--inputs password__inputs">
          <div className="user__change--input">
            <p>Password</p>
            <div className="user__change--inputWrapper">
              <input
                type={passwordShow ? "text" : "password"}
                autoComplete="off"
                {...register("newPassword", { required: "Required" })}
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
  ) : (
    <div className="user__change">
      <CloseIcon
        className="user__change--close"
        onClick={() => setPasswordFormShow(false)}
      />
      <UserFormComplete name="password" />
    </div>
  );
};

export default PasswordForm;
