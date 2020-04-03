import React from "react";
import NavbarItems from "./NavCategories/NavbarItems";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class Navbar extends React.Component {
  state = {
    type: localStorage.getItem("type"),
    link: this.type === "traveler" || this.type === "local" ? "/profile" : "/"
  };

  render() {
    const { link } = this.state;
    return (
      <div className="navbar">
        <div className="navbar-logo">
          <Link to={link} style={{ textDecoration: "none" }}>
            <h2>TourBuddy</h2>
          </Link>
        </div>
        <div className="elements">
          <NavbarItems />
        </div>
      </div>
    );
  }
}

export default Navbar;
