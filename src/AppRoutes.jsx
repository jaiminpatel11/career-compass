import React from "react";
import { Route, Routes } from "react-router-dom";
import CandidateHomePage from "./container/CandidateHomePage/CandidateHomePage";
import LoginContainer from "./container/LoginPage/LoginPage";
import ForgotPasswordContainer from "./container/LoginPage/ForgotPasswordPage";
import RegisterContainer from "./container/SignupPage/RegisterPage";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/home" element={<CandidateHomePage />} />
      <Route path="/" element={<LoginContainer />} />
      <Route path="/register" element={<RegisterContainer />} />
      <Route path="/forgot_password" element={<ForgotPasswordContainer />} />
      {/* Add more routes here */}
    </Routes>
  );
};

export default AppRoutes;
