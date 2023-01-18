import React, { useState } from "react";
import axios from "axios";
const PostProd = () => {
  const [prodName, setProdName] = useState("");
  const [prodCat, setProdCat] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post("https://dummyjson.com/products/add", {
      name: prodName,
      category: prodCat,
    });
    console.log("clicked");
  };
  return (
    <div>
      <form action="">
        <div>
          <label htmlFor="">Product Name</label>
          <input type="text" onChange={(e) => setProdName(e.target.value)} />
        </div>
        <div>
          <label htmlFor="">Product Category</label>
          <input type="text" onChange={(e) => setProdCat(e.target.value)} />
        </div>
        <button onClick={handleSubmit}>Submit</button>
      </form>
    </div>
  );
};

export default PostProd;
