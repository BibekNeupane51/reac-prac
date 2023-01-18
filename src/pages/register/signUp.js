import React, { useState } from "react";
import Login from "../login/login";
import { useNavigate } from "react-router-dom";
const SignUp = () => {
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [flag, setFlag] = useState(false);
  const [login, setLogin] = useState(true);
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!fname || !lname || !email || !password) {
      setFlag(true);
    } else {
      setFlag(false);
      const user = JSON.parse(localStorage.getItem("user")) || [];
      localStorage.setItem(
        "user",
        JSON.stringify([...user, { fname, lname, email, password }])
      );
      console.log("Saved  in local storage");
      navigate("/reac-prac/login");
    }
  };
  return (
    <div className="login-main">
      <div class="login-body">
        <div class="login-container1">
          <div class="login-title">
            <h1>ABC Corporation</h1>
            <p class="title-sub">Please Register</p>
          </div>
          <form id="form" class="login-form" onSubmit={handleSubmit}>
            <div class="form-control">
              <label for="email">First Name</label>
              <input
                type="text"
                placeholder="Enter your first name"
                onChange={(e) => setFname(e.target.value)}
              />
            </div>
            <div class="form-control">
              <label for="email">Last Name</label>
              <input
                type="text"
                placeholder="Enter your last name"
                onChange={(e) => setLname(e.target.value)}
              />
            </div>
            <div class="form-control">
              <label for="email">Email</label>
              <input
                type="email"
                placeholder="Enter your email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div class="form-control">
              <label for="password">Password</label>
              <input
                type="password"
                placeholder="Enter your password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <button class="button-login" type="submit">
              Sign Up
            </button>
            {flag && <h1>Please Fill Every Thing</h1>}
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
