import React from "react";
import "./UserFormComplete.css";
import DoneIcon from '@mui/icons-material/Done';

const UserFormComplete = ({name}) => {
  return (
    <div className="user__change--complete">
      <DoneIcon />
      <h1>{name} Updated</h1>
    </div>
  );
};

export default UserFormComplete;
