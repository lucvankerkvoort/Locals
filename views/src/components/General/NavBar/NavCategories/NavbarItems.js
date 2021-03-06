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
      localStorage.getItem("type") === "" ||
      localStorage.getItem("type") === null
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
    switch (element) {
      case "Logout":
        this.logOut();
        break;
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
    console.log(type);
    return (
      <div className="navbarElement">
        {elements[type].map(element => (
          <Link
            to={element.link ? element.link : ""}
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
