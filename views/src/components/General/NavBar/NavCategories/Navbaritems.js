import React from "react";

class NavbarItems extends React.Component {
  handleClick = () => {
    const propname = this.props.name;
    console.log(propname);
    switch (propname) {
      case "Home":
        this.props.handleNav("/localhome");
        break;
      case "Settings":
        this.props.handleNav("/localhome/settings");
        break;
      case "Calendar":
        this.props.handleNav("/localhome/calendar");
        break;
      case "Tours":
        this.props.handleNav("/localhome/tours");
        break;
      default:
        console.log(propname);
    }
  };

  render() {
    // conditional to see whether the user is a local or a traveller and filter through to check which one of these we need
    console.log(this.props);
    const background = {
      background: `url(${this.props.pic})`,
      backgroundSize: "cover",
      width: "2.1em",
      height: "2em",
      display: "flex"
    };

    return (
      <div onClick={this.handleClick} className="element">
        <div className="elementContainer">
          <div className="pic" style={background} alt={this.props.name} />
        </div>
        <h3 className="elementName">{this.props.name}</h3>
      </div>
    );
  }
}

export default NavbarItems;
