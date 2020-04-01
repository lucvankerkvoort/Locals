import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
  useHistory,
  useLocation
} from "react-router-dom";
import { elements } from "./Elements";

class LoggedInNav extends React.Component {
  state = {
    user: JSON.parse(localStorage.getItem("currentUser"))
  };

  handleClick = element => {
    switch (element) {
      case "Profile":
        return "/profile";
      case "Account Management":
        return "/";
      case "Help":
        return "/";
      case "Switch to Guide":
        return "/profile";
      case "Switch to Traveler":
        return "/profile";
      default:
        break;
    }
  };
  render() {
    const userType = this.state.user.data[0].type;
    return (
      <div className="navbarElement">
        {elements[userType].map(element => (
          <Link
            to={this.handleClick(element.name)}
            style={{ textDecoration: "none", color: "black" }}
          >
            <h3 className="elementName">{element.name}</h3>
          </Link>
        ))}
      </div>
    );
  }
}

export default LoggedInNav;
