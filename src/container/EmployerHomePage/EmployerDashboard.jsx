import React, { useEffect, useState } from "react";
import Navbar from "../../components/Common/Navbar";
import EmployerDashboardHeader from "./EmployerDashboardHeader";
import Footer from "../../components/Common/Footer";
import JobPostings from "./JobPostings";

const EmployerDashboard = ({ name }) => {
  const links = [
    { text: "Home", url: "#" },
    { text: "Job Applications", url: "#" },
  ];
  const [primaryColor, setPrimaryColor] = useState("");
  const [primaryFontColor, setPrimaryFontColor] = useState("");
  const [secondaryFontColor, setSecondaryFontColor] = useState("");
  const [cardColor, setCardColor] = useState("");
  const [footerLinkColor, setFooterLinkColor] = useState("");

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
  }, []);

  return (
    <div>
      <Navbar
        logo="/logo.png"
        links={links}
        primaryFontColor={primaryFontColor}
        primaryColor={primaryColor}
      />
      <EmployerDashboardHeader
        primaryFontColor={primaryFontColor}
        primaryColor={primaryColor}
      />
      <div className="container mt-5">
        <JobPostings primaryFontColor={primaryFontColor} cardColor={cardColor} />
      </div>
      <Footer
        PrimaryColor={primaryColor}
        PrimaryFontColor={primaryFontColor}
        FooterLinkColor={footerLinkColor}
      />
    </div>
  );
};

export default EmployerDashboard;
