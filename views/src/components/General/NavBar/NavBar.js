import React from "react";
import LoggedinNav from "./NavCategories/LoggedInNav";
import DefaultLogin from "./NavCategories/DefaultLogin";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class Navbar extends React.Component {
  state = {
    user: localStorage.getItem("currentUser")
      ? localStorage.getItem("currentUser")
      : "default"
  };
  handleNavbar = input => {
    this.props.status.history.push(input);
  };

  navBarChoice = () => {
    const { user } = this.state;
    switch (user.type) {
      case "traveler":
        return <LoggedinNav user="traveler" />;
      case "local":
        return <LoggedinNav user="local" />;
      default:
        return <DefaultLogin />;
    }
  };
  render() {
    return (
      <div className="navbar">
        <div className="navbar-logo">
          <Link to="/" style={{ textDecoration: "none" }}>
            <h2>TourBuddy</h2>
          </Link>
        </div>
        <div className="elements">{this.navBarChoice()}</div>
      </div>
    );
  }
}

export default Navbar;
