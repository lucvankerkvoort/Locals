import React from "react";
import "./DateContainer.css";
import StartDateInput from "./StartDateInput";
import EndDateInput from "./StartDateInput";

const DateContainer = () => {
  return (
    <div className="dates-container">
      <StartDateInput />
      {/* <EndDateInput /> */}
    </div>
  );
};

export default DateContainer;
