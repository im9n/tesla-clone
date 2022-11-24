import React, { useState } from "react";
import "./ChangeForm.css";
import { useForm } from "react-hook-form";
import CloseIcon from "@mui/icons-material/Close";
import AOS from "aos";
import "aos/dist/aos.css";
import { auth } from "../firebase";
import { useDispatch, useSelector } from "react-redux";
import { login, selectUser } from "../features/userSlice";
import UserFormComplete from "./UserFormComplete";
import Loading from "./Loading";

const EmailForm = ({ setEmailFormShow }) => {
  const [emailChanged, setEmailChanged] = useState(false);
  const [loading, setLoading] = useState(false);
  const loginDetails = useSelector(selectUser);
  const { register, handleSubmit } = useForm();
  const dispatch = useDispatch();

  async function changeEmail(data){
    try {
        setLoading(true);
  
        const user = auth.currentUser;
  
        await auth.signInWithEmailAndPassword(
          loginDetails.email,
          loginDetails.password
        );
  
        await user.updateEmail(data.newEmail)
  
        dispatch(login({ ...loginDetails, email: data.newEmail }));
  
        setEmailChanged(true);
  
        setLoading(false);
      } catch (e) {
        setLoading(false);
        alert(e.message);
      }
  }

  return (
    <>
    {loading && <Loading />}
      {!emailChanged ? (
        <div className="user__change" data-aos="fade-in">
          <CloseIcon
            className="user__change--close"
            onClick={() => setEmailFormShow(false)}
          />
          <h1>Edit Email</h1>
          <form
            className="user__change--form"
            onSubmit={handleSubmit(changeEmail)}
          >
            <div className="user__change--inputs email__inputs">
              <div className="user__change--input">
                <p>New Email</p>
                <div className="user__change--inputWrapper">
                  <input
                    type='email'
                    autoComplete="off"
                    {...register("newEmail", { required: "Required" })}
                  />
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
            onClick={() => setEmailFormShow(false)}
          />
          <UserFormComplete name="email" />
        </div>
      )}
    </>
  );
};

export default EmailForm;
