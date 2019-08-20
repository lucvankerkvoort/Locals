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
  };

  render() {
    console.log(this.state.startDate);
    return (
      <div className="start-date-container">
        <div className="start-date-search">
          <form>
            <DatePicker
              className="start-date-searchTerm"
              selected={this.state.startDate}
              onChange={this.handleChange}
              name="startDate"
              dateFormat="MM/dd/yyyy"
            />
          </form>
        </div>
      </div>
    );
  }
}

export default StartDateInput;
