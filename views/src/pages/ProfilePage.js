import React from "react";
import Tours from "../components/General/Tours";
import Searchbar from "../components/General/Searchbar";
import DateContainer from "../components/General/DateContainer";
import Profile from "../components/General/Profile";
import MyMapComponent from "../components/General/Routes";

class ProfilePage extends React.Component {
  state = {
    type: this.props.user.type,
  };
  showPlaceDetails = (place) => {
    let location = place.geometry.location;
    let lat = location.lat();
    let lng = location.lng();

    localStorage.setItem("lat", lat);
    localStorage.setItem("lng", lng);
  };

  SearchBar = () => {
    if (this.state.type === "traveler") {
      return (
        <div className="searchbar-landingpage">
          <h2>Find Your Destination</h2>
          <Searchbar onPlaceChanged={this.showPlaceDetails.bind(this)} />
          <DateContainer />
        </div>
      );
    }
  };
  render() {
    const { user, booking } = this.props;
    return (
      <div className="profile-page">
        <div className="profile-intro">
          <h2>Welcome {user.firstname} </h2>
        </div>
        <div
          id="banner"
          className={
            this.state.type === "traveler" ? "traveler-pic" : "local-pic"
          }
        >
          {this.SearchBar()}
        </div>
        {booking ? (
          <div className="profile-tours">
            <Tours user={user} title="Your Upcoming Tours" />
          </div>
        ) : null}
        {booking ? (
          <div className="profile-tours">
            <Tours user={user} title="Your Past Tours" />
          </div>
        ) : null}
        <div className="profile-section">
          <Profile user={user} />
        </div>
        <div>
          <MyMapComponent />
        </div>
      </div>
    );
  }
}

export default ProfilePage;
