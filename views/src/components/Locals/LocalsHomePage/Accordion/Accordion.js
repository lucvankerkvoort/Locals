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
      setActive === "active"
        ? "accordion__icon"
        : "accordion__icon local-homepage-rotate"
    );
    setBookMeButtonState(
      setBookMeButton === "Book me!" ? "Unbook me!" : "Book me!"
    );
  };

  return (
    <div className="local-homepage-huge-match-container">
      <div className="local-homepage-small-match-container">
        <div className="local-homepage-match-1">
          <div className="local-homepage-photo-big-container">
            <div className="local-homepage-photo" />
          </div>
          <div className="local-homepage-matches-info-container">
            <div className="local-homepage-grid-item-left">Name</div>
            <div className="local-homepage-grid-item-center">Start Date</div>
            <div className="local-homepage-grid-item-right">End Date</div>
          </div>
        </div>
        <div className="local-homepage-accordion-section">
          <button
            className={`local-homepage-accordion ${setActive}`}
            onClick={toggleAccordion}
          >
            <p className="local-homepage-accordion__title">{props.title}</p>
            <Chevron className={`${setRotate}`} width={12} fill={"#000"} />
          </button>
          <div
            ref={content}
            style={{ maxHeight: `${setHeight}` }}
            className="local-homepage-accordion__content"
          >
            <div
              className="local-homepage-accordion__text"
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
