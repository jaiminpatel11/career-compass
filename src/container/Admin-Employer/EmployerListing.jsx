import React, { useEffect, useState } from "react";
import { Card, Pagination, IconButton, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Button } from "@mui/material";
import { Email, LocationOn, Work, Delete } from "@mui/icons-material";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import "./AdminCandidatePage.css";

const EmployersListing = ({ primaryColor, cardColor, searchTerm }) => {
  const [candidates, setCandidates] = useState([]);
  const [filteredCandidates, setFilteredCandidates] = useState([]);
  const [open, setOpen] = useState(false);
  const [selectedUserId, setSelectedUserId] = useState(null);
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
        setFilteredCandidates(response.data);
      } catch (error) {
        console.error('Error fetching candidates', error);
      }
    };

    fetchCandidates();
  }, []);

  useEffect(() => {
    if (searchTerm) {
      const filtered = candidates.filter(candidate =>
        candidate.firstName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        candidate.lastName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        candidate.userId.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
        candidate.skills.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredCandidates(filtered);
    } else {
      setFilteredCandidates(candidates);
    }
  }, [searchTerm, candidates]);

  const handleCardClick = (userId) => {
    navigate(`/candidate-details/${userId}`);
  }


  // const handleConfirmDelete = async () => {
  //   try {
  //     await axios.delete(`http://localhost:5000/api/userprofile/admin/deleteUserProfile/${selectedUserId}`, {
  //       headers: {
  //         "x-auth-token": sessionStorage.getItem("user")
  //       }
  //     });
  //     // Remove the deleted candidate from the state
  //     const updatedCandidates = candidates.filter(candidate => candidate.userId._id !== selectedUserId);
  //     setCandidates(updatedCandidates);
  //     setFilteredCandidates(updatedCandidates);
  //     console.log('Candidate deleted successfully');
  //     handleClose();
  //     navigate('/some-back-page'); // Change this to the route you want to navigate to after deletion
  //   } catch (error) {
  //     console.error('Error deleting candidate', error);
  //     handleClose();
  //   }
  // };

  return (
    <div className="container-fluid my-2 p-5">
      <div className="row">
        <div className="col-md-12 col-sm-12">
          <div className="text-center">
            <h2 style={{ color: primaryColor }}>
              Employers Listing
            </h2>
          </div>
          <div className="row">
            {filteredCandidates.length === 0 ? (
              <div>
                There are no Employers at this time
              </div>
            ) : (
              filteredCandidates.map((candidate) => (
                <div className="col-md-4 mb-4" key={candidate.userId._id}>
                  <Card
                    className="card-container"
                    style={{ background: cardColor }}
                    onClick={() => handleCardClick(candidate.userId._id)}
                  >
                    <h5 className="card-title">
                      {`${candidate.firstName} ${candidate.lastName}`}
                    </h5>
                    <div className="icon-text">
                      <Email className="mx-2" />
                      {candidate.userId.email}
                    </div>
                    <div className="icon-text">
                      <LocationOn className="mx-2" />
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
              count={Math.ceil(filteredCandidates.length / 10)}
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

export default EmployersListing;
