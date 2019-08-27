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
      setActive === "active"
        ? "accordion__icon"
        : "accordion__icon traveler-tours-rotate"
    );
  };

  return (
    <div className="traveler-tours-huge-match-container">
      <div className="traveler-tours-small-match-container">
        <div className="traveler-tours-match-1">
          <div className="traveler-tours-photo-big-container">
            <div className="traveler-tours-photo" />
          </div>
          <div className="traveler-tours-matches-info-container">
            <div className="traveler-tours-grid-item-top-left">
              {props.name}
            </div>
            <div className="traveler-tours-grid-item-top-right">
              ${props.rate}/hour
            </div>
            <div className="traveler-tours-grid-item-bottom-left">
              Start: {props.startDate}
            </div>
            <div className="traveler-tours-grid-item-bottom-right">
              End: {props.endDate}
            </div>
          </div>
        </div>
        <div className="traveler-tours-accordion-section">
          <button
            className={`traveler-tours-accordion ${setActive}`}
            onClick={toggleAccordion}
          >
            <p className="traveler-tours-accordion__title">{props.title}</p>
            <Chevron className={`${setRotate}`} width={12} fill={"#000"} />
          </button>
          <div
            ref={content}
            style={{ maxHeight: `${setHeight}` }}
            className="traveler-tours-accordion__content"
          >
            <div
              className="traveler-tours-accordion__text"
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
