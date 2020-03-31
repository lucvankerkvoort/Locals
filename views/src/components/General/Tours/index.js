import React from "react";

class Tours extends React.Component {
  render() {
    const { title } = this.props;
    return (
      <div className="tours">
        <h3>{title}</h3>
        <div className="tours-body">
          <div className="avatar-aligner">
            <div className="booker-avatar" />
          </div>
          <div className="booking-info">
            <h3>Place</h3>
            <h3>Start</h3>
            <h3>End</h3>
          </div>
        </div>
      </div>
    );
  }
}

export default Tours;
