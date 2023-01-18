import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";

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
        <td>
          <button className="btn-edit">Edit</button>{" "}
          <button className="btn-delete">Delete</button>
        </td>
      </tr>
    );
  });
  return (
    <div className="content-body">
      <div className="page-title">
        <h1 className="">Products</h1>
      </div>
      <div className="table-main">
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
  );
};

export default GetAllProd;
