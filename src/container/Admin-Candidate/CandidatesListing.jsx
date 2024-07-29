import React, { useEffect, useState } from "react";
import { Card, Pagination, IconButton } from "@mui/material";
import { Email, LocationOn, Work, Delete } from "@mui/icons-material";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import "./AdminCandidatePage.css"

const CandidatesListing = ({ primaryColor, cardColor }) => {
  const [candidates, setCandidates] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCandidates = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/userprofile/admin/user-profiles', {
          headers: {
            "x-auth-token": sessionStorage.getItem("user")
          }
        });
        setCandidates(response.data);
      } catch (error) {
        console.error('Error fetching candidates', error);
      }
    };

    fetchCandidates();
  }, []);

  const handleCardClick = (userId) => {
    navigate(`/candidate-details/${userId}`)
  }

  const handleDeleteClick = (userId) => {
    // Logic to delete the candidate
    console.log('Delete candidate with userId:', userId);
  }

  return (
    <div className="container-fluid my-2 p-5">
      <div className="row">
        <div className="col-md-12 col-sm-12">
          <div className="text-center">
            <h2 style={{ color: primaryColor }}>
              Candidates Listing
            </h2>
          </div>
          <div className="row">
            {candidates.length === 0 ? (
              <div>
                There are no candidates at this time
              </div>
            ) : (
              candidates.map((candidate) => (
                <div className="col-md-4 mb-4" key={candidate.userId._id}>
                  <Card
                    className="card-container"
                    style={{ background: cardColor,}}
                    onClick={() => handleCardClick(candidate.userId._id)}
                  >
                    <IconButton
                      className="delete-button"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleDeleteClick(candidate.userId._id);
                      }}
                    >
                      <Delete />
                    </IconButton>
                    <h5 className="card-title">
                      {`${candidate.firstName} ${candidate.lastName}`}
                    </h5>
                    <div className="icon-text">
                      <Email className="mx-2" />
                      {candidate.userId.email}
                    </div>
                    <div className="icon-text">
                      <LocationOn className="mx-2"/>
                      {candidate.address.city}, {candidate.address.province}
                    </div>
                    <div className="icon-text">
                      <Work className="mx-2" />
                      {candidate.skills}
                    </div>
                  </Card>
                </div>
              ))
            )}
          </div>
          <div className="d-flex justify-content-center mt-4">
            <Pagination
              count={Math.ceil(candidates.length / 10)}
              page={1}
              onChange={() => { }}
              color="primary"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default CandidatesListing;
