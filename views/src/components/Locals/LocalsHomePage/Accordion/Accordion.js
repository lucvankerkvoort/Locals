import React, { useState, useRef } from "react";
import "./Accordion2.css";
import BookButton from "./BookButton";
import Chevron from "./Chevron";

const Accordion = props => {
  const [setActive, setActiveState] = useState("");
  const [setHeight, setHeightState] = useState("0px");
  const [setRotate, setRotateState] = useState("accordion__icon");
  const [setBookMeButton, setBookMeButtonState] = useState("Book me!");

  const content = useRef(null);

  const toggleAccordion = () => {
    setActiveState(setActive === "" ? "active" : "");
    setHeightState(
      setActive === "active" ? "0px" : `${content.current.scrollHeight}px`
    );
    setRotateState(
      setActive === "active" ? "accordion__icon" : "accordion__icon rotate"
    );
    setBookMeButtonState(
      setBookMeButton === "Book me!" ? "Unbook me!" : "Book me!"
    );
  };

  return (
    <div className="local-huge-match-container">
      <div className="local-small-match-container">
        <div className="local-match-1">
          <div className="local-photo-big-container">
            <div className="local-photo" />
          </div>
          <div className="locals-matches-info-container">
            <div className="local-grid-item-left">Name</div>
            <div className="local-grid-item-center">Start Date</div>
            <div className="local-grid-item-right">End Date</div>
          </div>
        </div>
        <div className="local-accordion-section">
          <button
            className={`local-accordion ${setActive}`}
            onClick={toggleAccordion}
          >
            <p className="local-accordion__title">{props.title}</p>
            <Chevron className={`${setRotate}`} width={12} fill={"#000"} />
          </button>
          <div
            ref={content}
            style={{ maxHeight: `${setHeight}` }}
            className="local-accordion__content"
          >
            <div
              className="local-accordion__text"
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
