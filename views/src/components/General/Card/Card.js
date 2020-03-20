import React from "react";
import CardFooter from "./CardFooter";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

class Card extends React.Component {
  handleChange = () => {
    this.props.handleChange(this.props.value);
  };
  render() {
    return (
      <article
        onClick={this.handleChange}
        className={`card ${this.props.value}-home-button`}
      >
        <div>
          <Link to="/login">
            <CardFooter />
          </Link>
        </div>
      </article>
    );
  }
}

export default Card;
