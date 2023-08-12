import React, { useState, useEffect } from 'react';
import {useLocation } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Badge from 'react-bootstrap/Badge'; // Import the Bootstrap Badge component
import 'bootstrap/dist/css/bootstrap.css';
import { BsCart4 } from 'react-icons/bs';
import { FaUserPlus } from 'react-icons/fa';

function AppNavbar() {
  const [showBadge, setShowBadge] = useState(false);
  const location = useLocation();

  useEffect(() => {
    // Listen for changes in the URL to detect when the cart page is opened
    if (location.pathname === '/cart') {
      setShowBadge(false); // Hide the badge when the cart page is opened
    }
  }, [location]);
    // Clean up the event listener when the component unmounts
    
  return (
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary mb-9">
      <Container>
        <Navbar.Brand href="/">MART</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav>
            {/* Render the cart link with the badge */}
            <Nav.Link href="/cart">
              <BsCart4 />
              {showBadge && <Badge bg="danger" className="ms-1">1</Badge>}
            </Nav.Link>
            <Nav.Link eventKey={2} href="/login">
              <FaUserPlus />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default AppNavbar;
