import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LandingPage from "./components/LandingPage/LandingPage";
import LoginPage from "./components/LoginPage/LoginPage";
import LocalsHomePage from "./components/Locals/LocalsHomePage/LocalsHomePage";
import TravelerHome from "./components/Travelers/TravelerHome/TravelerHome";

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
              exact
              path="/login"
              component={() => <LoginPage user={this.state.user} />}
            />
            <Route
              exact
              path="/localhome"
              component={() => <LocalsHomePage user={this.state.user} />}
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
