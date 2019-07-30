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
        <div className="image" />
        <div className="names">
          <p>Username: {this.state.username}</p>
          <p>Name: {this.state.name}</p>
        </div>
      </div>
    );
  }
}

export default Content;
