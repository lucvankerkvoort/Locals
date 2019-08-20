import React from "react";
import "./SearchBar.css";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import SearchBarLogoSVG from "./images/SearchBarLogo";

const google = window.google;

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      place: ""
    };
    this.autocompleteInput = React.createRef();
    this.autocomplete = null;
    this.handlePlaceChanged = this.handlePlaceChanged.bind(this);
  }

  componentDidMount = () => {
    this.autocomplete = new google.maps.places.Autocomplete(
      this.autocompleteInput.current,
      { types: ["geocode"] }
    );

    this.autocomplete.addListener("place_changed", this.handlePlaceChanged);
  };

  handlePlaceChanged = () => {
    const place = this.autocomplete.getPlace();
    this.props.onPlaceChanged(place);
  };

  render() {
    return (
      <div className="traveler-wrap">
        <div className="traveler-search">
          <input
            ref={this.autocompleteInput}
            type="text"
            className="traveler-searchTerm"
            placeholder="Enter your destination here"
            onChange={this.props.handleChange}
          />
          <Link to="/travelerhome/search">
            <button type="submit" className="traveler-searchButton">
              <i className="fa fa-search" />
              <SearchBarLogoSVG />
            </button>
          </Link>
        </div>
      </div>
    );
  }
}
export default SearchBar;
