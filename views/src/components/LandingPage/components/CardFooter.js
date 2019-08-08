import React from "react";

class CardFooter extends React.Component {
  handleClick = input => {
    this.props.handleChange(input);
  };
  render() {
    return (
      <div className="card-footer">
        <button
          onClick={() => {
            this.handleClick(this.props.input);
          }}
          type="traveler"
          className="traveler-btn"
        >
          Click here
        </button>
      </div>
    );
  }
}

export default CardFooter;
