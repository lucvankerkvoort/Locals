import React from "react";
import Moment from "react-moment";
import "./AvailableDate.css";

const AvailableDate = props => {
  return (
    <div className="available-dates" key={props.key}>
      <p>
        Available from <span> </span>
        <Moment format="MM/DD/YYYY">{props.startDate}</Moment>
        <span> </span> to <Moment format="MM/DD/YYYY">{props.endDate}</Moment>
      </p>
    </div>
  );
};

export default AvailableDate;
