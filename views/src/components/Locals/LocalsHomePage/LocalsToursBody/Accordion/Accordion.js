import React from "react";
import "./Accordion2.css";

const Accordion = props => {
  return (
    <div className="local-tours-huge-match-container">
      <div className="local-tours-small-match-container">
        <div className="local-tours-match-1">
          <div className="local-tours-photo-big-container">
            <div className="local-tours-photo" />
          </div>
          <div className="local-tours-traveler-name-container">
            {props.name}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Accordion;
