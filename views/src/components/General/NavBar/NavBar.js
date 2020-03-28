import React from "react";
import NavCategories from "./NavCategories/NavCategories";

class Navbar extends React.Component {
  handleNavbar = input => {
    this.props.status.history.push(input);
  };
  render() {
    console.log(this.props.user);
    return (
      <div className="navbar">
        <div className="navbar-logo">
          <h2>TourBuddy</h2>
        </div>
        <div className="elements">
          <NavCategories />
        </div>
      </div>
    );
  }
}

export default Navbar;
