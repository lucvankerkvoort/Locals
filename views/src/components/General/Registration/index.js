import React from "react";
import InputForm from "../InputForm/InputForm";
import API from "../../../controller/index";

class Registration extends React.Component {
  handleSubmit = (form) => {
    console.log("form", form);
    API.pushUser(form).then((res) => console.log(res));
    this.props.close(false, this.props.user, "register");
    // if () {
    //   const traveler = {
    //     firstname: form.firstname,
    //     lastname: form.lastname,
    //     username: form.username,
    //     password: form.password,
    //   };
    //   API.pushTravelers(traveler).then((res) => console.log(res));
    //   this.props.close(false, this.props.user, "register");
    // } else {
    //   API.pushLocals(form).then((res) => console.log(res));
    //   this.props.close(false, this.props.user, "register");
    // }
  };

  handleCloser = () => {
    this.props.close(false, this.props.user, "register");
  };
  render() {
    return (
      <div className="registration-wrapper">
        <div className="registration">
          <InputForm
            user={this.props.user}
            handleRegistration={this.handleSubmit}
            handleClose={this.handleCloser}
          />
        </div>
      </div>
    );
  }
}

export default Registration;
