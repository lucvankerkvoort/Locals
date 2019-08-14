import React from "react";
import DateRangePicker from "@wojtekmaj/react-daterange-picker";
import "./style.css";

class Availability extends React.Component {
  state = {
    date: [new Date(), new Date()]
  };
  handleChange = date => {
    this.setState({ date });
  };
  render() {
    return (
      <div className="calendar-body">
        <div className="calendar">
          <DateRangePicker
            onChange={this.handleChange}
            value={this.state.date}
          />
          <button className="btn calendar-button">Submit</button>
        </div>

        <div className="available-title">
          <h3>Availability</h3>
        </div>
        <div className="availability">
          <div className="available-dates" />
        </div>
      </div>
    );
  }
}

export default Availability;
