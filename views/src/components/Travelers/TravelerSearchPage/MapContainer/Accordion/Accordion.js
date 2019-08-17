import React, { useState, useRef } from "react";
import "./Accordion.css";
import BookButton from "./BookButton";
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
      <div className="small-match-container">
        <div className="match-1">
          <div className="photo-big-container">
            <div className="photo" />
          </div>
          <div className="traveler-matches-info-container">
            <div className="grid-item-top-left">Name</div>
            <div className="grid-item-top-right">Rate</div>
            <div className="grid-item-bottom-left">Start Date</div>
            <div className="grid-item-bottom-right">End Date</div>
          </div>
        </div>
        <div className="accordion-section">
          <button
            className={`accordion ${setActive}`}
            onClick={toggleAccordion}
          >
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
            <BookButton />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Accordion;
