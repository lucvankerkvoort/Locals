import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { elements } from "./Elements";

class LoggedInNav extends React.Component {
  state = {
    type: localStorage.getItem("type")
  };

  logOut = () => {
    localStorage.setItem("type", "");
    window.location.reload();
  };

  handleClick = element => {
    console.log(element);
    switch (element) {
      case "Profile":
        return "/profile";
      case "Account Management":
        return "/account";
      case "Help":
        return "/help";
      case "Switch to Guide":
        return "/profile";
      case "Switch to Traveler":
        return "/profile";
      case "Logout":
        this.logOut();
        return "/";
      default:
        break;
    }
  };
  render() {
    const { type } = this.state;
    return (
      <div className="navbarElement">
        {elements[type].map(element => (
          <Link
            to={element.link}
            style={{ textDecoration: "none", color: "black" }}
          >
            <h3
              className="elementName"
              onClick={() => this.handleClick(element.name)}
            >
              {element.name}
            </h3>
          </Link>
        ))}
      </div>
    );
  }
}

export default LoggedInNav;
