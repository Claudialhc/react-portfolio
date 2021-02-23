import React, { Component } from "react";

export default class ContactPage extends Component {
  render() {
    return (
      <div className="container" id="contact-form">
        <div className="row" id="row">
          <form>
            <div className="form-group">
              <label for="exampleFormControlInput1">Name</label>
              <input
                type="name"
                className="form-control"
                id="exampleFormControlInput1"
                placeholder="Name"
              />
            </div>
            <div className="form-group">
              <label for="exampleFormControlInput1">Email Address</label>
              <input
                type="email"
                className="form-control"
                id="exampleFormControlInput1"
                placeholder="name@example.com"
              />
            </div>
            <div className="form-group">
              <label for="exampleFormControlTextarea1">Message</label>
              <textarea
                className="form-control"
                id="exampleFormControlTextarea1"
                rows="3"
              ></textarea>
            </div>
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
      </div>
    );
  }
}
