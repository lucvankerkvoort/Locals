import React from "react";
import "./content.css";

class Content extends React.Component {
  render() {
    const { user } = this.props;
    console.log(user);
    return (
      <div className="content">
        <div className="image" />
        <div className="names">
          <p>Username: {user.username}</p>
          <p>Name: {user.name}</p>
        </div>
      </div>
    );
  }
}

export default Content;
