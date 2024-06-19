import React, { useState } from "react";
import { TextField, Button, Box, Alert } from "@mui/material";
import axios from "axios";
import "./CandidateProfilePage.css";

const Account = ({ primaryColor, primaryFontColor }) => {
  const [formData, setFormData] = useState({
    email: "",
    firstName: "",
    lastName: "",
    skills: "",
    street: "",
    city: "",
    country: "",
    postal: "",
    jobTitle: "",
    jobDescription: "",
    company: "",
    startDate: "",
    jobEndDate: "",
    qualification: "",
    institute: "",
    educationEndDate: "",
  });

  const [errors, setErrors] = useState({});
  const [alert, setAlert] = useState({ message: "", severity: "" });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
    setErrors((prevErrors) => ({ ...prevErrors, [name]: "" }));
  };

  const validateForm = () => {
    const newErrors = {};
    // Add validation logic here
    return newErrors;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length === 0) {
      try {
        const response = await axios.post(
          "http://localhost:5000/api/users/updateProfile",
          formData
        );
        if (response.status === 200) {
          setAlert({ message: "Profile Updated Successfully", severity: "success" });
        } else {
          setAlert({ message: response.data.msg, severity: "error" });
        }
      } catch (error) {
        setAlert({ message: error.response.data.msg, severity: "error" });
      }
    } else {
      setErrors(validationErrors);
    }
  };

  return (
    <div className="edit-profile-container">
      <h1 style={{ color: primaryFontColor }}>Edit Profile</h1>
      <div className="profile-pic">
        <img src="../../assets/ProfilePic.png" alt="Profile" />
      </div>
      <form className="edit-profile-form" onSubmit={handleSubmit}>
        {alert.message && (
          <Alert
            className="mb-3"
            severity={alert.severity}
            onClose={() => setAlert({ message: "", severity: "" })}
          >
            {alert.message}
          </Alert>
        )}
        <Box className="section" mb={3}>
          <h2 className="section-heading">Account</h2>
          <TextField
            type="email"
            name="email"
            label="Email"
            variant="outlined"
            value={formData.email}
            onChange={handleInputChange}
            fullWidth
            margin="normal"
            error={!!errors.email}
            helperText={errors.email}
          />
        </Box>
        <Box className="section" mb={3}>
          <h2 className="section-heading">Personal Info</h2>
          <TextField
            type="text"
            name="firstName"
            label="First Name"
            variant="outlined"
            value={formData.firstName}
            onChange={handleInputChange}
            fullWidth
            margin="normal"
            error={!!errors.firstName}
            helperText={errors.firstName}
          />
          <TextField
            type="text"
            name="lastName"
            label="Last Name"
            variant="outlined"
            value={formData.lastName}
            onChange={handleInputChange}
            fullWidth
            margin="normal"
            error={!!errors.lastName}
            helperText={errors.lastName}
          />
          <TextField
            type="text"
            name="skills"
            label="Skills"
            variant="outlined"
            value={formData.skills}
            onChange={handleInputChange}
            fullWidth
            multiline
            rows={4}
            margin="normal"
            error={!!errors.skills}
            helperText={errors.skills}
          />
        </Box>
        <Box className="section" mb={3}>
          <h2 className="section-heading">Address</h2>
          <TextField
            type="text"
            name="street"
            label="Street"
            variant="outlined"
            value={formData.street}
            onChange={handleInputChange}
            fullWidth
            margin="normal"
            error={!!errors.street}
            helperText={errors.street}
          />
          <TextField
            type="text"
            name="city"
            label="City"
            variant="outlined"
            value={formData.city}
            onChange={handleInputChange}
            fullWidth
            margin="normal"
            error={!!errors.city}
            helperText={errors.city}
          />
          <TextField
            type="text"
            name="country"
            label="Country"
            variant="outlined"
            value={formData.country}
            onChange={handleInputChange}
            fullWidth
            margin="normal"
            error={!!errors.country}
            helperText={errors.country}
          />
          <TextField
            type="text"
            name="postal"
            label="Postal"
            variant="outlined"
            value={formData.postal}
            onChange={handleInputChange}
            fullWidth
            margin="normal"
            error={!!errors.postal}
            helperText={errors.postal}
          />
        </Box>
        <Box className="section" mb={3}>
          <h2 className="section-heading">Experience</h2>
          <TextField
            type="text"
            name="jobTitle"
            label="Job Title"
            variant="outlined"
            value={formData.jobTitle}
            onChange={handleInputChange}
            fullWidth
            margin="normal"
            error={!!errors.jobTitle}
            helperText={errors.jobTitle}
          />
          <TextField
            type="text"
            name="jobDescription"
            label="Job Description"
            variant="outlined"
            value={formData.jobDescription}
            onChange={handleInputChange}
            fullWidth
            multiline
            rows={4}
            margin="normal"
            error={!!errors.jobDescription}
            helperText={errors.jobDescription}
          />
          <TextField
            type="text"
            name="company"
            label="Company"
            variant="outlined"
            value={formData.company}
            onChange={handleInputChange}
            fullWidth
            margin="normal"
            error={!!errors.company}
            helperText={errors.company}
          />
          <TextField
            type="date"
            name="startDate"
            label="Start Date"
            variant="outlined"
            InputLabelProps={{ shrink: true }}
            value={formData.startDate}
            onChange={handleInputChange}
            fullWidth
            margin="normal"
            error={!!errors.startDate}
            helperText={errors.startDate}
          />
          <TextField
            type="date"
            name="jobEndDate"
            label="End Date"
            variant="outlined"
            InputLabelProps={{ shrink: true }}
            value={formData.jobEndDate}
            onChange={handleInputChange}
            fullWidth
            margin="normal"
            error={!!errors.jobEndDate}
            helperText={errors.jobEndDate}
          />
        </Box>
        <Box className="section" mb={3}>
          <h2 className="section-heading">Education</h2>
          <TextField
            type="text"
            name="qualification"
            label="Qualification"
            variant="outlined"
            value={formData.qualification}
            onChange={handleInputChange}
            fullWidth
            margin="normal"
            error={!!errors.qualification}
            helperText={errors.qualification}
          />
          <TextField
            type="text"
            name="institute"
            label="Institute"
            variant="outlined"
            value={formData.institute}
            onChange={handleInputChange}
            fullWidth
            margin="normal"
            error={!!errors.institute}
            helperText={errors.institute}
          />
          <TextField
            type="date"
            name="educationEndDate"
            label="End Date"
            variant="outlined"
            InputLabelProps={{ shrink: true }}
            value={formData.educationEndDate}
            onChange={handleInputChange}
            fullWidth
            margin="normal"
            error={!!errors.educationEndDate}
            helperText={errors.educationEndDate}
          />
        </Box>
        <div className="flex flex-col text-center items-center mt-0 mt-md-5 mb-5 pt-5 buttons-container">
          <Button
            type="submit"
            style={{
              backgroundColor: primaryColor,
              color: primaryFontColor,
              width: "250px",
              padding: "12px",
              borderRadius: "10px",
              border: "1px solid",
            }}
            className="submit-button"
          >
            Submit
          </Button>
          <Button
            type="button"
            style={{
              backgroundColor: primaryFontColor,
              color: primaryColor,
              width: "250px",
              padding: "12px",
              borderRadius: "10px",
              border: "1px solid",
            }}
            className="cancel-button"
            onClick={() => window.location.reload()}
          >
            Cancel
          </Button>
        </div>
      </form>
    </div>
  );
};

export default Account;
