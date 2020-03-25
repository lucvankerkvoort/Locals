import React from "react";
import Searchbar from "../components/General/Searchbar";
import DateContainer from "../components/General/DateContainer";

class LandingPage extends React.Component {
  handleChange = input => {
    console.log("input inside Landingpage", input);
    this.props.handleChange(input);
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
            <Searchbar />
            <DateContainer />
          </div>
        </div>
        <div className="landingpage-sections">
          <div className="landingpage-side">
            <h2>Explore</h2>
            <div className="section">
              <div className="destination img" />
              <div className="section-text ">
                <h4>Choose a Destination</h4>
                <p>
                  Search for a destination in the search bar. <br />
                  Find available tour guides at your destination.
                  <br />
                  Locals just like you and me who know their cities.
                </p>
              </div>
            </div>
            <div className="section-right">
              <div className="section-text">
                <h4>Connect with each other</h4>
                <p>
                  Book a tour guide through and get into contact.
                  <br />
                  talk with each other and discuss possible sights.
                </p>
              </div>
              <div className="connect img" />
            </div>
            <div className="section">
              <div className="memories img" />
              <div className="section-text">
                <h4>Make Beautiful Memories</h4>
                <p>
                  Fly to your destination. <br />
                  Enjoy the experience of being a local. <br />
                  Share beautiful memories
                </p>
              </div>
            </div>
            <div className="section-right">
              <div className="section-text">
                <h4>Reach Out And Do The Same</h4>
                <p>
                  We would love it if you would pass the torch.
                  <br />
                  Become a local and show people around.
                  <br /> Make some extra cash and get some great experiences.
                </p>
              </div>
              <div className="reach-out img" />
            </div>
          </div>
          <div className="landingpage-side">
            <h2>Guide</h2>

            <div className="section-right">
              <div className="section-text">
                <h4>Choose Amazing Sights</h4>
                <p>
                  Build a guided tour of your city.
                  <br />
                  Use your favorite spots that you want to show off.
                </p>
              </div>
              <div className="sights img" />
            </div>
            <div className="section">
              <div className="connect2 img" />
              <div className="section-text">
                <h4>Connect With Travelers</h4>
                <p>
                  Show your knowledge of your hometown.
                  <br />
                  Talk to travelers and share experiences.
                  <br />
                  Get booked for tours.
                </p>
              </div>
            </div>
            <div className="section-right">
              <div className="section-text">
                <h4>Experiences to Last a Lifetime</h4>
                <p>
                  Make lasting friendships
                  <br />
                  Share your culture and food.
                  <br /> Build lasting experiences.
                </p>
              </div>
              <div className="experience img" />
            </div>
            <div className="section">
              <div className="money img" />
              <div className="section-text ">
                <h4>Make Some Extra Cash</h4>
                <p>
                  Set your own rate. <br />
                  Make an incredible experience.
                  <br />
                  Get paid accordingly.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default LandingPage;
