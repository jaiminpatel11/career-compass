import React, { useState, useEffect } from "react";
import { Button, Pagination } from "@mui/material";
import { LocationOn, Schedule, Book } from "@mui/icons-material";
import axios from "axios";
import "./FindJob.css";

const AllJobs = ({ SecondaryFontColor, primaryColor, primaryFontColor, cardColor }) => {
  const [jobs, setJobs] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const jobsPerPage = 6;

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

  const handleApplyClick = (job) => {
    console.log("Applying for job:", job);
  };

  return (
    <div className="container mt-5 mt-md-0">
      <div className="row">
        <div className="col-md-12">
          <div className="heading-content text-center" style={{ marginBottom: "40px", marginTop: "40px" }}>
            <h1 style={{ color: SecondaryFontColor, marginBottom: "10px" }}>All Jobs</h1>
            <h6 style={{ color: SecondaryFontColor, marginBottom: "20px" }}>
              Browse through all available job positions.
            </h6>
          </div>
        </div>
        <div className="row my-2 justify-content-center">
          {currentJobs.map((job, index) => (
            <div key={index} className="col-lg-3 col-md-6 col-sm-12 mb-4">
              <div
                className="card position-relative"
                style={{ background: cardColor, borderRadius: "40px", height: "300px" }}
              >
                <div className="card-body text-center d-flex flex-column justify-content-between">
                  <div>
                    <h5 className="card-text mt-4" style={{ fontWeight: "bold" }}>
                      {job.title}
                    </h5>
                    <p className="card-text">
                      <LocationOn style={{ marginRight: "8px" }} />
                      {job.location}
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
                        border: "1px solid"
                      }}
                      onClick={() => handleApplyClick(job)}
                    >
                      Apply
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          ))}
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

export default AllJobs;
