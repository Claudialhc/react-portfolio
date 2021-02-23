import React, { Component } from "react";

export default class AboutMe extends Component {
    render (){
        return (
            <main role="main" className="flex-shrink-0">
     
      <div className="container main">
        
        <div className="row">
          <div className="col-md-12 col-sm-12">
            <div className="card">
              <div className="card-body">
                <h1 className="card-title">About Me</h1>
                <hr />
                
                <img
                  src="./assests/resized-professional.png"
                  className="img-fluid"
                  alt="professional-headshot"
                  id="about-me-image"
                />
                <p className="card-text">
                  Hi! My name is Claudia Hernandez. I am an experienced,
                  creative and detailed oriented marketer with a knack for story
                  telling turned web developer- so you get the whole package
                  with me.
                </p>

                <p>
                  A little background about me. I hold a Bachelor’s of Arts
                  degree in Public Relations with a minor in Marketing from CSU,
                  Sacramento. Prior to becoming a web developer I worked at a
                  full-service marketing agency in their Social Media Marketing
                  department. My wide range of experience includes marketing for
                  tourism, agri-tourism, real estate, home improvement, and
                  health care clients, among others.
                </p>

                <p>
                  After the initial COVID-19 lockdown back in March 2020, I
                  decided it was the perfect time to reinvent myself. After much
                  research and consideration, I came to the conclusion that the
                  next step in my professional life would be to take up web
                  development. Welcome to my new journey, I hope you stay along
                  for the ride!
                </p>

                <p>Let's connect!</p>
                <article>
                  <i className='fas fa-phone'></i> (760)890-8505
                </article>
                <article>
                  
                    <i className='fas fa-paper-plane'></i> claudiahdez13@gmail.com 
                    
                    <br />
                    or send me a message via
                    the
                  <a
                    href="file:///Users/claudiahernandez/github/my-portfolio/contact.html"
                    >contact</a>
                  page!
                </article>
                <br />
                <hr />
                <article>
                  <h6>
                    <button type="button" className="btn btn-outline-info">
                      <a
                        href="https://www.linkedin.com/in/claudialhernandez/"
                        target="_blank" rel="noreferrer"
                      >
                        LinkedIn
                      </a>
                    </button>
                    <button type="button" className="btn btn-outline-info">
                      <a href="https://github.com/Claudialhc" target="_blank" rel="noreferrer">
                        GitHub</a>
                    </button>
                    <button type="button" className="btn btn-outline-info">
                      <a href="resume.html"> My Resume</a>
                    </button>
                  </h6>
                </article>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
        )
    }
} 