import React from "react";
import "./ToursBody.css";
import Accordion from "../Accordion/Accordion";
import API from "../../../../controller";

class ToursBody extends React.Component {
  state = {
    booking: ""
  };

  componentDidMount() {
    this.handleUser();
  }

  handleUser() {
    const user = JSON.parse(localStorage.getItem("currentUser"));
    console.log(user);
    const booking = user.booking;
    this.setState({ booking });
    localStorage.setItem("bookings", booking);
  }
  render() {
    console.log(this.state);
    return (
      <div className="traveler-body-container">
        <div className="traveler-next-tour">Next Tour</div>
        <div className="traveler-next-tour-accordion">
          <Accordion content="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum." />
        </div>
        <div className="traveler-upcoming-tours">Upcoming Tours</div>
        <div className="traveler-upcoming-tours-accordions">
          <Accordion content="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum." />
          <Accordion content="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum." />
        </div>
      </div>
    );
  }
}

export default ToursBody;
