import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "../../General/NavBar/NavBar";
import Homebody from "./HomeBody/HomeBody";
import Settings from "./SettingsBody/SettingsBody";
import "./style.css";

class Localhome extends React.Component {
  state = {
    user: "local"
  };

  render() {
    return (
      <div className="localhome">
        <Navbar />
        <Route
          path="/localhome"
          render={props => <Homebody {...props} user={this.state.user} />}
        />
        <Route
          path="/localhome/settings"
          render={props => <Settings {...props} user={this.state.user} />}
        />
      </div>
    );
  }
}

export default Localhome;
