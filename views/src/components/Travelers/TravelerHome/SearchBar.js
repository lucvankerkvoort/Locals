import React from "react";
import "./SearchBar.css";
import { BrowserRouter as Router, Link } from "react-router-dom";
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
      <div className="traveler-home-wrap">
        <div className="traveler-home-search">
          <input
            ref={this.autocompleteInput}
            type="text"
            className="traveler-home-searchTerm"
            placeholder="Enter your destination here"
            onChange={this.props.handleChange}
          />
          <Link to="/travelerhome/search">
            <button type="submit" className="traveler-home-searchButton">
              <SearchBarLogoSVG />
            </button>
          </Link>
        </div>
      </div>
    );
  }
}
export default SearchBar;
