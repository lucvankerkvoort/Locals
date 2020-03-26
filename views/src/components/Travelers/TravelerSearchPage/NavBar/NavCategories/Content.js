import React from "react";
import "./content.css";

class Content extends React.Component {
  render() {
    const { user } = this.props;
    const style = {
      alignSelf: "center",
      // background: `url(${user.avatar})`,
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
        <div className="image" style={style} />
        <div className="names">
          {/* <h3>{user.username}</h3> */}
          <h3>{/* {user.firstname} {user.lastname} */}</h3>
        </div>
      </div>
    );
  }
}

export default Content;
