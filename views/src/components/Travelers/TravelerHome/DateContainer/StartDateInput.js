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
    return (
      <div className="container">
        <div className="search">
          <form onSubmit={this.handleSubmit}>
            <div className="form-group">
              <DatePicker
                className="searchTerm"
                selected={this.state.startDate}
                onChange={this.handleChange}
                name="startDate"
                dateFormat="mm/dd/yyyy"
                placeholder="Start Date"
              />
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default StartDateInput;
