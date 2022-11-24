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

const NameForm = ({ setNameFormShow }) => {
  const [nameChanged, setNameChanged] = useState(false);
  const [loading, setLoading] = useState(false);
  const loginDetails = useSelector(selectUser);
  const { register, handleSubmit } = useForm();
  const dispatch = useDispatch();

  async function changeName(data) {
    try {
      setLoading(true);

      const user = auth.currentUser;

      await auth.signInWithEmailAndPassword(
        loginDetails.email,
        loginDetails.password
      );

      await user.updateProfile({
        displayName:
          data.newFirstName + " " + data.newMiddleName + " " + data.newLastName,
      });

      dispatch(
        login({
          ...loginDetails,
          displayName:
            data.newFirstName +
            " " +
            data.newMiddleName +
            " " +
            data.newLastName,
        })
      );

      setNameChanged(true);

      setLoading(false);
    } catch (e) {
      setLoading(false);
      alert(e.message);
    }
  }

  return (
    <>
      {loading && <Loading />}
      {!nameChanged ? (
        <div className="user__change" data-aos="fade-in">
          <CloseIcon
            className="user__change--close"
            onClick={() => setNameFormShow(false)}
          />
          <h1>Edit Name</h1>
          <form
            className="user__change--form"
            onSubmit={handleSubmit(changeName)}
          >
            <div className="user__change--inputs">
              <div className="user__change--input name__input">
                <p>First Name</p>
                <div className="user__change--inputWrapper">
                  <input
                    type="text"
                    autoComplete="off"
                    {...register("newFirstName", { required: true })}
                  />
                </div>
              </div>
              <div className="user__change--input name__input">
                <p>Middle Name</p>
                <div className="user__change--inputWrapper">
                  <input
                    type="text"
                    autoComplete="off"
                    {...register("newMiddleName", { required: false })}
                  />
                </div>
              </div>
              <div className="user__change--input name__input">
                <p>Last Name</p>
                <div className="user__change--inputWrapper">
                  <input
                    type="text"
                    autoComplete="off"
                    {...register("newLastName", { required: true })}
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
            onClick={() => setNameFormShow(false)}
          />
          <UserFormComplete name="name" />
        </div>
      )}
    </>
  );
};

export default NameForm;
