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
      localStorage.setItem("userBooking", result.booking);
      console.log(result);
    });
  };

  unbook = () => {
    const user = JSON.parse(localStorage.getItem("currentUser"));
    const userId = user._id;
    const localID = {
      id: this.props.localId
    };
    API.deleteTraveler(userId, localID).then(result => console.log(result));
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
