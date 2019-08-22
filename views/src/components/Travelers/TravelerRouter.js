import React from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import TravelerHome from "./TravelerHome/TravelerHome";
import Settings from "./TravelersSettingsPage/SettingsBody/SettingsBody";
import MapContainer from "./TravelerSearchPage/MapContainer/MapContainer";
import NavBar from "./TravelerSearchPage/NavBar/NavBar";
import ToursBody from "./TravelerToursPage/ToursBody/ToursBody";

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

  dateHandler = input => {
    this.setState({ dates: input });
    localStorage.setItem("dates", input);
  };
  render() {
    console.log(this.state);

    const { match } = this.props;
    return (
      <div className="travelerhome">
        <Route
          path={`${match.path}/settings`}
          render={props => {
            return (
              <div>
                <NavBar {...props} user={this.state.currentUser} />
                <Settings {...props} user={this.state.currentUser} />
              </div>
            );
          }}
        />
        <Route
          path={`${match.path}/tours`}
          render={props => {
            return (
              <div>
                <NavBar {...props} user={this.state.currentUser} />
                <ToursBody {...props} user={this.state.currentUser} />
              </div>
            );
          }}
        />
        <Route
          path={`${match.path}/search`}
          render={props => {
            return (
              <div className="traveler-search-page">
                <NavBar {...props} user={this.state.currentUser} />
                <MapContainer
                  {...props}
                  dates={this.state.dates}
                  address={this.state.address}
                  user={this.state.currentUser}
                />
              </div>
            );
          }}
        />
        <Route
          exact
          path={`${match.path}`}
          render={props => (
            <TravelerHome
              dates={this.dateHandler}
              handleAddress={this.handleAddress}
              {...props}
              user={this.state.currentUser}
            />
          )}
        />
      </div>
    );
  }
}

export default TravelerRouter;
