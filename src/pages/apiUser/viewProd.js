import axios from "axios";
import React, { useState, useEffect } from "react";
import Sidebar from "../../components/fixed-components/sidebar/sidebar";
import Navbar from "../../components/fixed-components/navbar/navbar";
const ViewProd = () => {
  const [newData, setNewData] = useState([]);
  const baseurl = "https://dummyjson.com/products/";
  useEffect(() => {
    axios.get(`${baseurl}/1`).then((response) => {
      console.log(response.data);
      setNewData(response.data);
    });
  }, []);

  return (
    <div className="d-board">
      <Sidebar></Sidebar>
      <div className="nav-n-content">
        <Navbar></Navbar>
        <div className="content-body">
          <div className="page-title">
            <h1 className="">Products</h1>
          </div>
          <div className="content-2">
            <div className="prod-card">
              <div className="prod-card-sec1">
                <img
                  src="https://cdn.pixabay.com/photo/2016/11/29/05/08/apple-1867461_960_720.jpg"
                  alt=""
                />
                <div className="prod-card-info">
                  <h4>{newData.title}</h4>
                  <p>
                    <b>Type:</b> {newData.category}
                  </p>
                  <p>
                    <b>Brand:</b> {newData.brand}
                  </p>
                  <p>
                    <b>Rating:</b> {newData.rating}
                  </p>
                </div>
              </div>
              <div className="prod-card-sec2">
                <div className="prod-card-button">
                  <button className="u-button">Buy Now</button>
                  <button className="u-button">Add To Cart</button>
                </div>
                <div className="prod-card-desc">
                  <p>{newData.description}</p>
                  <h4 className="prod-price">$ {newData.price}</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewProd;
