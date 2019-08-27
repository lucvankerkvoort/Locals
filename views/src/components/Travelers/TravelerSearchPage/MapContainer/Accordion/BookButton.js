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
    API.bookingLocal(userId, localID).then(result => {
      console.log(result.data.booking);
      this.getLocals(result.data.booking);
    });
  };

  getLocals = booking => {
    console.log("I'm being hit", booking);
    const bookedLocals = [];
    const duplicate = [];
    for (let i = 0; i < booking.length; i++) {
      console.log(booking[i]);
      API.getLocalById(booking[i].id).then(result => {
        console.log(result);
        for (let j = 0; j < result.data.length; j++) {
          if (duplicate.indexOf(result.data[0]) > 0) {
            bookedLocals.push(result.data[0]);
            duplicate.push(result.data[0]);
            console.log(bookedLocals);
          }
        }

        const userBooking = JSON.stringify(bookedLocals);
        console.log("very Important", userBooking);
        localStorage.setItem("userBooking", userBooking);
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
