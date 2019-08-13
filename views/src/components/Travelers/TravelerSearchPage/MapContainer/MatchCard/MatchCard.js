import React from "react";
import "./MatchCard.css";

class MatchCard extends React.Component {
  render() {
    return (
      <div className="matches-container">
        <div className="match-1">
          <div className="photo-big-container">
            <div className="photo" />
          </div>
        </div>
      </div>
    );
  }
}

export default MatchCard;
