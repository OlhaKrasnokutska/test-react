import React from "react";
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import {Link} from "react-router-dom";
import Time from "../pages/time";

const Navigation = () => (
  <header>
    <Navbar expand="md">
        <Navbar.Brand><Time /></Navbar.Brand>
        <Navbar.Brand href ="/" activeStyle>Olha Krasnokutska</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link class="link" to="/certificates" activeStyle>Certificates</Link>
            <Link class="link" to="/contacts" activeStyle>Contact Me</Link>
          </Nav>
        </Navbar.Collapse>
    </Navbar>
    </header>
  );

export default Navigation;