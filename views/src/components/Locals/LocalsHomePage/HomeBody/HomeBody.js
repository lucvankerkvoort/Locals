import React from "react";
import Accordion from "../Accordion/Accordion";
import "./HomeBody.css";
import Moment from "react-moment";
import API from "../../../../controller";

class HomeBody extends React.Component {
  state = {
    address: JSON.parse(localStorage.getItem("address")),
    dates: JSON.parse(localStorage.getItem("dates")),
    booking: JSON.parse(localStorage.getItem("localBooking"))
  };

  componentDidMount() {
    this.setState({ localsInfo: this.props.user });
  }

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

    const bookingInfo = this.state.booking.map((traveler, i) => (
      <Accordion
        name={`${traveler.firstname} ${traveler.lastname}`}
        key={i}
        userId={user._id}
      />
    ));

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
              {bookingInfo}
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
