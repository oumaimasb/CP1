import React from "react";
import style from "./style.module.css";

const UserList = ({ id, name, username, email, company }) => {
  return (
    <div className={style.list}>
      <h1>ID USER:{id}</h1>
      <p>FirstName: {name}</p>
      <p>LastName: {username}</p>
      <p>Email: {email}</p>
      <p>Company: {company}</p>
    </div>
  );
};
export default UserList;
