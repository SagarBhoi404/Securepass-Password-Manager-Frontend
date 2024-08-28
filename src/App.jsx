import { useState } from "react";
import { BrowserRouter, redirect, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Dashboard from "./pages/Dashboard";
import ProtectedRoute from "./components/ProtectedRoute";
import Profile from "./pages/Profile";
import PasswordChange from "./pages/PasswordChange";
import AESChange from "./pages/AESChange";
import About from "./pages/About";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/about" element={<About />} />

          <Route path="/dashboard" element={<ProtectedRoute element={<Dashboard />} /> } />
          <Route path="/profile" element={<ProtectedRoute element={<Profile />} /> } />
          <Route path="/password-change" element={<ProtectedRoute element={<PasswordChange />} /> } />
          <Route path="/aeskey-change" element={<ProtectedRoute element={<AESChange />} /> } />
        </Routes>
      </BrowserRouter>
      <ToastContainer />
    </>
  );
}

export default App;
