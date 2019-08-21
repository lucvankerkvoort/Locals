import React from "react";
import "./BookButton.css";

class BookButton extends React.Component {
  state = {
    button: "Book me!"
  };

  handleClick = () => {
    let newState = this.state.button === "Book me!" ? "Unbook me!" : "Book me!";
    this.setState({
      button: newState
    });
  };

  render() {
    return (
      <div>
        <button
          onClick={this.handleClick}
          className="local-tours-book-me-button"
        >
          {this.state.button}
        </button>
      </div>
    );
  }
}

export default BookButton;
