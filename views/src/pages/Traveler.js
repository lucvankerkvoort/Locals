import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
// import TravelerHome from "./TravelerHome/TravelerHome";
// import Settings from "./TravelersSettingsPage/SettingsBody/SettingsBody";
import SearchPage from "./Traveler/SearchPage";
import NavBar from "../components/General/NavBar/NavBar";
import TravelerProfilePage from "./Traveler/TravelerPage";
// import ToursBody from "./TravelerToursPage/ToursBody/ToursBody";

class TravelerRouter extends React.Component {
  state = {
    user: "traveler",
    currentUser: JSON.parse(localStorage.getItem("currentUser")),
    address: "",
    dates: ""
  };

  handleAddress = input => {
    this.setState({ address: input });
    localStorage.setItem("address", JSON.stringify(input));
  };

  dateHandler = dates => {
    this.setState({ dates });
    console.log("Hit me up", dates);
    localStorage.setItem("dates", JSON.stringify(dates));
  };
  render() {
    console.log(this.state);

    const { match } = this.props;
    return (
      <div className="travelerhome">
        {/* <Route
          path={`${match.path}/settings`}
          render={props => {
            return (
              <div>
                <NavBar {...props} user={this.state.currentUser} />
                <Settings {...props} user={this.state.currentUser} />
              </div>
            );
          }}
        /> */}
        {/* <Route
          path={`${match.path}/tours`}
          render={props => {
            return (
              <div>
                <NavBar {...props} user={this.state.currentUser} />
                <ToursBody {...props} user={this.state.currentUser} />
              </div>
            );
          }}
        /> */}
        <Route
          path={`${match.path}/search`}
          render={props => {
            return (
              <div className="traveler-search-page">
                <NavBar {...props} user={this.state.currentUser} />
                <SearchPage
                  {...props}
                  dates={this.dateHandler}
                  address={this.state.address}
                  user={this.state.currentUser}
                />
              </div>
            );
          }}
        />
        {/* <Route
          path={`${match.path}`}
          render={props => {
            return (
              <div>
                <NavBar {...props} user={this.state.currentUser} />
                <TravelerProfilePage {...props} user={this.state.currentUser} />
              </div>
            );
          }}
        /> */}
        <Route
          exact
          path={`${match.path}`}
          render={props => (
            <div>
              <NavBar {...props} user={this.state.currentUser} />
              <TravelerProfilePage
                // dates={this.dateHandler}
                // handleAddress={this.handleAddress}
                {...props}
                user={this.state.currentUser}
              />
            </div>
          )}
        />
      </div>
    );
  }
}

export default TravelerRouter;
