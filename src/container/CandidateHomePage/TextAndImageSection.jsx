import React from "react";
import Form from "react-bootstrap/Form";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import  candidateHeroImg from "../../assets/candidateHeroImg.png";
import axios from "axios";
import Card from "react-bootstrap/Card";
import { blue } from "@mui/material/colors";
import { useState } from "react";


const TextAndImageSection = ({ primaryColor, primaryFontColor }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [results, setResults] = useState([]);

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.get(`http://localhost:5000/api/jobs/all?search=${searchTerm}`);
      setResults(response.data);
    } catch (error) {
      console.error('Error fetching search results', error);
    }
  };

  return (
    <div className="container-fluid text-sm-center" style={{ background: primaryColor }}>
      <div className="row">
        <div className="col-md-6 col-sm-12 p-md-5 p-0">
          <div>
            <div className="hero-text px-lg-5 px-0 text-center text-md-start ">
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
            <div className="search-bar p-lg-5 p-0">
              <Form className="d-flex justify-content-center justify-content-md-start">
                <Form.Control
                  type="search"
                  placeholder="Search"
                  className="me-2 home-form-search"
                  aria-label="Search"
                  value={searchTerm}
                  onChange={handleInputChange}
                />
                <span
                  className="input-group-text"
                  style={{
                    backgroundColor: primaryColor,
                    color: primaryFontColor,
                  }}
                  onClick={handleSubmit}
                >
                  <FontAwesomeIcon icon={faSearch} />
                </span>
              </Form>
            </div>
          </div>
          <div className="d-flex flex-wrap justify-content-center">
            {results.length > 0 ? (
              results.map((result, idx) => (
                <Card
                  key={idx}
                  style={{
                    width: "18rem",
                    height: "15rem",
                    background: "blue",
                    borderRadius: "20px",
                    margin: "10px"
                  }}
                >
                  <Card.Body className="text-center p-3">
                    <FontAwesomeIcon
                      icon={faSearch} // Use appropriate icon for the job category or result
                      style={{ fontSize: "50px", color: primaryFontColor }}
                    />
                    <Card.Title
                      className="mt-4"
                      style={{ color: primaryFontColor }}
                    >
                      {result.title} {/* Adjust according to your API response */}
                    </Card.Title>
                    <Card.Text
                      style={{ color: primaryFontColor }}
                    >
                      {result.description} {/* Adjust according to your API response */}
                    </Card.Text>
                  </Card.Body>
                </Card>
              ))
            ) : (
              <p>No results found</p>
            )}
          </div>
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
