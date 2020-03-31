import React from "react";
import Accordion from "../../components/General/Accordion/Accordion";
// import Stars from "./Stars";
import Profile from "../../components/General/Profile";
import Tours from "../../components/General/Tours";

class LocalPage extends React.Component {
  state = {
    address: JSON.parse(localStorage.getItem("address")),
    dates: JSON.parse(localStorage.getItem("dates")),
    booking: JSON.parse(localStorage.getItem("localBooking")),
    tips: [
      "Set your availability in the calendar page so travelers can find you!",
      "Try to make your tour info as descriptive as possible to attract the most customers!",
      "Been with us for a while and still have yet to receive your first booking? Try lowering your rate!"
    ]
  };
  bookingInfo;
  renderTip;

  render() {
    console.log(this.state.booking);
    const { user } = this.props;
    const style = {
      display: "flex",
      // background: `url(${user.avatar})`,
      backgroundPosition: "center",
      backgroundSize: "cover",
      boxShadow: "6px 6px 10px gray",
      borderRadius: "5px",
      height: "100%",
      width: "14.7vw",
      position: "relative",
      right: "5vw"
    };

    if (this.state.booking) {
      this.bookingInfo = this.state.booking.map((traveler, i) => (
        <Accordion
          //   name={`${traveler.firstname} ${traveler.lastname}`}
          key={i}
          //   userId={user._id}
        />
      ));
    } else {
      this.bookingInfo = (
        <p className="warning-message-local-home">
          No Bookings Just Yet, Don't worry They'll Come Soon Enough!
        </p>
      );
    }

    const rendering = Math.floor(Math.random() * this.state.tips.length);
    this.renderTip = this.state.tips[rendering];
    return (
      <div className="localbody">
        <div className="profile">
          {/* <div className="profile-picture" style={style} /> */}
          <div className="profile-info">
            <h2>Welcome{/* {user.firstname} {user.lastname} */} fullname</h2>

            {/* <div className="profile-bio">user.bio</div> */}
          </div>
        </div>
        <div className="profile-banner" />
        <div className="profile-body">
          {/* <div className="FAQ">
            <h3>Tips and Tricks</h3>
            { <p className="tips-tricks-section">this.renderTip</p> }
          </div> */}
          <Tours title="Your Upcoming Tours" />

          <Tours title="Your Upcoming Tours" />
          {/* <div className="rating"> */}
          {/* <h2>Rating</h2> */}
          {/* <Stars /> */}
          {/* </div> */}
          <Profile />
        </div>
      </div>
    );
  }
}

export default LocalPage;
