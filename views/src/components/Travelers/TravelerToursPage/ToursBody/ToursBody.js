import React from "react";
import "./ToursBody.css";
import Accordion from "../Accordion/Accordion";
import Moment from "react-moment";

class ToursBody extends React.Component {
  state = {
    booking: JSON.parse(localStorage.getItem("userBooking")),
    check: false
  };
  nextBooking;
  localsBooked;

  render() {
    const nextTour = this.state.booking[0];
    if (nextTour) {
      this.nextBooking = (
        <Accordion
          content={nextTour.bio}
          name={`${nextTour.firstname} ${nextTour.lastname}`}
          rate={nextTour.rate}
          key={0}
          rating={nextTour.rating}
          tourInfo={nextTour.tourInfo}
          startDate={
            <Moment format="MM/DD/YYYY">
              {nextTour.availability[0].dateStart}
            </Moment>
          }
          endDate={
            <Moment format="MM/DD/YYYY">
              {nextTour.availability[0].dateEnd}
            </Moment>
          }
        />
      );
    } else {
      this.nextBooking = (
        <p className="warning-message-traveler-tour">No tours yet!</p>
      );
    }

    const allBookings = this.state.booking;
    allBookings.shift();
    if (allBookings.length > 0) {
      this.localsBooked = this.state.booking.map((local, i) => {
        return (
          <Accordion
            content={local.bio}
            name={`${local.firstname} ${local.lastname}`}
            rate={local.rate}
            key={i + 1}
            rating={local.rating}
            tourInfo={local.tourInfo}
            startDate={
              <Moment format="MM/DD/YYYY">
                {local.availability[0].dateStart}
              </Moment>
            }
            endDate={
              <Moment format="MM/DD/YYYY">
                {local.availability[0].dateEnd}
              </Moment>
            }
          />
        );
      });
    } else {
      this.localsBooked = (
        <p className="warning-message-traveler-tour">
          Nothing to show here. Make a booking!
        </p>
      );
    }

    return (
      <div className="traveler-body-container">
        <div className="traveler-next-tour">Next Tour</div>
        <div className="traveler-next-tour-accordion">{this.nextBooking}</div>
        <div className="traveler-upcoming-tours">Upcoming Tours</div>
        <div className="traveler-upcoming-tours-accordions">
          {this.localsBooked}
        </div>
      </div>
    );
  }
}

export default ToursBody;
