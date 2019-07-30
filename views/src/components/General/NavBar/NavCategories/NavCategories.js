import React from "react";
import "./NavCategories.css";
import { local, traveller } from "./elements";

function Element(props) {
  // conditional to see whether the user is a local or a traveller and filter through to check which one of these we need
  console.log(props.name);
  const background = {
    background: `url(${props.pic})`,
    backgroundSize: "contain",
    width: "2rem",
    height: "2rem",
    display: "flex",
    margin: "1em"
  };

  return (
    <div className="element">
      <h2>{props.name}</h2>
      <div className="pic" style={background} alt={props.name} />
    </div>
  );
}

class NavCategories extends React.Component {
  state = {
    user: "traveller"
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
