import React from "react";
import "./style.css";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Content from "./NavCategories/Content";
import NavCategories from "./NavCategories/NavCategories";

class Navbar extends React.Component {
  handleNavbar = input => {
    this.props.history.push(input);
  };
  render() {
    console.log(this.props);
    return (
      <div className="traveler-search-wrapper-login">
        <div className="traveler-search-navbar">
          <h2 className="traveler-search-title">Travelers</h2>
          <Content user={this.props.user} />
          <br />
          <NavCategories handleNav={this.handleNavbar} />
          <Link to="/">
            <button className="logout-btn">Log Out</button>
          </Link>
        </div>
      </div>
    );
  }
}

export default Navbar;
// Navbar: (avatarslot, calendar, tours, settings)
