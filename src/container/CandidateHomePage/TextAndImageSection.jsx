import React from "react";
import Form from "react-bootstrap/Form";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import  candidateHeroImg from "../../assets/candidateHeroImg.png" 



const TextAndImageSection = ({ primaryColor, primaryFontColor }) => {
  return (
    <div className="container-fluid text-sm-center" style={{ background: primaryColor }}>
      <div className="row">
        <div className="col-md-6 col-sm-12 p-md-5 p-0">
          <div>
            <div className="hero-text px-md-5 px-0 text-center text-md-start ">
              <h1 className="" style={{ color: primaryFontColor }}>
                Find The Perfect
              </h1>
              <h1 className="" style={{ color: primaryFontColor }}>
                Job For You
              </h1>
              <h6 className="" style={{ color: primaryFontColor }}>
                Search your career opportunity through 12,800 jobs.
              </h6>
            </div>
            <div className="search-bar p-md-5 p-0">
              <Form className="d-flex justify-content-center justify-content-md-start">
                <Form.Control
                  type="search"
                  placeholder="Search"
                  className="me-2 home-form-search"
                  aria-label="Search"
                />
                <span
                  className="input-group-text"
                  style={{
                    backgroundColor: primaryColor,
                    color: primaryFontColor,
                  }}
                >
                  <FontAwesomeIcon icon={faSearch} />
                </span>
              </Form>
            </div>
          </div>

          {/* Add search functionality here */}
        </div>

        <div className="col-md-6 col-sm-12  mt-5 mt-md-0">
          <div className="hero-image">
          <div className="hero-image d-flex justify-content-center justify-content-md-end">
            <img src={candidateHeroImg} alt="Hero" style={{ width: '70%', height: '70%' }} />
          </div>          
          </div>
        </div>
      </div>
    </div>
  );
};

export default TextAndImageSection;
