import React from "react";
import { elements } from "./elements";
import NavbarItems from "./Navbaritems";

class NavCategories extends React.Component {
  // We will have to pass on the page whenever we link to a new page, so we can give the navbar its items
  state = {
    user: localStorage.getItem("currentUser")
      ? localStorage.getItem("currentUser")
      : "",
    page: "homePage"
  };
  render() {
    return elements[this.state.page].map((element, i) => (
      <NavbarItems
        key={i}
        name={element.name}
        handleNav={this.props.handleNav}
        state={this.state.user}
      />
    ));
  }
}

export default NavCategories;
