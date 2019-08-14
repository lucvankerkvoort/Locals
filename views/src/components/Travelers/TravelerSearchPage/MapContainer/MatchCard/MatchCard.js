import React from "react";
import "./MatchCard.css";

class MatchCard extends React.Component {
  state = {
    name: "Gregory Tang",
    rate: 30,
    location: "Madrid, Spain",
    rating: 5
  };

  render() {
    return (
      <div className="match-1">
        <div className="photo-big-container">
          <div className="photo" />
        </div>
        <div className="matches-info-container">
          <div class="grid-item">{this.state.name}</div>
          <div class="grid-item">{`$${this.state.rate}/hour`}</div>
          <div class="grid-item">{this.state.location}</div>
          <div class="grid-item">{`${this.state.rating} stars`}</div>
        </div>
      </div>
    );
  }
}

export default MatchCard;
