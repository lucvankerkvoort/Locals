import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LandingPage from "./pages/Landing";
import LoginPage from "./components/LoginPage/LoginPage";
import LocalsHomePage from "./components/Locals/LocalsHomePage/LocalsHomePage";
import TravelerRouter from "./components/Travelers/TravelerRouter";
import { withCookies } from "react-cookie";

class App extends React.Component {
  state = {
    user: "",
    currentUser: ""
  };

  handleChange = input => {
    this.setState({ user: input });
    localStorage.setItem("type", input);
  };

  handleUser = input => {
    this.setState({ currentUser: input });
    localStorage.setItem("currentUser", JSON.stringify(input));
  };

  render() {
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
