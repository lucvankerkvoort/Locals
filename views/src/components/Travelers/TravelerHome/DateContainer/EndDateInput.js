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
    console.log(this.state.endDate);
    return (
      <div className="end-date-container">
        <div className="end-date-search">
          <form>
            <DatePicker
              className="end-date-searchTerm"
              selected={this.state.endDate}
              onChange={this.handleChange}
              name="endDate"
              dateFormat="mm/dd/yyyy"
            />
          </form>
        </div>
      </div>
    );
  }
}

export default EndDateInput;
