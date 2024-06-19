import React, { useState, useEffect } from "react";
import { Modal, Box, TextField, Button, MenuItem } from "@mui/material";
import axios from "axios";

const CreateJobModal = ({ isOpen, onClose }) => {
  // State variables for form data
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    skills: "",
    role: "",
    requirements: "",
    salary: "",
    location: "",
  });

  // State variables for CSS colors
  const [primaryColor, setPrimaryColor] = useState("");
  const [primaryFontColor, setPrimaryFontColor] = useState("");
  const [secondaryFontColor, setSecondaryFontColor] = useState("");
  const [cardColor, setCardColor] = useState("");
  const [footerLinkColor, setFooterLinkColor] = useState("");

  useEffect(() => {
    // Fetch the CSS variables after component mounts
    const rootStyles = getComputedStyle(document.documentElement);
    setPrimaryColor(rootStyles.getPropertyValue("--primary-color").trim());
    setPrimaryFontColor(
      rootStyles.getPropertyValue("--primary-font-color").trim()
    );
    setSecondaryFontColor(
      rootStyles.getPropertyValue("--secondary-font-color").trim()
    );
    setCardColor(rootStyles.getPropertyValue("--card-color").trim());
    setFooterLinkColor(
      rootStyles.getPropertyValue("--footer-link-color").trim()
    );
  }, []);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post("http://your-backend-url/api/jobs", formData);
      if (response.status === 200) {
        // Data successfully submitted, perform any additional actions here
        console.log("Job created successfully:", response.data);
      } else {
        console.error("Failed to create job:", response.data);
      }
    } catch (error) {
      console.error("Error creating job:", error);
    }
  };

  return (
    <Modal
      open={isOpen}
      onClose={onClose}
      aria-labelledby="create-job-modal"
      aria-describedby="create-job-form"
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
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
        <h2 id="create-job-modal" style={{ color: "#5C6BC0", marginBottom: "1.5rem", textAlign: "center" }}>Create New Job</h2>
        
        <form id="create-job-form" onSubmit={handleSubmit}>
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
            label="Skills"
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
            <MenuItem value="Full Time">Full Time</MenuItem>
            <MenuItem value="Part Time">Part Time</MenuItem>
            <MenuItem value="Seasonal">Seasonal</MenuItem>
            <MenuItem value="Contract">Contract</MenuItem>
          </TextField>
          <TextField
            fullWidth
            margin="normal"
            id="requirements"
            name="requirements"
            label="Requirements"
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
              Submit
            </Button>
          </div>
        </form>
      </Box>
    </Modal>
  );
};

export default CreateJobModal;
