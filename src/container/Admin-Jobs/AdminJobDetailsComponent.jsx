import React from "react";
import Card from "react-bootstrap/Card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationArrow, faClock, faBook } from "@fortawesome/free-solid-svg-icons";

const AdminJobDeatilComponent = ({ job, SecondaryFontColor, primaryColor, primaryFontColor, CardColor }) => {
  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-md-12">
          <Card
            style={{
              background: CardColor,
              padding: "1rem",
              borderRadius: "15px",
              textAlign: "center",
              position: "relative",
            }}
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
      </div>
    </div>
  );
};

export default AdminJobDeatilComponent;
