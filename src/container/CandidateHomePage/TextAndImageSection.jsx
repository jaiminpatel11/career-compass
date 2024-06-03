import React from "react";
import Form from "react-bootstrap/Form";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import  candidateHeroImg from "../../assets/candidateHeroImg.png" 



const TextAndImageSection = ({ primaryColor, primaryFontColor }) => {
  return (
    <div className="container-fluid" style={{ background: primaryColor }}>
      <div className="row">
        <div className="col-md-6 p-5" style={{}}>
          <div>
            <div className="hero-text px-5">
              <h2 className="" style={{ color: primaryFontColor }}>
                Find The Perfect
              </h2>
              <h2 className="" style={{ color: primaryFontColor }}>
                Job For You
              </h2>
              <h6 className="" style={{ color: primaryFontColor }}>
                Search your career opportunity through 12,800 jobs.
              </h6>
            </div>
            <div className="search-bar p-5">
              <Form className="d-flex">
                <Form.Control
                  type="search"
                  placeholder="Search"
                  className="me-2"
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

        <div className="col-md-6">
          <div className="hero-image">
          <div className="hero-image d-flex justify-content-end">
            <img src={candidateHeroImg} alt="Hero" style={{ width: '70%', height: '70%' }} />
          </div>          
          </div>
        </div>
      </div>
    </div>
  );
};

export default TextAndImageSection;
