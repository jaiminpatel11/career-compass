import React, { useState, useEffect } from 'react';
import { Button, Card, Pagination, IconButton, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from "@mui/material";
import { LocationOn, Schedule, Book, Delete, Work, AccessAlarmOutlined, Task } from "@mui/icons-material";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const JobApplicants = ({ primaryColor, cardColor }) => {
  const [applicants, setApplicants] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchApplicants = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/jobapplications/getemployerjobapplications', {
          headers: {
            "x-auth-token": sessionStorage.getItem("user")
          }
        });
        setApplicants(response.data);
      } catch (error) {
        console.error('Error fetching applicants', error);
      }
    };

    fetchApplicants();
  }, []);

  const handleCardClick = (id) => {
    navigate(`/applicant-details/${id}`)
  }

  return (
    <div className="container-fluid my-2" style={{ padding: "20px" }}>
      <div className="row">
        <div className="col-md-12 col-sm-12 ">
          <div className="text-center">
            <h2 className="" style={{ color: primaryColor }}>
              Job Applicants
            </h2>
            <div className="row">
              {applicants.map((applicant) => (
                <div className="col-md-4 mb-4" key={applicant._id}>
                  <Card
                    style={{ background: cardColor, padding: "1rem", borderRadius: "15px", textAlign: "center", position: "relative", cursor: "pointer", marginTop: "10px" }}
                    onClick={() => handleCardClick(applicant._id)}
                  >
                    <h5 className="card-title" style={{ fontWeight: "bold", marginBottom: "16px" }}>
                      {`${applicant.firstName} ${applicant.lastName}`}
                    </h5>
                    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", marginBottom: "16px" }}>
                      <Work style={{ marginRight: "8px" }} />
                      {applicant.job_id.title}
                    </div>
                    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", marginBottom: "16px" }}>
                      <AccessAlarmOutlined style={{ marginRight: "8px" }} />
                      {applicant.job_id.role}
                    </div>
                    <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                      <Task style={{ marginRight: "8px" }} />
                      {applicant.status}
                    </div>
                  </Card>
                </div>
              ))}
            </div>
            <div className="d-flex justify-content-center mt-4">
              <Pagination
                count={Math.ceil(applicants.length / 10)}
                page={1}
                onChange={() => { }}
                color="primary"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default JobApplicants;
