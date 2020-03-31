import React from "react";
import Searchbar from "../components/General/Searchbar";
import DateContainer from "../components/General/DateContainer";
import Section from "../components/General/Sections";
import Registration from "../components/General/Registration";

class LandingPage extends React.Component {
  state = {
    place: "",
    startDate: new Date(),
    endDate: new Date(),
    check: false,
    user: "",
    showTravelerReg: false,
    showLocalReg: false
  };

  showPlaceDetails = place => {
    let location = place.geometry.location;
    let lat = location.lat();
    let lng = location.lng();

    localStorage.setItem("lat", lat);
    localStorage.setItem("lng", lng);
  };

  openRegistration = event => {
    let clickedElement = event.target;
    const targetElement = document.getElementsByClassName("local-reg")[0];
    clickedElement === targetElement
      ? this.setState({ showLocalReg: true })
      : this.setState({ showTravelerReg: true });
  };
  closeRegistration = (input, type) => {
    type === "traveler"
      ? this.setState({ showTravelerReg: input })
      : this.setState({ showLocalReg: input });
  };
  render() {
    return (
      <div className="landingpage">
        <div className="welcome-message">
          <h3 className="welcome-title">Welcome to TourBuddy</h3>
          <p>Discover the world through a guided lens</p>
        </div>
        <div className="wrapper">
          <div className="searchbar-landingpage">
            <h2>Search the Globe</h2>
            <Searchbar onPlaceChanged={this.showPlaceDetails.bind(this)} />
            <DateContainer />
          </div>
        </div>
        <div className="landingpage-sections">
          <div className="landingpage-side">
            <h2>Explore</h2>
            <Section
              title="Choose A Destination"
              picture="destination"
              section="section"
            />
            <Section
              title="Connect With Each Other"
              picture="connect"
              section="section-right"
            />
            <Section
              title="Make Beautiful Memories"
              picture="memories"
              section="section"
            />
            <Section
              title="Reach Out And Do The Same"
              picture="reachout"
              section="section-right"
            />
            <button className="travel-reg" onClick={this.openRegistration}>
              Sign Up Here As a Traveler
            </button>
            {this.state.showTravelerReg ? (
              <Registration close={this.closeRegistration} user="traveler" />
            ) : null}
          </div>
          <div className="landingpage-side">
            <h2>Guide</h2>
            <Section
              title="Choose Amazing Sights"
              picture="sights"
              section="section-right"
            />
            <Section
              title="Connect With Travelers"
              picture="connect2"
              section="section"
            />
            <Section
              title="Experiences To Last A Lifetime"
              picture="experience"
              section="section-right"
            />
            <Section
              title="Make Some Extra Cash"
              picture="money"
              section="section"
            />
            <button className="local-reg" onClick={this.openRegistration}>
              Sign Up Here As a Local
            </button>
            {this.state.showLocalReg ? (
              <Registration close={this.closeRegistration} user="local" />
            ) : null}
          </div>
        </div>
      </div>
    );
  }
}

export default LandingPage;
