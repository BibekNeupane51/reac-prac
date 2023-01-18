import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Dashboard from "../dashboard/dashboard";
import SignUp from "../register/signUp";
const Login = () => {
  const [emaillog, setEmaillog] = useState("");
  const [passwordlog, setPasswordlog] = useState("");

  const [dashboard, setDashboard] = useState(true);
  const [flag, setFlag] = useState(false);
  const [signUp, setSignUp] = useState(true);
  const [uEmail, setUEmail] = useState("");
  const [uPass, setUPass] = useState("");
  const navigate = useNavigate();
  const handleLogin = (e) => {
    e.preventDefault();

    let olddata = localStorage.getItem("user");
    let oldArr = JSON.parse(olddata);
    console.log(oldArr);
    oldArr.map((userData) => {
      setUEmail(userData.email);
      if (emaillog == userData.email && passwordlog == userData.password) {
        navigate("/dashboard");
        console.log("success");
        toast.success(`Welcome ${userData.fname} ${userData.lname}`);
      }
    });
  };

  const handleClick = () => {
    navigate("/register");
  };
  return (
    <div className="login-main">
      <div class="login-body">
        <div class="login-container1">
          <div class="login-title">
            <h1>ABC Corporation</h1>
            <p class="title-sub">Please login</p>
          </div>
          <form id="form" class="login-form" onSubmit={handleLogin}>
            <div class="form-control">
              <label for="email">Email</label>
              <input
                type="email"
                placeholder="Enter your email"
                onChange={(e) => setEmaillog(e.target.value)}
              />
            </div>

            <div class="form-control">
              <label for="password">Password</label>
              <input
                type="password"
                placeholder="Enter your password"
                onChange={(e) => setPasswordlog(e.target.value)}
              />
            </div>

            <div class="login-rest">
              <div class="checkbox">
                <input type="checkbox" class="checkbox-box" />
                <p class="rem-login">Remember Login</p>
              </div>
              <p class="for-pass">Forget Password?</p>
            </div>

            <button class="button-login" type="submit">
              Login
            </button>
            <br />
            <p class="reg-p">don't have account?</p>
            <button class="button-register" onClick={handleClick}>
              Register
            </button>
            {flag && <h1>Please Fill Every Thing</h1>}
          </form>
        </div>
        <div class="login-container2">
          <img
            src="https://images.unsplash.com/photo-1470075801209-17f9ec0cada6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
            alt="imageorg"
            width="100%"
            height="100%"
          />
        </div>
      </div>
    </div>
  );
};

export default Login;
