import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "../../components/fixed-components/sidebar/sidebar";
import Navbar from "../../components/fixed-components/navbar/navbar";
import { toast } from "react-toastify";
const AddUser = () => {
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!fname || !lname || !email || !password) {
      toast.error("Please fill all information");
    } else {
      const user = JSON.parse(localStorage.getItem("user")) || [];
      localStorage.setItem(
        "user",
        JSON.stringify([...user, { fname, lname, email, password }])
      );
      navigate("/reac-prac/dashboard");
    }
  };
  return (
    <div className="d-board">
      <Sidebar></Sidebar>
      <div className="nav-n-content">
        <Navbar></Navbar>
        <div className="content-body">
          <h2>Add User</h2>
          <form className="usergrp-form">
            <div className="uinp-section">
              <label htmlFor="" className="add-user-label">
                First Name
              </label>
              <input
                type="text"
                onChange={(e) => {
                  setFname(e.target.value);
                }}
              />
            </div>
            <div className="uinp-section">
              <label htmlFor="" className="add-user-label">
                Last Name
              </label>
              <input
                type="text"
                onChange={(e) => {
                  setLname(e.target.value);
                }}
              />
            </div>
            <div className="uinp-section">
              <label htmlFor="" className="add-user-label">
                Email
              </label>
              <input
                type="text"
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
            </div>
            <div className="uinp-section">
              <label htmlFor="" className="add-user-label">
                Password
              </label>
              <input
                type="text"
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
            </div>
            <button onClick={handleSubmit} className="u-button user-f-submit">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddUser;
