import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navbar from "./components/Navbar";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Home from "./pages/Home";

const App = () => {
  return (
    <Router>
      <Navbar />
      <div className='container p-3'>
        <Routes>
          <Route
            path='/'
            element={<Home />}
          />
          <Route
            path='/register'
            element={<Register />}
          />
          <Route
            path='/login'
            element={<Login />}
          />
        </Routes>
        <ToastContainer/>
      </div>
    </Router>
  );
};

export default App;
