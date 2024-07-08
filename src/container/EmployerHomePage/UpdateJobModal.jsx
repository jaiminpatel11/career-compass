import React, { useState, useEffect } from "react";
import { Modal, Box, TextField, Button, MenuItem } from "@mui/material";
import axios from "axios";

const UpdateJobModal = ({ isOpen, onClose, jobData }) => {
  const [formData, setFormData] = useState({
    _id: "",
    title: "",
    description: "",
    skills: "",
    role: "",
    requirements: "",
    salary: "",
    location: "",
    expiry_date: "",
  });

  const [primaryColor, setPrimaryColor] = useState("");
  const [primaryFontColor, setPrimaryFontColor] = useState("");
  const [secondaryFontColor, setSecondaryFontColor] = useState("");
  const [cardColor, setCardColor] = useState("");
  const [footerLinkColor, setFooterLinkColor] = useState("");

  useEffect(() => {
    const rootStyles = getComputedStyle(document.documentElement);
    setPrimaryColor(rootStyles.getPropertyValue("--primary-color").trim());
    setPrimaryFontColor(rootStyles.getPropertyValue("--primary-font-color").trim());
    setSecondaryFontColor(rootStyles.getPropertyValue("--secondary-font-color").trim());
    setCardColor(rootStyles.getPropertyValue("--card-color").trim());
    setFooterLinkColor(rootStyles.getPropertyValue("--footer-link-color").trim());
  }, []);

  useEffect(() => {
    if (jobData) {
      setFormData({
        _id: jobData._id,
        title: jobData.title,
        description: jobData.description,
        skills: jobData.skills.join(", "),
        role: jobData.role,
        requirements: jobData.requirements.join(", "),
        salary: jobData.salary,
        location: jobData.location,
        expiry_date: jobData.expiry_date.substring(0, 10), 
      });
    }
  }, [jobData]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Split skills and requirements by comma to create an array
    const formattedData = {
      ...formData,
      skills: formData.skills.split(',').map(skill => skill.trim()),
      requirements: formData.requirements.split(',').map(requirement => requirement.trim()),
    };

    try {
      const token = sessionStorage.getItem("user");
      const response = await axios.put(`http://localhost:5000/api/jobs/update/${formData._id}`, formattedData, {
        headers: {
          "Content-Type": "application/json",
          "x-auth-token": token,
        },
      });
      if (response.status === 200) {
        onClose(); 
      } else {
        console.error("Failed to update job:", response.data);
      }
    } catch (error) {
      console.error("Error updating job:", error);
    }
  };

  return (
    <Modal
      open={isOpen}
      onClose={onClose}
      aria-labelledby="update-job-modal"
      aria-describedby="update-job-form"
      style={{ display: "flex", alignItems: "center", justifyContent: "center" }}
    >
      <Box
        sx={{
          bgcolor: "background.paper",
          borderRadius: "25px",
          boxShadow: 24,
          p: 4,
          width: "55%",
          maxHeight: "90vh",
          overflowY: "auto",
        }}
      >
        <h2 id="update-job-modal" style={{ color: primaryColor, marginBottom: "1.5rem", textAlign: "center" }}>Update Job</h2>
        <form id="update-job-form" onSubmit={handleSubmit}>
          <TextField
            fullWidth
            margin="normal"
            id="title"
            name="title"
            label="Title"
            variant="outlined"
            value={formData.title}
            onChange={handleChange}
          />
          <TextField
            fullWidth
            margin="normal"
            id="description"
            name="description"
            label="Description"
            multiline
            rows={4}
            variant="outlined"
            value={formData.description}
            onChange={handleChange}
          />
          <TextField
            fullWidth
            margin="normal"
            id="skills"
            name="skills"
            label="Skills (comma-separated)"
            variant="outlined"
            value={formData.skills}
            onChange={handleChange}
          />
          <TextField
            select
            fullWidth
            margin="normal"
            id="role"
            name="role"
            label="Select Role"
            variant="outlined"
            value={formData.role}
            onChange={handleChange}
          >
            <MenuItem value="fulltime">Full Time</MenuItem>
            <MenuItem value="parttime">Part Time</MenuItem>
            <MenuItem value="seasonal">Seasonal</MenuItem>
            <MenuItem value="contract">Contract</MenuItem>
          </TextField>
          <TextField
            fullWidth
            margin="normal"
            id="requirements"
            name="requirements"
            label="Requirements (comma-separated)"
            variant="outlined"
            value={formData.requirements}
            onChange={handleChange}
          />
          <TextField
            fullWidth
            margin="normal"
            id="salary"
            name="salary"
            label="Salary"
            variant="outlined"
            value={formData.salary}
            onChange={handleChange}
          />
          <TextField
            fullWidth
            margin="normal"
            id="location"
            name="location"
            label="Location"
            variant="outlined"
            value={formData.location}
            onChange={handleChange}
          />
          <TextField
            fullWidth
            margin="normal"
            id="expiry_date"
            name="expiry_date"
            label="Expiry Date"
            type="date"
            variant="outlined"
            InputLabelProps={{ shrink: true }}
            value={formData.expiry_date}
            onChange={handleChange}
          />
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <Button
              variant="contained"
              style={{
                backgroundColor: primaryFontColor,
                color: primaryColor,
                width: "250px",
                padding: "12px",
                borderRadius: "10px",
                border: "1px solid",
              }}
              onClick={onClose}
            >
              Cancel
            </Button>
            <Button
              type="submit"
              variant="contained"
              style={{
                backgroundColor: primaryColor,
                color: primaryFontColor,
                width: "250px",
                padding: "12px",
                borderRadius: "10px",
                border: "1px solid",
              }}
            >
              Update
            </Button>
          </div>
        </form>
      </Box>
    </Modal>
  );
};

export default UpdateJobModal;
