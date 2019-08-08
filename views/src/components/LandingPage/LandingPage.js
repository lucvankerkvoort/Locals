import React from "react";
import Card from "../LandingPage/components/Card";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
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
          {/* <Link to="/login"> */}
          <Card
            handleChange={this.handleChange}
            input="traveler"
            details="Are you a traveler?"
          />
          {/* </Link> */}
        </div>
        <div className="box2">
          {/* <Link to="/login"> */}
          <Card
            handleChange={this.handleChange}
            input="local"
            details="Are you a local?"
          />
          {/* </Link> */}
        </div>
      </div>
    );
  }
}

export default LandingPage;
