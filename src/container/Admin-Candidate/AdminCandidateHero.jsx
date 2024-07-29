import React from "react";
import Form from "react-bootstrap/Form";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import  candidateHeroImg from "../../assets/candidateHeroImg.png" 
import { Search } from "@mui/icons-material";
import Searchbar from "../../components/Common/Searchbar";


const HeroSection = ({ primaryColor, primaryFontColor,opacity}) => {
  return (
    <div className="container-fluid text-sm-center" style={{ background: primaryColor, opacity:opacity,}}>
      <div className="row">
        <div className="col-md-12 col-sm-12 p-md-5 p-0">
            <div className="hero-text px-lg-5 px-0 text-center ">
              <h1 className="" style={{ color: primaryFontColor }}>
                Candidate
              </h1>
              <h6 className="mt-4" style={{ color: primaryFontColor }}>
                Manage and Oversee All Candidates              </h6>
            </div>
            {/* <div className="search-bar p-lg-5 p-0">
              <Searchbar />
            </div> */}
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
