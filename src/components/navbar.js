import React from 'react';
import { Nav, Navbar, Container } from 'react-bootstrap';

function NavbarComp() {
  return (
    <Navbar bg="primary" expand="md">
    <Container>
      <Navbar.Brand href="/home">Malebo Sambo</Navbar.Brand>
        <Navbar.Toogle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/home">Home</Nav.Link>
            <Nav.Link href="/github">GitHub</Nav.Link>
            <Nav.Link href="/websites">Websites</Nav.Link>
            <Nav.Link href="/apps">Apps</Nav.Link>
            <Nav.Link href="/iot">IoT</Nav.Link>
            <Nav.Link href="/network">Networks</Nav.Link>
            <Nav.Link href="/contact">Contacts</Nav.Link>
            <Nav.Link href="/login">Login</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>       
  )
}

export default NavbarComp;