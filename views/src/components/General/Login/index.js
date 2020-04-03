import React from "react";
import API from "../../../controller";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Registration from "../Registration";

class Login extends React.Component {
  state = {
    title: this.props.user === "local" ? "Welcome Local" : "Welcome Traveler",
    apiCall:
      this.props.user === "local"
        ? API.loginSearchLocal
        : API.loginSearchTraveler,
    link: this.props.user === "local" ? "/local" : "/traveler",
    user: localStorage.getItem("user"),
    getId: this.props.user === "local" ? API.getLocalById : API.getTravelerById,
    locals: "",
    username: "",
    password: "",
    showComponent: false,
    incorrect: "Incorrect Username or Password",
    showMessage: false
  };

  closeRegistration = input => {
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

  close = () => {
    this.props.close(false, this.props.user, "login");
    window.location.reload();
  };
  handleSubmit = event => {
    event.preventDefault();
    let user = {
      username: this.state.username,
      password: this.state.password
    };

    this.state.apiCall(user).then(result => {
      console.log(result);
      if (result.data.length <= 0) {
        this.setState({ showMessage: true });
      } else if (user.password !== result.data[0].password) {
        this.setState({ showMessage: true });
      } else {
        this.state.getId(result.data[0]._id).then(result => {
          console.log(result);
          let user = result.data[0];
          let id = user._id;
          let type = user.type;
          let firstname = user.firstname;
          let lastname = user.lastname;
          let username = user.username;
          let password = user.password;

          localStorage.setItem("id", id);
          localStorage.setItem("type", type);
          localStorage.setItem("firstname", firstname);
          localStorage.setItem("lastname", lastname);
          localStorage.setItem("username", username);
          localStorage.setItem("password", password);
          this.close();
        });
      }
    });
  };
  render() {
    console.log(this.state.user);
    return (
      <div className="loginpage">
        <p className="close-login" onClick={this.close}>
          x
        </p>
        <div className="title">
          <h1>{this.state.title}</h1>
        </div>
        <div className="logincontainer">
          <h2 className="login-text">Login</h2>
          <p className="incorrect-info-text">
            {this.state.showMessage ? this.state.incorrect : null}
          </p>
          <form className="form">
            <input
              className="username"
              name="username"
              type="text"
              onChange={this.handleChange}
              placeholder="Username"
            />
            <br />
            <br />
            <input
              className="password"
              name="password"
              onChange={this.handleChange}
              type="password"
              placeholder="Password"
            />
            <br />
            <br />
            <Link to="/profile">
              <button type="submit" onClick={this.handleSubmit}>
                Submit
              </button>
            </Link>
            <br />
            <div className="registration-text">
              If this is your first time visiting: <br />
              <button id="registerbtn" type="button" onClick={this.handleClick}>
                Register Here
              </button>
            </div>
          </form>

          {this.state.showComponent ? (
            <Registration
              close={this.closeRegistration}
              user={this.state.user}
            />
          ) : null}
        </div>
      </div>
    );
  }
}

export default Login;
