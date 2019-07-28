import React from "react";
import "./Button.css";

const Button = props => {
  return (
    <div className="button-container">
      <button className="general-button" onClick={() => props.onClick}>
        <span className="button-text">Insert Props Here</span>
      </button>
    </div>
  );
};
export default Button;
