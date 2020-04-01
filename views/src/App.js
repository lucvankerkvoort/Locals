import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/General/NavBar/NavBar";
import LandingPage from "./pages/Landing";
import ProfilePage from "./pages/ProfilePage";
import SearchPage from "./pages/SearchPage";
import "./App.css";

class App extends React.Component {
  state = {
    user: "traveler"
  };

  render() {
    return (
      <Router>
        <div>
          <Navbar />
          <Switch>
            <Route path="/profile">
              <ProfilePage />
            </Route>
            <Route path="/search">
              <SearchPage />
            </Route>
            <Route exact path="/">
              <LandingPage />
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
