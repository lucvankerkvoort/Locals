import React from "react";
import API from "../../../controller";

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
        this.storeTravelers(totalBookings);
      });
    }
  };

  storeTravelers = localIds => {
    const user = JSON.parse(localStorage.getItem("currentUser"));
    const userBooking = JSON.parse(localStorage.getItem("userBooking"));
    console.log("User inside storeTravelers", user);
    const userId = user._id;
    console.log("UserId inside storeTravelers", userId);
    const travelerId = {
      id: userId
    };
    for (let i = 0; i < localIds.length; i++) {
      // console.log("LocalIds inside storeTravelers", localIds[i]._id);
      API.bookingTraveler(localIds[i]._id, travelerId).then(result => {
        console.log(result);
      });
      if (user.booking.length === 0) {
        user.booking.push(localIds[i]);
        console.log(user.booking[i]);
      } else if (user.booking[i]._id !== userBooking[i]._id) {
        user.booking.push(localIds[i]);
      }
    }
    localStorage.setItem("currentUser", JSON.stringify(user));
  };

  unbook = () => {
    const user = JSON.parse(localStorage.getItem("currentUser"));
    const userBooking = JSON.parse(localStorage.getItem("userBooking"));
    const userId = user._id;
    const localID = {
      id: this.props.localId
    };
    console.log(localID.id);
    API.deleteTravelerBooking(userId, localID).then(result =>
      console.log(result)
    );
    for (let i = 0; i < user.booking.length; i++) {
      if (user.booking[i]._id === localID.id) {
        user.booking.splice(i, 1);
        console.log("user spliced");
      }
      for (let i = 0; i < userBooking.length; i++) {
        if (userBooking[i]._id === localID.id) {
          userBooking.splice(i, 1);
          console.log("userBooking spliced");
        }
      }
    }
    localStorage.setItem("currentUser", JSON.stringify(user));
    localStorage.setItem("userBooking", JSON.stringify(userBooking));
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
