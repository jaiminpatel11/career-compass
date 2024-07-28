import React, { useEffect, useState } from "react";
import Navbar from "../../components/Common/Navbar";
import { useNavigate } from "react-router-dom";
import Footer from "../../components/Common/Footer";

const AdminDashboard = ({}) => {
  const navigate = useNavigate();
  const handleLogout = () => {
    console.log("handleLogout");
    sessionStorage.removeItem("user");
    navigate("/");
  };

  const links = [
    { text: "Home", url: "#" },
    { text: "Find Job", url: "#" },
    { text: "Company", url: "#" },
    { text: "Blog", url: "#" },
    { text: "Logout", url: "#", onClick: handleLogout },
  ];

  const [primaryColor, setPrimaryColor] = useState("");
  const [primaryFontColor, setPrimaryFontColor] = useState("");
  const [secondaryFontColor, setSecondaryFontColor] = useState("");
  const [cardColor, setcardColor] = useState("");
  const [footerLinkColor, setfooterLinkColor] = useState("");
  const [scrollPosition, setScrollPosition] = useState(0);

  return (
    <div>
      {/* Include the Navbar component */}
      <Navbar
        logo="/logo.png"
        links={links}
        primaryFontColor={primaryFontColor}
        primaryColor={primaryColor}
      />
      <Footer
        PrimaryColor={primaryColor}
        PrimaryFontColor={primaryFontColor}
        FooterLinkColor={footerLinkColor}
      />
    </div>
  );
};

export default AdminDashboard;
