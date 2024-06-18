import React, { useState, useEffect } from "react";
import Navbar from "../../components/Common/Navbar";
import Footer from "../../components/Common/Footer";
import { TextField, Button, IconButton } from "@mui/material";
import axios from "axios";
import { Edit } from "@mui/icons-material";

const EmployerProfile = () => {
  // Define the links array for the Navbar component
  const links = [
    { text: "Home", url: "#" },
    { text: "Job Applications", url: "#" },
  ];

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
    setPrimaryFontColor(rootStyles.getPropertyValue("--primary-font-color").trim());
    setSecondaryFontColor(rootStyles.getPropertyValue("--secondary-font-color").trim());
    setCardColor(rootStyles.getPropertyValue("--card-color").trim());
    setFooterLinkColor(rootStyles.getPropertyValue("--footer-link-color").trim());
  }, []);

  // State variables for form data
  const [formData, setFormData] = useState({
    email: "",
    companyName: "",
    industry: "",
    description: "",
    street: "",
    city: "",
    country: "",
    postal: "",
  });

  // State variable for profile image
  const [profileImage, setProfileImage] = useState(null);

  // Handle input change
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  // Handle image change
  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setProfileImage(URL.createObjectURL(file));
      setFormData((prevData) => ({ ...prevData, companyLogo: file }));
    }
  };

  // Handle form submission
  const handleSubmit = async () => {
    try {
      const formDataWithImage = new FormData();
      formDataWithImage.append("email", formData.email);
      formDataWithImage.append("companyName", formData.companyName);
      formDataWithImage.append("industry", formData.industry);
      formDataWithImage.append("companyDescription", formData.description);
      formDataWithImage.append("address[street]", formData.street);
      formDataWithImage.append("address[city]", formData.city);
      formDataWithImage.append("address[country]", formData.country);
      formDataWithImage.append("address[postalCode]", formData.postal);

      if (formData.companyLogo) {
        formDataWithImage.append('companyLogo', formData.companyLogo);
      }

      const token = localStorage.getItem("token"); // Adjust based on how you store the token
    
      const response = await axios.post("http://localhost:5000/api/profile/createcompanyprofile", formDataWithImage, {
        headers: {
          "Content-Type": "multipart/form-data",
          "x-auth-token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjY3MWM1ZWM5ZTJmYzFjNjJmNGRmMzIzIiwicm9sZSI6ImNvbXBhbnkifSwiaWF0IjoxNzE4NzMyNzY2LCJleHAiOjE3MTg3MzYzNjZ9.vuRiXIuhOd0lthKFmN9AeiQZ-P7VIcZvcSKdGCO9VOs",
        },
      });

      if (response.status === 201) {
        alert("Profile updated successfully!");
      } else {
        alert("Failed to update profile. Please try again.");
      }
    } catch (error) {
      alert("An error occurred while updating the profile.");
    }
  };

  // Handle form cancel
  const handleCancel = () => {
    setFormData({
      email: "",
      companyName: "",
      industry: "",
      description: "",
      street: "",
      city: "",
      country: "",
      postal: "",
    });
    setProfileImage(null);
  };

  return (
    <div>
      <Navbar
        logo="/logo.png"
        links={links}
        primaryFontColor={primaryFontColor}
        primaryColor={primaryColor}
      />
      <div className="container">
        <div className="row justify-content-center mt-5">
          <div className="col-md-6">
            <div className="text-center mb-4">
              <div style={{ position: "relative", display: "inline-block" }}>
                <div
                  style={{
                    borderRadius: "50%",
                    width: "200px",
                    height: "200px",
                    backgroundColor: "#e0e0e0", // Default background color
                    backgroundImage: profileImage ? `url(${profileImage})` : "none",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  {!profileImage && <Edit style={{ fontSize: 50, color: "#fff" }} />} {/* Display icon if no image */}
                </div>
                <input
                  accept="image/*"
                  style={{ display: "none" }}
                  id="icon-button-file"
                  type="file"
                  onChange={handleImageChange}
                />
                <label htmlFor="icon-button-file">
                  <IconButton
                    aria-label="upload picture"
                    component="span"
                    style={{
                      position: "absolute",
                      bottom: 0,
                      right: 0,
                      backgroundColor: "white",
                      borderRadius: "50%",
                    }}
                  >
                    <Edit />
                  </IconButton>
                </label>
              </div>
            </div>
            <div className="form-group text-center" style={{ marginTop: "25px" }}>
              <h2 className="mb-2" style={{ color: secondaryFontColor }}>Account</h2>
              <TextField
                fullWidth
                variant="outlined"
                label="Email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="mb-3"
              />
            </div>
            <div className="form-group text-center" style={{ marginTop: "25px" }}>
              <h2 className="mb-2" style={{ color: secondaryFontColor }}>Company Info</h2>
              <TextField
                fullWidth
                variant="outlined"
                label="Company Name"
                name="companyName"
                value={formData.companyName}
                onChange={handleInputChange}
                className="mb-3"
              />
              <TextField
                fullWidth
                variant="outlined"
                label="Industry"
                name="industry"
                value={formData.industry}
                onChange={handleInputChange}
                className="mb-3"
              />
              <TextField
                fullWidth
                variant="outlined"
                label="Description"
                name="description"
                value={formData.description}
                onChange={handleInputChange}
                className="mb-3"
              />
            </div>
            <div className="form-group text-center" style={{ marginTop: "25px" }}>
              <h2 className="mb-2" style={{ color: secondaryFontColor }}>Address</h2>
              <TextField
                fullWidth
                variant="outlined"
                label="Street"
                name="street"
                value={formData.street}
                onChange={handleInputChange}
                className="mb-3"
              />
              <TextField
                fullWidth
                variant="outlined"
                label="City"
                name="city"
                value={formData.city}
                onChange={handleInputChange}
                className="mb-3"
              />
              <TextField
                fullWidth
                variant="outlined"
                label="Country"
                name="country"
                value={formData.country}
                onChange={handleInputChange}
                className="mb-3"
              />
              <TextField
                fullWidth
                variant="outlined"
                label="Postal"
                name="postal"
                value={formData.postal}
                onChange={handleInputChange}
                className="mb-3"
              />
            </div>
            <div className="text-center mb-5" style={{ marginTop: "25px" }}>
              <Button
                variant="contained"
                style={{
                  backgroundColor: primaryFontColor,
                  color: primaryColor,
                  width: "250px",
                  padding: "12px",
                  borderRadius: "10px",
                  border: "1px solid",
                  marginRight: "50px",
                }}
                onClick={handleCancel}
              >
                Cancel
              </Button>
              <Button
                variant="contained"
                style={{
                  backgroundColor: primaryColor,
                  color: primaryFontColor,
                  width: "250px",
                  padding: "12px",
                  borderRadius: "10px",
                  border: "1px solid",
                }}
                onClick={handleSubmit}
              >
                Submit
              </Button>
            </div>
          </div>
        </div>
      </div>

      <Footer
        PrimaryColor={primaryColor}
        PrimaryFontColor={primaryFontColor}
        FooterLinkColor={footerLinkColor}
      />
    </div>
  );
};

export default EmployerProfile;
