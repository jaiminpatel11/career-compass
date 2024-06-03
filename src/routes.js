// src/routes.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; // Import Routes from react-router-dom
import CandidateHomePage from "./container/CandidateHomePage/CandidateHomePage.jsx";
import LoginContainer from "./container/LoginPage/LoginContainer.jsx";
import ForgotPasswordContainer from "./container/LoginPage/ForgotPasswordContainer.jsx";
import RegisterContainer from "./container/SignupPage/RegisterContainer.jsx";
// Import other components as needed

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<CandidateHomePage />} />{" "}
        <Route path="/login" element={<LoginContainer />} />
        <Route path="/register" element={<RegisterContainer />} />
        <Route path="/forgot_password" element={<ForgotPasswordContainer />} />
        {/* Add more routes here */}
      </Routes>
    </Router>
  );
};

export default AppRoutes;
