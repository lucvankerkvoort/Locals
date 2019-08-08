import React from "react";
import Card from "../LandingPage/components/Card";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import "./LandingPage.css";

const LandingPage = () => {
  return (
    <div className="wrapper">
      <div className="box1">
        <Link to="/login">
          <Card details="Are you a traveler?" />
        </Link>
      </div>
      <div className="box2">
        <Link to="/login">
          <Card details="Are you a local?" />
        </Link>
      </div>
    </div>
  );
};

export default LandingPage;
