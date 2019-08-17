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
  };

  render() {
    console.log(this.state.endDate);
    return (
      <div className="container">
        <div className="search">
          <form onSubmit={this.handleSubmit}>
            <div className="form-group">
              <DatePicker
                className="searchTerm"
                selected={this.state.endDate}
                onChange={this.handleChange}
                name="startDate"
                dateFormat="mm/dd/yyyy"
              />
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default EndDateInput;
