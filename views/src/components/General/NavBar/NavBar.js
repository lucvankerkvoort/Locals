import React from "react";
import "./style.css";
import Content from "./NavCategories/Content";
import NavCategories from "./NavCategories/NavCategories";

class Navbar extends React.Component {
  render() {
    return (
      <div className="navbar">
        <h1>Locals</h1>
        <Content />
        <br />
        <NavCategories />
      </div>
    );
  }
}

export default Navbar;
// Navbar: (avatarslot, calendar, tours, settings)
