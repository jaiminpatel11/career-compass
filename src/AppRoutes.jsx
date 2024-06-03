import React from "react";
import { Route, Routes } from "react-router-dom";
import CandidateHomePage from "./container/CandidateHomePage/CandidateHomePage";
import {LoginContainer} from "./container/LoginPage/LoginContainer";
import {ForgotPasswordContainer} from "./container/LoginPage/ForgotPasswordContainer";
import {RegisterContainer} from "./container/SignupPage/RegisterContainer";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<CandidateHomePage />} />
      <Route path="/login" element={<LoginContainer />} />
      <Route path="/register" element={<RegisterContainer />} />
      <Route path="/forgot_password" element={<ForgotPasswordContainer />} />
      {/* Add more routes here */}
    </Routes>
  );
};

export default AppRoutes;
