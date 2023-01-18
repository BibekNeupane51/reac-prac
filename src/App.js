import { Routes, Route } from "react-router-dom";
import logo from "./logo.svg";

function App() {
  return (
    <>
      <Routes>
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
}

export default App;
