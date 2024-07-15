import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  Button,
  Card,
  TextField,
  IconButton,
  Snackbar,
  Alert,
} from "@mui/material";
import { Download } from "@mui/icons-material";
import axios from "axios";
import "../ViewApplicationEmployer/ApplicantDetails.css";
import Navbar from "../../components/Common/Navbar";
import { textAlign } from "@mui/system";
import Footer from "../../components/Common/Footer";


const ApplicantDetails = () => {
  const [primaryColor, setPrimaryColor] = useState("");
  const [primaryFontColor, setPrimaryFontColor] = useState("");
  const [secondaryFontColor, setSecondaryFontColor] = useState("");
  const [cardColor, setcardColor] = useState("");
  const [footerLinkColor, setfooterLinkColor] = useState("");

  const { id } = useParams();
  const navigate = useNavigate();
  const [applicantDetails, setApplicantDetails] = useState(null);
  const [snackbarOpen, setSnackbarOpen] = useState(false);

  useEffect(() => {
    const rootStyles = getComputedStyle(document.documentElement);
    setPrimaryColor(rootStyles.getPropertyValue("--primary-color").trim());
    setPrimaryFontColor(
      rootStyles.getPropertyValue("--primary-font-color").trim()
    );
    setSecondaryFontColor(
      rootStyles.getPropertyValue("--secondary-font-color").trim()
    );
    setcardColor(rootStyles.getPropertyValue("--card-color").trim());
    setfooterLinkColor(
      rootStyles.getPropertyValue("--footer-link-color").trim()
    );

    const fetchApplicantDetails = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5000/api/jobapplications/jobapplication/${id}`,
          {
            headers: {
              "x-auth-token": sessionStorage.getItem("user"),
            },
          }
        );
        setApplicantDetails(response.data);
      } catch (error) {
        console.error("Error fetching applicant details", error);
      }
    };

    fetchApplicantDetails();
  }, [id]);

  const handleSnackbarClose = () => {
    setSnackbarOpen(false);
  };

  const handleScheduleInterview = () => {
    navigate(`/schedule-interview/${id}`);
  };

  const handleRejectApplication = async () => {
    try {
      await axios.put(
        `http://localhost:5000/api/jobapplications/rejectapplication/${id}`,
        {},
        {
          headers: {
            "x-auth-token": sessionStorage.getItem("user"),
          },
        }
      );
      setSnackbarOpen(true);
    } catch (error) {
      console.error("Error rejecting application", error);
    }
  };

  if (!applicantDetails) {
    return <div>Loading...</div>;
  }

  return (
    <div className="">
      <div className="row">
      <Navbar
            logo="/logo.png"
            primaryFontColor={primaryFontColor}
            primaryColor={primaryColor}
          />
        <div className="col-md-12 col-sm-12">
          
          <div className="applicant-heding" style={{color: primaryFontColor, backgroundColor: primaryColor}}>
            <h1>Candidate Application</h1>
            <p>Review and manage applications from potential candidates</p>
          </div>
          <div className="text-center applicant-details">
            <h2
              className=""
              style={{ color: primaryColor, textAlign: "center" , margin:"50px" }}
            >
              Job Role: {applicantDetails.job_id.title}
            </h2>
            <div
              style={{
                background: primaryFontColor,
                padding: "1rem",
                borderRadius: "15px",
                textAlign: "center",
                position: "relative",
                cursor: "pointer",
                margin: "50px",
              }}
            >
              <h3
                className="card-title"
                style={{
                  fontWeight: "bold",
                  margin:"15px",
                  color: primaryColor,

                }}
              >
                {/* {applicantDetails.user_id.name} */}
                Personal Details
              </h3>
              <div className="personal-details " style={{}}>
                <TextField
                  type="text"
                  id="outlined-basic"
                  label="First Name"
                  variant="outlined"
                  name="First Name"
                  className="login-field"
                  value={applicantDetails.firstName}
                  style={{ marginBottom: "16px" }}
                  disabled
                />
                <TextField
                  type="text"
                  id="outlined-basic"
                  label="Last Name"
                  variant="outlined"
                  name="Last Name"
                  className="login-field"
                  value={applicantDetails.lastName}
                  style={{ marginBottom: "16px" }}
                  disabled
                />
              </div>
              <div className="personal-details">
                <TextField
                  type="text"
                  id="outlined-basic"
                  variant="outlined"
                  name="First Name"
                  className="login-field"
                  label="Email"
                  value={applicantDetails.email}
                  style={{ marginBottom: "16px" }}
                  disabled
                />
                <TextField
                  type="text"
                  id="outlined-basic"
                  variant="outlined"
                  name="First Name"
                  className="login-field"
                  label="Phone number"
                  value={applicantDetails.phoneNumber}
                  style={{ marginBottom: "16px" }}
                  disabled
                />
              </div>

              <div className="download-items">
                <div style={{ marginBottom: "16px" }}>
                  <a
                    href={`http://localhost:5000/uploads/${applicantDetails.resume
                      .split("\\")
                      .pop()}`}
                    download
                  >
                    <IconButton color="primary">
                      <Download />
                    </IconButton>
                    Resume
                  </a>
                </div>
                <div style={{ marginBottom: "16px" }}>
                  <a
                    href={`http://localhost:5000/uploads/${applicantDetails.cover_letter
                      .split("\\")
                      .pop()}`}
                    download
                  >
                    <IconButton color="primary">
                      <Download />
                    </IconButton>
                    Cover Letter
                  </a>
                </div>
                <div style={{ marginBottom: "16px" }}>
                  <a
                    href={`http://localhost:5000/uploads/${applicantDetails.portfolio
                      .split("\\")
                      .pop()}`}
                    download
                  >
                    <IconButton color="primary">
                      <Download />
                    </IconButton>
                    Portfolio
                  </a>
                </div>
              </div>

              <button
                variant="contained"
                style={{
                  backgroundColor: primaryColor,
                  color: primaryFontColor,
                  padding: "12px",
                  borderRadius: "10px",
                  border: "1px solid",
                  margin: "30px",
                }}
                onClick={handleScheduleInterview}
              >
                Schedule Interview
              </button>
              <button
                variant="contained"
                style={{
                  backgroundColor: primaryFontColor,
                  color: primaryColor,
                  padding: "12px",
                  borderRadius: "10px",
                  border: "1px solid",
                }}
                onClick={handleRejectApplication}
              >
                Reject Application
              </button>
            </div>
          </div>
        </div>
      </div>
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={6000}
        onClose={handleSnackbarClose}
      >
        <Alert
          onClose={handleSnackbarClose}
          severity="error"
          sx={{ width: "100%" }}
        >
          Application Rejected
        </Alert>
      </Snackbar>
      <Footer
              PrimaryColor={primaryColor}
              PrimaryFontColor={primaryFontColor}
              FooterLinkColor={footerLinkColor}
           />
    </div>
  );
};

export default ApplicantDetails;
