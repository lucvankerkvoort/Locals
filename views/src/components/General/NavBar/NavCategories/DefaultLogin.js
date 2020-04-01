import React from "react";
import Registration from "../../Registration";
import Switch from "../../Switch";
import { elements } from "./Elements";

class DefaultLogin extends React.Component {
  state = {
    login: false,
    register: false
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

  handleClick = element => {
    console.log(element);
    switch (element) {
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
        console.log("nothing");
    }
  };

  render() {
    // conditional to see whether the user is a local or a traveller and filter through to check which one of these we need

    return (
      <div className="navbarElement">
        {elements.homePage.map(element => (
          <h3
            onClick={() => this.handleClick(element.name)}
            className="elementName"
          >
            {element.name}
          </h3>
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

export default DefaultLogin;
