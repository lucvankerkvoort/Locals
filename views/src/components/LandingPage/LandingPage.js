import React from "react";
import Card from "./components/Card";
import "./LandingPage.css";

class LandingPage extends React.Component {
  handleChange = input => {
    console.log("input inside Landingpage", input);
    this.props.handleChange(input);
  };
  render() {
    return (
      <div className="wrapper">
        <div className="box1">
          <Card
            handleChange={this.handleChange}
            value="traveler"
            details="Are you a traveler?"
          />
        </div>
        <div className="box2">
          <Card
            handleChange={this.handleChange}
            value="local"
            details="Are you a local?"
          />
        </div>
      </div>
    );
  }
}

export default LandingPage;
