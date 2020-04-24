import React from "react";

class Profile extends React.Component {
  render() {
    const { firstname, lastname } = this.props.user;
    return (
      <div className="profile">
        <div className="profile-top">
          <div className="profile-avatar" />
          <div className="profile-info">
            <h2>
              {firstname} {lastname}
            </h2>
            <h2>Place</h2>
  
            <div className="rating" />
          </div>
        </div>
        <div className="profile-body">
          <div className="profile-categories">
            <h2>Categories</h2>
            <div className="categories-div">
              <div className="culture-icon icon" />
              <div className="food-icon icon" />
              <div className="conversation-icon icon" />
              <div className="party-icon icon" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Profile;
