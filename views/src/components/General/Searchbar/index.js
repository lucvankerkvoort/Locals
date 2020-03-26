import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import SearchBarLogoSVG from "../../Travelers/TravelerHome/images/SearchBarLogo";

const google = window.google;

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      place: ""
    };
    this.autocompleteInput = React.createRef();
    this.autocomplete = null;
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
      <div className="searchbar-wrapper">
        <div className="searchbar-general">
          <input
            ref={this.autocompleteInput}
            type="text"
            className="searchterm"
            placeholder="Enter your destination here"
            onChange={this.props.handleChange}
          />
          <Link to="/travelerhome/search">
            <button type="submit" className="searchbutton">
              <SearchBarLogoSVG />
            </button>
          </Link>
        </div>
      </div>
    );
  }
}
export default SearchBar;
