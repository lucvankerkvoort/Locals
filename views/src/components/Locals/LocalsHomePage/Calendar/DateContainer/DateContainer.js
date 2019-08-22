import React from "react";
import "./DateContainer.css";
import StartDateInput from "./StartDateInput";
import EndDateInput from "./EndDateInput";

let dates = [];
class DateContainer extends React.Component {
  handleStartDate = input => {
    dates.push(input);
    this.handleDates();
  };
  handleEndDate = input => {
    dates.push(input);
    this.handleDates();
  };

  handleDates = () => {
    console.log(dates);
    if (dates.length <= 2) {
      this.props.handleDates(dates);
    }
  };
  render() {
    return (
      <div className="local-dates-container">
        <StartDateInput startDate={this.handleStartDate} />
        <EndDateInput endDate={this.handleEndDate} />
      </div>
    );
  }
}

export default DateContainer;
