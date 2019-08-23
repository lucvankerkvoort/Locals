import React from "react";
import "./BookButton.css";
import API from "../../../../../controller";

class BookButton extends React.Component {
  state = {
    button: "Book me!"
  };

  componentDidMount() {
    const user = JSON.parse(localStorage.getItem("currentUser"));
    this.setState({ user });
  }

  handleClick = () => {
    let newState = this.state.button === "Book me!" ? "Unbook me!" : "Book me!";
    this.setState({
      button: newState
    });
    API.bookingLocal(this.state.user._id).then(result => console.log(result));
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
