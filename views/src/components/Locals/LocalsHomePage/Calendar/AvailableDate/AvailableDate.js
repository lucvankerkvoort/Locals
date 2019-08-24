import React from "react";
import Moment from "react-moment";
import "./AvailableDate.css";
import API from "../../../../../controller";

class AvailableDate extends React.Component {
  handleClick = () => {
    const localstorage = JSON.parse(localStorage.getItem("currentUser"));
    const userID = localstorage._id;
    const dateID = {
      id: this.props.id
    };
    console.log("Date ID", dateID);
    console.log("UserID", userID);
    API.deleteLocalsDates(userID, dateID).then(result => {
      console.log(result);
      API.getLocalById(userID).then(result => {
        console.log(result);
        for (let i = 0; i < result.data.length; i++) {
          console.log("availability", result.data[i].availability);
          this.props.changeAvailability(result.data[i].availability);
        }
      });
    });
  };

  render() {
    console.log(this.props);
    return (
      <div className="available-dates" key={this.props.key}>
        <p>
          Available from <span> </span>
          <Moment format="MM/DD/YYYY">{this.props.startDate}</Moment>
          <span> </span> to <span> </span>
          <Moment format="MM/DD/YYYY">{this.props.endDate}</Moment>
        </p>
        <button className="available-date-button" onClick={this.handleClick}>
          x
        </button>
      </div>
    );
  }
}

export default AvailableDate;
