import React from "react";
import "./style.css";

class Bio extends React.Component {
  render() {
    return (
      <div className="bio">
        <h3 className="title">Bio</h3>
        <p className="text">{this.props.bio}</p>
      </div>
    );
  }
}

export default Bio;
