import Login from "./pages/login/login";
import SignUp from "./pages/register/signUp";
import { Routes, Route, useNavigate, Navigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { useEffect } from "react";
import Dashboard from "./pages/dashboard/dashboard";
import GetUser from "./pages/localUser/getUser";
import AddUser from "./pages/localUser/addUser";
import EditUser from "./pages/localUser/editUser";
import GetAllProd from "./pages/apiUser/getAllProd";
import "react-toastify/dist/ReactToastify.css";
import "./assets/css/style.css";
function App() {
  let navigate = useNavigate();

  return (
    <div className="app-body">
      <ToastContainer
        position="top-center"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <Routes>
        <Route path="/reac-prac" element={<Login />} />
        <Route path="/reac-prac/login" element={<Login />} />
        <Route path="/reac-prac/register" element={<SignUp />} />
        <Route path="/reac-prac/dashboard" element={<Dashboard />} />
        <Route path="/reac-prac/dashboard/user" element={<GetUser />} />
        <Route path="/reac-prac/dashboard/add-user" element={<AddUser />} />
        <Route path="/reac-prac/dashboard/edit-user" element={<EditUser />} />
        <Route path="/reac-prac/dashboard/products" element={<GetAllProd />} />
      </Routes>
    </div>
  );
}

export default App;
