import React from "react";
import Moment from "react-moment";
import "./AvailableDate.css";
import API from "../../../../../controller";

class AvailableDate extends React.Component {
  state = {
    deleted: false
  };
  handleClick = () => {
    const localstorage = JSON.parse(localStorage.getItem("currentUser"));
    const userID = localstorage._id;
    API.deleteLocals(userID, this.props.id).then(result => {
      this.setState({ deleted: true });
      console.log(result);
    });
  };
  render() {
    console.log(this.props);
    console.log(this.state);
    return (
      <div className="available-dates" key={this.props.key}>
        <p>
          Available from <span> </span>
          <Moment format="MM/DD/YYYY">{this.props.startDate}</Moment>
          <span> </span> to
          <Moment format="MM/DD/YYYY">{this.props.endDate}</Moment>
        </p>
        {/* <p className="available-date-remover" onClick={this.handleClick}>
          X
        </p> */}
      </div>
    );
  }
}

export default AvailableDate;
