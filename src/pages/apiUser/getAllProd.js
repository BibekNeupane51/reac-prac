import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import Sidebar from "../../components/fixed-components/sidebar/sidebar";
import Navbar from "../../components/fixed-components/navbar/navbar";
const GetAllProd = () => {
  const [newData, setNewData] = useState([]);
  useEffect(() => {
    axios.get("https://dummyjson.com/products").then((response) => {
      console.log(response.data.products);
      setNewData(response.data.products);
    });
  }, []);

  const allProd = newData.map((data, index) => {
    return (
      <tr>
        <td>{data.id}</td>
        <td>{data.title}</td>
        <td>{data.category}</td>
        <td className="edit-del-td">
          <button className="u-button btn-edit">Edit</button>{" "}
          <button className="u-button btn-delete">Delete</button>
        </td>
      </tr>
    );
  });
  return (
    <div className="d-board">
      <Sidebar></Sidebar>
      <div className="nav-n-content">
        <Navbar></Navbar>
        <div className="content-body">
          <div className="page-title">
            <h1 className="">Products</h1>
          </div>
          <div class="table-outer">
            <div class="table-wrapper">
              <table>
                <thead>
                  <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Category</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>{allProd}</tbody>
              </table>{" "}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetAllProd;
