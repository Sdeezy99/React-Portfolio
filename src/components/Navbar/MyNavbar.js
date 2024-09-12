import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './MyNavbar.css';  // Import the custom CSS file

function MyNavbar (){
    return (
        <>
        <Navbar fixed='top' bg="dark" data-bs-theme="light" className="navbar-custom">
          <Container>
            <Nav className="mx-auto justify-content-center">
              <Nav.Link href="#home" className="fw-bold">Home</Nav.Link>
              <Nav.Link href="#about" className="fw-bold">About</Nav.Link>
              <Nav.Link href="#skills" className="fw-bold">Skills</Nav.Link>
              <Nav.Link href="#projects" className="fw-bold">Projects</Nav.Link>
            </Nav>
          </Container>
        </Navbar>
        </>
      );
}

export default MyNavbar;
