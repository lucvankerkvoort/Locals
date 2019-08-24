import React from "react";
import DateContainer from "./DateContainer/DateContainer";
import "./style.css";
import API from "../../../../controller";
import AvailableDate from "./AvailableDate/AvailableDate";

class Availability extends React.Component {
  state = {
    date: [new Date(), new Date()],
    availability: JSON.parse(localStorage.getItem("userDates"))
  };

  handleSubmit = () => {
    console.log(this.props.user._id);
    API.pushDates(this.props.user._id, this.state.date).then(result => {
      console.log(result);
      this.setState({ availability: result.data.availability });
    });
  };

  handleChange = date => {
    this.setState({ date });
  };
  render() {
    console.log(this.state);
    return (
      <div className="calendar-body">
        <div className="calendar">
          <DateContainer
            handleDates={this.handleChange}
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
                    startDate={dates.dateEnd}
                    endDate={dates.dateStart}
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
