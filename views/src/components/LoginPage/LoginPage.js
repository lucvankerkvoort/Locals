import React from "react";
import "./style.css";
import { travellerArray, localArray } from "../General/images";
import BackgroundSlideshow from "react-background-slideshow";
import API from "../../controller/index";

class Login extends React.Component {
  state = {
    user: this.props.user,
    travelers: "",
    locals: "",
    username: "",
    password: ""
  };

  componentDidMount() {
    this.loadAll();
  }

  loadAll = () => {
    API.getTravelers().then(res => this.setState({ travelers: res }));
    API.getLocals().then(res => this.setState({ locals: res }));
  };

  handleChange = event => {
    const target = event.target;
    const name = target.name;
    this.setState({ [name]: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    if (this.state.user === "local") {
      if (
        this.state.locals.data.some(
          user =>
            user.username === this.state.username &&
            user.password === this.state.password
        )
      ) {
        alert("it works");
      } else {
        console.log("incorrect password and username");
      }
    } else if (this.state.user === "traveler") {
      if (
        this.state.travelers.data.some(
          user =>
            user.username === this.state.username &&
            user.password === this.state.password
        )
      ) {
        alert("it works");
        //
      } else {
        console.log("incorrect password and username");
      }
    }
  };
  render() {
    console.log(this.state);
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
          <div className="logincontainer">
            <h2>Login</h2>
            <form className="form">
              <input
                name="username"
                type="text"
                onChange={this.handleChange}
                placeholder="Username"
              />
              <br />
              <br />
              <input
                name="password"
                onChange={this.handleChange}
                type="password"
                placeholder="Password"
              />
              <br />
              <br />
              <button type="submit" onClick={this.handleSubmit}>
                Submit
              </button>
              <br />
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
