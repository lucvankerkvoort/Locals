import React from "react";

class Profile extends React.Component {
  render() {
    const { firstname } = this.props.user;
    return (
      <div className="profile">
        <div className="profile-avatar" />
        <div className="profile-info">
          <h2>{firstname}</h2>
          <h2>Place</h2>
          <div className="rating" />
        </div>
        <div className="profile-body">
          <div className="profile-categories">
            <h2>Categories</h2>
            <h4>Food</h4>
            <h4>Culture</h4>
            <h4>Party</h4>
            <h4>Conversation</h4>
          </div>
        </div>
      </div>
    );
  }
}

export default Profile;
