import React from "react";
import InputForm from "../../General/InputForm/InputForm";

class Registration extends React.Component {
  handleSubmit = () => {
    alert("im working");
  };
  render() {
    return (
      <div className="registration-wrapper">
        <div className="registration">
          <InputForm
            user={this.props.user}
            handleRegistration={this.handleSubmit}
          />
        </div>
      </div>
    );
  }
}

export default Registration;
