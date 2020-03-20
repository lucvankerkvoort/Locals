import React from "react";
import Card from "../components/General/Card/Card";

class LandingPage extends React.Component {
  handleChange = input => {
    console.log("input inside Landingpage", input);
    this.props.handleChange(input);
  };
  render() {
    return (
      <div className="landingpage">
        <div className="top-section-landingpage">
          <div className="welcome-message">
            <h3 className="welcome-title">Welcome to LocalGuides</h3>
            <p>Discover the world through a guided lens</p>
          </div>
          <div className="wrapper">
            <div className="box1">
              <h3>Travelers</h3>
              <p>Find a local to guide you through your destination</p>
              <Card handleChange={this.handleChange} value="traveler" />
            </div>
            <div className="box2">
              <h3>Locals</h3>
              <p>
                Setup your page and connect with travelers visiting your
                hometown
              </p>
              <Card handleChange={this.handleChange} value="local" />
            </div>
          </div>
        </div>
        <div className="landingpage-footer">
          <p>
            This is a travel application for people who like to travel off the
            beaten path.
            <br />
            We connect you with local tour guides that have a ton of knowledge
            of their hometown.
            <br />
            They will show you around and show you all the spots.
            <br />
            Experience cities as a local would.
          </p>
        </div>
      </div>
    );
  }
}

export default LandingPage;
