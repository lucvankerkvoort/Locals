import React from "react";
import "./style.css";
import { local, traveller } from "./elements";

function Question(props) {
  return (
    <div>
      <label>{props.label}</label>
      <br />
      <input type={props.type} placeholder={props.placeholder} />
    </div>
  );
}

class InputForm extends React.Component {
  handleSubmit = event => {
    event.preventDefault();
    this.props.handleRegistration();
  };
  render() {
    console.log(this.props.handleRegistration);
    if (this.props.user === "local") {
      return (
        <div className="inputform">
          <h1>Local Registration</h1>
          {local.map((question, i) => (
            <Question
              key={i}
              label={question.label}
              type={question.type}
              placeholder={question.placeholder}
            />
          ))}
          <br />
          <button onClick={this.handleSubmit}>Submit</button>
        </div>
      );
    } else {
      return (
        <div className="inputform">
          <h1>Traveller Registration</h1>
          {traveller.map((question, i) => (
            <Question
              key={i}
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
}

export default InputForm;
