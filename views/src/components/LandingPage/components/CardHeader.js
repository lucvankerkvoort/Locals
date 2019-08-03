import React from "react";

class CardHeader extends React.Component {
  render() {
    const { cardTitle } = this.props;
    return (
      <div>
        <h4 className="card-header-title">{cardTitle}</h4>
      </div>
    );
  }
}

export default CardHeader;
