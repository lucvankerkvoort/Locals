import React from "react";
import "./style.css";
import { travellerArray, localArray } from "../General/images";
import BackgroundSlideshow from "react-background-slideshow";
import API from "../../controller/index";
import Registration from "./RegisterBlurb/RegisterBlurb";

class Login extends React.Component {
  state = {
    user: this.props.user,
    travelers: "",
    locals: "",
    username: "",
    password: "",
    showComponent: false
  };

  componentDidMount() {
    this.loadAll();
  }

  closeRegistration = input => {
    console.log({ input });
    this.setState({ showComponent: input });
  };
  handleClick = () => {
    this.setState({ showComponent: true });
  };
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
        this.props.history.push("/localhome");
      } else {
      }
    } else if (this.state.user === "traveler") {
      console.log("this is running");
      if (
        this.state.travelers.data.some(
          user =>
            user.username === this.state.username &&
            user.password === this.state.password
        )
      ) {
        alert("it works");
        // link it to the homepage  for the travelers
        this.props.history.push("/travelerhome");
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
    } else {
      title = "Welcome Traveller";
      pictures = <BackgroundSlideshow images={travellerArray} />;
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
              <button className="btn" type="submit" onClick={this.handleSubmit}>
                Submit
              </button>
              <br />
              <p>
                if this is your first time visiting <br />
                <p className="registration-tag" onClick={this.handleClick}>
                  Register Here
                </p>
              </p>
            </form>
          </div>
        </div>

        {this.state.showComponent ? (
          <Registration close={this.closeRegistration} user={this.state.user} />
        ) : null}
      </div>
    );
  }
}

export default Login;
