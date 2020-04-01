import React from "react";
import Tours from "../../components/General/Tours";
import Searchbar from "../../components/General/Searchbar";
import DateContainer from "../../components/General/DateContainer";
import Profile from "../../components/General/Profile";

class TravelerProfilePage extends React.Component {
  showPlaceDetails = place => {
    let location = place.geometry.location;
    let lat = location.lat();
    let lng = location.lng();

    localStorage.setItem("lat", lat);
    localStorage.setItem("lng", lng);
  };
  render() {
    return (
      <div className="traveler-page">
        <div className="traveler-intro">
          <h2>Welcome travelerfullname</h2>
        </div>
        <div className="traveler-pic">
          <div className="searchbar-landingpage">
            <h2>Find Your Destination</h2>
            <Searchbar onPlaceChanged={this.showPlaceDetails.bind(this)} />
            <DateContainer />
          </div>
        </div>
        <div className="traveler-tours">
          <Tours title="Your Upcoming Tours" />
        </div>
        <div className="traveler-profile">
          <Profile />
        </div>
      </div>
    );
  }
}

export default TravelerProfilePage;
