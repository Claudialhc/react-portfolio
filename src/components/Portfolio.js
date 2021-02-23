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
                    some of my best work. Feel free to browse around and click
                    on the app you wish to see.
                    <div className="row">
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
                      </div>
                      <div className="col-md-6 col-sm-12">
                        <a href="employeeTracker.html">
                          <img
                            src="./assests/employeeTrackerApp.png"
                            className="img-fluid"
                            alt="disco-img"
                            id="about-me-image"
                          />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    );
  }
}
