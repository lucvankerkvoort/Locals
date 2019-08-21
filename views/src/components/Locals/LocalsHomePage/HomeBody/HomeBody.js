import React from "react";
import Accordion from "../Accordion/Accordion";
import "./HomeBody.css";

class HomeBody extends React.Component {
  render() {
    const { user } = this.props;
    const style = {
      display: "flex",
      background: `url(${user.avatar})`,
      backgroundPosition: "center",
      backgroundSize: "cover",
      boxShadow: "6px 6px 10px gray",
      borderRadius: "5px",
      height: "100%",
      width: "14.7vw",
      position: "relative",
      right: "5vw"
    };
    return (
      <div className="localbody">
        <div className="profile">
          <div className="profile-picture" style={style} />
          <div className="profile-info">
            <h2>
              {user.firstname} {user.lastname}
            </h2>
            <div className="profile-bio">{user.bio}</div>
          </div>
        </div>
        <div className="profile-body">
          <div className="FAQ">
            <h3>Tips and Tricks</h3>
          </div>
          <div className="center-body">
            <div className="upcoming">
              <h3>Your Upcoming Tours</h3>
              <Accordion content="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum." />
              <Accordion content="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum." />
            </div>
            <div className="completed">
              <h3>You Have Completed {user.completedtours} Tours</h3>
            </div>
          </div>
          <div className="rating">
            <h2>Rating</h2>
            <h3>{user.rating}</h3>
          </div>
        </div>
      </div>
    );
  }
}

export default HomeBody;
