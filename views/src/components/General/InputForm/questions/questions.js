import React from "react";

const google = window.google;

class Question extends React.Component {
  autocompleteInput = React.createRef();
  autocomplete = null;
  handleChange = (event) => {
    const { name, value } = event.target;
    this.props.storeData(name, value);
  };

  componentDidMount = () => {
    this.autocomplete = new google.maps.places.Autocomplete(
      this.autocompleteInput.current,
      { types: ["geocode"] }
    );

    this.autocomplete.addListener("place_changed", this.handlePlaceChanged);
  };

  handlePlaceChanged = () => {
    const place = this.autocomplete.getPlace();
    this.props.storeData("city", place.formatted_address);
  };

  render() {
    const { type, name, placeholder } = this.props;
    return (
      <div className="registration-questions">
        <label className="register-label">{this.props.label}</label>
        <br />
        <input
          ref={name === "city" ? this.autocompleteInput : null}
          type={type}
          name={name}
          onChange={this.handleChange}
          placeholder={placeholder}
        />
      </div>
    );
  }
}

export default Question;
