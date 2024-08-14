import React from "react";
import Card from "react-bootstrap/Card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationArrow,
  faClock,
  faBook,
} from "@fortawesome/free-solid-svg-icons";
import { LinearProgress, Box, Typography } from "@mui/material";

const JobDeatilComponent = ({
  job,
  SecondaryFontColor,
  primaryColor,
  primaryFontColor,
  CardColor,
}) => {
  const getColor = (percentage) => {
    if (percentage < 25) return "red";
    if (percentage < 75) return "yellow";
    return "green";
  };

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
            <h5
              className="card-title"
              style={{ fontWeight: "bold", marginBottom: "16px" }}
            >
              {job.title}
            </h5>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                marginBottom: "16px",
              }}
            >
              <FontAwesomeIcon
                icon={faLocationArrow}
                style={{ marginRight: "8px" }}
              />
              <span>
                {job.location.street}, {job.location.city},{" "}
                {job.location.province}, {job.location.country},{" "}
                {job.location.postalCode}
              </span>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                marginBottom: "16px",
              }}
            >
              <FontAwesomeIcon icon={faClock} style={{ marginRight: "8px" }} />
              <span>{job.role}</span>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <FontAwesomeIcon icon={faBook} style={{ marginRight: "8px" }} />
              <span>{job.skills.join(", ")}</span>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                marginBottom: "16px",
              }}
            >
              {job.skillMatch && (
                <div style={{ width: "100%", margin: "20px auto" }}>
                  <Box
                    sx={{
                      width: "75%",
                      marginTop: "20px",
                      textAlign: "center",
                      position: "relative",
                    }}
                  >
                    <Typography
                      variant="body2"
                      sx={{
                        position: "absolute",
                        top: "50%", // Center vertically
                        left: "50%",
                        transform: "translate(-50%, -50%)", // Center horizontally and vertically
                        zIndex: 1, // Ensure text is above the progress bar
                        fontWeight: "bold", // Make text bold
                      }}
                    >
                      {`${job.skillMatch.matchPercentage.toFixed(2)}% Match`}
                    </Typography>
                    <LinearProgress
                      variant="determinate"
                      value={job.skillMatch.matchPercentage}
                      sx={{
                        height: 10,
                        borderRadius: 5,
                        backgroundColor: "#ddd",
                        "& .MuiLinearProgress-bar": {
                          backgroundColor: getColor(
                            job.skillMatch.matchPercentage
                          ),
                        },
                      }}
                    />
                  </Box>
                </div>
              )}
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default JobDeatilComponent;
