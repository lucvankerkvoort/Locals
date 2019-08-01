import React from "react";
import "./NavCategories.css";
import { local, traveller } from "./elements";

function Element(props) {
  // conditional to see whether the user is a local or a traveller and filter through to check which one of these we need
  console.log(props.name);
  const background = {
    background: `url(${props.pic})`,
    backgroundSize: "cover",
    width: "2em",
    height: "2em",
    display: "flex"
  };

  return (
    <div className="element">
      <div className="elementContainer">
        <div className="pic" style={background} alt={props.name} />
      </div>
      <h3 className="elementName">{props.name}</h3>
    </div>
  );
}

class NavCategories extends React.Component {
  state = {
    user: "local"
  };
  render() {
    if (this.state.user === "local") {
      return local.map((element, i) => (
        <Element key={i} name={element.name} pic={element.pic} />
      ));
    } else {
      return traveller.map((element, i) => (
        <Element key={i} name={element.name} pic={element.pic} />
      ));
    }
  }
}

export default NavCategories;
