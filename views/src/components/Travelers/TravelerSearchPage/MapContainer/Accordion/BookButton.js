import React from "react";
import "./BookButton.css";
import API from "../../../../../controller";

class BookButton extends React.Component {
  state = {
    button: "Book me!"
  };

  handleClick = () => {
    let newState =
      this.state.button === "Book me!"
        ? `Unbook me!${this.book()} `
        : "Book me!";
    this.setState({
      button: newState
    });
  };

  book = () => {
    API.bookingLocal(this.props.local._id).then(result => console.log(result));
  };
  render() {
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
