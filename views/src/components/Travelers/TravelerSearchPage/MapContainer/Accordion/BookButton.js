import React from "react";
import "./BookButton.css";
import API from "../../../../../controller";

class BookButton extends React.Component {
  state = {
    button: "Book me!"
  };

  handleClick = () => {
    let newState;

    if (this.state.button === "Book me!") {
      newState = "Unbook me!";
      this.book();
    } else {
      newState = "Book me!";
      this.unbook();
    }
    this.setState({
      button: newState
    });
  };

  book = () => {
    const user = JSON.parse(localStorage.getItem("currentUser"));
    const userId = user._id;
    const localID = {
      id: this.props.localId
    };
    console.log(localID);
    API.bookingLocal(userId, localID).then(result => {
      let bookingsArray = [];
      for (let i = 0; i < result.data.booking.length; i++) {
        bookingsArray.push(result.data.booking[i].id);
      }
      console.log(result.data);
      console.log(result.data.booking);
      console.log(bookingsArray);
      this.getLocals(bookingsArray);
    });
  };

  getLocals = booking => {
    console.log(booking);
    const uniqueBookingsArray = [...new Set(booking)];
    const totalBookings = [];
    console.log(uniqueBookingsArray);
    for (let i = 0; i < uniqueBookingsArray.length; i++) {
      API.getLocalById(uniqueBookingsArray[i]).then(result => {
        totalBookings.push(result.data[0]);
        localStorage.setItem("userBooking", JSON.stringify(totalBookings));
      });
    }
  };

  unbook = () => {
    const user = JSON.parse(localStorage.getItem("currentUser"));
    const userId = user._id;
    const localID = {
      id: this.props.localId
    };
    API.deleteTravelerBooking(userId, localID).then(result =>
      console.log(result)
    );
  };
  render() {
    console.log(this.props.localId);
    return (
      <div>
        <button onClick={this.handleClick} className="traveler-search-button">
          {this.state.button}
        </button>
      </div>
    );
  }
}

export default BookButton;
