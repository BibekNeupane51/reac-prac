import React, { useState } from "react";
import userIcon from "../../../assets/image/user.svg";
import { useNavigate } from "react-router-dom";
function Navbar() {
  const [showhide, setshowhide] = useState(false);
  const navigate = useNavigate();
  const handleLogout = () => {
    navigate("/reac-prac/");
  };
  const handleclick = () => {
    setshowhide(!showhide);
  };

  return (
    <div className="n-top-bar">
      <div className="n-topleft">
        {/* <img src={lines} className="linesicon" onClick={handleshowhide}/> */}
        <div className="nav-search">
          <input
            className="nav-search-input"
            type="text"
            placeholder="Search"
          />
          <span className="nv-srch-ico">
            <i class="fas fa-search"></i>
          </span>
        </div>
      </div>
      <div className="n-nav-user">
        <img
          src={userIcon}
          alt=""
          onClick={handleclick}
          className="user-nav-img user-nav-i-main"
        />
        {showhide ? (
          <div className="user-nav-menu">
            <ul>
              <li>
                <img src={userIcon} alt="" className="user-nav-img" />
                <div className="unm-prof-det">
                  <p>Bibek Neupane</p>
                  <p>bibekneupane@gmail.com</p>
                </div>
              </li>
              <li>Manage Account</li>

              <li>Profile</li>
              <li>Personal settings</li>

              <li onClick={handleLogout}>Log out</li>
            </ul>
          </div>
        ) : null}
      </div>
    </div>
  );
}

export default Navbar;
