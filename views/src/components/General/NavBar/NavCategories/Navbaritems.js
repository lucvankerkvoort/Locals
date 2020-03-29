import React from "react";
import Registration from "../../Registration/";
import Login from "../../Login";

class NavbarItems extends React.Component {
  state = {
    login: false,
    register: false,
    user: ""
  };

  opening = element => {
    this.setState({ [element]: true });
  };

  close = (input, user, type) => {
    this.setState({ [type]: input });
  };

  handleClick = () => {
    let url = this.props.state === "local" ? "localhome" : "travelerhome";
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
      case "Login":
        this.opening("login");
        this.setState({ user: "local" });
        break;
      case "Home":
        this.props.handleNav(`/${url}`);
        break;
      case "Settings":
        this.props.handleNav(`/${url}/settings`);
        break;
      case "Calendar":
        this.props.handleNav(`/${url}/calendar`);
        break;
      case "Tours":
        this.props.handleNav(`/${url}/tours`);
        break;
      default:
        console.log(propname);
    }
  };

  render() {
    console.log("state", this.state);
    // conditional to see whether the user is a local or a traveller and filter through to check which one of these we need

    return (
      <div className="navbarElement">
        <h3 onClick={this.handleClick} className="elementName">
          {this.props.name}
        </h3>
        <div>
          {this.state.login ? (
            <Login user={this.state.user} close={this.close} />
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
