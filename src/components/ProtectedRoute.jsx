import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ element: Component }) => {
  const token = localStorage.getItem("token");

  if (!token) {
    // If no token is found, redirect to the login page
    return <Navigate to="/login" replace />;
  }

  // If token is found, render the component
  return Component;
};

export default ProtectedRoute;
