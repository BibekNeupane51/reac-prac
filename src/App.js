import Login from "./pages/login/login";
import SignUp from "./pages/register/signUp";
import { Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Dashboard from "./pages/dashboard/dashboard";
import "react-toastify/dist/ReactToastify.css";
import "./assets/css/style.css";
function App() {
  return (
    <>
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
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<SignUp />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </>
  );
}

export default App;
