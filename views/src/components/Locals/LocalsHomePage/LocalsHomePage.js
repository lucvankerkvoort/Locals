import React from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Navbar from "../../General/NavBar/NavBar";
import Homebody from "./HomeBody/HomeBody";
import Settings from "./SettingsBody/SettingsBody";
import Tours from "./ToursBody/ToursBody";
import Availability from "./Calendar/calendar";
import "./style.css";
import API from "../../../controller";

class Localhome extends React.Component {
  state = {
    user: "local",
    currentUser: []
  };
  componentDidMount() {
    this.loadUser();
  }
  loadUser = () => {
    console.log(this.props.currentUser);
    API.getLocalById(this.props.currentUser).then(user =>
      this.setState({ currentUser: user })
    );
  };
  render() {
    const { match } = this.props;
    console.log("after render", this.state.currentUser);
    return (
      <div className="localhome">
        <Navbar status={this.props} user={this.state.currentUser} />
        <Route
          path={`${match.path}/settings`}
          render={props => {
            return <Settings {...props} user={this.state.user} />;
          }}
        />

        <Route
          path={`${match.path}/tours`}
          render={props => {
            return <Tours {...props} user={this.state.user} />;
          }}
        />
        <Route
          path={`${match.path}/calendar`}
          render={props => {
            return <Availability {...props} user={this.state.user} />;
          }}
        />
        <Route
          exact
          path={`${match.path}`}
          render={props => <Homebody {...props} user={this.state.user} />}
        />
      </div>
    );
  }
}

export default Localhome;
