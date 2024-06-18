import React from 'react';
import { Navbar as BootstrapNavbar, Nav } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom'; 

const Navbar = ({ logo, links, primaryFontColor, primaryColor, userType = 'employer'}) => {
    return (
        <BootstrapNavbar expand="lg" style={{ backgroundColor: primaryColor , position: 'sticky', top: '0' , width:' 100%', zIndex:'999' }} >
            <BootstrapNavbar.Brand href="#home">
                <img src={logo} alt="Logo" style={{ height: '80px', width: '200' }} />
            </BootstrapNavbar.Brand>
            <BootstrapNavbar.Toggle aria-controls="basic-navbar-nav" />
            <BootstrapNavbar.Collapse id="basic-navbar-nav" style={{ justifyContent: 'right' }}>

                <Nav style={{fontSize:18
                    ,fontWeight:'bold'}}>

                    {links.map((link, index) => (
                        <Nav.Link key={index} href={link.url} style={{ color: primaryFontColor,marginRight:'40px' }}>
                            {link.text}
                        </Nav.Link>
                    ))}

                </Nav>

                {/* <Nav.Link href="#profile" style={{ color: primaryFontColor,marginRight:'10px', height:'60px',width:'60px', display:'flex', alignItems:'center'}}>
                        <FontAwesomeIcon icon={faUserCircle} size="3x" />
                </Nav.Link> */}

                {/* Conditionally render link based on user type */}
                {userType === 'employer' && (
                    <Link to="/employer_profile" style={{ color: primaryFontColor, marginRight: '10px', height: '60px', width: '60px', display: 'flex', alignItems: 'center' }}>
                        <FontAwesomeIcon icon={faUserCircle} size="3x" />
                    </Link>
                )}

                {userType === 'candidate' && (
                    <Link to="/candidate-profile" style={{ color: primaryFontColor, marginRight: '10px', height: '60px', width: '60px', display: 'flex', alignItems: 'center' }}>
                        <FontAwesomeIcon icon={faUserCircle} size="3x" />
                    </Link>
                )}

            </BootstrapNavbar.Collapse>
        </BootstrapNavbar>
    );
};

export default Navbar;
