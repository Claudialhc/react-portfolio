import React, { Component } from "react";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";

export default class Header extends Component { 
    
        render () {
        return (
            <Navbar bg="light" expand="lg">
  <Navbar.Brand href="#home">Claudia Hernandez</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="#home">About Me</Nav.Link>
      <Nav.Link href="#portfolio">Portfolio</Nav.Link>
      <Nav.Link href="#contact">Contact Me</Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>
   
        )
    }
    
}