import React, { Component } from 'react';
import Header from './components/Header';
import AboutMe from './components/AboutMe';
import Resume from './components/Resume';
import Portfolio from './components/Portfolio';
import Footer from './components/Footer';
import ContactPage from './components/ContactPage';
import "bootstrap/dist/css/bootstrap.css";
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <AboutMe />
      <Portfolio />
      <Resume />
      <ContactPage />
      <Footer />
    </div>
  );
}

export default App;
