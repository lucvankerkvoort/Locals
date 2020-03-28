import React from "react";
import { questions } from "../../../General/InputForm/elements";
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
    return (
      <div className="local-settings">
        <h2> Here you can change your existing settings.</h2>
        <div className="local-setting-body">
          <form className="big-form-container">
            {questions[this.props.user.type].map((question, i) => {
              return (
                <div className="local-settings-form" key={i}>
                  <label className="local-settings-label">
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
            <button
              type="submit"
              onClick={this.handleClick}
              className="locals-settings-btn"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default Settings;
