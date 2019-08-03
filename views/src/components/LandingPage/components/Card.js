import React from "react";
import CardFooter from "./CardFooter";
import CardHeader from "./CardHeader";

class Card extends React.Component {
  render() {
    return (
      <article className="card">
        <CardHeader cardTitle={this.props.details} />
        <CardFooter />
      </article>
    );
  }
}

export default Card;
