import React from "react";
import { Outlet, Navigate } from "react-router-dom";

function ProtectedRoute() {
  const isLogin = true;
  return isLogin ? <Outlet /> : <Navigate to="/login" />;
}

export default ProtectedRoute;
