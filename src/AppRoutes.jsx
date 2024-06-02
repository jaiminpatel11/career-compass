import React from "react";
import { Route, Routes } from "react-router-dom";
import { LoginContainer } from "./container/LoginContainer";
import { RegisterContainer } from "./container/RegisterContainer";
import { ForgotPasswordContainer } from "./container/ForgotPasswordContainer";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="" element={<LoginContainer />} />
      <Route path="/register" element={<RegisterContainer />} />
      <Route path="/forgot_password" element={<ForgotPasswordContainer />} />
    </Routes>
  );
};

export default AppRoutes;
