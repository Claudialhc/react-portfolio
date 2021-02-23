import React, { Component } from "react";

export default class Portfolio extends Component {
  render() {
    return (
      <main role="main" className="flex-shrink-0">
        <div className="container main">
          <div className="row">
            <div className="col-md-12 col-sm-12">
              <div className="card">
                <div className="card-body">
                  <h1 className="card-title" id="portfolio">
                    Portfolio
                  </h1>
                  <hr />
                  <div className="container">
                    Welcome to my portfolio! Below you will find a collection of
                    some of my best work. Feel free to click on the app repo you
                    wish to see.
                    <hr></hr>
                    <div className="row">
                      <div className="col-md-6 col-sm-12">
                        <button type="button" className="btn btn-outline-info">
                          <a
                            href="https://github.com/Claudialhc/MovieTaste"
                            target="_blank"
                            rel="noreferrer"
                          >
                            MovieTaste
                          </a>
                        </button>
                      </div>
                      <div className="col-md-6 col-sm-12">
                        <button type="button" className="btn btn-outline-info">
                          <a
                            href="https://github.com/Claudialhc/eatDaBurgerApp"
                            target="_blank"
                            rel="noreferrer"
                          >
                            Eat Da Burger
                          </a>
                        </button>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-6 col-sm-12">
                        <button type="button" className="btn btn-outline-info">
                          <a
                            href="https://github.com/TechKoSpeaks/MeanGame"
                            target="_blank"
                            rel="noreferrer"
                          >
                            Meanest Game in the World!
                          </a>
                        </button>
                      </div>
                      <div className="col-md-6 col-sm-12">
                        <button type="button" className="btn btn-outline-info">
                          <a
                            href="https://github.com/Claudialhc/budgetTracker"
                            target="_blank"
                            rel="noreferrer"
                          >
                            Budget Tracker
                          </a>
                        </button>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-6 col-sm-12">
                      <button type="button" className="btn btn-outline-info">
                      <a
                        href="https://github.com/Claudialhc/EmployeeTracker"
                        target="_blank"
                        rel="noreferrer"
                      >
                        Employee Tracker
                      </a>
                    </button>
                      </div>
                      <div className="col-md-6 col-sm-12">
                      <button type="button" className="btn btn-outline-info">
                      <a
                        href="https://github.com/Claudialhc/EmployeeTracker"
                        target="_blank"
                        rel="noreferrer"
                      >
                        Employee Tracker
                      </a>
                    </button>
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
