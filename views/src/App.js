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

  render() {
    return (
      <Router>
        <div>
          <Switch>
            <Route exact path="/" component={LandingPage} />
            <Route exact path="/login" component={LoginPage} />
            <Route exact path="/localhome" component={LocalsHomePage} />
            <Route exact path="/travelerhome" component={TravelerHome} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
