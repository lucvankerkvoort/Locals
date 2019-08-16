import React from "react";
import { local, traveller } from "../../../General/InputForm/elements";
import "./style.css";
import API from "../../../../controller";

class Settings extends React.Component {
  state = {
    currentUser: this.props.user
  };

  handleClick = event => {
    event.preventDefault();

    API.put;
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
      user = traveller;
    }
    return (
      <div className="settings">
        <div className="setting-body">
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
