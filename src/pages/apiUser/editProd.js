import React, { useState, useEffect } from "react";
import Sidebar from "../../components/fixed-components/sidebar/sidebar";
import Navbar from "../../components/fixed-components/navbar/navbar";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
const EditProd = () => {
  const [prodName, setProdName] = useState("");
  const [prodCat, setProdCat] = useState("");
  const [prodID, setProdID] = useState(null);
  const baseurl = "https://dummyjson.com/products/";
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    axios.put(`${baseurl}/${prodID}`, {
      title: prodName,
      category: prodCat,
    });
    console.log("updated");
    navigate("/reac-prac/dashboard/products");
    toast.success(`Updated User`);
  };
  useEffect(() => {
    setProdName(localStorage.getItem("title"));
    setProdCat(localStorage.getItem("category"));
    setProdID(localStorage.getItem("prodID"));
  }, []);
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
                value={prodName}
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
                value={prodCat}
                type="text"
                onChange={(e) => {
                  setProdCat(e.target.value);
                }}
              />
            </div>

            <button onClick={handleSubmit} className="u-button user-f-submit">
              Update
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditProd;
