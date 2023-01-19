import React from "react";
import Sidebar from "../../components/fixed-components/sidebar/sidebar";
import Navbar from "../../components/fixed-components/navbar/navbar";

import GetUser from "../localUser/getUser";

const Dashboard = () => {
  return (
    <div className="d-board">
      <Sidebar></Sidebar>
      <div className="nav-n-content">
        <Navbar></Navbar>
        <GetUser></GetUser>
      </div>
    </div>
  );
};

export default Dashboard;
