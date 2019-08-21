import React from "react";
import "./content.css";

class Content extends React.Component {
  render() {
    const { user } = this.props;
    const style = {
      alignSelf: "center",
      background: `url(${user.avatar})`,
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      height: "5em",
      width: "5em",
      objectFit: "cover",
      borderRadius: "50%",
      backgroundPosition: "center"
    };
    return (
      <div className="content">
        <div className="image" style={style}  />
        <div className="names">
          <p>Username: {user.username}</p>
          <p>Name: {user.firstname} {user.lastname}</p>
        </div>
      </div>
    );
  }
}

export default Content;
