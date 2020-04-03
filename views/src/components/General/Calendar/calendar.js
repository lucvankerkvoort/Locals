import React from "react";
import DateContainer from "./DateContainer/DateContainer";
import "./style.css";
import API from "../../../../controller";
import AvailableDate from "./AvailableDate/AvailableDate";

class Availability extends React.Component {
  state = {
    startDate: new Date(),
    endDate: new Date(),
    availability: JSON.parse(localStorage.getItem("userDates"))
  };

  handleSubmit = () => {
    const dates = {
      startDate: this.state.startDate,
      endDate: this.state.endDate
    };
    console.log(dates);
    API.pushDates(this.props.user._id, dates).then(result => {
      console.log("hello", result.data.availability);
      this.setState({
        availability: result.data.availability
      });
    });
  };

  changeAvailability = availability => {
    this.setState({ availability });
  };

  handleStartDate = startDate => {
    this.setState({ startDate });
  };

  handleEndDate = endDate => {
    this.setState({ endDate });
  };
  render() {
    console.log(this.state);
    return (
      <div className="calendar-body">
        <div className="calendar">
          <DateContainer
            handleStartDate={this.handleStartDate}
            handleEndDate={this.handleEndDate}
            value={this.state.date}
          />
        </div>
        <button onClick={this.handleSubmit} className="calendar-button">
          Submit
        </button>
        <div className="container-below-datecontainer">
          <div className="available-title">
            <h2>Availability</h2>
          </div>
          <div className="availability-container">
            <div className="availability">
              {this.state.availability.map((dates, i) => {
                return (
                  <AvailableDate
                    changeAvailability={this.changeAvailability}
                    startDate={dates.dateStart}
                    endDate={dates.dateEnd}
                    key={i}
                    id={dates._id}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Availability;
