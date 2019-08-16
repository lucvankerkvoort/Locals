import React from "react";
import "./style.css";

class Homebody extends React.Component {
  render() {
    const { user } = this.props;
    return (
      <div className="localbody">
        <div className="profile">
          <div className="profile-picture" />
          <div className="profile-info">
            <h2> {user.name}</h2>
            <h4> {user.username}</h4>
          </div>
        </div>
        <div className="profile-body">
          <div className="FAQ">
            <h3>Tips and Tricks</h3>
          </div>
          <div className="center-body">
            <div className="upcoming">
              <h3>Your Upcoming Tour</h3>
            </div>
            <div className="completed">
              <h3>You Have Completed X Tours</h3>
            </div>
          </div>
          <div className="rating">
            <h2>Rating</h2>
            <h3>Your score</h3>
          </div>
        </div>
      </div>
    );
  }
}

export default Homebody;
