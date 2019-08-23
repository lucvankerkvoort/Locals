import React from "react";
import "./style.css";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Content from "./NavCategories/Content";
import NavCategories from "./NavCategories/NavCategories";

class Navbar extends React.Component {
  handleNavbar = input => {
    this.props.status.history.push(input);
  };
  render() {
    console.log(this.props.user);
    return (
      <div className="local-home-wrapper-login">
        <div className="local-home-navbar">
          <h2 className="local-home-title">Locals</h2>
          <Content user={this.props.user} />
          <br />
          <NavCategories handleNav={this.handleNavbar} />
          <Link to="/login">
            <button className="logout-btn">Log Out</button>
          </Link>
        </div>
      </div>
    );
  }
}

export default Navbar;
// Navbar: (avatarslot, calendar, tours, settings)
