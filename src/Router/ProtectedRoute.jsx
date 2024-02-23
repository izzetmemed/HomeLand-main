import React from "react";
import { jwtDecode } from "jwt-decode";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const token = sessionStorage.getItem("Resp");
  let isAuthenticated = false;

  if (token) {
    try {
    
      const decodedToken = jwtDecode(token);
      const currentTime = Date.now() / 1000;

      if (decodedToken.exp > currentTime) {
        isAuthenticated = true;
      }
    } catch (error) {
      console.error("Token decoding failed:", error);
    }
  }
  if (!isAuthenticated) {
    return <Navigate to="/HomeLogin" />;
  }

  return children;
};

export default ProtectedRoute;
