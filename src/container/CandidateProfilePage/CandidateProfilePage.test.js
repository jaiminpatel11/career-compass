// // CandidateProfilePage.test.js

// import React from "react";
// import { render, screen, fireEvent, waitFor } from "@testing-library/react";
// import '@testing-library/jest-dom/extend-expect';
// import CandidateProfilePage from "./CandidateProfilePage";
// import { createUserProfile, getUserProfile, updateUserProfile } from "../../Api/Profile";

// // Mock the API calls
// jest.mock("../../Api/Profile");

// const mockProfile = {
//   userId: { email: "test@example.com" },
//   firstName: "John",
//   lastName: "Doe",
//   skills: "JavaScript, React",
//   address: {
//     street: "123 Main St",
//     city: "Toronto",
//     province: "ON",
//     country: "Canada",
//     postalCode: "M1B2K3",
//   },
//   experience: {
//     jobTitle: "Developer",
//     jobDescription: "Developing web applications",
//     company: "Tech Corp",
//     startDate: "2020-01-01",
//     endDate: "2021-01-01",
//   },
//   education: {
//     qualification: "Bachelor's Degree",
//     institute: "University of Toronto",
//     endDate: "2019-01-01",
//   },
//   profileImage: "profile.jpg",
//   _id: "1",
// };

// describe("CandidateProfilePage", () => {
//   beforeEach(() => {
//     sessionStorage.setItem("user", "test-token");
//     getUserProfile.mockResolvedValue(mockProfile);
//   });

//   afterEach(() => {
//     jest.clearAllMocks();
//   });

//   test("renders the profile form with fetched data", async () => {
//     render(<CandidateProfilePage />);

//     await waitFor(() => expect(screen.getByLabelText(/First Name/i)).toHaveValue("John"));
//     expect(screen.getByLabelText(/Last Name/i)).toHaveValue("Doe");
//     expect(screen.getByLabelText(/Email/i)).toHaveValue("test@example.com");
//     expect(screen.getByLabelText(/Skills/i)).toHaveValue("JavaScript, React");
//     expect(screen.getByLabelText(/Street/i)).toHaveValue("123 Main St");
//     expect(screen.getByLabelText(/City/i)).toHaveValue("Toronto");
//     expect(screen.getByLabelText(/Province/i)).toHaveValue("ON");
//     expect(screen.getByLabelText(/Country/i)).toHaveValue("Canada");
//     expect(screen.getByLabelText(/Postal Code/i)).toHaveValue("M1B2K3");
//     expect(screen.getByLabelText(/Job Title/i)).toHaveValue("Developer");
//     expect(screen.getByLabelText(/Job Description/i)).toHaveValue("Developing web applications");
//     expect(screen.getByLabelText(/Company/i)).toHaveValue("Tech Corp");
//     expect(screen.getByLabelText(/Start Date/i)).toHaveValue("2020-01-01");
//     expect(screen.getByLabelText(/End Date/i)).toHaveValue("2021-01-01");
//     expect(screen.getByLabelText(/Qualification/i)).toHaveValue("Bachelor's Degree");
//     expect(screen.getByLabelText(/Institute/i)).toHaveValue("University of Toronto");
//     expect(screen.getByLabelText(/End Date/i)).toHaveValue("2019-01-01");
//   });

//   test("updates the profile on form submission", async () => {
//     render(<CandidateProfilePage />);

//     await waitFor(() => expect(screen.getByLabelText(/First Name/i)).toHaveValue("John"));

//     fireEvent.change(screen.getByLabelText(/First Name/i), { target: { value: "Jane" } });
//     fireEvent.click(screen.getByText(/Update/i));

//     await waitFor(() => expect(updateUserProfile).toHaveBeenCalled());

//     const updatedProfile = {
//       ...mockProfile,
//       firstName: "Jane",
//     };

//     expect(updateUserProfile).toHaveBeenCalledWith(mockProfile._id, expect.any(FormData), "test-token");
//   });

//   test("handles form validation", async () => {
//     render(<CandidateProfilePage />);

//     await waitFor(() => expect(screen.getByLabelText(/First Name/i)).toHaveValue("John"));

//     fireEvent.change(screen.getByLabelText(/First Name/i), { target: { value: "" } });
//     fireEvent.click(screen.getByText(/Update/i));

//     expect(screen.getByText(/First Name is required/i)).toBeInTheDocument();
//   });
// });


import React, { useState, useEffect } from "react";
import Navbar from "../../components/Common/Navbar";
import Footer from "../../components/Common/Footer";
import { TextField, Button, IconButton } from "@mui/material";
import { Edit } from "@mui/icons-material";
import { createUserProfile, getUserProfile, updateUserProfile } from "../../Api/Profile";

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
  const [isUpdating, setIsUpdating] = useState(false);
  const [profileId, setProfileId] = useState(null);
  const [errors, setErrors] = useState({});

  useEffect(() => {
    const fetchProfileData = async () => {
      const token = sessionStorage.getItem("user");
      if (token) {
        try {
          const profile = await getUserProfile(token);
          setFormData({
            email: profile.userId.email,
            firstName: profile.firstName,
            lastName: profile.lastName,
            skills: profile.skills,
            address: profile.address,
            experience: profile.experience,
            education: profile.education,
          });
          setProfileImage(profile.profileImage);
          setProfileId(profile._id);
          setIsUpdating(true); // Set to updating mode if profile exists
        } catch (error) {
          console.error("Error fetching profile data", error);
        }
      }
    };

    const rootStyles = getComputedStyle(document.documentElement);
    setPrimaryColor(rootStyles.getPropertyValue("--primary-color").trim());
    setPrimaryFontColor(rootStyles.getPropertyValue("--primary-font-color").trim());
    setSecondaryFontColor(rootStyles.getPropertyValue("--secondary-font-color").trim());
    setCardColor(rootStyles.getPropertyValue("--card-color").trim());
    setFooterLinkColor(rootStyles.getPropertyValue("--footer-link-color").trim());

    fetchProfileData();
  }, []);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    const [parent, child] = name.split(".");

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

    // Clear error for the current field
    setErrors((prevErrors) => ({ ...prevErrors, [name]: "" }));
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setProfileImage(URL.createObjectURL(file));
      setFormData((prevData) => ({ ...prevData, profileImage: file }));
    }
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.firstName) newErrors.firstName = "First Name is required";
    if (!formData.lastName) newErrors.lastName = "Last Name is required";
    if (!formData.skills) newErrors.skills = "Skills are required";
    if (!formData.address.street) newErrors["address.street"] = "Street is required";
    if (!formData.address.city) newErrors["address.city"] = "City is required";
    if (!formData.address.province) newErrors["address.province"] = "Province is required";
    if (!formData.address.country) newErrors["address.country"] = "Country is required";
    if (!formData.address.postalCode) newErrors["address.postalCode"] = "Postal Code is required";
    if (!formData.experience.jobTitle) newErrors["experience.jobTitle"] = "Job Title is required";
    if (!formData.experience.jobDescription) newErrors["experience.jobDescription"] = "Job Description is required";
    if (!formData.experience.company) newErrors["experience.company"] = "Company is required";
    if (!formData.experience.startDate) newErrors["experience.startDate"] = "Start Date is required";
    if (!formData.experience.endDate) newErrors["experience.endDate"] = "End Date is required";
    if (!formData.education.qualification) newErrors["education.qualification"] = "Qualification is required";
    if (!formData.education.institute) newErrors["education.institute"] = "Institute is required";
    if (!formData.education.endDate) newErrors["education.endDate"] = "End Date is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async () => {
    if (!validate()) {
      return;
    }

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
        formDataWithImage.append("profileImage", formData.profileImage);
      }

      const token = sessionStorage.getItem("user");

      if (isUpdating) {
        const response = await updateUserProfile(profileId, formDataWithImage, token);
        if (response) {
          alert("Profile updated successfully!");
        } else {
          alert("Failed to update profile. Please try again.");
        }
      } else {
        const response = await createUserProfile(formDataWithImage, token);
        if (response) {
          alert("Profile created successfully!");
          setIsUpdating(true);
          setProfileId(response._id); // Set the profile ID after creation
        } else {
          alert("Failed to create profile. Please try again.");
        }
      }
    } catch (error) {
      console.error("Error during profile creation/update", error);
      alert("An error occurred while creating/updating the profile.");
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
    setErrors({});
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
                  {!profileImage && <span>No Image</span>}
                </div>
                <input
                  accept="image/*"
                  type="file"
                  onChange={handleImageChange}
                  style={{
                    display: "none",
                  }}
                  id="profileImageInput"
                />
                <IconButton
                  component="label"
                  htmlFor="profileImageInput"
                  style={{
                    position: "absolute",
                    bottom: 0,
                    right: 0,
                    backgroundColor: "#ffffff",
                    borderRadius: "50%",
                  }}
                >
                  <Edit />
                </IconButton>
              </div>
            </div>
            <form>
              <TextField
                label="Email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                margin="normal"
                fullWidth
                disabled
              />
              <TextField
                label="First Name"
                name="firstName"
                value={formData.firstName}
                onChange={handleInputChange}
                margin="normal"
                fullWidth
                error={!!errors.firstName}
                helperText={errors.firstName}
              />
              <TextField
                label="Last Name"
                name="lastName"
                value={formData.lastName}
                onChange={handleInputChange}
                margin="normal"
                fullWidth
                error={!!errors.lastName}
                helperText={errors.lastName}
              />
              <TextField
                label="Skills"
                name="skills"
                value={formData.skills}
                onChange={handleInputChange}
                margin="normal"
                fullWidth
                error={!!errors.skills}
                helperText={errors.skills}
              />
              <TextField
                label="Street"
                name="address.street"
                value={formData.address.street}
                onChange={handleInputChange}
                margin="normal"
                fullWidth
                error={!!errors["address.street"]}
                helperText={errors["address.street"]}
              />
              <TextField
                label="City"
                name="address.city"
                value={formData.address.city}
                onChange={handleInputChange}
                margin="normal"
                fullWidth
                error={!!errors["address.city"]}
                helperText={errors["address.city"]}
              />
              <TextField
                label="Province"
                name="address.province"
                value={formData.address.province}
                onChange={handleInputChange}
                margin="normal"
                fullWidth
                error={!!errors["address.province"]}
                helperText={errors["address.province"]}
              />
              <TextField
                label="Country"
                name="address.country"
                value={formData.address.country}
                onChange={handleInputChange}
                margin="normal"
                fullWidth
                error={!!errors["address.country"]}
                helperText={errors["address.country"]}
              />
              <TextField
                label="Postal Code"
                name="address.postalCode"
                value={formData.address.postalCode}
                onChange={handleInputChange}
                margin="normal"
                fullWidth
                error={!!errors["address.postalCode"]}
                helperText={errors["address.postalCode"]}
              />
              <TextField
                label="Job Title"
                name="experience.jobTitle"
                value={formData.experience.jobTitle}
                onChange={handleInputChange}
                margin="normal"
                fullWidth
                error={!!errors["experience.jobTitle"]}
                helperText={errors["experience.jobTitle"]}
              />
              <TextField
                label="Job Description"
                name="experience.jobDescription"
                value={formData.experience.jobDescription}
                onChange={handleInputChange}
                margin="normal"
                fullWidth
                error={!!errors["experience.jobDescription"]}
                helperText={errors["experience.jobDescription"]}
              />
              <TextField
                label="Company"
                name="experience.company"
                value={formData.experience.company}
                onChange={handleInputChange}
                margin="normal"
                fullWidth
                error={!!errors["experience.company"]}
                helperText={errors["experience.company"]}
              />
              <TextField
                label="Start Date"
                type="date"
                name="experience.startDate"
                value={formData.experience.startDate}
                onChange={handleInputChange}
                margin="normal"
                fullWidth
                InputLabelProps={{ shrink: true }}
                error={!!errors["experience.startDate"]}
                helperText={errors["experience.startDate"]}
              />
              <TextField
                label="End Date"
                type="date"
                name="experience.endDate"
                value={formData.experience.endDate}
                onChange={handleInputChange}
                margin="normal"
                fullWidth
                InputLabelProps={{ shrink: true }}
                error={!!errors["experience.endDate"]}
                helperText={errors["experience.endDate"]}
              />
              <TextField
                label="Qualification"
                name="education.qualification"
                value={formData.education.qualification}
                onChange={handleInputChange}
                margin="normal"
                fullWidth
                error={!!errors["education.qualification"]}
                helperText={errors["education.qualification"]}
              />
              <TextField
                label="Institute"
                name="education.institute"
                value={formData.education.institute}
                onChange={handleInputChange}
                margin="normal"
                fullWidth
                error={!!errors["education.institute"]}
                helperText={errors["education.institute"]}
              />
              <TextField
                label="End Date"
                type="date"
                name="education.endDate"
                value={formData.education.endDate}
                onChange={handleInputChange}
                margin="normal"
                fullWidth
                InputLabelProps={{ shrink: true }}
                error={!!errors["education.endDate"]}
                helperText={errors["education.endDate"]}
              />
              <div className="text-center mt-4">
                <Button variant="contained" color="primary" onClick={handleSubmit}>
                  {isUpdating ? "Update" : "Create"}
                </Button>
                <Button variant="outlined" color="secondary" onClick={handleCancel} style={{ marginLeft: "10px" }}>
                  Cancel
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer
        links={links}
        logo="/logo.png"
        primaryColor={primaryColor}
        primaryFontColor={primaryFontColor}
        secondaryFontColor={secondaryFontColor}
        cardColor={cardColor}
        footerLinkColor={footerLinkColor}
      />
    </div>
  );
};

export default CandidateProfilePage;
