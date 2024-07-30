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

  const [primaryColor, setPrimaryColor] = useState("");
  const [primaryFontColor, setPrimaryFontColor] = useState("");
  const [secondaryFontColor, setSecondaryFontColor] = useState("");
  const [cardColor, setCardColor] = useState("");
  const [footerLinkColor, setFooterLinkColor] = useState("");
  const [scrollPosition, setScrollPosition] = useState(0);


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
      // Handle scroll position
      const handleScroll = () => {
        setScrollPosition(window.scrollY); // Update scroll position state
      };
  
      window.addEventListener("scroll", handleScroll); // Add scroll event listener
  
      return () => {
        window.removeEventListener("scroll", handleScroll); // Clean up the event listener on unmount
      };
  }, []);

  return (
    <div>
      <Navbar
        logo="/logo.png"
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
