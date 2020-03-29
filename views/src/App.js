import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/General/NavBar/NavBar";
import LandingPage from "./pages/Landing";
import LoginPage from "./components/General/Login";
import LocalsHomePage from "./components/Locals/LocalsHomePage/LocalsHomePage";
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
              path="/login"
              render={props => (
                <LoginPage
                  {...props}
                  user={this.state.user}
                  currentUser={this.handleUser}
                />
              )}
            />
            <Route
              path="/localhome"
              render={props => {
                console.log(props);
                return (
                  <LocalsHomePage
                    {...props}
                    currentUser={this.state.currentUser}
                    user={this.state.user}
                  />
                );
              }}
            />
            />
            <Route
              path="/travelerhome"
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
