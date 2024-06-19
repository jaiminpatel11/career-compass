import React from "react";
import { Navbar as BootstrapNavbar, Nav } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";

const Navbar = ({ logo, links, primaryFontColor, primaryColor }) => {
  return (
    <BootstrapNavbar
      expand="lg"
      style={{
        backgroundColor: primaryColor,
        position: "sticky",
        top: "0",
        width: " 100%",
        zIndex: "999",
      }}
    >
      <BootstrapNavbar.Brand href="#home">
        <img src={logo} alt="Logo" style={{ height: "80px", width: "200" }} />
      </BootstrapNavbar.Brand>
      <BootstrapNavbar.Toggle aria-controls="basic-navbar-nav" />
      <BootstrapNavbar.Collapse
        id="basic-navbar-nav"
        style={{ justifyContent: "right" }}
      >
        {links.map((link, index) => (
          <Nav.Link
            key={index}
            href={link.url}
            style={{ color: primaryFontColor, marginRight: "40px" }}
            onClick={
              link.onClick
                ? (e) => {
                    e.preventDefault();
                    link.onClick();
                  }
                : null
            }
          >
            {link.text}
          </Nav.Link>
        ))}

        <Nav.Link
          href="#profile"
          style={{
            color: primaryFontColor,
            marginRight: "10px",
            height: "60px",
            width: "60px",
            display: "flex",
            alignItems: "center",
          }}
        >
          <FontAwesomeIcon icon={faUserCircle} size="3x" />
        </Nav.Link>
      </BootstrapNavbar.Collapse>
    </BootstrapNavbar>
  );
};

export default Navbar;
