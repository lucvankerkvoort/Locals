import React from "react";
import Registration from "../../Registration/";
import Login from "../../../../pages/Login";

class NavbarItems extends React.Component {
  state = {
    login: false,
    register: false,
    user: ""
  };

  opening = element => {
    if (this.state.user === "local") {
      this.setState({ [element]: true });
    }
  };

  handleClick = () => {
    let url = this.props.state === "local" ? "localhome" : "travelerhome";
    const propname = this.props.name;
    switch (propname) {
      case "Become a local":
        this.setState({ user: "local" });
        this.opening("register");
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
    // conditional to see whether the user is a local or a traveller and filter through to check which one of these we need

    return (
      <div onClick={this.handleClick} className="navbarElement">
        <h3 className="elementName">{this.props.name}</h3>
        {this.state.login ? <Login user={this.state.user} /> : null}
        {this.state.register ? <Registration user={this.state.user} /> : null}
      </div>
    );
  }
}

export default NavbarItems;
