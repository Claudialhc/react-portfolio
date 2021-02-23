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
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#link">Link</Nav.Link>
      <NavDropdown title="Dropdown" id="basic-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
      </NavDropdown>
    </Nav>
  </Navbar.Collapse>
</Navbar>
       
    // <nav className="navbar navbar-expand-lg navbar-light fixed-top bg-light">
    //   <a className="navbar-brand" href="#">Claudia Hernandez</a>
    //   <button
    //     className="navbar-toggler"
    //     type="button"
    //     data-toggle="collapse"
    //     data-target="#navbarSupportedContent"
    //     aria-controls="navbarSupportedContent"
    //     aria-expanded="false"
    //     aria-label="Toggle navigation"
    //   >
    //     <span className="navbar-toggler-icon"></span>
    //   </button>

    //   <div className="collapse navbar-collapse" id="navbarSupportedContent">
    //     <ul className="navbar-nav ml-auto">
    //       <li className="nav-item active">
    //         <a className="nav-link" href="index.html"
    //           >About Me<span class="sr-only">(current)</span></a
    //         >
    //       </li>
    //       <li className="nav-item">
    //         <a className="nav-link" href="portfolio.html">Portfolio</a>
    //       </li>
    //       <li className="nav-item">
    //         <a className="nav-link" href="contact.html">Contact</a>
    //       </li>
    //     </ul>
    //   </div>
    // </nav>
   
        )
    }
    
}