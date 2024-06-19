import React, { useState } from "react";
import { Button, Card, Pagination } from "@mui/material";
import { LocationOn, Work, Schedule, Book } from "@mui/icons-material";
import CreateJobModal from "./CreateJobModal";

const JobPostings = ({ primaryFontColor, cardColor }) => {
  // Sample job data
  const jobs = [
    { id: 1, title: "Full Stack Developer", location: "Toronto, ON", type: "Full Time", skills: "React, NodeJs, MongoDB, GitHub" },
    { id: 2, title: "Mobile Application Developer", location: "Toronto, ON", type: "Contract", skills: "Kotlin, Java, Dagger, Compose" },
    { id: 3, title: "UI/UX Developer", location: "Calgary, AB", type: "Full Time", skills: "Photoshop, Adobe XD, Figma" },
    { id: 4, title: "Full Stack Developer", location: "Toronto, ON", type: "Full Time", skills: "React, NodeJs, MongoDB, GitHub" },
    { id: 5, title: "Full Stack Developer", location: "Toronto, ON", type: "Full Time", skills: "React, NodeJs, MongoDB, GitHub" },
    { id: 6, title: "Full Stack Developer", location: "Toronto, ON", type: "Full Time", skills: "React, NodeJs, MongoDB, GitHub" },
    { id: 7, title: "Full Stack Developer", location: "Toronto, ON", type: "Full Time", skills: "React, NodeJs, MongoDB, GitHub" },
    { id: 8, title: "Full Stack Developer", location: "Toronto, ON", type: "Full Time", skills: "React, NodeJs, MongoDB, GitHub" },
    { id: 9, title: "Full Stack Developer", location: "Toronto, ON", type: "Full Time", skills: "React, NodeJs, MongoDB, GitHub" },
    // Add more jobs as needed
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const jobsPerPage = 6; // Updated to display 6 cards per page

  const [isModalOpen, setIsModalOpen] = useState(false);

  // Pagination logic
  const indexOfLastJob = currentPage * jobsPerPage;
  const indexOfFirstJob = indexOfLastJob - jobsPerPage;
  const currentJobs = jobs.slice(indexOfFirstJob, indexOfLastJob);

  const handlePageChange = (event, value) => {
    setCurrentPage(value);
  };

  const handleCreateJobClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="mb-5" style={{ padding: "20px" }}>
      <div className="d-flex justify-content-between align-items-center mb-4">
        <div className="flex-grow-1 d-flex justify-content-center">
          <h2 className="text-center" style={{ color: "#5C6BC0" }}>Jobs</h2>
        </div>
        <Button
          variant="contained"
          style={{ backgroundColor: "#5C6BC0", color: "#FFFFFF" }}
          onClick={handleCreateJobClick}
        >
          Create Job
        </Button>
      </div>
      <div className="row">
        {currentJobs.map((job) => (
          <div className="col-md-4 mb-4" key={job.id}>
            <Card style={{ background: cardColor, padding: "1rem", borderRadius: "15px", textAlign: "center" }}>
              <h5 className="card-title" style={{ fontWeight: "bold", marginBottom: "16px" }}>{job.title}</h5>
              <div style={{ display: "flex", justifyContent: "center", alignItems: "center", marginBottom: "16px" }}>
                <LocationOn style={{ marginRight: "8px" }} />
                <span>{job.location}</span>
              </div>
              <div style={{ display: "flex", justifyContent: "center", alignItems: "center", marginBottom: "16px" }}>
                <Schedule style={{ marginRight: "8px" }} />
                <span>{job.type}</span>
              </div>
              <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                <Book style={{ marginRight: "8px" }} />
                <span>{job.skills}</span>
              </div>
            </Card>
          </div>
        ))}
      </div>
      <div className="d-flex justify-content-center mt-4">
        <Pagination
          count={Math.ceil(jobs.length / jobsPerPage)}
          page={currentPage}
          onChange={handlePageChange}
          color="primary"
        />
      </div>
      <CreateJobModal isOpen={isModalOpen} onClose={handleCloseModal} />
    </div>
  );
};

export default JobPostings;
