import React from "react";
import { local, traveler } from "./elements";
import Question from "./questions/questions";

class InputForm extends React.Component {
  state = {
    firstname: "",
    lastname: "",
    username: "",
    password: "",
    avatar: "",
    address: "",
    bio: "",
    tourinfo: "",
    rate: 0,
    message: "Password is not long enough",
    passwordLength: false
  };
  handleSubmit = event => {
    console.log(event);
    event.preventDefault();
    if (this.state.password.length > 8) {
      this.props.handleRegistration(this.state);
      this.setState({ passwordLength: false });
    } else {
      this.setState({ passwordLength: true });
    }
  };

  handleClose = () => {
    this.props.handleClose();
  };

  handleChange = (input, value) => {
    this.setState({ [input]: value });
  };
  render() {
    if (this.props.user === "local") {
      return (
        <div className="input-form">
          <p className="close" onClick={this.handleClose}>
            Close
          </p>
          <h1>Local Registration</h1>
          {this.state.passwordLength ? this.state.message : null}
          {local.map((question, i) => (
            <Question
              storeData={this.handleChange}
              key={i}
              name={question.name}
              label={question.label}
              type={question.type}
              placeholder={question.placeholder}
            />
          ))}
          <br />
          <button
            className="local-registration-btn"
            onClick={this.handleSubmit}
          >
            Submit
          </button>
        </div>
      );
    } else {
      return (
        <div className="input-form">
          <p className="close" onClick={this.handleClose}>
            Close
          </p>
          <h1>Traveler Registration</h1>
          {this.state.passwordLength ? this.state.message : null}
          {traveler.map((question, i) => (
            <Question
              storeData={this.handleChange}
              key={i}
              name={question.name}
              label={question.label}
              type={question.type}
              placeholder={question.placeholder}
            />
          ))}
          <br />
          <button
            className="traveler-registration-btn"
            onClick={this.handleSubmit}
          >
            Submit
          </button>
        </div>
      );
    }
  }
}

export default InputForm;
