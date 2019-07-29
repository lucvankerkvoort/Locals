import React from "react";
import "./content.css";

class Content extends React.Component {
  state = {
    name: "Luc",
    username: "luc12345"
  };
  render() {
    return (
      <div className="content">
        <div className="image">
          <img src="https://via.placeholder.com/150" />
        </div>
        <div className="names">
          <p>Username:</p>
          <p> {this.state.username}</p>
          <p>Name: </p>

          <p>{this.state.name}</p>
        </div>
      </div>
    );
  }
}

export default Content;
