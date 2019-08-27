import React from "react";
import "./ToursBody.css";
import Accordion from "./Accordion/Accordion";

class ToursBody extends React.Component {
  state = {
    tours: JSON.parse(localStorage.getItem("localBooking"))
  };

  render() {
    const bookingInfo = this.state.tours.map((traveler, i) => (
      <Accordion
        name={`${traveler.firstname} ${traveler.lastname}`}
        key={i}
        userId={traveler._id}
      />
    ));
    return (
      <div className="local-body-container">
        <div className="local-next-tour">Next Tour</div>
        <div className="local-next-tour-accordion">
          <Accordion content="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum." />
        </div>
        <div className="local-upcoming-tours">Upcoming Tours</div>
        <div className="local-upcoming-tours-accordions">{bookingInfo}</div>
      </div>
    );
  }
}

export default ToursBody;
