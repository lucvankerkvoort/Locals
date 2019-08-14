import React from "react";
import { local, traveller } from "../../../General/InputForm/elements";
import "./style.css";

class Settings extends React.Component {
  render() {
    let user;
    if (this.props.user === "local") {
      user = local;
    } else {
      user = traveller;
    }
    return (
      <div className="settings">
        <div className="setting-body">
          <p> Here you can change your existing settings.</p>
          {user.map((question, i) => {
            return (
              <div className="settings-form" key={i}>
                <label>{question.label}</label>
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
          <button className="btn">Submit</button>
        </div>
      </div>
    );
  }
}

export default Settings;
