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
        : "accordion__icon traveler-search-rotate"
    );
  };

  return (
    <div className="traveler-search-huge-match-container">
      <div className="traveler-search-small-match-container">
        <div className="traveler-search-match-1">
          <div className="traveler-search-photo-big-container">
            <div className="traveler-search-photo" />
          </div>
          <div className="traveler-search-matches-info-container">
            <div className="traveler-search-grid-item-top-left">
              {props.name}
            </div>
            <div className="traveler-search-grid-item-top-right">
              {props.rate}
            </div>
            <div className="traveler-search-grid-item-bottom-left">
              {props.endDate}
            </div>
            <div className="traveler-search-grid-item-bottom-right">
              {props.startDate}
            </div>
          </div>
        </div>
        <div className="traveler-search-accordion-section">
          <button
            className={`traveler-search-accordion ${setActive}`}
            onClick={toggleAccordion}
          >
            <p className="traveler-search-accordion__title">{props.title}</p>
            <Chevron className={`${setRotate}`} width={12} fill={"#000"} />
          </button>
          <div
            ref={content}
            style={{ maxHeight: `${setHeight}` }}
            className="traveler-search-accordion__content"
          >
            <div
              className="traveler-search-accordion__text"
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
