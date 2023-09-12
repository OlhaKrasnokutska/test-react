import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Header() {
  return (
    <header>
      <Navbar data-bs-theme="light">
        <Container>
          <Navbar.Brand href="#home">Olha Krasnokutska</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#features">Certificates</Nav.Link>
            <Nav.Link href="#pricing">Contacts</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      </header>
  );
}

export default Header;
