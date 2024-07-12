import React from "react";
import { Route, Routes } from "react-router-dom";
import CandidateHomePage from "./container/CandidateHomePage/CandidateHomePage";
import LoginContainer from "./container/LoginPage/LoginPage";
import ForgotPasswordContainer from "./container/LoginPage/ForgotPasswordPage";
import RegisterContainer from "./container/SignupPage/RegisterPage";
import CandidateProfileContainer from "./container/CandidateProfilePage/CandidateProfilePage";
import ProtectedRoute from "./components/ProtectedRoute";
import EmployerDashboard from "./container/EmployerHomePage/EmployerDashboard";
import EmployerProfile from "./container/EmployerHomePage/EmployerProfile";
import FindJobs from "./container/FindJobPage/FindJobs";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/candidate_home" element={<CandidateHomePage />} />
      <Route path="/home" element={<EmployerDashboard />} />
      <Route path="/" element={<LoginContainer />} />
      <Route path="/register" element={<RegisterContainer />} />
      <Route path="/forgot_password" element={<ForgotPasswordContainer />} />
      <Route path="/candidate_profile" element={<CandidateProfileContainer />} />
      <Route
        path="/home"
        element={
          <ProtectedRoute>
            <CandidateHomePage />
          </ProtectedRoute>
        }
      />

      <Route path="/employer_profile" element={<EmployerProfile />} />
      <Route path="/find-jobs" element={<FindJobs />} />
    </Routes>
  );
};

export default AppRoutes;
