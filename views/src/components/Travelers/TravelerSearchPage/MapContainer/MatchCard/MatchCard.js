import React from "react";
import "./MatchCard.css";

class MatchCard extends React.Component {
  render() {
    return (
      <div className="match-1">
        <div className="photo-big-container">
          <div className="photo" />
        </div>
        <div className="matches-info-container">
          <div class="grid-item">1</div>
          <div class="grid-item">2</div>
          <div class="grid-item">3</div>
          <div class="grid-item">4</div>
        </div>
      </div>
    );
  }
}

export default MatchCard;
