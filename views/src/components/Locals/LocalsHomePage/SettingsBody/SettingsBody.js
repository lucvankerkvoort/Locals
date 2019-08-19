import React from "react";
import { local, traveler } from "../../../General/InputForm/elements";
import "./style.css";
import API from "../../../../controller";

class Settings extends React.Component {
  state = {};

  handleClick = event => {
    event.preventDefault();
    API.updateLocal(this.props.user._id, this.state).then(result => {
      console.log(result);
    });
  };

  handleChange = event => {
    const target = event.target;
    const name = target.name;
    this.setState({ [name]: event.target.value });
  };
  render() {
    console.log(this.state);
    let user;
    if (this.props.user.type === "Local") {
      user = local;
    } else {
      user = traveler;
    }
    return (
      <div className="local-settings">
        <div className="local-setting-body">
          <form>
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
            <button type="submit" onClick={this.handleClick} className="btn">
              Submit
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default Settings;
