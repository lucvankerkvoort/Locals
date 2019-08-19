import React from "react";
import "./style.css";
import API from "../../../controller";

class Login extends React.Component {
  state = {
    user: null
  };
  componentDidMount() {
    this.handleLogin();
  }
  handleLogin = () => {
    if (this.props.type === "local") {
      API.getLocals().then(res => this.setState({ user: res.data }));
      console.log(this.state.user);
    } else {
      console.log("bullshit");
    }
  };

  render() {
    return (
      <div className="background">
        {this.props.pictures}
        <div className="body">
          <div className="title">
            <h1>{this.props.title}</h1>
          </div>
          <div className="logincontainer">
            <h2>Login</h2>
            <form className="form">
              <input className="username" type="text" placeholder="Username" />
              <br />
              <br />
              <input
                className="password"
                type="password"
                placeholder="Password"
              />
              <button className="login-button" onClick={this.handleLogin}>
                Login
              </button>
            </form>
            <p className="registration">
              if this is your first time visiting
              <a href="#">Register Here</a>
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
