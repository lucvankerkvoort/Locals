import React from "react";
import { questions } from "./elements";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Question from "./questions/questions";

class InputForm extends React.Component {
  state = {
    title: this.props.user === "local" ? "Local" : "Traveler",
    message: "Password is not long enough",
    info: {},
    passwordLength: false,
  };
  object = {};

  handleSubmit = (event) => {
    event.preventDefault();
    if (this.object.password.length > 8) {
      this.props.handleRegistration(this.object);
      this.setState({ passwordLength: false });
    } else {
      this.setState({ passwordLength: true });
    }
  };

  handleClose = () => {
    this.props.handleClose();
  };

  handleChange = (input, value) => {
    this.object[input] = value;
    console.log(this.object);
  };
  render() {
    return (
      <div className="input-form">
        <p className="close" onClick={this.handleClose}>
          Close
        </p>

        <p className="warning">
          {this.state.passwordLength ? this.state.message : null}
        </p>
        <h1>{this.state.title} Registration</h1>
        {questions[this.props.user].map((question, i) => (
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
        <Link to="/profile">
          <button onClick={this.handleSubmit}>Submit</button>
        </Link>
      </div>
    );
  }
}

export default InputForm;
