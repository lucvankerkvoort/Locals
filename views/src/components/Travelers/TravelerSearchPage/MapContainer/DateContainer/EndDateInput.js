import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./EndDateInput.css";

class EndDateInput extends React.Component {
  state = {
    endDate: new Date()
  };

  handleChange = date => {
    this.setState({
      endDate: date
    });
    this.props.endDate(date);
  };

  render() {
    return (
      <div className="traveler-home-end-date-container">
        <div className="traveler-home-end-date-search">
          <form>
            <DatePicker
              className="traveler-home-end-date-searchTerm"
              selected={this.state.endDate}
              onChange={this.handleChange}
              name="endDate"
              dateFormat="MM/dd/yyyy"
            />
          </form>
        </div>
      </div>
    );
  }
}

export default EndDateInput;
