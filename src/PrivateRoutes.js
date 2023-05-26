import React from "react";
import { Outlet } from "react-router";
import { useContext } from "react";
import { AuthContext } from "./AuthContext";
import { Navigate } from "react-router";
const PrivateRoutes = ({ to, logged }) => {
  const { currentUser } = useContext(AuthContext);
  if (logged) {
    return currentUser ? <Outlet /> : <Navigate to={to} />;
  } else if (!logged) {
    return !currentUser ? <Outlet /> : <Navigate to={to} />;
  }
};

export default PrivateRoutes;
