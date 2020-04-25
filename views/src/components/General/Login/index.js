import React from "react";
import API from "../../../controller";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Registration from "../Registration";

class Login extends React.Component {
  state = {
    title:
      localStorage.getItem("user") === "local"
        ? "Welcome Local"
        : "Welcome Traveler",
    link: this.props.user === "local" ? "/local" : "/traveler",
    user: localStorage.getItem("user"),
    locals: "",
    username: "",
    password: "",
    showComponent: false,
    incorrect: "Incorrect Username or Password",
    showMessage: false,
  };

  closeRegistration = (input) => {
    this.setState({ showComponent: input });
  };
  handleClick = () => {
    this.setState({ showComponent: true });
  };

  handleChange = (event) => {
    const target = event.target;
    const name = target.name;
    this.setState({ [name]: event.target.value });
  };

  close = () => {
    this.props.close(false, this.props.user, "login");
    window.location.reload();
  };
  handleSubmit = (event) => {
    event.preventDefault();
    let user = {
      username: this.state.username,
      password: this.state.password,
    };

    API.login(user).then((result) => {
      console.log("result", result);
      if (result.data.length <= 0) {
        this.setState({ showMessage: true });
      } else if (user.password !== result.data[0].password) {
        this.setState({ showMessage: true });
      } else {
        API.getUserById(result.data[0]._id).then((result) => {
          let user = result.data[0];
          let info = {
            id: user._id,
            type: localStorage.getItem("user"),
            firstname: user.firstname,
            lastname: user.lastname,
            username: user.username,
            password: user.password,
            booking: user.booking,
          };
          localStorage.setItem("id", info.id);
          localStorage.setItem("booking", info.booking);
          localStorage.setItem("type", info.type);
          localStorage.setItem("firstname", info.firstname);
          localStorage.setItem("lastname", info.lastname);
          localStorage.setItem("username", info.username);
          localStorage.setItem("password", info.password);
          localStorage.setItem("info", JSON.stringify("info"));

          // this.close();
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
