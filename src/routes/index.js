import React from "react";
import { Routes as RouterRoutes, Route, Navigate } from "react-router-dom";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import Home from "../pages/Home/Home";
import ResetPassword from "../pages/ResetPassword/ResetPassword";
import Subscribe from "../pages/Subscribe/Subscribe";
// import HomeN from "../pages/HomeN/HomeN";

const Routes = () => {
  return (
    <RouterRoutes>
      <Route path="/" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/resetpassword" element={<ResetPassword />} />
      <Route path="/subscribe" element={<Subscribe />} />
      <Route path="/home" element={<Home />} />
      {/* <Route path="/homeN" element={<HomeN />} /> */}

      {/* <Route path="*" element={<Navigate to="/" replace />} /> */}
    </RouterRoutes>
  );
};

export default Routes;
