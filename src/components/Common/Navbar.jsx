import React, { useState, useEffect } from "react";
import { Navbar as BootstrapNavbar, Nav } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import { getUserProfile, getCompanyProfile } from "../../Api/Profile";
import defaultProfileImage from "../../assets/default.jpeg";

const Navbar = ({ logo, primaryFontColor, primaryColor }) => {
  const role = sessionStorage.getItem("role");
  const location = useLocation();
  console.log("Role:", role);

  const [profileImage, setProfileImage] = useState(defaultProfileImage);

  useEffect(() => {
    const fetchProfileImage = async () => {
      const token = sessionStorage.getItem("user");
      console.log("Token:", token);

      if (token) {
        try {
          if (role === "candidate") {
            const userProfile = await getUserProfile(token);
            console.log("User Profile:", userProfile);
            if (userProfile.profileImage) {
              setProfileImage(userProfile.profileImage);
            }
          } else if (role === "company") {
            const companyProfile = await getCompanyProfile(token);
            console.log("Company Profile:", companyProfile);
            if (companyProfile.companyLogo) {
              setProfileImage(companyProfile.companyLogo);
            }
          }
        } catch (error) {
          console.error("Error fetching profile:", error);
        }
      } else {
        console.log("No token found");
      }
    };

    fetchProfileImage();
  }, [role]);

  const candidateLinks = [
    { text: "Home", url: "/candidate_home" },
    { text: "Find Job", url: "/find-job" },
    { text: "Applications", url: "/my_applications" },
    { text: "Logout", url: "/", onClick: () => sessionStorage.clear() },
  ];

  const employerLinks = [
    { text: "Home", url: "/home" },
    { text: "Job Applications", url: "/candidate_applications" },
    { text: "Logout", url: "/", onClick: () => sessionStorage.clear() },
  ];

  const links = role === "candidate" ? candidateLinks : employerLinks;

  return (
    <BootstrapNavbar
      expand="lg"
      style={{
        backgroundColor: primaryColor,
        position: "sticky",
        top: "0",
        width: "100%",
        zIndex: "999",
      }}
    >
      <BootstrapNavbar.Brand href="#home">
        <img src={logo} alt="Logo" style={{ height: "80px", width: "200px" }} />
      </BootstrapNavbar.Brand>
      <BootstrapNavbar.Toggle aria-controls="basic-navbar-nav" />
      <BootstrapNavbar.Collapse
        id="basic-navbar-nav"
        style={{ justifyContent: "right" }}
      >
        <Nav style={{ fontSize: 18, fontWeight: "bold" }}>
          {links.map((link, index) => (
            <Nav.Link
              key={index}
              href={link.url}
              style={{
                color: primaryFontColor,
                marginRight: "40px",
                fontWeight: location.pathname === link.url ? "bold" : "normal",
              }}
              onClick={link.onClick}
            >
              {link.text}
            </Nav.Link>
          ))}
        </Nav>

        <Link
          to={role === "candidate" ? "/candidate_profile" : "/employer_profile"}
          style={{
            color: primaryFontColor,
            marginRight: "10px",
            height: "60px",
            width: "60px",
            display: "flex",
            alignItems: "center",
          }}
        >
          <img
            src={profileImage || defaultProfileImage}
            alt="Profile"
            style={{ height: "60px", width: "60px", borderRadius: "50%" }}
          />
        </Link>
      </BootstrapNavbar.Collapse>
    </BootstrapNavbar>
  );
};

export default Navbar;
