import React from "react";
import "./style.css";
import Content from "./NavCategories/Content";
import NavCategories from "./NavCategories/NavCategories";

class Navbar extends React.Component {
  render() {
    return (
      <div className="wrapper-login">
        <div className="navbar">
          <h3 className="title">Locals</h3>
          <Content />
          <br />
          <NavCategories />
        </div>
      </div>
    );
  }
}

export default Navbar;
// Navbar: (avatarslot, calendar, tours, settings)
