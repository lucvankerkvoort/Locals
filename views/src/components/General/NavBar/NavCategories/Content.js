import React from "react";
import "./content.css";

class Content extends React.Component {
  render() {
    const { user } = this.props;
    console.log(user);
    return (
      <div className="content">
        {user.map(result => {
          return (
            <div>
              <div className="image" />
              <div className="names">
                <p>Username: {result.username}</p>
                <p>Name: {result.name}</p>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}

export default Content;
