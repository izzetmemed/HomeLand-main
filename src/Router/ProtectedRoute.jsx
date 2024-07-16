import React from "react";
import { useState } from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const [token,setToken] =useState(sessionStorage.getItem("Resp"));
  if (token) {
    
  }else{
    return <Navigate to="/HomeLogin" />;
  }

  return children;
};

export default ProtectedRoute;
