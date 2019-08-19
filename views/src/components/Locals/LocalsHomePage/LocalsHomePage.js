import React from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Navbar from "../../General/NavBar/NavBar";
import HomeBody from "./HomeBody/HomeBody";
import Settings from "./SettingsBody/SettingsBody";
import Availability from "./Calendar/calendar";
import ToursBody from "./LocalsToursBody/ToursBody";
import "./LocalsHomePage.css";

class Localhome extends React.Component {
  state = {
    user: "local",
    currentUser: this.props.currentUser
  };
  render() {
    console.log(this.state.currentUser);

    const { match } = this.props;
    return (
      <div className="localhome">
        <Navbar status={this.props} user={this.state.currentUser} />
        <Route
          path={`${match.path}/settings`}
          render={props => {
            return <Settings {...props} user={this.state.currentUser} />;
          }}
        />

        <Route
          path={`${match.path}/tours`}
          render={props => {
            return <ToursBody {...props} user={this.state.currentUser} />;
          }}
        />
        <Route
          path={`${match.path}/calendar`}
          render={props => {
            return <Availability {...props} user={this.state.currentUser} />;
          }}
        />
        <Route
          exact
          path={`${match.path}`}
          render={props => (
            <HomeBody {...props} user={this.state.currentUser} />
          )}
        />
      </div>
    );
  }
}

export default Localhome;
