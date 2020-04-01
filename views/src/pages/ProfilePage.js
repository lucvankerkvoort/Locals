import React from "react";
import Tours from "../components/General/Tours";
import Searchbar from "../components/General/Searchbar";
import DateContainer from "../components/General/DateContainer";
import Profile from "../components/General/Profile";
import { profilePage } from "../components/General/images/index";

class ProfilePage extends React.Component {
  state = {
    user: "local"
  };
  showPlaceDetails = place => {
    let location = place.geometry.location;
    let lat = location.lat();
    let lng = location.lng();

    localStorage.setItem("lat", lat);
    localStorage.setItem("lng", lng);
  };

  SearchBar = () => {
    if (this.state.user === "traveler") {
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
    return (
      <div className="profile-page">
        <div className="profile-intro">
          <h2>Welcome name</h2>
        </div>
        <div
          id="banner"
          className={
            this.state.user === "traveler" ? "traveler-pic" : "local-pic"
          }
        >
          {this.SearchBar()}
        </div>
        <div className="profile-tours">
          <Tours title="Your Upcoming Tours" />
        </div>
        <div className="profile-tours">
          <Tours title="Your Past Tours" />
        </div>
        <div className="profile-section">
          <Profile />
        </div>
      </div>
    );
  }
}

export default ProfilePage;
