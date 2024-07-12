// FindJobs.js
import React from "react";
import Card from "react-bootstrap/Card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationArrow, faClock, faBook } from "@fortawesome/free-solid-svg-icons";
import { useLocation } from "react-router-dom"; // Import useLocation hook

const FindJobs = () => {
  const location = useLocation(); // Use useLocation hook to get location object
  const jobs = location.state?.jobs || []; // Use optional chaining to avoid errors if state or jobs is undefined

  const handleOpenUpdateModal = (job) => {
    console.log("Open update modal for job:", job);
    // Add logic to open update modal
  };

  return (
    <div className="container mt-4">
      <div className="row">
        {jobs.map((job) => (
          <div className="col-md-4 mb-4" key={job._id}>
            <Card
              style={{ background: "#f8f9fa", padding: "1rem", borderRadius: "15px", textAlign: "center", position: "relative", cursor: "pointer" }}
              onClick={() => handleOpenUpdateModal(job)}
            >
              <h5 className="card-title" style={{ fontWeight: "bold", marginBottom: "16px" }}>{job.title}</h5>
              <div style={{ display: "flex", justifyContent: "center", alignItems: "center", marginBottom: "16px" }}>
                <FontAwesomeIcon icon={faLocationArrow} style={{ marginRight: "8px" }} />
                <span>{job.location}</span>
              </div>
              <div style={{ display: "flex", justifyContent: "center", alignItems: "center", marginBottom: "16px" }}>
                <FontAwesomeIcon icon={faClock} style={{ marginRight: "8px" }} />
                <span>{job.role}</span>
              </div>
              <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                <FontAwesomeIcon icon={faBook} style={{ marginRight: "8px" }} />
                <span>{job.skills.join(", ")}</span>
              </div>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FindJobs;
