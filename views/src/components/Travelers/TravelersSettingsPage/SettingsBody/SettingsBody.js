import React from "react";
import { local, traveler } from "../../../General/InputForm/elements";
import "./style.css";

class Settings extends React.Component {
  render() {
    let user;
    if (this.props.user === "local") {
      user = local;
    } else {
      user = traveler;
    }
    return (
      <div className="traveler-settings">
        <div className="traveler-settings-body">
          <p> Here you can change your existing settings.</p>
          {user.map((question, i) => {
            return (
              <div className="traveler-settings-form" key={i}>
                <label className="traveler-settings-label">
                  {question.label}
                </label>
                <br />
                <input
                  type={question.type}
                  name={question.name}
                  onChange={this.handleChange}
                  placeholder={question.placeholder}
                />
              </div>
            );
          })}
          <br />
          <button className="traveler-settings-submit-btn">Submit</button>
        </div>
      </div>
    );
  }
}

export default Settings;
