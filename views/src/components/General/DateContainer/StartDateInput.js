import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./StartDateInput.css";

class StartDateInput extends React.Component {
  state = {
    startDate: new Date()
  };

  handleChange = date => {
    this.setState({
      startDate: date
    });
    this.props.startDate(date);
  };

  render() {
    return (
      <div className="traveler-home-start-date-container">
        <DatePicker
          className="traveler-home-start-date-searchTerm"
          selected={this.state.startDate}
          onChange={this.handleChange}
          name="startDate"
          dateFormat="MM/dd/yyyy"
        />
      </div>
    );
  }
}

export default StartDateInput;
