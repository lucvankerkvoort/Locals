import React from "react";
import Card from "./LandingPage/components/Card";
import "./App.css";

const LandingPage = () => {
  return (
    <div className="wrapper">
      <div className="box1">
        <Card details="Are you a traveler?" />
      </div>
      <div className="box2">
        <Card details="Are you a local?" />
      </div>
    </div>
  );
};

export default LandingPage;
