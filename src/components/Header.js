import React, { Component } from "react";

function Header () { 
        return {
       <div>
    <nav className="navbar navbar-expand-lg navbar-light fixed-top bg-light">
      <a className="navbar-brand" href="#">Claudia Hernandez</a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item active">
            <a className="nav-link" href="index.html"
              >About Me<span class="sr-only">(current)</span></a
            >
          </li>
          <li className="nav-item">
            <a className="nav-link" href="portfolio.html">Portfolio</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="contact.html">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
   

    }
    
}