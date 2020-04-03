import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/General/NavBar/NavBar";
import LandingPage from "./pages/Landing";
import ProfilePage from "./pages/ProfilePage";
import SearchPage from "./pages/SearchPage";
import AccountManagement from "./pages/AccountManagement";
import Help from "./pages/Help";
import "./App.css";

class App extends React.Component {
  state = {
    user: {
      firstname: localStorage.getItem("firstname"),
      lastname: localStorage.getItem("lastname"),
      type: localStorage.getItem("type"),
      username: localStorage.getItem("username"),
      password: localStorage.getItem("password")
    }
  };

  render() {
    return (
      <Router>
        <div>
          <Navbar />
          <Switch>
            <Route path="/profile">
              <ProfilePage user={this.state.user} />
            </Route>
            <Route path="/search">
              <SearchPage user={this.state.user} />
            </Route>
            <Route path="/account">
              <AccountManagement user={this.state.user} />
            </Route>
            <Route path="/help">
              <Help user={this.state.user} />
            </Route>
            <Route exact path="/">
              <LandingPage user={this.state.user} />
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
