import React from "react";
import "./Accordion2.css";

const Accordion = props => {
  return (
    <div className="local-homepage-huge-match-container">
      <div className="local-homepage-small-match-container">
        <div className="local-homepage-match-1">
          <div className="local-homepage-photo-big-container">
            <div className="local-homepage-photo" />
          </div>
          <div className="local-homepage-traveler-name-container">
            {props.name}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Accordion;
