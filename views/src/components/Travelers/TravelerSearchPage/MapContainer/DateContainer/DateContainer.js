import React from "react";
import "./DateContainer.css";
import StartDateInput from "./StartDateInput";
import EndDateInput from "./EndDateInput";

class DateContainer extends React.Component {
  handleStartDate = startDate => {
    this.props.handleStartDate(startDate);
  };
  handleEndDate = endDate => {
    this.props.handleEndDate(endDate);
  };

  render() {
    return (
      <div className="traveler-search-dates-container">
        <StartDateInput startDate={this.handleStartDate} />
        <EndDateInput endDate={this.handleEndDate} />
      </div>
    );
  }
}

export default DateContainer;
