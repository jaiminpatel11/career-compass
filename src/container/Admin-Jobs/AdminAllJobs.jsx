import React, { useState, useEffect } from "react";
import { Button, Pagination } from "@mui/material";
import { LocationOn, Schedule, Book } from "@mui/icons-material";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "../FindJobPage/FindJob.css";

const AdminAllJobs = ({
  SecondaryFontColor,
  primaryColor,
  primaryFontColor,
  cardColor,
}) => {
  const [jobs, setJobs] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const jobsPerPage = 6;
  const navigate = useNavigate();

  const fetchJobs = async () => {
    try {
      const token = sessionStorage.getItem("user");
      const response = await axios.get("http://localhost:5000/api/jobs/all", {
        headers: {
          "x-auth-token": token,
        },
      });
      setJobs(response.data);
    } catch (error) {
      console.error("Error fetching jobs:", error);
    }
  };

  useEffect(() => {
    fetchJobs();
  }, []);

  const indexOfLastJob = currentPage * jobsPerPage;
  const indexOfFirstJob = indexOfLastJob - jobsPerPage;
  const currentJobs = jobs.slice(indexOfFirstJob, indexOfLastJob);

  const handlePageChange = (event, value) => {
    setCurrentPage(value);
  };

  const handleJobDetails = (job) => {
    navigate("/admin_job_details", { state: { job } });
  };

  const currentDate = new Date();

  const jobList = currentJobs.filter(
    (job) => new Date(job.expiry_date) >= currentDate
  );
  const expiredJobs = currentJobs.filter(
    (job) => new Date(job.expiry_date) < currentDate
  );

  return (
    <div className="container mt-5 mt-md-0">
      <div className="row">
        {/* Job Lists Section */}
        <div className="col-md-12">
          <h2
            className="text-center"
            style={{
              color: SecondaryFontColor,
              marginBottom: "20px",
              marginTop: "40px",
            }}
          >
            Job Lists
          </h2>
          <div className="row my-2 justify-content-center">
            {jobList.map((job, index) => (
              <div key={index} className="col-lg-3 col-md-6 col-sm-12 mb-4">
                <div
                  className="card position-relative"
                  style={{
                    background: cardColor,
                    borderRadius: "40px",
                    height: "300px",
                  }}
                >
                  <div className="card-body text-center d-flex flex-column justify-content-between">
                    <div>
                      <h5
                        className="card-text mt-4"
                        style={{ fontWeight: "bold" }}
                      >
                        {job.title}
                      </h5>
                      <p className="card-text">
                        <LocationOn style={{ marginRight: "8px" }} />
                        {job.location.city}
                      </p>
                      <p className="card-text">
                        <Schedule style={{ marginRight: "8px" }} />
                        {job.role}
                      </p>
                      <p className="card-text">
                        <Book style={{ marginRight: "8px" }} />
                        {job.skills.join(", ")}
                      </p>
                    </div>
                    <div className="d-flex justify-content-center">
                      <Button
                        variant="contained"
                        style={{
                          backgroundColor: primaryColor,
                          color: primaryFontColor,
                          width: "150px",
                          padding: "12px",
                          borderRadius: "10px",
                          border: "1px solid",
                        }}
                        onClick={() => handleJobDetails(job)}
                      >
                        Details
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Expired Jobs Section */}
        <div className="col-md-12">
          <h2
            className="text-center"
            style={{ color: SecondaryFontColor, marginBottom: "20px" }}
          >
            Expired Jobs
          </h2>
          <div className="row my-2 justify-content-center">
            {expiredJobs.map((job, index) => (
              <div key={index} className="col-lg-3 col-md-6 col-sm-12 mb-4">
                <div
                  className="card position-relative"
                  style={{
                    background: cardColor,
                    borderRadius: "40px",
                    height: "300px",
                  }}
                >
                  <div className="card-body text-center d-flex flex-column justify-content-between">
                    <div>
                      <h5
                        className="card-text mt-4"
                        style={{ fontWeight: "bold" }}
                      >
                        {job.title}
                      </h5>
                      <p className="card-text">
                        <LocationOn style={{ marginRight: "8px" }} />
                        {job.location.city}
                      </p>
                      <p className="card-text">
                        <Schedule style={{ marginRight: "8px" }} />
                        {job.role}
                      </p>
                      <p className="card-text">
                        <Book style={{ marginRight: "8px" }} />
                        {job.skills.join(", ")}
                      </p>
                    </div>
                    <div className="d-flex justify-content-center">
                      <Button
                        variant="contained"
                        style={{
                          backgroundColor: primaryColor,
                          color: primaryFontColor,
                          width: "150px",
                          padding: "12px",
                          borderRadius: "10px",
                          border: "1px solid",
                        }}
                        onClick={() => handleJobDetails(job)}
                      >
                        Details
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {jobs.length > jobsPerPage && (
          <div className="d-flex justify-content-center mt-4">
            <Pagination
              count={Math.ceil(jobs.length / jobsPerPage)}
              page={currentPage}
              onChange={handlePageChange}
              color="primary"
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminAllJobs;
