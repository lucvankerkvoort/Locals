import React from "react";
import Registration from "../../Registration";
import Switch from "../../Switch";

class NavbarItems extends React.Component {
  state = {
    login: false,
    register: false
  };

  handleClick = () => {
    const propname = this.props.name;
    switch (propname) {
      case "Become a local":
        this.setState({ user: "local" });
        this.opening("register");
        break;
      case "Sign Up":
        this.setState({ user: "traveler" });
        this.opening("register");
        break;
      default:
        console.log(propname);
    }
  };

  render() {
    // conditional to see whether the user is a local or a traveller and filter through to check which one of these we need

    return (
      <div className="navbarElement">
        <h3 onClick={this.handleClick} className="elementName">
          {this.props.name}
        </h3>
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
