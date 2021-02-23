import React, { Component } from "react";

export default class Portfolio extends Component {
  render() {
    return (
      <main role="main" className="flex-shrink-0">
        <div className="container main">
          <div className="row">
            <div className="col-md-9 col-sm-12">
              <div className="card">
                <div className="card-body">
                  <h1 className="card-title" id="portfolio">Portfolio</h1>
                  <hr />
                  <div className="container">
                    Welcome to my portfolio! Below you will find a collection of
                    some of my best work. Feel free to click
                    on the app repo you wish to see.
                    <hr></hr>
                    <button type="button" className="btn btn-outline-info">
                        <a
                          href="https://github.com/Claudialhc/MovieTaste"
                          target="_blank"
                          rel="noreferrer"
                        >
                          MovieTaste
                        </a>
                      </button>
                      <button type="button" className="btn btn-outline-info">
                        <a
                          href="https://github.com/Claudialhc/eatDaBurgerApp"
                          target="_blank"
                          rel="noreferrer"
                        >
                          Eat Da Burger
                        </a>
                      </button>
                      <button type="button" className="btn btn-outline-info">
                        <a
                          href="https://github.com/Claudialhc/EmployeeTracker"
                          target="_blank"
                          rel="noreferrer"
                        >
                          Employee Tracker
                        </a>
                      </button>
                      <button type="button" className="btn btn-outline-info">
                        <a
                          href="https://github.com/TechKoSpeaks/MeanGame"
                          target="_blank"
                          rel="noreferrer"
                        >
                          Meanest Game in the World!
                        </a>
                      </button>
                      <button type="button" className="btn btn-outline-info">
                        <a
                          href="https://github.com/Claudialhc/budgetTracker"
                          target="_blank"
                          rel="noreferrer"
                        >
                          Budget Tracker
                        </a>
                      </button>
                      <button type="button" className="btn btn-outline-info">
                        <a
                          href="https://github.com/Claudialhc/fitnessTracker"
                          target="_blank"
                          rel="noreferrer"
                        >
                          Fitness Tracker
                        </a>
                      </button>

                    {/* <div className="row">
                      <div className="col-md-6 col-sm-12">
                        <a href="movietaste.html">
                          <img
                            width="220"
                            height="250"
                            border="0"
                            align="center"
                            src="./assests/movietasteapp-logo.png"
                            className="img-fluid"
                            alt="movietaste-img"
                            id="about-me-image"
                          />
                        </a>
                      </div>
                      <div className="col-md-6 col-sm-12">
                        <a href="scheduler.html">
                          <img
                            width="220"
                            height="250"
                            border="0"
                            align="center"
                            src="./assests/workday-logo.png"
                            className="img-fluid"
                            alt="scheduler-img"
                            id="about-me-image"
                          />
                        </a>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-6 col-sm-12">
                        <a href="ogportfolio.html">
                          <img
                            width="220"
                            height="250"
                            border="0"
                            align="center"
                            src="./assests/ogportfolio-logo.png"
                            className="img-fluid"
                            alt="portfolio-img"
                            id="about-me-image"
                          />
                        </a>
                      </div>
                      <div className="col-md-6 col-sm-12">
                        <a href="eatDaBurger.html">
                          <img
                            src="./assests/eatDaBurger.png"
                            className="img-fluid"
                            alt="disco-img"
                            id="about-me-image"
                          />
                        </a>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-6 col-sm-12">
                        <a href="meanGame.html">
                          <img
                            src="./assests/meanGame.png"
                            className="img-fluid"
                            alt="peacock-img"
                            id="about-me-image"
                          />
                        </a>
                      </div> */}
                      {/* <div className="col-md-6 col-sm-12">
                        <a href="employeeTracker.html">
                          <img
                            src="./assests/employeeTrackerApp.png"
                            className="img-fluid"
                            alt="disco-img"
                            id="about-me-image"
                          />
                        </a>
                      </div> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          {/* </div> */}
        </div>
      </main>
    );
  }
}
