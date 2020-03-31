import React from "react";
import NavCategories from "./NavCategories/NavCategories";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class Navbar extends React.Component {
  handleNavbar = input => {
    this.props.status.history.push(input);
  };
  render() {
    console.log(this.props.user);
    return (
      <div className="navbar">
        <div className="navbar-logo">
          <Link to="/" style={{ textDecoration: "none" }}>
            <h2>TourBuddy</h2>
          </Link>
        </div>
        <div className="elements">
          <NavCategories />
        </div>
      </div>
    );
  }
}

export default Navbar;
