// // import React, { useEffect, useState } from "react";
// // import { useParams } from "react-router-dom";
// // import axios from "axios";
// // import { Card, CircularProgress } from "@mui/material";
// // import "./AdminEmployerPage.css";

// // const EmployerProfileInfo = () => {
// //   const { empID } = useParams();
// //   const [employer, setEmployer] = useState(null);
// //   const [loading, setLoading] = useState(true);

// //   useEffect(() => {
// //     const fetchEmployerDetails = async () => {
// //       try {
// //         const response = await axios.get(
// //           `http://localhost:5000/api/profile/getEmployerAdmin/${empID}`,
// //           {
// //             headers: {
// //               "x-auth-token": sessionStorage.getItem("user"),
// //             },
// //           }
// //         );
// //         setEmployer(response.data);
// //         setLoading(false);
// //       } catch (error) {
// //         console.error("Error fetching employer details", error);
// //         setLoading(false);
// //       }
// //     };

// //     fetchEmployerDetails();
// //   }, [empID]);

// //   if (loading) {
// //     return (
// //       <div className="loading">
// //         <CircularProgress />
// //       </div>
// //     );
// //   }

// //   if (!employer) {
// //     return <div className="error">Error loading Employer details</div>;
// //   }

 
// //   const { profileImage,email ,address, companyName, companyDescription, industry, userId:user } = employer;
  

// //   return (
// //     <div className="container-fluid my-2 p-sm-5">
// //       <div className="row">
// //         <div className="col-12 text-center p-5">
// //           <img
// //             src={`http://localhost:5000/uploads/${profileImage
// //               .split("\\")
// //               .pop()}`}
// //             alt="Profile"
// //             className="profile-image"
// //           />
// //           <h2 className="section-title">Company Info</h2>
// //           <div className="row">
// //             <div className="col-md-6">
// //               <div className="info-item">
// //                 <label>Email:</label>
// //                 <input
// //                   className="text-color"
// //                   type="email"
// //                   value={email}
// //                   disabled
// //                 />
// //               </div>
// //               <div className="info-item">
// //                 <label>Company Name:</label>
// //                 <input
// //                   className="text-color"
// //                   type="text"
// //                   value={companyName}
// //                   disabled
// //                 />
// //               </div>
// //               <div className="info-item">
// //                 <label>Industry:</label>
// //                 <input
// //                   className="text-color"
// //                   type="text"
// //                   value={industry}
// //                   disabled
// //                 />
// //               </div>
// //               <div className="info-item">
// //                 <label>Description:</label>
// //                 <input
// //                   className="text-color"
// //                   type="text"
// //                   value={companyDescription}
// //                   disabled
// //                 />
// //               </div>
// //             </div>
// //           </div>

// //           <h2 className="section-title">Address</h2>
// //           <div className="row">
// //             <div className="col-md-6">
// //               <div className="info-item">
// //                 <label>Street:</label>
// //                 <input
// //                   className="text-color"
// //                   type="text"
// //                   value={address.street}
// //                   disabled
// //                 />
// //               </div>
// //               <div className="info-item">
// //                 <label>Country:</label>
// //                 <input
// //                   className="text-color"
// //                   type="text"
// //                   value={address.country}
// //                   disabled
// //                 />
// //               </div>
// //               <div className="info-item">
// //                 <label>City:</label>
// //                 <input
// //                   className="text-color"
// //                   type="text"
// //                   value={address.city}
// //                   disabled
// //                 />
// //               </div>
// //               <div className="info-item">
// //                 <label>Postal:</label>
// //                 <input
// //                   className="text-color"
// //                   type="text"
// //                   value={address.postalCode}
// //                   disabled
// //                 />
// //               </div>
// //             </div>
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default EmployerProfileInfo;


// import React, { useEffect, useState } from "react";
// import { useParams } from 'react-router-dom';
// import axios from 'axios';
// import { CircularProgress } from '@mui/material';
// import "./AdminEmployerPage.css"; // Ensure this CSS file exists and is properly linked

// const EmployerProfileInfo = () => {
//   const { empID } = useParams(); // Get the employer ID from the URL params
//   const [employer, setEmployer] = useState(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchEmployerDetails = async () => {
//       try {
//         const response = await axios.get(`http://localhost:5000/api/profile/getEmployerAdmin/${empID}`, {
//           headers: {
//             'x-auth-token': sessionStorage.getItem('user')
//           }
//         });
//         setEmployer(response.data);
//         setLoading(false);
//       } catch (error) {
//         console.error('Error fetching employer details', error);
//         setLoading(false);
//       }
//     };

//     fetchEmployerDetails();
//   }, [empID]);

//   if (loading) {
//     return <div className="loading"><CircularProgress /></div>;
//   }

//   if (!employer) {
//     return <div className="error">Error loading employer details</div>;
//   }

//   const { address, companyName, companyDescription, industry, userId={userId: empID} } = employer;
//   const { email } = userId;

//   return (
//     <div className="container-fluid my-2 p-sm-5">
//       <div className="row">
//         <div className="col-12 text-center p-5">
//           <h2 className="section-title">Employer Info</h2>
//           <div className="row">
//             <div className="col-md-6">
//               <div className="info-item">
//                 <label>Email:</label>
//                 <input className="text-color" type="email" value={email} disabled />
//               </div>
//               <div className="info-item">
//                 <label>Company Name:</label>
//                 <input className="text-color" type="text" value={companyName} disabled />
//               </div>
//               <div className="info-item">
//                 <label>Industry:</label>
//                 <input className="text-color" type="text" value={industry} disabled />
//               </div>
//             </div>
//             <div className="col-md-6">
//               <div className="info-item">
//                 <label>Company Description:</label>
//                 <input className="text-color" type="text" value={companyDescription} disabled />
//               </div>
//             </div>
//           </div>

//           <h2 className="section-title">Address</h2>
//           <div className="row">
//             <div className="col-md-6">
//               <div className="info-item">
//                 <label>Street:</label>
//                 <input className="text-color" type="text" value={address.street} disabled />
//               </div>
//               <div className="info-item">
//                 <label>Country:</label>
//                 <input className="text-color" type="text" value={address.country} disabled />
//               </div>
//             </div>
//             <div className="col-md-6">
//               <div className="info-item">
//                 <label>City:</label>
//                 <input className="text-color" type="text" value={address.city} disabled />
//               </div>
//               <div className="info-item">
//                 <label>Postal Code:</label>
//                 <input className="text-color" type="text" value={address.postalCode} disabled />
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default EmployerProfileInfo;

// import React, { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import axios from "axios";
// import { CircularProgress } from "@mui/material";
// import "./AdminEmployerPage.css";

// const EmployerProfileInfo = () => {
//   const { empID } = useParams(); // This is the company profile ID
//   const [employer, setEmployer] = useState(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchEmployerDetails = async () => {
//       try {
//         const response = await axios.get(
//           `http://localhost:5000/api/profile/getEmployerAdmin/${empID}`,
//           {
//             headers: {
//               "x-auth-token": sessionStorage.getItem("user"),
//             },
//           }
//         );

//         const userId = response.data.userId._id; // Extract userId._id from response

//         // Fetch user details using userId
//         const userResponse = await axios.get(
//           `http://localhost:5000/api/profile/getUserDetails/${userId}`,
//           {
//             headers: {
//               "x-auth-token": sessionStorage.getItem("user"),
//             },
//           }
//         );

//         setEmployer(userResponse.data);
//         setLoading(false);
//       } catch (error) {
//         console.error("Error fetching employer details", error);
//         setLoading(false);
//       }
//     };

//     fetchEmployerDetails();
//   }, [empID]);

//   if (loading) {
//     return <div className="loading"><CircularProgress /></div>;
//   }

//   if (!employer) {
//     return <div className="error">Error loading employer details</div>;
//   }

//   const { address, companyName, companyDescription, industry } = employer;

//   return (
//     <div className="container-fluid my-2 p-sm-5">
//       <div className="row">
//         <div className="col-12 text-center p-5">
//           <h2 className="section-title">Employer Info</h2>
//           <div className="row">
//             <div className="col-md-6">
//               <div className="info-item">
//                 <label>Email:</label>
//                 <input className="text-color" type="email" value={employer.email} disabled />
//               </div>
//               <div className="info-item">
//                 <label>Company Name:</label>
//                 <input className="text-color" type="text" value={companyName} disabled />
//               </div>
//               <div className="info-item">
//                 <label>Industry:</label>
//                 <input className="text-color" type="text" value={industry} disabled />
//               </div>
//             </div>
//             <div className="col-md-6">
//               <div className="info-item">
//                 <label>Company Description:</label>
//                 <input className="text-color" type="text" value={companyDescription} disabled />
//               </div>
//             </div>
//           </div>

//           <h2 className="section-title">Address</h2>
//           <div className="row">
//             <div className="col-md-6">
//               <div className="info-item">
//                 <label>Street:</label>
//                 <input className="text-color" type="text" value={address.street} disabled />
//               </div>
//               <div className="info-item">
//                 <label>Country:</label>
//                 <input className="text-color" type="text" value={address.country} disabled />
//               </div>
//             </div>
//             <div className="col-md-6">
//               <div className="info-item">
//                 <label>City:</label>
//                 <input className="text-color" type="text" value={address.city} disabled />
//               </div>
//               <div className="info-item">
//                 <label>Postal Code:</label>
//                 <input className="text-color" type="text" value={address.postalCode} disabled />
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default EmployerProfileInfo;

// import React, { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import axios from "axios";
// import { CircularProgress } from "@mui/material";
// import "./AdminEmployerPage.css";

// const EmployerProfileInfo = () => {
//   const { empID } = useParams(); // This is the company profile ID
//   const navigate = useNavigate();
//   const [employer, setEmployer] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [userDetails, setUserDetails] = useState(null);

//   useEffect(() => {
//     const fetchEmployerDetails = async () => {
//       try {
//         const response = await axios.get(
//           `http://localhost:5000/api/profile/getEmployerAdmin/${empID}`,
//           {
//             headers: {
//               "x-auth-token": sessionStorage.getItem("user"),
//             },
//           }
//         );

//         const userId = response.data.userId._id; // Extract userId._id from response
//         console.log("New empID:", userId);
//         setEmployer(response.data);

        
//         navigate(`/employer-profile/${newEmpID}`);
//         // Fetch user details using userId
//         const userResponse = await axios.get(
//           `http://localhost:5000/api/profile/getUserDetails/${userId}`,
//           {
//             headers: {
//               "x-auth-token": sessionStorage.getItem("user"),
//             },
//           }
//         );

//         setUserDetails(userResponse.data);
//         setLoading(false);
//       } catch (error) {
//         console.error("Error fetching employer details", error);
//         setLoading(false);
//       }
//     };

//     fetchEmployerDetails();
//   }, [empID]);

//   if (loading) {
//     return <div className="loading"><CircularProgress /></div>;
//   }

//   if (!employer || !userDetails) {
//     return <div className="error">Error loading employer details</div>;
//   }

//   const { address, companyName, companyDescription, industry } = employer;
//   const { email } = userDetails;

//   return (
//     <div className="container-fluid my-2 p-sm-5">
//       <div className="row">
//         <div className="col-12 text-center p-5">
//           <h2 className="section-title">Employer Info</h2>
//           <div className="row">
//             <div className="col-md-6">
//               <div className="info-item">
//                 <label>Email:</label>
//                 <input className="text-color" type="email" value={email} disabled />
//               </div>
//               <div className="info-item">
//                 <label>Company Name:</label>
//                 <input className="text-color" type="text" value={companyName} disabled />
//               </div>
//               <div className="info-item">
//                 <label>Industry:</label>
//                 <input className="text-color" type="text" value={industry} disabled />
//               </div>
//             </div>
//             <div className="col-md-6">
//               <div className="info-item">
//                 <label>Company Description:</label>
//                 <input className="text-color" type="text" value={companyDescription} disabled />
//               </div>
//             </div>
//           </div>

//           <h2 className="section-title">Address</h2>
//           <div className="row">
//             <div className="col-md-6">
//               <div className="info-item">
//                 <label>Street:</label>
//                 <input className="text-color" type="text" value={address.street} disabled />
//               </div>
//               <div className="info-item">
//                 <label>Country:</label>
//                 <input className="text-color" type="text" value={address.country} disabled />
//               </div>
//             </div>
//             <div className="col-md-6">
//               <div className="info-item">
//                 <label>City:</label>
//                 <input className="text-color" type="text" value={address.city} disabled />
//               </div>
//               <div className="info-item">
//                 <label>Postal Code:</label>
//                 <input className="text-color" type="text" value={address.postalCode} disabled />
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default EmployerProfileInfo;


// import React, { useEffect, useState } from "react";
// import { useParams } from 'react-router-dom';
// import axios from 'axios';
// import { CircularProgress } from '@mui/material';
// import "./AdminEmployerPage.css";

// const EmployerProfileInfo = () => {
//   const { empID } = useParams();
//   const [employer, setEmployer] = useState(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchEmployerDetails = async () => {
//       try {
//         const response = await axios.get(`http://localhost:5000/api/profile/getEmployerAdmin/${empID}`, {
//           headers: {
//             'x-auth-token': sessionStorage.getItem('user')
//           }
//         });
//         setEmployer(response.data);
//         setLoading(false);
//       } catch (error) {
//         console.error('Error fetching employer details', error);
//         setLoading(false);
//       }
//     };

//     fetchEmployerDetails();
//   }, [empID]);

//   if (loading) {
//     return <div className="loading"><CircularProgress /></div>;
//   }

//   if (!employer) {
//     return <div className="error">Error loading employer details</div>;
//   }

//   const { address, companyName, companyDescription, industry, userId } = employer;
//   const { email } = userId;

//   return (
//     <div className="container-fluid my-2 p-sm-5">
//       <div className="row">
//         <div className="col-12 text-center p-5">
//           <img src={employer.companyLogo} alt="Company Logo" className="profile-image"/>
//           <h2 className="section-title">Company Info</h2>
//           <div className="row">
//             <div className="col-md-6">
//               <div className="info-item">
//                 <label>Company Name:</label>
//                 <input className="text-color" type="text" value={companyName} disabled />
//               </div>
//               <div className="info-item">
//                 <label>Email:</label>
//                 <input className="text-color" type="email" value={email} disabled />
//               </div>
//             </div>
//             <div className="col-md-6">
//               <div className="info-item">
//                 <label>Industry:</label>
//                 <input className="text-color" type="text" value={industry} disabled />
//               </div>
//               <div className="info-item">
//                 <label>Description:</label>
//                 <input className="text-color" type="text" value={companyDescription} disabled />
//               </div>
//             </div>
//           </div>

//           <h2 className="section-title">Address</h2>
//           <div className="row">
//             <div className="col-md-6">
//               <div className="info-item">
//                 <label>Street:</label>
//                 <input className="text-color" type="text" value={address.street} disabled />
//               </div>
//               <div className="info-item">
//                 <label>City:</label>
//                 <input className="text-color" type="text" value={address.city} disabled />
//               </div>
//             </div>
//             <div className="col-md-6">
//               <div className="info-item">
//                 <label>Country:</label>
//                 <input className="text-color" type="text" value={address.country} disabled />
//               </div>
//               <div className="info-item">
//                 <label>Postal Code:</label>
//                 <input className="text-color" type="text" value={address.postalCode} disabled />
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default EmployerProfileInfo;


import React, { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { CircularProgress } from '@mui/material';
import "./AdminEmployerPage.css";

const EmployerProfileInfo = () => {
  const { empID } = useParams(); // Get empID from URL
  const [employer, setEmployer] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchEmployerDetails = async () => {
      try {
        // Fetch the employer profile using the empID
        const response = await axios.get(`http://localhost:5000/api/profile/getEmployerAdmin/${empID}`, {
          headers: {
            'x-auth-token': sessionStorage.getItem('user')
          }
        });
        setEmployer(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching employer details', error);
        setLoading(false);
      }
    };

    fetchEmployerDetails();
  }, [empID]);

  if (loading) {
    return <div className="loading"><CircularProgress /></div>;
  }

  if (!employer) {
    return <div className="error">Error loading employer details</div>;
  }

  const { userId, companyName, companyDescription, industry, address, companyLogo } = employer;
  const { email } = userId;

  return (
    <div className="container-fluid my-2 p-sm-5">
      <div className="row">
        <div className="col-12 text-center p-5">
          <h2 className="section-title">Employer Profile</h2>
          <img src={companyLogo} alt="Company Logo" className="profile-image"/>
          
          <div className="info-item">
            <label>Email:</label>
            <input className="text-color" type="text" value={email} disabled />
          </div>
          <div className="info-item">
            <label>Company Name:</label>
            <input className="text-color" type="text" value={companyName} disabled />
          </div>
          <div className="info-item">
            <label>Description:</label>
            <input className="text-color" type="text" value={companyDescription} disabled />
          </div>
          <div className="info-item">
            <label>Industry:</label>
            <input className="text-color" type="text" value={industry} disabled />
          </div>

          <h2 className="section-title">Address</h2>
          <div className="row">
            <div className="col-md-6">
              <div className="info-item">
                <label>Street:</label>
                <input className="text-color" type="text" value={address.street} disabled />
              </div>
              <div className="info-item">
                <label>City:</label>
                <input className="text-color" type="text" value={address.city} disabled />
              </div>
            </div>
            <div className="col-md-6">
              <div className="info-item">
                <label>Country:</label>
                <input className="text-color" type="text" value={address.country} disabled />
              </div>
              <div className="info-item">
                <label>Postal Code:</label>
                <input className="text-color" type="text" value={address.postalCode} disabled />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmployerProfileInfo;
