import React, { useState } from "react";

const AddUser = () => {
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = () => {
    const user = JSON.parse(localStorage.getItem("user")) || [];
    localStorage.setItem(
      "user",
      JSON.stringify([...user, { fname, lname, email, password }])
    );
  };
  return (
    <div>
      AddUser
      <form>
        <div>
          <label htmlFor="">First Name</label>
          <input
            type="text"
            onChange={(e) => {
              setFname(e.target.value);
            }}
          />
        </div>
        <div>
          <label htmlFor="">Last Name</label>
          <input
            type="text"
            onChange={(e) => {
              setLname(e.target.value);
            }}
          />
        </div>
        <div>
          <label htmlFor="">Email</label>
          <input
            type="text"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </div>
        <div>
          <label htmlFor="">Password</label>
          <input
            type="text"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </div>
        <button onClick={handleSubmit}>Submit</button>
      </form>
    </div>
  );
};

export default AddUser;
