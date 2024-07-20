import React from "react";
import { useLocation } from "react-router-dom";
import { Button } from "@mui/material";
import { LocationOn, Schedule, Book } from "@mui/icons-material";
import "./SearchResults.css";

const SearchResults = ({ SecondaryFontColor, primaryColor, primaryFontColor, cardColor }) => {
  const location = useLocation();
  const jobs = location.state?.jobs || [];

  const handleApplyClick = (job) => {
    console.log("Applying for job:", job);
  };

  return (
    <div className="container mt-5 mt-md-0">
      <div className="row">
        <div className="col-md-12">
          <div className="heading-content text-center" style={{ marginBottom: "40px", marginTop: "40px" }}>
            <h1 style={{ color: SecondaryFontColor, marginBottom: "10px" }}>Search Results</h1>
            <h6 style={{ color: SecondaryFontColor, marginBottom: "20px" }}>
              Jobs matching your search criteria.
            </h6>
          </div>
        </div>
        <div className="row my-2 justify-content-center">
          {jobs.map((job, index) => (
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
      </div>
    </div>
  );
};

export default SearchResults;
