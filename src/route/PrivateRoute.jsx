import React from "react";
import { useAuth } from "../provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const { user } = useAuth();
  const location = useLocation();

  if (user) {
    return children;
  }

  return <Navigate to="/login" state={{from: location}} replace></Navigate>;
};

export default PrivateRoute;
