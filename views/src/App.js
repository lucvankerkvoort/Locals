import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LandingPage from "./components/LandingPage/LandingPage";
import LoginPage from "./components/LoginPage/LoginPage";
import LocalsHomePage from "./components/Locals/LocalsHomePage/LocalsHomePage";
import TravelerHome from "./components/Travelers/TravelerHome/TravelerHome";
import Settings from "./components/Locals/LocalsHomePage/SettingsBody/SettingsBody";
import Homebody from "./components/Locals/LocalsHomePage/HomeBody/HomeBody"

class App extends React.Component {
  state = {
    user: ""
  };

  handleChange = input => {
    console.log("input inside App.js", input);
    this.setState({ user: input });
  };

  render() {
    console.log(this.state.user);
    return (
      <Router>
        <div>
          <Switch>
            <Route
              exact
              path="/"
              render={() => <LandingPage handleChange={this.handleChange} />}
            />
            <Route
              path="/login"
              render={props => <LoginPage {...props} user={this.state.user} />}
            />
            <Route
              exact
              path="/localhome"
              render={props => {
                console.log(props);
                return <LocalsHomePage user={this.state.user} />;
              }}
            />

            <Route
              path="/localhome/home"
              render={props => <Homebody {...props} user={this.state.user} />}
            />
            <Route
              exact
              path="/settings"
              render={props => {
                return <Settings {...props} user={this.state.user} />;
              }}
            />
            <Route
              exact
              path="/travelerhome"
              component={() => <TravelerHome user={this.state.user} />}
            />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
