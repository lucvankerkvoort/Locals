import React from "react";
import Searchbar from "../components/General/Searchbar";
import DateContainer from "../components/General/DateContainer";

class LandingPage extends React.Component {
  handleChange = input => {
    console.log("input inside Landingpage", input);
    this.props.handleChange(input);
  };
  render() {
    return (
      <div className="landingpage">
        <div className="welcome-message">
          <h3 className="welcome-title">Welcome to TourBuddy</h3>
          <p>Discover the world through a guided lens</p>
        </div>
        <div className="wrapper">
          <div className="searchbar-landingpage">
            <h2>Search the Globe</h2>
            <Searchbar />
            <DateContainer />
          </div>
        </div>
      </div>
    );
  }
}

export default LandingPage;
