import React from "react";
import "./style.css";
import { travellerArray, localArray } from "./images/";
import BackgroundSlideshow from "react-background-slideshow";

class Login extends React.Component {
  state = {
    user: "local"
  };
  render() {
    console.log(travellerArray);
    let pictures;
    let title;
    if (this.state.user === "local") {
      title = "Welcome Local";
      pictures = <BackgroundSlideshow images={localArray} />;
      console.log(pictures);
    } else {
      title = "Welcome Traveller";
      pictures = <BackgroundSlideshow images={travellerArray} />;
      console.log(pictures);
    }
    return (
      <div className="background">
        {pictures}
        <div className="body">
          <div className="title">
            <h1>{title}</h1>
          </div>
          <div className="container">
            <h2>Login</h2>
            <form className="form">
              <label>Username</label>
              <br />
              <input type="text" placeholder="" />
              <br />
              <br />
              <label>Password</label>
              <br />
              <input type="password" placeholder="" />
              <p>
                if this is your first time visiting <br />
                <a href="#">Register Here</a>
              </p>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
