import React from "react";
import Card from "react-bootstrap/Card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationArrow, faClock, faBook } from "@fortawesome/free-solid-svg-icons";

const JobDeatilComponent = ({ job, SecondaryFontColor, primaryColor, primaryFontColor, CardColor }) => {
  return (
    <div className="container mt-4 d-flex justify-content-center align-items-center">
      <div className="row">
        <div className="col-12">
          <Card
            style={{
              padding: "1rem",
              background: CardColor,
              borderRadius: "15px",
              textAlign: "center",
              position: "relative",
            }}
          >
            <h5 className="card-title" style={{ fontWeight: "bold", marginBottom: "16px" }}>{job.title}</h5>
            <div style={{ display: "flex", justifyContent: "center", alignItems: "center", marginBottom: "16px" }}>
              <FontAwesomeIcon icon={faLocationArrow} style={{ marginRight: "8px" }} />
              <span>{job.location.street}, {job.location.city}, {job.location.province}, {job.location.country}, {job.location.postalCode}</span>
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
      </div>
    </div>
  );
};

export default JobDeatilComponent;
