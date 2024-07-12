import React, { useState } from "react";
import axios from "axios";
import Form from "react-bootstrap/Form";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import ListGroup from "react-bootstrap/ListGroup";

const Searchbar = () => {
  const [input, setInput] = useState("");
  const [filteredJobs, setFilteredJobs] = useState([]);
  const [suggestions, setSuggestions] = useState([]);
  const navigate = useNavigate();

  const fetchData = async (value) => {
    try {
      const token = sessionStorage.getItem("user");
      const response = await axios.get("http://localhost:5000/api/jobs/all", {
        headers: {
          "x-auth-token": token,
        },
      });

      // Filter jobs by title if value matches a title, otherwise by location
      const titleSearchResult = response.data.filter((job) =>
        job.title.toLowerCase().includes(value.toLowerCase())
      );

      const locationSearchResult = response.data.filter((job) =>
        job.location.toLowerCase().includes(value.toLowerCase())
      );

      // Concatenate unique jobs from title and location search results
      const searchResult = [...new Set([...titleSearchResult, ...locationSearchResult])];

      setFilteredJobs(searchResult);
      setSuggestions(searchResult.slice(0, 5)); // Limit suggestions to 5 items
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const handleInputChange = (value) => {
    setInput(value);
    if (value.trim() !== "") {
      fetchData(value);
    } else {
      setSuggestions([]);
    }
  };

  const handleSearch = () => {
    if (input.trim() !== "") {
      navigate("/find-jobs", { state: { jobs: filteredJobs } });
    }
  };

  const handleSuggestionClick = (job) => {
    navigate("/find-jobs", { state: { jobs: [job] } });
    setInput(""); // Clear input after suggestion click
    setSuggestions([]); // Clear suggestions after suggestion click
  };

  return (
    <div className="col-md-12 col-sm-12">
      <div className="searchbar-wrapper">
        <Form className="d-flex justify-content-center justify-content-md-start">
          <Form.Control
            type="search"
            placeholder="Search"
            className="me-2 home-form-search"
            aria-label="Search"
            value={input}
            onChange={(e) => handleInputChange(e.target.value)}
            style={{
                position: "relative"
            }}
          />
          <span
            className="input-group-text"
            onClick={handleSearch}
            style={{ cursor: "pointer" }}
          >
            <FontAwesomeIcon icon={faSearch} />
          </span>
        </Form>
        {suggestions.length > 0 && (
          <ListGroup
            style={{
              position: "absolute",
              width: "inherit",
              zIndex: 1000,
              maxHeight: "200px",
              overflow: "scroll"
            }}
          >
            {suggestions.map((job) => (
              <ListGroup.Item
                key={job._id}
                onClick={() => handleSuggestionClick(job)}
                action // Add action prop to make list items clickable
              >
                <div>
                  <strong>{job.title}</strong>
                </div>
                <div>{job.location}</div>
                <div>{job.role}</div>
                <div>{job.skills.join(", ")}</div>
              </ListGroup.Item>
            ))}
          </ListGroup>
        )}
      </div>
    </div>
  );
};

export default Searchbar;



