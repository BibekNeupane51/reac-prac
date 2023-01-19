import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "../../components/fixed-components/sidebar/sidebar";
import Navbar from "../../components/fixed-components/navbar/navbar";
const EditUser = () => {
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleEdit = (e) => {
    e.preventDefault();
    const user = JSON.parse(localStorage.getItem("user")) || [];
    // localStorage.setItem(
    //   "user",
    //   JSON.stringify([...user, { fname, lname, email, password }])
    const _userList = user.map((user, userInIndex) => {
      if (userInIndex == localStorage.getItem("editIndex")) {
        return { fname, lname, email, password };
      } else {
        return user;
      }
    });
    localStorage.setItem("user", JSON.stringify(_userList));
    navigate("/reac-prac/dashboard");
  };
  useEffect(() => {
    setFname(localStorage.getItem("fname"));
    setLname(localStorage.getItem("lname"));
    setEmail(localStorage.getItem("email"));
  }, []);
  return (
    <div className="d-board">
      <Sidebar></Sidebar>
      <div className="nav-n-content">
        <Navbar></Navbar>
        <div className="content-body">
          <div className="page-title get-user-pt">
            <h1 className="dash-title">User List</h1>
          </div>
          <form className="usergrp-form">
            <div className="uinp-section">
              <label htmlFor="" className="add-user-label">
                First Name
              </label>
              <input
                value={fname}
                type="text"
                onChange={(e) => {
                  setFname(e.target.value);
                }}
              />
            </div>
            <div className="uinp-section">
              <label htmlFor="">Last Name</label>
              <input
                value={lname}
                type="text"
                onChange={(e) => {
                  setLname(e.target.value);
                }}
              />
            </div>
            <div className="uinp-section">
              <label htmlFor="">Email</label>
              <input
                value={email}
                type="email"
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
            </div>
            <div className="uinp-section">
              <label htmlFor="">Password</label>
              <input
                value={password}
                type="text"
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
            </div>
            <button onClick={handleEdit} className="u-button user-f-submit">
              Update
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditUser;
