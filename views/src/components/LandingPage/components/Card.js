import React from "react";
import CardFooter from "./CardFooter";
import CardHeader from "./CardHeader";

class Card extends React.Component {
  render() {
    return (
      <article className="card">
        <CardHeader cardTitle={this.props.details} />
        <CardFooter
          input={this.props.input}
          handleChange={this.props.handleChange}
        />
      </article>
    );
  }
}

export default Card;
