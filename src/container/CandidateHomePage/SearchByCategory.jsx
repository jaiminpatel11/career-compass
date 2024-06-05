import React from "react";

import { Carousel, Card } from "react-bootstrap"; // Import Bootstrap Carousel
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBullhorn,
  faLaptopCode,
  faTasks,
  faChartLine,
  faBusinessTime,
} from "@fortawesome/free-solid-svg-icons";
import { array } from "prop-types";

const SearchByCategory = ({ SecondaryFontColor, CardColor }) => {
  const categories = [
    {
      icon: faBullhorn,
      title: "Marketing & Communication",
      subtitle: "0 open position",
    },
    {
      icon: faLaptopCode,
      title: "Software Engineering",
      subtitle: "2 open positions",
    },
    {
      icon: faTasks,
      title: "Project Management",
      subtitle: "2 open positions",
    },
    {
      icon: faBusinessTime,
      title: "Business Development",
      subtitle: "0 open positions",
    },
    {
      icon: faBusinessTime,
      title: "Business Development",
      subtitle: "5 open positions",
    },
    {
      icon: faBusinessTime,
      title: "Business Development",
      subtitle: "8 open positions",
    },
  ];
  const chunkArray = (array, chunksize) => {
    const result = [];
    for (let i = 0; i < array.length; i += chunksize) {
      result.push(array.slice(i, i + chunksize));
    }
    return result;
  };

  const categoryChunks = chunkArray(categories, 3);

  return (
    <div className="container">
        <div className="row">
        <div className="col-md-12 pt-5">
        <div className="heading-content">
          <h2 style={{ color: SecondaryFontColor }}>Search By Category</h2>
          <h6 style={{ color: SecondaryFontColor }}>
            Search your career opportunity with our categories
          </h6>
        </div>
      </div>
      <div className="col-md-12 ">
        <div className="allCategory text-end">
          <h6 href="#" style={{ color: SecondaryFontColor }}>
            All Categories
          </h6>
        </div>
      </div>
      <div className="col-md-12 p-5">
        <Carousel>
          {categoryChunks.map((chunk, index) => (
            <Carousel.Item key={index}>
              <div className="d-flex justify-content-around">
                {chunk.map((category, idx) => (
                  <Card
                    key={idx}
                    style={{
                      width: "18rem",
                      height: "15rem",
                      background: CardColor,
                      borderRadius: "60px",
                    }}
                  >
                    <Card.Body className="text-center">
                      <FontAwesomeIcon
                        icon={category.icon}
                        style={{ fontSize: "50px", color: "", marginTop:'16px' }}
                      />
                      <Card.Title
                        className="mt-5 align-items-center"
                        style={{ color: "", height:'50px', fontSize:'22px' }}
                      >
                        {category.title}
                      </Card.Title>
                      <Card.Text
                        className="d-flext align-items-end"
                        style={{ color: "" }}
                      >
                        {category.subtitle}
                      </Card.Text>
                    </Card.Body>
                  </Card>
                ))}
              </div>
            </Carousel.Item>
          ))}
        </Carousel>
      </div>
        </div>
      

      
    </div>
  );
};

export default SearchByCategory;
