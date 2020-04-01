import React from "react";
import Login from "../Login";

class Switch extends React.Component {
  state = {
    showLogin: false
  };
  handleClick = type => {
    this.setState({ showLogin: true });
    localStorage.setItem("user", type);
  };

  close = input => {
    this.setState({ showLogin: input });
    this.props.close(false, null, "login");
  };
  render() {
    return (
      <div className="switch">
        <div className="traveler-switch">
          {this.state.showLogin ? (
            <Login close={this.close} user={localStorage.getItem("user")} />
          ) : null}
          <h5 onClick={() => this.handleClick("traveler")}>Traveler</h5>
        </div>
        <div className="local-switch">
          <h5 onClick={() => this.handleClick("local")}>Local</h5>
        </div>
      </div>
    );
  }
}

export default Switch;
