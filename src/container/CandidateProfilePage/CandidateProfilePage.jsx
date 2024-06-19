import React, { useEffect, useState } from "react";
import Navbar from "../../components/Common/Navbar";
import Footer from "../../components/Common/Footer";
import Account from "./Account";
import { useNavigate } from "react-router-dom";
import "../SignupPage/Register.css";
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

  const navigate = useNavigate();

  return (
    <div>
      <Navbar
        logo="/logo.png"
        links={links}
        primaryFontColor={primaryFontColor}
        primaryColor={primaryColor}
      />
      <Account
        primaryColor={primaryColor}
        primaryFontColor={primaryFontColor}
      />
      <Footer
        PrimaryColor={primaryColor}
        PrimaryFontColor={primaryFontColor}
        FooterLinkColor={footerLinkColor}
      />
    </div>
  );
};

export default CandidateProfilePage;
