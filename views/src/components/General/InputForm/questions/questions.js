import React from "react";
import "../style.css";

class Question extends React.Component {
  handleChange = event => {
    const { name, value } = event.target;
    this.props.storeData(name, value);
  };
  render() {
    return (
      <div>
        <label>{this.props.label}</label>
        <br />
        <input
          type={this.props.type}
          name={this.props.name}
          onChange={this.handleChange}
          placeholder={this.props.placeholder}
        />
      </div>
    );
  }
}

export default Question;
