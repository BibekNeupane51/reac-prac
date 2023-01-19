import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import Sidebar from "../../components/fixed-components/sidebar/sidebar";
import Navbar from "../../components/fixed-components/navbar/navbar";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
const GetAllProd = () => {
  const [newData, setNewData] = useState([]);

  const navigate = useNavigate();
  const baseurl = "https://dummyjson.com/products/";
  useEffect(() => {
    axios.get(`${baseurl}`).then((response) => {
      console.log(response.data.products);
      setNewData(response.data.products);
    });
  }, []);
  const viewProd = () => {
    navigate("/reac-prac/dashboard/view-product");
  };
  const addProduct = () => {
    navigate("/reac-prac/dashboard/add-product");
  };

  const editProduct = (id) => {
    console.log(id);
    localStorage.setItem("prodID", id);
    localStorage.setItem("title", newData[id].title);
    localStorage.setItem("category", newData[id].category);
    navigate("/reac-prac/dashboard/edit-product");
  };
  const getUpProd = () => {
    axios.get(`${baseurl}`).then((response) => {
      setNewData(response.data.products);
    });
  };
  const deleteProduct = (id) => {
    axios.delete(`${baseurl}/${id}`).then(() => {
      getUpProd();
      console.log("deleted");
      toast.success(`Deleted User`);
    });
  };
  const allProd = newData.map((data, index) => {
    return (
      <tr>
        <td>{data.id}</td>
        <td>{data.title}</td>
        <td>{data.category}</td>
        <td className="edit-del-td">
          <button
            className="u-button btn-edit"
            onClick={() => editProduct(data.id)}
          >
            Edit
          </button>{" "}
          <button
            className="u-button btn-delete"
            onClick={() => deleteProduct(data.id)}
          >
            Delete
          </button>
          <button className="eye-button" onClick={data.id}>
            <i class="fa-solid fa-eye"></i>
          </button>
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
          <div className="page-title get-user-pt">
            <h1 className="">Products</h1>
            <button className="u-button add-btn" onClick={addProduct}>
              Add
            </button>
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
