import React, { useState, useEffect } from "react";
import { Modal, Box, TextField, Button, MenuItem } from "@mui/material";
import axios from "axios";
import { useForm } from "react-hook-form";

const CreateJobModal = ({ isOpen, onClose, showSnackbar }) => {
  const { register, handleSubmit, formState: { errors }, setError, reset } = useForm();

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
    if (isOpen) {
      // Reset form values when the modal is opened
      reset();
    }
  }, [isOpen, reset]);

  const validateData = (data) => {
    let isValid = true;

    // Clear previous errors
    Object.keys(errors).forEach((field) => setError(field, { message: "" }));

    // Validation logic
    if (!data.title) {
      setError("title", { message: "Title is required" });
      isValid = false;
    }
    if (!data.description) {
      setError("description", { message: "Description is required" });
      isValid = false;
    }
    if (!data.skills) {
      setError("skills", { message: "Skills are required" });
      isValid = false;
    }
    if (!data.role) {
      setError("role", { message: "Role is required" });
      isValid = false;
    }
    if (!data.requirements) {
      setError("requirements", { message: "Requirements are required" });
      isValid = false;
    }
    if (!data.salary || isNaN(data.salary) || Number(data.salary) <= 0) {
      setError("salary", { message: "A positive salary is required" });
      isValid = false;
    }
    if (!data.location) {
      setError("location", { message: "Location is required" });
      isValid = false;
    }
    if (!data.expiry_date) {
      setError("expiry_date", { message: "Expiry date is required" });
      isValid = false;
    } else if (new Date(data.expiry_date) <= new Date()) {
      setError("expiry_date", { message: "Expiry date must be in the future" });
      isValid = false;
    }

    return isValid;
  };

  const onSubmit = async (data) => {
    if (!validateData(data)) {
      return;
    }

    // Format skills and requirements as arrays
    const formattedData = {
      ...data,
      skills: data.skills.split(',').map(skill => skill.trim()),
      requirements: data.requirements.split(',').map(requirement => requirement.trim()),
    };

    try {
      const token = sessionStorage.getItem("user");
      const response = await axios.post("http://localhost:5000/api/jobs/createjob", formattedData, {
        headers: {
          "Content-Type": "application/json",
          "x-auth-token": token,
        },
      });
      if (response.status === 201) {
        showSnackbar("Job created successfully!", "success");
        onClose(); 
      } else {
        showSnackbar("Failed to create job", "error");
        console.error("Failed to create job:", response.data);
      }
    } catch (error) {
      showSnackbar("Error creating job", "error");
      console.error("Error creating job:", error);
    }
  };

  return (
    <Modal
      open={isOpen}
      onClose={onClose}
      aria-labelledby="create-job-modal"
      aria-describedby="create-job-form"
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
        <h2 id="create-job-modal" style={{ color: "#5C6BC0", marginBottom: "1.5rem", textAlign: "center" }}>Create New Job</h2>
        <form id="create-job-form" onSubmit={handleSubmit(onSubmit)}>
          <TextField
            fullWidth
            margin="normal"
            id="title"
            name="title"
            label={<span>Title <span style={{ color: "red" }}>*</span></span>}
            variant="outlined"
            {...register("title", { required: "Title is required" })}
            error={!!errors.title}
            helperText={errors.title?.message}
          />
          <TextField
            fullWidth
            margin="normal"
            id="description"
            name="description"
            label={<span>Description <span style={{ color: "red" }}>*</span></span>}
            multiline
            rows={4}
            variant="outlined"
            {...register("description", { required: "Description is required" })}
            error={!!errors.description}
            helperText={errors.description?.message}
          />
          <TextField
            fullWidth
            margin="normal"
            id="skills"
            name="skills"
            label={<span>Skills (comma-separated) <span style={{ color: "red" }}>*</span></span>}
            variant="outlined"
            {...register("skills", { required: "Skills are required" })}
            error={!!errors.skills}
            helperText={errors.skills?.message}
          />
          <TextField
            select
            fullWidth
            margin="normal"
            id="role"
            name="role"
            label={<span>Select Role <span style={{ color: "red" }}>*</span></span>}
            variant="outlined"
            {...register("role", { required: "Role is required" })}
            error={!!errors.role}
            helperText={errors.role?.message}
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
            label={<span>Requirements (comma-separated) <span style={{ color: "red" }}>*</span></span>}
            variant="outlined"
            {...register("requirements", { required: "Requirements are required" })}
            error={!!errors.requirements}
            helperText={errors.requirements?.message}
          />
          <TextField
            fullWidth
            margin="normal"
            id="salary"
            name="salary"
            label={<span>Salary <span style={{ color: "red" }}>*</span></span>}
            variant="outlined"
            {...register("salary", { 
              required: "Salary is required", 
              validate: value => !isNaN(value) && Number(value) > 0 || "A positive salary is required" 
            })}
            error={!!errors.salary}
            helperText={errors.salary?.message}
          />
          <TextField
            fullWidth
            margin="normal"
            id="location"
            name="location"
            label={<span>Location <span style={{ color: "red" }}>*</span></span>}
            variant="outlined"
            {...register("location", { required: "Location is required" })}
            error={!!errors.location}
            helperText={errors.location?.message}
          />
          <TextField
            fullWidth
            margin="normal"
            id="expiry_date"
            name="expiry_date"
            label={<span>Expiry Date <span style={{ color: "red" }}>*</span></span>}
            type="date"
            variant="outlined"
            InputLabelProps={{ shrink: true }}
            {...register("expiry_date", { 
              required: "Expiry date is required",
              validate: value => new Date(value) > new Date() || "Expiry date must be in the future"
            })}
            error={!!errors.expiry_date}
            helperText={errors.expiry_date?.message}
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
              Create
            </Button>
          </div>
        </form>
      </Box>
    </Modal>
  );
};

export default CreateJobModal;
