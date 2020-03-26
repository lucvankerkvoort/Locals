import React from "react";
import NavCategories from "./NavCategories/NavCategories";

class Navbar extends React.Component {
  render() {
    console.log(this.props.user);
    return (
      <div className="navbar">
        <div className="navbar-logo">
          <h2>TourBuddy</h2>
        </div>
        <div className="elements">
          <h3>Become a Local</h3>
          <h3>Sign Up</h3>
          <h3>Login</h3>
          <h3>Help</h3>
        </div>
      </div>
    );
  }
}

export default Navbar;
