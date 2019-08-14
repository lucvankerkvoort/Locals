import React from "react";
import "./NavCategories.css";
import { local, traveller } from "./elements";
import NavbarItems from "./Navbaritems";

class NavCategories extends React.Component {
  state = {
    user: "local"
  };
  render() {
    if (this.state.user === "local") {
      return local.map((element, i) => (
        <NavbarItems
          key={i}
          name={element.name}
          pic={element.pic}
          handleNav={this.props.handleNav}
          state={this.state.user}
        />
      ));
    } else {
      return traveller.map((element, i) => (
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
}

export default NavCategories;
