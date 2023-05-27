import React from "react";
import { Outlet } from "react-router";
import { useContext } from "react";
import { AuthContext } from "./AuthContext";
import { Navigate } from "react-router";
const PrivateRoutes = ({ to, isLogged }) => {
  const { currentUser } = useContext(AuthContext);
  if (isLogged) {
    return !currentUser ? <Outlet /> : <Navigate to={to} />;
  } else if (!isLogged) {
    return currentUser ? <Outlet /> : <Navigate to={to} />;
  }
};

export default PrivateRoutes;
