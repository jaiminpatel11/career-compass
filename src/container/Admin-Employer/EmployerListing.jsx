// // import React, { useEffect, useState } from "react";
// // import { Card, Pagination } from "@mui/material";
// // import {  LocationOn, Work } from "@mui/icons-material";
// // import { useNavigate } from 'react-router-dom';
// // import axios from 'axios';
// // import "./AdminEmployerPage.css";

// // const EmployersListing = ({ primaryColor, cardColor, searchTerm }) => {
// //   const [employers, setEmployers] = useState([]);
// //   const [filteredEmployers, setFilteredEmployers] = useState([]);
// //   // const [open, setOpen] = useState(false);
// //   // const [selectedUserId, setSelectedUserId] = useState(null);
// //   const navigate = useNavigate();

// //   useEffect(() => {
// //     const fetchEmployers = async () => {
// //       try {
// //         const response = await axios.get('http://localhost:5000/api/allcompanies', {
// //           headers: {
// //             "x-auth-token": sessionStorage.getItem("user")
// //           }
// //         });
// //         setEmployers(response.data);
// //         setFilteredEmployers(response.data);
// //       } catch (error) {
// //         console.error('Error fetching employers', error);
// //       }
// //     };

// //     fetchEmployers();
// //   }, []);

// //   useEffect(() => {
// //     if (searchTerm) {
// //       const filtered = employers.filter(employer =>
// //         employer.companyName.toLowerCase().includes(searchTerm.toLowerCase()) ||
// //         employer.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
// //         employer.location.toLowerCase().includes(searchTerm.toLowerCase())
// //       );
// //       setFilteredEmployers(filtered);
// //     } else {
// //       setFilteredEmployers(employers);
// //     }
// //   }, [searchTerm, employers]);

// //   const handleCardClick = (jobId) => {
// //     navigate(`/employer-details/${jobId}`);
// //   }

// //   return (
// //     <div className="container-fluid my-2 p-5">
// //       <div className="row">
// //         <div className="col-md-12 col-sm-12">
// //           <div className="text-center">
// //             <h2 style={{ color: primaryColor }}>
// //               Employers Listing
// //             </h2>
// //           </div>
// //           <div className="row">
// //             {filteredEmployers.length === 0 ? (
// //               <div>
// //                 There are no Employers at this time
// //               </div>
// //             ) : (
// //               filteredEmployers.map((employer) => (
// //                 <div className="col-md-4 mb-4" key={employer._id}>
// //                   <Card
// //                     className="card-container"
// //                     style={{ background: cardColor }}
// //                     onClick={() => handleCardClick(employer._id)}
// //                   >
// //                     {/* <h5 className="card-title">
// //                       {employer.companyName}
// //                     </h5>
// //                     <div className="icon-text">
// //                       <Work className="mx-2" />
// //                       {employer.description}
// //                     </div>
// //                     <div className="icon-text">
// //                       <LocationOn className="mx-2" />
// //                       {employer.location}
// //                     </div> */}
// //                     <h5 className="card-title">
// //                       {employer.title}
// //                     </h5>
// //                     <div className="icon-text">
// //                       <Work className="mx-2" />
// //                       {employer.description}
// //                     </div>
// //                     {/* Assuming location will be added or is part of another data source */}
// //                     <div className="icon-text">
// //                       <LocationOn className="mx-2" />
// //                       {/* {employer.location || 'Location not provided'} */}
// //                     </div>
                    
// //                   </Card>
// //                 </div>
// //               ))
// //             )}
// //           </div>
// //           <div className="d-flex justify-content-center mt-4">
// //             <Pagination
// //               count={Math.ceil(filteredEmployers.length / 10)}
// //               page={1}
// //               onChange={() => { }}
// //               color="primary"
// //             />
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   )
// // }

// // export default EmployersListing;

// import React, { useEffect, useState } from "react";
// import { Card, Pagination } from "@mui/material";
// import { LocationOn, Work } from "@mui/icons-material";
// import { useNavigate } from 'react-router-dom';
// import axios from 'axios';
// import "./AdminEmployerPage.css";

// const EmployersListing = ({ primaryColor, cardColor, searchTerm }) => {
//   const [employers, setEmployers] = useState([]);
//   const [filteredEmployers, setFilteredEmployers] = useState([]);
//   const [page, setPage] = useState(1); // Added state for pagination
//   const navigate = useNavigate();

//   useEffect(() => {
//     const fetchEmployers = async () => {
//       try {
//         const response = await axios.get('http://localhost:5000/api/profile/getAllEmployers', {
//           headers: {
//             "x-auth-token": sessionStorage.getItem("user")
//           }
//         });
//         console.log('API Response:', response.data); 
//         setEmployers(response.data);
//         setFilteredEmployers(response.data);
//       } catch (error) {
//         console.error('Error fetching employers', error);
//       }
//     };

//     fetchEmployers();
//   }, []);

//   useEffect(() => {
//     if (searchTerm) {
//       const filtered = employers.filter(employer =>
//         employer.companyName.toLowerCase().includes(searchTerm.toLowerCase()) ||
//         employer.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
//         employer.location?.toLowerCase().includes(searchTerm.toLowerCase()) // Added optional chaining
//       );
//       setFilteredEmployers(filtered);
//     } else {
//       setFilteredEmployers(employers);
//     }
//   }, [searchTerm, employers]);

//   const handleCardClick = (companyId) => { // Changed jobId to companyId
//     navigate(`/company-details/${companyId}`); // Adjusted URL
//   }

//   const handlePageChange = (event, value) => { // Added pagination handler
//     setPage(value);
//   };

//   const itemsPerPage = 10;
//   const startIndex = (page - 1) * itemsPerPage;
//   const endIndex = startIndex + itemsPerPage;
//   const paginatedEmployers = filteredEmployers.slice(startIndex, endIndex);

//   return (
//     <div className="container-fluid my-2 p-5">
//       <div className="row">
//         <div className="col-md-12 col-sm-12">
//           <div className="text-center">
//             <h2 style={{ color: primaryColor }}>
//               Employers Listing
//             </h2>
//           </div>
//           <div className="row">
//             {paginatedEmployers.length === 0 ? ( // Used paginatedEmployers for rendering
//               <div>
//                 There are no Employers at this time
//               </div>
//             ) : (
//               paginatedEmployers.map((employer) => ( // Used paginatedEmployers
//                 <div className="col-md-4 mb-4" key={employer._id}>
//                   <Card
//                     className="card-container"
//                     style={{ background: cardColor }}
//                     onClick={() => handleCardClick(employer._id)} // Used _id
//                   >
//                     <h5 className="card-title">
//                       {employer.companyName} {/* Used companyName */}
//                     </h5>
//                     <div className="icon-text">
//                       <Work className="mx-2" />
//                       {employer.description}
//                     </div>
//                     <div className="icon-text">
//                       <LocationOn className="mx-2" />
//                       {employer.location || 'Location not provided'} {/* Added fallback */}
//                     </div>
                    
//                   </Card>
//                 </div>
//               ))
//             )}
//           </div>
//           <div className="d-flex justify-content-center mt-4">
//             <Pagination
//               count={Math.ceil(filteredEmployers.length / itemsPerPage)}
//               page={page} // Used state for page
//               onChange={handlePageChange} // Added page change handler
//               color="primary"
//             />
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default EmployersListing;

import React, { useEffect, useState } from "react";
import { Card, Pagination } from "@mui/material";
import { LocationOn, Work } from "@mui/icons-material";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import "./AdminEmployerPage.css";

const EmployersListing = ({ primaryColor, cardColor, searchTerm }) => {
  const [employers, setEmployers] = useState([]);
  const [filteredEmployers, setFilteredEmployers] = useState([]);
  const [page, setPage] = useState(1);
  const itemsPerPage = 10;
  const navigate = useNavigate();

  useEffect(() => {
    const fetchEmployers = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/profile/getAllEmployers', {
          headers: {
            "x-auth-token": sessionStorage.getItem("user")
          }
        });
        console.log('API Response:', response.data); 
        setEmployers(response.data);
        setFilteredEmployers(response.data);
      } catch (error) {
        console.error('Error fetching employers:', error);
      }
    };

    fetchEmployers();
  }, []);

  useEffect(() => {
    if (searchTerm) {
      const filtered = employers.filter(employer =>
        employer.companyName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        employer.companyDescription.toLowerCase().includes(searchTerm.toLowerCase()) ||
        employer.address.city.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredEmployers(filtered);
    } else {
      setFilteredEmployers(employers);
    }
  }, [searchTerm, employers]);

  const handleCardClick = (empID) => {
    navigate(`/employer-profile/${empID}`);
  }

  
  const handlePageChange = (event, value) => {
    setPage(value);
  };

  const startIndex = (page - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const paginatedEmployers = filteredEmployers.slice(startIndex, endIndex);

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
            {paginatedEmployers.length === 0 ? (
              <div>
                There are no Employers at this time
              </div>
            ) : (
              paginatedEmployers.map((employer) => (
                <div className="col-md-4 mb-4" key={employer._id}>
                  <Card
                    className="card-container"
                    style={{ background: cardColor }}
                    onClick={() => handleCardClick(employer._id)}
                  >
                    <h5 className="card-title">
                      {employer.companyName}
                    </h5>
                    <div className="icon-text">
                      <Work className="mx-2" />
                      {employer.companyDescription}
                    </div>
                    <div className="icon-text">
                      <LocationOn className="mx-2" />
                      {employer.address.city}, {employer.address.country}
                    </div>
                  </Card>
                </div>
              ))
            )}
          </div>
          <div className="d-flex justify-content-center mt-4">
            <Pagination
              count={Math.ceil(filteredEmployers.length / itemsPerPage)}
              page={page}
              onChange={handlePageChange}
              color="primary"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default EmployersListing;
