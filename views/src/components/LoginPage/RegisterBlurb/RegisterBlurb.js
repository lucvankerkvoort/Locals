import React from "react";
import InputForm from "../../General/InputForm/InputForm";
import API from "../../../controller/index";

class Registration extends React.Component {
  handleSubmit = form => {
    console.log(form);
    if (form.tourinfo === "") {
      console.log("pushin into travelers");
      const traveler = {
        firstname: form.firstname,
        lastname: form.lastname,
        username: form.username,
        password: form.password
      };
      API.pushTravelers(traveler).then(res => console.log(res));
    } else {
      console.log("pushin into travelers");
      API.pushLocals(form).then(res => console.log(res));
    }
  };
  handleCloser = () => {
    this.props.close(false);
  };
  render() {
    console.log(this.props);
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
