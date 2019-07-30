import React from "react";
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
  render() {
    // conditional to find out if it is a local or traveller
    // change the local to traveller according
    const localQuestions = local.map(question => (
      <Question
        label={question.label}
        type={question.type}
        placeholder={question.placeholder}
      />
    ));
    const travellerQuestions = traveller.map(question => (
      <Question
        label={question.label}
        type={question.type}
        placeholder={question.placeholder}
      />
    ));
    return (
      <div className="inputform">
        <h1>Registration</h1>
        {localQuestions}
      </div>
    );
  }
}

export default InputForm;
