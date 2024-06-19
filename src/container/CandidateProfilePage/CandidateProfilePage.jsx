// import React, { useState, useEffect } from "react";
// import Navbar from "../../components/Common/Navbar";
// import Footer from "../../components/Common/Footer";
// import { TextField, Button, IconButton, Alert } from "@mui/material";
// import axios from "axios";
// import { Edit } from "@mui/icons-material";
// import "./CandidateProfilePage.css";

// const CandidateProfilePage = () => {
//   const links = [
//     { text: "Home", url: "#" },
//     { text: "Find Job", url: "#" },
//     { text: "Applications", url: "#" },
//     { text: "Blog", url: "#" },
//   ];

//   const [primaryColor, setPrimaryColor] = useState("");
//   const [primaryFontColor, setPrimaryFontColor] = useState("");
//   const [secondaryFontColor, setSecondaryFontColor] = useState("");
//   const [cardColor, setCardColor] = useState("");
//   const [footerLinkColor, setFooterLinkColor] = useState("");

//   useEffect(() => {
//     const rootStyles = getComputedStyle(document.documentElement);
//     setPrimaryColor(rootStyles.getPropertyValue("--primary-color").trim());
//     setPrimaryFontColor(rootStyles.getPropertyValue("--primary-font-color").trim());
//     setSecondaryFontColor(rootStyles.getPropertyValue("--secondary-font-color").trim());
//     setCardColor(rootStyles.getPropertyValue("--card-color").trim());
//     setFooterLinkColor(rootStyles.getPropertyValue("--footer-link-color").trim());
//   }, []);

//   const [formData, setFormData] = useState({
//     email: "",
//     firstName: "",
//     lastName: "",
//     skills: "",
//     street: "",
//     city: "",
//     province: "",
//     country: "",
//     postal: "",
//     jobTitle: "",
//     jobDescription: "",
//     company: "",
//     startDate: "",
//     jobEndDate: "",
//     qualification: "",
//     institute: "",
//     educationEndDate: "",
//   });

//   const [errors, setErrors] = useState({});
//   const [alert, setAlert] = useState({ message: "", severity: "" });
//   const [profileImage, setProfileImage] = useState(null);

//   const handleInputChange = (event) => {
//     const { name, value } = event.target;
//     setFormData((prevData) => ({ ...prevData, [name]: value }));
//     setErrors((prevErrors) => ({ ...prevErrors, [name]: "" }));
//   };

//   const handleImageChange = (event) => {
//     const file = event.target.files[0];
//     if (file) {
//       setProfileImage(URL.createObjectURL(file));
//       setFormData((prevData) => ({ ...prevData, profileImage: file }));
//     }
//   };

//   const validateForm = () => {
//     const newErrors = {};
//     const fieldsToValidate = [
//       "email",
//       "firstName",
//       "lastName",
//       "skills",
//       "street",
//       "city",
//       "province",
//       "country",
//       "postal",
//       "jobTitle",
//       "jobDescription",
//       "company",
//       "startDate",
//       "jobEndDate",
//       "qualification",
//       "institute",
//       "educationEndDate",
//     ];

//     fieldsToValidate.forEach((field) => {
//       if (!formData[field]) {
//         newErrors[field] = `${field.charAt(0).toUpperCase() + field.slice(1)} is required`;
//       }
//     });

//     return newErrors;
//   };

//   const handleSubmit = async () => {
//     const validationErrors = validateForm();
//     if (Object.keys(validationErrors).length === 0) {
//       try {
//         const formDataWithImage = new FormData();
//         Object.keys(formData).forEach(key => {
//           formDataWithImage.append(key, formData[key]);
//         });

//         if (formData.profileImage) {
//           formDataWithImage.append('profileImage', formData.profileImage);
//         }

//         const token = sessionStorage.getItem("user"); // Adjust based on how you store the token
//         const response = await axios.post("http://localhost:5000/api/profile/updatecandidateprofile", formDataWithImage, {
//           headers: {
//             "Content-Type": "multipart/form-data",
//             "x-auth-token": token,
//           },
//         });

//         if (response.status === 201) {
//           setAlert({ message: "Profile updated successfully!", severity: "success" });
//         } else {
//           setAlert({ message: "Failed to update profile. Please try again.", severity: "error" });
//         }
//       } catch (error) {
//         setAlert({ message: "An error occurred while updating the profile.", severity: "error" });
//       }
//     } else {
//       setErrors(validationErrors);
//     }
//   };

//   const handleCancel = () => {
//     setFormData({
//       email: "",
//       firstName: "",
//       lastName: "",
//       skills: "",
//       street: "",
//       city: "",
//       province: "",
//       country: "",
//       postal: "",
//       jobTitle: "",
//       jobDescription: "",
//       company: "",
//       startDate: "",
//       jobEndDate: "",
//       qualification: "",
//       institute: "",
//       educationEndDate: "",
//     });
//     setProfileImage(null);
//   };

//   return (
//     <div>
//       <Navbar
//         logo="/logo.png"
//         links={links}
//         primaryFontColor={primaryFontColor}
//         primaryColor={primaryColor}
//       />
//       <div className="container">
//         <div className="row justify-content-center mt-5">
//           <div className="col-md-6">
//             <div className="text-center mb-4">
//               <div style={{ position: "relative", display: "inline-block" }}>
//                 <div
//                   style={{
//                     borderRadius: "50%",
//                     width: "200px",
//                     height: "200px",
//                     backgroundColor: "#e0e0e0",
//                     backgroundImage: profileImage ? `url(${profileImage})` : "none",
//                     backgroundSize: "cover",
//                     backgroundPosition: "center",
//                     display: "flex",
//                     alignItems: "center",
//                     justifyContent: "center",
//                   }}
//                 >
//                   {!profileImage && <Edit style={{ fontSize: 50, color: "#fff" }} />}
//                 </div>
//                 <input
//                   accept="image/*"
//                   style={{ display: "none" }}
//                   id="icon-button-file"
//                   type="file"
//                   onChange={handleImageChange}
//                 />
//                 <label htmlFor="icon-button-file">
//                   <IconButton
//                     aria-label="upload picture"
//                     component="span"
//                     style={{
//                       position: "absolute",
//                       bottom: 0,
//                       right: 0,
//                       backgroundColor: "white",
//                       borderRadius: "50%",
//                     }}
//                   >
//                     <Edit />
//                   </IconButton>
//                 </label>
//               </div>
//             </div>
//             {alert.message && (
//               <Alert
//                 className="mb-3"
//                 severity={alert.severity}
//                 onClose={() => setAlert({ message: "", severity: "" })}
//               >
//                 {alert.message}
//               </Alert>
//             )}
//             <div className="form-group text-center" style={{ marginTop: "25px" }}>
//               <h2 className="mb-2" style={{ color: secondaryFontColor }}>Account</h2>
//               <TextField
//                 fullWidth
//                 variant="outlined"
//                 label="Email"
//                 name="email"
//                 value={formData.email}
//                 onChange={handleInputChange}
//                 className="mb-3"
//                 error={!!errors.email}
//                 helperText={errors.email}
//               />
//             </div>
//             <div className="form-group text-center" style={{ marginTop: "25px" }}>
//               <h2 className="mb-2" style={{ color: secondaryFontColor }}>Personal Info</h2>
//               <TextField
//                 fullWidth
//                 variant="outlined"
//                 label="First Name"
//                 name="firstName"
//                 value={formData.firstName}
//                 onChange={handleInputChange}
//                 className="mb-3"
//                 error={!!errors.firstName}
//                 helperText={errors.firstName}
//               />
//               <TextField
//                 fullWidth
//                 variant="outlined"
//                 label="Last Name"
//                 name="lastName"
//                 value={formData.lastName}
//                 onChange={handleInputChange}
//                 className="mb-3"
//                 error={!!errors.lastName}
//                 helperText={errors.lastName}
//               />
//               <TextField
//                 fullWidth
//                 variant="outlined"
//                 label="Skills"
//                 name="skills"
//                 value={formData.skills}
//                 onChange={handleInputChange}
//                 className="mb-3"
//                 multiline
//                 rows={4}
//                 error={!!errors.skills}
//                 helperText={errors.skills}
//               />
//             </div>
//             <div className="form-group text-center" style={{ marginTop: "25px" }}>
//               <h2 className="mb-2" style={{ color: secondaryFontColor }}>Address</h2>
//               <TextField
//                 fullWidth
//                 variant="outlined"
//                 label="Street"
//                 name="street"
//                 value={formData.street}
//                 onChange={handleInputChange}
//                 className="mb-3"
//                 error={!!errors.street}
//                 helperText={errors.street}
//               />
//               <TextField
//                 fullWidth
//                 variant="outlined"
//                 label="City"
//                 name="city"
//                 value={formData.city}
//                 onChange={handleInputChange}
//                 className="mb-3"
//                 error={!!errors.city}
//                 helperText={errors.city}
//               />
//               <TextField
//                 fullWidth
//                 variant="outlined"
//                 label="Province"
//                 name="province"
//                 value={formData.province}
//                 onChange={handleInputChange}
//                 className="mb-3"
//                 error={!!errors.province}
//                 helperText={errors.province}
//               />
//               <TextField
//                 fullWidth
//                 variant="outlined"
//                 label="Country"
//                 name="country"
//                 value={formData.country}
//                 onChange={handleInputChange}
//                 className="mb-3"
//                 error={!!errors.country}
//                 helperText={errors.country}
//               />
//               <TextField
//                 fullWidth
//                 variant="outlined"
//                 label="Postal"
//                 name="postal"
//                 value={formData.postal}
//                 onChange={handleInputChange}
//                 className="mb-3"
//                 error={!!errors.postal}
//                 helperText={errors.postal}
//               />
//             </div>
//             <div className="form-group text-center" style={{ marginTop: "25px" }}>
//               <h2 className="mb-2" style={{ color: secondaryFontColor }}>Experience</h2>
//               <TextField
//                 fullWidth
//                 variant="outlined"
//                 label="Job Title"
//                 name="jobTitle"
//                 value={formData.jobTitle}
//                 onChange={handleInputChange}
//                 className="mb-3"
//                 error={!!errors.jobTitle}
//                 helperText={errors.jobTitle}
//               />
//               <TextField
//                 fullWidth
//                 variant="outlined"
//                 label="Job Description"
//                 name="jobDescription"
//                 value={formData.jobDescription}
//                 onChange={handleInputChange}
//                 className="mb-3"
//                 multiline
//                 rows={4}
//                 error={!!errors.jobDescription}
//                 helperText={errors.jobDescription}
//               />
//               <TextField
//                 fullWidth
//                 variant="outlined"
//                 label="Company"
//                 name="company"
//                 value={formData.company}
//                 onChange={handleInputChange}
//                 className="mb-3"
//                 error={!!errors.company}
//                 helperText={errors.company}
//               />
//               <TextField
//                 fullWidth
//                 variant="outlined"
//                 label="Start Date"
//                 name="startDate"
//                 type="date"
//                 InputLabelProps={{ shrink: true }}
//                 value={formData.startDate}
//                 onChange={handleInputChange}
//                 className="mb-3"
//                 error={!!errors.startDate}
//                 helperText={errors.startDate}
//               />
//               <TextField
//                 fullWidth
//                 variant="outlined"
//                 label="End Date"
//                 name="jobEndDate"
//                 type="date"
//                 InputLabelProps={{ shrink: true }}
//                 value={formData.jobEndDate}
//                 onChange={handleInputChange}
//                 className="mb-3"
//                 error={!!errors.jobEndDate}
//                 helperText={errors.jobEndDate}
//               />
//             </div>
//             <div className="form-group text-center" style={{ marginTop: "25px" }}>
//               <h2 className="mb-2" style={{ color: secondaryFontColor }}>Education</h2>
//               <TextField
//                 fullWidth
//                 variant="outlined"
//                 label="Qualification"
//                 name="qualification"
//                 value={formData.qualification}
//                 onChange={handleInputChange}
//                 className="mb-3"
//                 error={!!errors.qualification}
//                 helperText={errors.qualification}
//               />
//               <TextField
//                 fullWidth
//                 variant="outlined"
//                 label="Institute"
//                 name="institute"
//                 value={formData.institute}
//                 onChange={handleInputChange}
//                 className="mb-3"
//                 error={!!errors.institute}
//                 helperText={errors.institute}
//               />
//               <TextField
//                 fullWidth
//                 variant="outlined"
//                 label="End Date"
//                 name="educationEndDate"
//                 type="date"
//                 InputLabelProps={{ shrink: true }}
//                 value={formData.educationEndDate}
//                 onChange={handleInputChange}
//                 className="mb-3"
//                 error={!!errors.educationEndDate}
//                 helperText={errors.educationEndDate}
//               />
//             </div>
//             <div className="text-center mb-5" style={{ marginTop: "25px" }}>
//               <Button
//                 variant="contained"
//                 style={{
//                   backgroundColor: primaryFontColor,
//                   color: primaryColor,
//                   width: "250px",
//                   padding: "12px",
//                   borderRadius: "10px",
//                   border: "1px solid",
//                   marginRight: "50px",
//                 }}
//                 onClick={handleCancel}
//               >
//                 Cancel
//               </Button>
//               <Button
//                 variant="contained"
//                 style={{
//                   backgroundColor: primaryColor,
//                   color: primaryFontColor,
//                   width: "250px",
//                   padding: "12px",
//                   borderRadius: "10px",
//                   border: "1px solid",
//                 }}
//                 onClick={handleSubmit}
//               >
//                 Submit
//               </Button>
//             </div>
//           </div>
//         </div>
//       </div>

//       <Footer
//         PrimaryColor={primaryColor}
//         PrimaryFontColor={primaryFontColor}
//         FooterLinkColor={footerLinkColor}
//       />
//     </div>
//   );
// };

// export default CandidateProfilePage;


import React, { useState, useEffect } from "react";
import Navbar from "../../components/Common/Navbar";
import Footer from "../../components/Common/Footer";
import { TextField, Button, IconButton, Alert } from "@mui/material";
import axios from "axios";
import { Edit } from "@mui/icons-material";
import "./CandidateProfilePage.css";

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
    street: "",
    city: "",
    province: "",
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
  const [profileImage, setProfileImage] = useState(null);
  const [branches, setBranches] = useState([]);
  const [newBranchName, setNewBranchName] = useState("");

  useEffect(() => {
    const fetchBranches = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/branches");
        setBranches(response.data);
      } catch (error) {
        console.error("Error fetching branches:", error);
      }
    };

    fetchBranches();
  }, []);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
    setErrors((prevErrors) => ({ ...prevErrors, [name]: "" }));
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setProfileImage(URL.createObjectURL(file));
      setFormData((prevData) => ({ ...prevData, profileImage: file }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    const fieldsToValidate = [
      "email",
      "firstName",
      "lastName",
      "skills",
      "street",
      "city",
      "province",
      "country",
      "postal",
      "jobTitle",
      "jobDescription",
      "company",
      "startDate",
      "jobEndDate",
      "qualification",
      "institute",
      "educationEndDate",
    ];

    fieldsToValidate.forEach((field) => {
      if (!formData[field]) {
        newErrors[field] = `${field.charAt(0).toUpperCase() + field.slice(1)} is required`;
      }
    });

    return newErrors;
  };

  const handleSubmit = async () => {
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length === 0) {
      try {
        const formDataWithImage = new FormData();
        Object.keys(formData).forEach(key => {
          formDataWithImage.append(key, formData[key]);
        });

        if (formData.profileImage) {
          formDataWithImage.append('profileImage', formData.profileImage);
        }

        const token = sessionStorage.getItem("user"); // Adjust based on how you store the token
        const response = await axios.post("http://localhost:5000/api/profile/updatecandidateprofile", formDataWithImage, {
          headers: {
            "Content-Type": "multipart/form-data",
            "x-auth-token": token,
          },
        });

        if (response.status === 201) {
          setAlert({ message: "Profile updated successfully!", severity: "success" });
        } else {
          setAlert({ message: "Failed to update profile. Please try again.", severity: "error" });
        }
      } catch (error) {
        setAlert({ message: "An error occurred while updating the profile.", severity: "error" });
      }
    } else {
      setErrors(validationErrors);
    }
  };

  const handleCancel = () => {
    setFormData({
      email: "",
      firstName: "",
      lastName: "",
      skills: "",
      street: "",
      city: "",
      province: "",
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
    setProfileImage(null);
  };

  const handleCreateBranch = async () => {
    try {
      const response = await axios.post("http://localhost:5000/api/branches", { name: newBranchName });
      if (response.status === 201) {
        setBranches([...branches, response.data]);
        setNewBranchName("");
        setAlert({ message: "Branch created successfully!", severity: "success" });
      } else {
        setAlert({ message: "Failed to create branch. Please try again.", severity: "error" });
      }
    } catch (error) {
      setAlert({ message: "An error occurred while creating the branch.", severity: "error" });
    }
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
            {alert.message && (
              <Alert
                className="mb-3"
                severity={alert.severity}
                onClose={() => setAlert({ message: "", severity: "" })}
              >
                {alert.message}
              </Alert>
            )}
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
                error={!!errors.email}
                helperText={errors.email}
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
                error={!!errors.firstName}
                helperText={errors.firstName}
              />
              <TextField
                fullWidth
                variant="outlined"
                label="Last Name"
                name="lastName"
                value={formData.lastName}
                onChange={handleInputChange}
                className="mb-3"
                error={!!errors.lastName}
                helperText={errors.lastName}
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
                error={!!errors.skills}
                helperText={errors.skills}
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
                error={!!errors.street}
                helperText={errors.street}
              />
              <TextField
                fullWidth
                variant="outlined"
                label="City"
                name="city"
                value={formData.city}
                onChange={handleInputChange}
                className="mb-3"
                error={!!errors.city}
                helperText={errors.city}
              />
              <TextField
                fullWidth
                variant="outlined"
                label="Province"
                name="province"
                value={formData.province}
                onChange={handleInputChange}
                className="mb-3"
                error={!!errors.province}
                helperText={errors.province}
              />
              <TextField
                fullWidth
                variant="outlined"
                label="Country"
                name="country"
                value={formData.country}
                onChange={handleInputChange}
                className="mb-3"
                error={!!errors.country}
                helperText={errors.country}
              />
              <TextField
                fullWidth
                variant="outlined"
                label="Postal"
                name="postal"
                value={formData.postal}
                onChange={handleInputChange}
                className="mb-3"
                error={!!errors.postal}
                helperText={errors.postal}
              />
            </div>
            <div className="form-group text-center" style={{ marginTop: "25px" }}>
              <h2 className="mb-2" style={{ color: secondaryFontColor }}>Experience</h2>
              <TextField
                fullWidth
                variant="outlined"
                label="Job Title"
                name="jobTitle"
                value={formData.jobTitle}
                onChange={handleInputChange}
                className="mb-3"
                error={!!errors.jobTitle}
                helperText={errors.jobTitle}
              />
              <TextField
                fullWidth
                variant="outlined"
                label="Job Description"
                name="jobDescription"
                value={formData.jobDescription}
                onChange={handleInputChange}
                className="mb-3"
                multiline
                rows={4}
                error={!!errors.jobDescription}
                helperText={errors.jobDescription}
              />
              <TextField
                fullWidth
                variant="outlined"
                label="Company"
                name="company"
                value={formData.company}
                onChange={handleInputChange}
                className="mb-3"
                error={!!errors.company}
                helperText={errors.company}
              />
              <TextField
                fullWidth
                variant="outlined"
                label="Start Date"
                name="startDate"
                type="date"
                InputLabelProps={{ shrink: true }}
                value={formData.startDate}
                onChange={handleInputChange}
                className="mb-3"
                error={!!errors.startDate}
                helperText={errors.startDate}
              />
              <TextField
                fullWidth
                variant="outlined"
                label="End Date"
                name="jobEndDate"
                type="date"
                InputLabelProps={{ shrink: true }}
                value={formData.jobEndDate}
                onChange={handleInputChange}
                className="mb-3"
                error={!!errors.jobEndDate}
                helperText={errors.jobEndDate}
              />
            </div>
            <div className="form-group text-center" style={{ marginTop: "25px" }}>
              <h2 className="mb-2" style={{ color: secondaryFontColor }}>Education</h2>
              <TextField
                fullWidth
                variant="outlined"
                label="Qualification"
                name="qualification"
                value={formData.qualification}
                onChange={handleInputChange}
                className="mb-3"
                error={!!errors.qualification}
                helperText={errors.qualification}
              />
              <TextField
                fullWidth
                variant="outlined"
                label="Institute"
                name="institute"
                value={formData.institute}
                onChange={handleInputChange}
                className="mb-3"
                error={!!errors.institute}
                helperText={errors.institute}
              />
              <TextField
                fullWidth
                variant="outlined"
                label="End Date"
                name="educationEndDate"
                type="date"
                InputLabelProps={{ shrink: true }}
                value={formData.educationEndDate}
                onChange={handleInputChange}
                className="mb-3"
                error={!!errors.educationEndDate}
                helperText={errors.educationEndDate}
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
            <div className="form-group text-center" style={{ marginTop: "25px" }}>
              <h2 className="mb-2" style={{ color: secondaryFontColor }}>Create Branch</h2>
              <TextField
                fullWidth
                variant="outlined"
                label="Branch Name"
                name="branchName"
                value={newBranchName}
                onChange={(e) => setNewBranchName(e.target.value)}
                className="mb-3"
              />
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
                onClick={handleCreateBranch}
              >
                Create Branch
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
