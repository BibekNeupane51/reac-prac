import React, { useState } from "react";
import Sidebar from "../../components/fixed-components/sidebar/sidebar";
import Navbar from "../../components/fixed-components/navbar/navbar";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const PostProd = () => {
  const [prodName, setProdName] = useState("");
  const [prodCat, setProdCat] = useState("");
  const navigate = useNavigate();
  const baseurl = "https://dummyjson.com/products/";
  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post(`${baseurl}/add`, {
      title: prodName,
      category: prodCat,
    });
    console.log("user Added");
    navigate("/reac-prac/dashboard/products");
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
                Product Name
              </label>
              <input
                type="text"
                onChange={(e) => {
                  setProdName(e.target.value);
                }}
              />
            </div>
            <div className="uinp-section">
              <label htmlFor="" className="add-user-label">
                Product Category
              </label>
              <input
                type="text"
                onChange={(e) => {
                  setProdCat(e.target.value);
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

export default PostProd;
