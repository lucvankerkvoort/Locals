import React from "react";
import { questions } from "./elements";
import Question from "./questions/questions";

class InputForm extends React.Component {
  state = {
    title: this.props.user === "local" ? "Local" : "Traveler",
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
        <button onClick={this.handleSubmit}>Submit</button>
      </div>
    );
  }
}

export default InputForm;
