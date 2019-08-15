import React, { useState, useRef } from "react";
import "./Accordion.css";
import Chevron from "./Chevron";

const Accordion = props => {
  const [setActive, setActiveState] = useState("");
  const [setHeight, setHeightState] = useState("0px");
  const [setRotate, setRotateState] = useState("accordion__icon");

  const content = useRef(null);

  const toggleAccordion = () => {
    setActiveState(setActive === "" ? "active" : "");
    setHeightState(
      setActive === "active" ? "0px" : `${content.current.scrollHeight}px`
    );
    setRotateState(
      setActive === "active" ? "accordion__icon" : "accordion__icon rotate"
    );
  };

  return (
    <div className="huge-match-container">
      <div className="match-1">
        <div className="photo-big-container">
          <div className="photo" />
        </div>
        <div className="matches-info-container">
          <div className="grid-item-top">Gregory Tang</div>
          <div className="grid-item-top">$30/hour</div>
          <div className="grid-item-bottom">Madrid, Spain</div>
          <div className="grid-item-bottom">5 stars</div>
        </div>
      </div>
      <div className="accordion-section">
        <button className={`accordion ${setActive}`} onClick={toggleAccordion}>
          <p className="accordion__title">{props.title}</p>
          <Chevron className={`${setRotate}`} width={12} fill={"#000"} />
        </button>
        <div
          ref={content}
          style={{ maxHeight: `${setHeight}` }}
          className="accordion__content"
        >
          <div
            className="accordion__text"
            dangerouslySetInnerHTML={{ __html: props.content }}
          />
        </div>
      </div>
    </div>
  );
};

export default Accordion;
