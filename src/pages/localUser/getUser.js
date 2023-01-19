import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const GetUser = () => {
  const [userList, setUserList] = useState([]);
  const [uIndex, setUIndex] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    const users = localStorage.getItem("user");
    setUserList(JSON.parse(users));
  }, []);
  const deleteUser = (userOutIndex) => {
    const _userList = userList.filter((user, userInIndex) => {
      if (userInIndex !== userOutIndex) {
        return user;
      }
    });

    setUserList(_userList);
    localStorage.setItem("user", JSON.stringify(_userList));
  };
  const addUser = () => {
    navigate("/reac-prac/dashboard/add-user");
  };
  const editUser = (userViewIndex) => {
    localStorage.setItem("editIndex", userViewIndex);
    localStorage.setItem("fname", userList[userViewIndex].fname);
    localStorage.setItem("lname", userList[userViewIndex].lname);
    localStorage.setItem("email", userList[userViewIndex].email);
    navigate("/reac-prac/dashboard/edit-user");
  };

  const allUser = userList.map((userView, userViewIndex) => {
    return (
      <tr>
        <td>{userViewIndex + 1}</td>
        <td>{userView.email}</td>
        <td>{userView.password}</td>
        <td className="edit-del-td">
          <button
            className="u-button btn-edit"
            onClick={() => editUser(userViewIndex)}
          >
            Edit
          </button>{" "}
          <button
            className="u-button btn-delete"
            onClick={() => deleteUser(userViewIndex)}
          >
            Delete
          </button>
        </td>
      </tr>
    );
  });
  return (
    <div className="content-body">
      <div className="page-title get-user-pt">
        <h1 className="">User List</h1>
        <button className="u-button add-btn" onClick={addUser}>
          Add
        </button>
      </div>
      <div class="table-outer">
        <div class="table-wrapper">
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Email</th>
                <th>Password</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>{allUser}</tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default GetUser;
