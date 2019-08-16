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

  closeRegistration = input => {
    console.log({ input });
    this.setState({ showComponent: input });
  };
  handleClick = () => {
    this.setState({ showComponent: true });
  };

  handleChange = event => {
    const target = event.target;
    const name = target.name;
    this.setState({ [name]: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    let user = {
      username: this.state.username,
      password: this.state.password
    };
    if (this.state.user === "local") {
      API.loginSearchLocal(user).then(result => {
        console.log(result.data.length);
        if (result.data.length <= 0) {
          console.log("wrong username or password");
        } else {
          for (let i = 0; i < result.data.length; i++) {
            console.log(result.data[i]);
            API.getLocalById(result.data[i]._id).then(result => {
              console.log(result);
              this.props.currentUser(result.data);
              this.props.history.push("/localhome");
            });
          }
        }
      });
    } else if (this.state.user === "traveler") {
      API.loginSearchTraveler(user).then(result => {
        console.log(result.data.length);
        if (result.data.length <= 0) {
          console.log("wrong username or password");
        } else {
          for (let i = 0; i < result.data.length; i++) {
            console.log(result.data[i]);
            this.props.currentUser(result.data[i]._id);
          }
          this.props.history.push("/travelerhome");
        }
      });
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
              <div>
                if this is your first time visiting <br />
                <p className="registration-tag" onClick={this.handleClick}>
                  Register Here
                </p>
              </div>
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
