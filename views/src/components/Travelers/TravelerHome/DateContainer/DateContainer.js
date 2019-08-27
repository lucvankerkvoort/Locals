import React from "react";
import "./DateContainer.css";
import StartDateInput from "./StartDateInput";
import EndDateInput from "./EndDateInput";

class DateContainer extends React.Component {
  handleStartDate = startDate => {
    localStorage.setItem("startDate", startDate);
  };
  handleEndDate = endDate => {
    localStorage.setItem("endDate", endDate);
  };

  render() {
    return (
      <div className="traveler-home-dates-container">
        <StartDateInput startDate={this.handleStartDate} />
        <EndDateInput endDate={this.handleEndDate} />
      </div>
    );
  }
}

export default DateContainer;
