import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/General/NavBar/NavBar";
import LandingPage from "./pages/Landing";
import Localhome from "./pages/Locals";
import TravelerRouter from "./pages/Traveler";
import "./App.css";

class App extends React.Component {
  state = {
    user: "traveler"
  };
  render() {
    return (
      <Router>
        <div>
          <Switch>
            <Route
              exact
              path="/"
              render={props => {
                return (
                  <div>
                    <Navbar {...props} />
                    <LandingPage {...props} />;
                  </div>
                );
              }}
            />
            <Route
              path="/local"
              render={props => {
                console.log(props);
                return (
                  <Localhome
                    {...props}
                    currentUser={this.state.currentUser}
                    user={this.state.user}
                  />
                );
              }}
            />
            />
            <Route
              path="/traveler"
              render={props => (
                <TravelerRouter
                  {...props}
                  user={this.state.user}
                  currentUser={this.state.currentUser}
                />
              )}
            />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
