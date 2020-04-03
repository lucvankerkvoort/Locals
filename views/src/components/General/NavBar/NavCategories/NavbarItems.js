import React from "react";
import Registration from "../../Registration";
import Switch from "../../Switch";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { elements } from "./Elements";

class NavbarItems extends React.Component {
  state = {
    login: false,
    register: false,
    type:
      localStorage.getItem("type") === ""
        ? "homePage"
        : localStorage.getItem("type")
  };

  opening = element => {
    this.setState({ [element]: true });
    if (this.state[element]) {
      this.setState({ [element]: false });
    }
  };

  close = (input, user, type) => {
    this.setState({ [type]: input });
  };

  logOut = () => {
    localStorage.setItem("type", "");
    localStorage.setItem("firstname", "");
    localStorage.setItem("lastname", "");
    localStorage.setItem("username", "");
    localStorage.setItem("password", "");
    this.setState({ type: "homePage" });
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
      case "Become a local":
        this.setState({ user: "local" });
        this.opening("register");
        break;
      case "Sign Up":
        this.setState({ user: "traveler" });
        this.opening("register");
        break;
      case "Login":
        this.opening("login");
        break;
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
            to={element.link ? element.link : null}
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
        <div>
          {this.state.login ? (
            <Switch close={this.close} user={this.state.user} />
          ) : null}

          {this.state.register ? (
            <Registration user={this.state.user} close={this.close} />
          ) : null}
        </div>
      </div>
    );
  }
}

export default NavbarItems;
