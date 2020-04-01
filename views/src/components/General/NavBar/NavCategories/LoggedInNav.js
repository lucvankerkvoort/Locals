import React from "react";
import { elements } from "./Elements";

class LoggedInNav extends React.Component {
  state = {
    user: JSON.parse(localStorage.getItem("currentUser"))
  };

  handleClick = element => {
    switch (element) {
      case "":
        break;

      default:
        break;
    }
  };
  render() {
    const userType = this.state.user.data[0].type;
    return (
      <div className="navbarElement">
        {elements[userType].map(element => (
          <h3
            onClick={() => this.handleClick(element.name)}
            className="elementName"
          >
            {element.name}
          </h3>
        ))}
      </div>
    );
  }
}

export default LoggedInNav;
