import React, { useState, useEffect } from "react";
import Navbar from "../../components/Common/Navbar";
import Footer from "../../components/Common/Footer";
import { TextField, Button, IconButton } from "@mui/material";
import axios from "axios";
import { Edit } from "@mui/icons-material";

const CandidateProfilePage = () => {
  const links = [
    { text: "Home", url: "#" },
    { text: "Find Job", url: "#" },
    { text: "Applications", url: "#" },
    { text: "Blog", url: "#" },
  ];

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

  const [formData, setFormData] = useState({
    email: "",
    firstName: "",
    lastName: "",
    skills: "",
    address: {
      street: "",
      city: "",
      province: "",
      country: "",
      postalCode: "",
    },
    experience: {
      jobTitle: "",
      jobDescription: "",
      company: "",
      startDate: "",
      endDate: "",
    },
    education: {
      qualification: "",
      institute: "",
      endDate: "",
    },
  });

  const [profileImage, setProfileImage] = useState(null);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    const [parent, child] = name.split('.');
    
    if (child) {
      setFormData((prevData) => ({
        ...prevData,
        [parent]: {
          ...prevData[parent],
          [child]: value,
        },
      }));
    } else {
      setFormData((prevData) => ({ ...prevData, [name]: value }));
    }
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setProfileImage(URL.createObjectURL(file));
      setFormData((prevData) => ({ ...prevData, profileImage: file }));
    }
  };

  const handleSubmit = async () => {
    try {
      const formDataWithImage = new FormData();
      formDataWithImage.append("firstName", formData.firstName);
      formDataWithImage.append("lastName", formData.lastName);
      formDataWithImage.append("skills", formData.skills);
      formDataWithImage.append("address[street]", formData.address.street);
      formDataWithImage.append("address[city]", formData.address.city);
      formDataWithImage.append("address[province]", formData.address.province);
      formDataWithImage.append("address[country]", formData.address.country);
      formDataWithImage.append("address[postalCode]", formData.address.postalCode);
      formDataWithImage.append("experience[jobTitle]", formData.experience.jobTitle);
      formDataWithImage.append("experience[jobDescription]", formData.experience.jobDescription);
      formDataWithImage.append("experience[company]", formData.experience.company);
      formDataWithImage.append("experience[startDate]", formData.experience.startDate);
      formDataWithImage.append("experience[endDate]", formData.experience.endDate);
      formDataWithImage.append("education[qualification]", formData.education.qualification);
      formDataWithImage.append("education[institute]", formData.education.institute);
      formDataWithImage.append("education[endDate]", formData.education.endDate);
  
      if (formData.profileImage) {
        formDataWithImage.append('profileImage', formData.profileImage);
      }
  
      const token = sessionStorage.getItem("user");
  
      const response = await axios.post("http://localhost:5000/api/userprofile/createUserProfile", formDataWithImage, {
        headers: {
          "Content-Type": "multipart/form-data",
          "x-auth-token": token,
        },
      });
  
      if (response.status === 201) {
        alert("Profile updated successfully!");
      } else {
        alert("Failed to update profile. Please try again.");
      }
    } catch (error) {
      console.log(error)
      alert("An error occurred while updating the profile.");
    }
  };
  

  const handleCancel = () => {
    setFormData({
      email: "",
      firstName: "",
      lastName: "",
      skills: "",
      address: {
        street: "",
        city: "",
        province: "",
        country: "",
        postalCode: "",
      },
      experience: {
        jobTitle: "",
        jobDescription: "",
        company: "",
        startDate: "",
        endDate: "",
      },
      education: {
        qualification: "",
        institute: "",
        endDate: "",
      },
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
                    backgroundColor: "#e0e0e0",
                    backgroundImage: profileImage ? `url(${profileImage})` : "none",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  {!profileImage && <Edit style={{ fontSize: 50, color: "#fff" }} />}
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
              <h2 className="mb-2" style={{ color: secondaryFontColor }}>Personal Info</h2>
              <TextField
                fullWidth
                variant="outlined"
                label="First Name"
                name="firstName"
                value={formData.firstName}
                onChange={handleInputChange}
                className="mb-3"
              />
              <TextField
                fullWidth
                variant="outlined"
                label="Last Name"
                name="lastName"
                value={formData.lastName}
                onChange={handleInputChange}
                className="mb-3"
              />
              <TextField
                fullWidth
                variant="outlined"
                label="Skills"
                name="skills"
                value={formData.skills}
                onChange={handleInputChange}
                className="mb-3"
                multiline
                rows={4}
              />
            </div>
            <div className="form-group text-center" style={{ marginTop: "25px" }}>
              <h2 className="mb-2" style={{ color: secondaryFontColor }}>Address</h2>
              <TextField
                fullWidth
                variant="outlined"
                label="Street"
                name="address.street"
                value={formData.address.street}
                onChange={handleInputChange}
                className="mb-3"
              />
              <TextField
                fullWidth
                variant="outlined"
                label="City"
                name="address.city"
                value={formData.address.city}
                onChange={handleInputChange}
                className="mb-3"
              />
              <TextField
                fullWidth
                variant="outlined"
                label="Province"
                name="address.province"
                value={formData.address.province}
                onChange={handleInputChange}
                className="mb-3"
              />
              <TextField
                fullWidth
                variant="outlined"
                label="Country"
                name="address.country"
                value={formData.address.country}
                onChange={handleInputChange}
                className="mb-3"
              />
              <TextField
                fullWidth
                variant="outlined"
                label="Postal Code"
                name="address.postalCode"
                value={formData.address.postalCode}
                onChange={handleInputChange}
                className="mb-3"
              />
            </div>
            <div className="form-group text-center" style={{ marginTop: "25px" }}>
              <h2 className="mb-2" style={{ color: secondaryFontColor }}>Experience</h2>
              <TextField
                fullWidth
                variant="outlined"
                label="Job Title"
                name="experience.jobTitle"
                value={formData.experience.jobTitle}
                onChange={handleInputChange}
                className="mb-3"
              />
              <TextField
                fullWidth
                variant="outlined"
                label="Job Description"
                name="experience.jobDescription"
                value={formData.experience.jobDescription}
                onChange={handleInputChange}
                className="mb-3"
                multiline
                rows={4}
              />
              <TextField
                fullWidth
                variant="outlined"
                label="Company"
                name="experience.company"
                value={formData.experience.company}
                onChange={handleInputChange}
                className="mb-3"
              />
              <TextField
                fullWidth
                variant="outlined"
                label="Start Date"
                name="experience.startDate"
                type="date"
                InputLabelProps={{ shrink: true }}
                value={formData.experience.startDate}
                onChange={handleInputChange}
                className="mb-3"
              />
              <TextField
                fullWidth
                variant="outlined"
                label="End Date"
                name="experience.endDate"
                type="date"
                InputLabelProps={{ shrink: true }}
                value={formData.experience.endDate}
                onChange={handleInputChange}
                className="mb-3"
              />
            </div>
            <div className="form-group text-center" style={{ marginTop: "25px" }}>
              <h2 className="mb-2" style={{ color: secondaryFontColor }}>Education</h2>
              <TextField
                fullWidth
                variant="outlined"
                label="Qualification"
                name="education.qualification"
                value={formData.education.qualification}
                onChange={handleInputChange}
                className="mb-3"
              />
              <TextField
                fullWidth
                variant="outlined"
                label="Institute"
                name="education.institute"
                value={formData.education.institute}
                onChange={handleInputChange}
                className="mb-3"
              />
              <TextField
                fullWidth
                variant="outlined"
                label="End Date"
                name="education.endDate"
                type="date"
                InputLabelProps={{ shrink: true }}
                value={formData.education.endDate}
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

export default CandidateProfilePage;
