import { all } from "axios";
import React, { useEffect, useState } from "react";

const GetUser = () => {
  const [userList, setUserList] = useState([]);
  useEffect(() => {
    const users = localStorage.getItem("user");
    setUserList(JSON.parse(users));
  }, []);
  const allUser = userList.map((userView) => {
    return (
      <tr>
        <td>{userView.id}</td>
        <td>{userView.email}</td>
        <td>{userView.password}</td>
        <td>
          <button className="btn-edit">Edit</button>{" "}
          <button className="btn-delete">Delete</button>
        </td>
      </tr>
    );
  });
  return (
    <div>
      <div>
        <table>
          <thead>
            <tr></tr>
            <tr></tr>
          </thead>
          <tbody>{allUser}</tbody>
        </table>
      </div>
    </div>
  );
};

export default GetUser;
