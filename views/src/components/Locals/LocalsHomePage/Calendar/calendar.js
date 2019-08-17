import React from "react";
import DateRangePicker from "@wojtekmaj/react-daterange-picker";
import "./style.css";
import API from "../../../../controller";

class Availability extends React.Component {
  state = {
    date: [new Date(), new Date()],
    availability: this.props.user.availability
  };

  handleSubmit = () => {
    console.log(this.props.user._id);
    console.log(this.state.date);
    API.pushDates(this.props.user._id, this.state.date).then(result => {
      console.log(result);
      this.setState({ availability: result.data.availability });
    });
  };

  handleChange = date => {
    this.setState({ date });
  };
  render() {
    console.log(this.state.date);
    return (
      <div className="calendar-body">
        <div className="calendar">
          <DateRangePicker
            onChange={this.handleChange}
            value={this.state.date}
          />
          <button onClick={this.handleSubmit} className="btn calendar-button">
            Submit
          </button>
        </div>

        <div className="available-title">
          <h3>Availability</h3>
        </div>
        <div className="availability">
          {this.state.availability.map(dates => {
            const input = dates.date.toString();
            return <div className="available-dates">{input}</div>;
          })}
        </div>
      </div>
    );
  }
}

export default Availability;
