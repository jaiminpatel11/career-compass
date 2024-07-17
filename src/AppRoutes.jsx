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
import CandidateApplications from "./container/ViewApplicationEmployer/CandidateApplications";
import ApplicantDetails from "./container/ViewApplicationEmployer/ApplicantDetails";
import ScheduleInterview from "./container/ViewApplicationEmployer/ScheduleInterview";
import MyApplications from "./container/ViewApplicationCandidate/MyApplications";
import InterviewDate from "./container/ViewApplicationCandidate/InterviewDate";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/candidate_home" element={<CandidateHomePage />} />
      <Route path="/home" element={<EmployerDashboard />} />
      <Route path="/" element={<LoginContainer />} />
      <Route path="/register" element={<RegisterContainer />} />
      <Route path="/forgot_password" element={<ForgotPasswordContainer />} />
      <Route
        path="/candidate_profile"
        element={<CandidateProfileContainer />}
      />
      <Route
        path="/candidate_applications"
        element={<CandidateApplications />}
      />
      <Route path="/applicant-details/:id" element={<ApplicantDetails />} />
      <Route path="/schedule-interview/:id" element={<ScheduleInterview />} />
      <Route path="/my_applications" element={<MyApplications />} />
      <Route path="/interview_date/:id" element={<InterviewDate />} />

      <Route
        path="/home"
        element={
          <ProtectedRoute>
            <CandidateHomePage />
          </ProtectedRoute>
        }
      />

      <Route path="/employer_profile" element={<EmployerProfile />} />
    </Routes>
  );
};

export default AppRoutes;
