import React from "react";
import "./NavCategories.css";
import { elements } from "./elements";
import NavbarItems from "./Navbaritems";

class NavCategories extends React.Component {
  state = {
    user: "local"
  };
  render() {
    return elements[this.state.user].map((element, i) => (
      <NavbarItems
        key={i}
        name={element.name}
        pic={element.pic}
        handleNav={this.props.handleNav}
        state={this.state.user}
      />
    ));
  }
}

export default NavCategories;
