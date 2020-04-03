import React from "react";

class AccountManagement extends React.Component {
  localRender = () => {
    if (this.state.user === "local") {
      return (
        <div>
          <div className="rates">
            <h2>Rates</h2>
          </div>
          <div className="add-a-route">
            <h2>Add a Route</h2>
          </div>
          <div className="calendar">
            <h2>Calendar</h2>
          </div>
        </div>
      );
    }
  };

  handleChange = (event, inputfield) => {
    this.setState({ [inputfield]: event });
  };

  render() {
    return (
      <div className="account-management">
        <div className="profile-edit">
          <h2>Profile Edit</h2>
        </div>
        <div className="reset-password">
          <h2>Password Reset</h2>
          <div>
            <form>
              <input
                className="password"
                name="password"
                onChange={() => this.handleChange("newPassword")}
                type="password"
                placeholder="Type in your new Password"
              />

              <input
                className="password"
                name="password"
                onChange={() => this.handleChange("verification")}
                type="password"
                placeholder="Once more for varifaction"
              />
            </form>
          </div>
        </div>
        {this.localRender}
      </div>
    );
  }
}

export default AccountManagement;
