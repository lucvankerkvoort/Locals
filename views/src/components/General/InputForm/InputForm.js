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
  state = {
    user: "t"
  };
  render() {
    if (this.state.user === "local") {
      return (
        <div className="inputform">
          <h1>Local Registration</h1>
          {local.map(question => (
            <Question
              label={question.label}
              type={question.type}
              placeholder={question.placeholder}
            />
          ))}
        </div>
      );
    } else {
      return (
        <div className="inputform">
          <h1>Traveller Registration</h1>
          {traveller.map(question => (
            <Question
              label={question.label}
              type={question.type}
              placeholder={question.placeholder}
            />
          ))}
        </div>
      );
    }
  }
}

export default InputForm;
