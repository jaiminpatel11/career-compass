import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Button, Card, TextField, IconButton, Snackbar, Alert } from '@mui/material';
import { Download } from '@mui/icons-material';
import axios from 'axios';

const ApplicantDetails = ({ primaryColor, cardColor }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [applicantDetails, setApplicantDetails] = useState(null);
  const [snackbarOpen, setSnackbarOpen] = useState(false);


  useEffect(() => {
    const fetchApplicantDetails = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/jobapplications/jobapplication/${id}`, {
          headers: {
            "x-auth-token": sessionStorage.getItem("user")
          }
        });
        setApplicantDetails(response.data);
      } catch (error) {
        console.error('Error fetching applicant details', error);
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
      await axios.put(`http://localhost:5000/api/jobapplications/rejectapplication/${id}`, {}, {
        headers: {
          "x-auth-token": sessionStorage.getItem("user")
        }
      });
      setSnackbarOpen(true);
    } catch (error) {
      console.error('Error rejecting application', error);
    }
  };

  if (!applicantDetails) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container-fluid my-2" style={{ padding: '20px' }}>
      <div className="row">
        <div className="col-md-12 col-sm-12">
          <div className="text-center">
            <h2 className="" style={{ color: primaryColor }}>
              Job Role: {applicantDetails.job_id.title}
            </h2>
            <Card
              style={{ background: cardColor, padding: '1rem', borderRadius: '15px', textAlign: 'center', position: 'relative', cursor: 'pointer', marginTop: '10px' }}
            >
              <h5 className="card-title" style={{ fontWeight: 'bold', marginBottom: '16px' }}>
                {applicantDetails.user_id.name}
              </h5>
              <TextField fullWidth variant="outlined" label="First Name" value={applicantDetails.firstName} style={{ marginBottom: '16px' }} disabled />
              <TextField fullWidth variant="outlined" label="Last Name" value={applicantDetails.lastName} style={{ marginBottom: '16px' }} disabled />
              <TextField fullWidth variant="outlined" label="Email" value={applicantDetails.email} style={{ marginBottom: '16px' }} disabled />
              <TextField fullWidth variant="outlined" label="Phone Number" value={applicantDetails.phoneNumber} style={{ marginBottom: '16px' }} disabled />

              <div style={{ marginBottom: '16px' }}>
                <a href={`http://localhost:5000/uploads/${applicantDetails.resume.split('\\').pop()}`} download>
                  <IconButton color="primary">
                    <Download />
                  </IconButton>
                  Resume
                </a>
              </div>
              <div style={{ marginBottom: '16px' }}>
                <a href={`http://localhost:5000/uploads/${applicantDetails.cover_letter.split('\\').pop()}`} download>
                  <IconButton color="primary">
                    <Download />
                  </IconButton>
                  Cover Letter
                </a>
              </div>
              <div style={{ marginBottom: '16px' }}>
                <a href={`http://localhost:5000/uploads/${applicantDetails.portfolio.split('\\').pop()}`} download>
                  <IconButton color="primary">
                    <Download />
                  </IconButton>
                  Portfolio
                </a>
              </div>

              <Button variant="contained" style={{ backgroundColor: 'blue', color: 'white', marginRight: '10px' }} onClick={handleScheduleInterview}>
                Schedule Interview
              </Button>
              <Button variant="contained" style={{ backgroundColor: 'purple', color: 'white' }} onClick={handleRejectApplication}>
                Reject Application
              </Button>
            </Card>
          </div>
        </div>
      </div>
      <Snackbar open={snackbarOpen} autoHideDuration={6000} onClose={handleSnackbarClose}>
        <Alert onClose={handleSnackbarClose} severity="error" sx={{ width: '100%' }}>
          Application Rejected
        </Alert>
      </Snackbar>
    </div>
  );
};

export default ApplicantDetails;
