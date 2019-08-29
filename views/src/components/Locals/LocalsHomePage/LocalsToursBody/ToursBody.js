import React from "react";
import "./ToursBody.css";
import Accordion from "./Accordion/Accordion";

class ToursBody extends React.Component {
  state = {
    tours: JSON.parse(localStorage.getItem("localBooking"))
  };
  nextBooking;
  bookingInfo;
  render() {
    const nextTour = this.state.tours[0];
    if (nextTour) {
      this.nextBooking = (
        <Accordion
          name={`${nextTour.firstname} ${nextTour.lastname}`}
          key={0}
          userId={nextTour._id}
        />
      );
    } else {
      this.nextBooking = (
        <p className="warning-message-local-tours">No tours yet!</p>
      );
    }

    const allBookings = this.state.tours;
    allBookings.shift();
    if (allBookings.length > 0) {
      this.bookingInfo = this.state.tours.map((traveler, i) => (
        <Accordion
          name={`${traveler.firstname} ${traveler.lastname}`}
          key={i + 1}
          userId={traveler._id}
        />
      ));
    } else {
      this.bookingInfo = (
        <p className="warning-message-local-tours">
          Nothing To Show Here Just Yet,
          <br /> Have You Set Your Availability Yet?
          <br /> No?
          <br /> Go To The Calendar Page
        </p>
      );
    }
    return (
      <div className="local-body-container">
        <div className="local-next-tour">Next Tour</div>
        <div className="local-next-tour-accordion">{this.nextBooking}</div>
        <div className="local-upcoming-tours">Upcoming Tours</div>
        <div className="local-upcoming-tours-accordions">
          {this.bookingInfo}
        </div>
      </div>
    );
  }
}

export default ToursBody;
