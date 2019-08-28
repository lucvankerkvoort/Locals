import React from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Navbar from "./NavBar/NavBar";
import HomeBody from "./HomeBody/HomeBody";
import Settings from "./SettingsBody/SettingsBody";
import Availability from "./Calendar/calendar";
import ToursBody from "./LocalsToursBody/ToursBody";
import "./LocalsHomePage.css";
import { withCookies } from "react-cookie";
import API from "../../../controller";

class Localhome extends React.Component {
  state = {
    user: "local",
    currentUser: this.props.currentUser
  };

  componentDidMount() {
    console.log("Component Mounted");
    const currentUser = JSON.parse(localStorage.getItem("currentUser"));
    const userDates = JSON.stringify(currentUser.availability);
    localStorage.setItem("userDates", userDates);
    this.getTraveler();
    this.setState({ currentUser, check: true });
  }

  getTraveler = () => {
    console.log("Getting Traveler");
    const user = JSON.parse(localStorage.getItem("currentUser"));
    const booking = user.booking;
    let bookingsArray = [];
    for (let j = 0; j < booking.length; j++) {
      bookingsArray.push(booking[0].id);
    }
    let uniqueBookingsArray = [...new Set(bookingsArray)];
    let uniqueBookings = [];
    for (let i = 0; i < uniqueBookingsArray.length; i++) {
      API.getTravelerById(uniqueBookingsArray[i])
        .then(result => {
          if (uniqueBookings.indexOf(result.data[0])) {
            uniqueBookings.push(result.data[0]);
            localStorage.setItem(
              "localBooking",
              JSON.stringify(uniqueBookings)
            );
            user.booking = uniqueBookings;
            localStorage.setItem("currentUser", JSON.stringify(user));
          }
        })
        .catch(error => {
          console.log(error);
        });
    }
  };
  render() {
    console.log(this.state);

    const { match } = this.props;
    return (
      <div className="localhome">
        <Navbar status={this.props} user={this.state.currentUser} />
        <Route
          path={`${match.path}/settings`}
          render={props => {
            return (
              <Settings
                {...props}
                cookies={this.props.cookies}
                user={this.state.currentUser}
              />
            );
          }}
        />

        <Route
          path={`${match.path}/tours`}
          render={props => {
            return (
              <ToursBody
                {...props}
                cookies={this.props.cookies}
                user={this.state.currentUser}
              />
            );
          }}
        />
        <Route
          path={`${match.path}/calendar`}
          render={props => {
            return (
              <Availability
                {...props}
                cookies={this.props.cookies}
                user={this.state.currentUser}
              />
            );
          }}
        />
        <Route
          exact
          path={`${match.path}`}
          render={props => (
            <HomeBody
              cookies={this.props.cookies}
              {...props}
              user={this.state.currentUser}
            />
          )}
        />
      </div>
    );
  }
}

export default withCookies(Localhome);
