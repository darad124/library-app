import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';

function NavigationBar() {
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand as={Link} to="/">Library App</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link as={Link} to="/">Home</Nav.Link>
          <Nav.Link as={Link} to="/admin/add">Add Book</Nav.Link>
          <Nav.Link as={Link} to="/admin/search">Search</Nav.Link>
          <Nav.Link as={Link} to="/admin/edit">Edit/Delete Book</Nav.Link>
          <Nav.Link as={Link} to="/book">Book Detail</Nav.Link>
          <Nav.Link as={Link} to="/qr">QR Code</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavigationBar;
