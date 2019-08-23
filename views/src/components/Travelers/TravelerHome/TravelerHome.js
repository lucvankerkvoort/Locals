import React from "react";
import SearchBar from "./SearchBar";
import DateContainer from "./DateContainer/DateContainer";
import { travelerArray } from "./images/backgroundImages/index";
import BackgroundSlideshow from "react-background-slideshow";
import "./TravelerHome.css";

class TravelerHome extends React.Component {
  state = {
    place: ""
    // startDate: "",
    // endDate: ""
  };

  componentDidMount() {
    const user = JSON.parse(localStorage.getItem("currentUser"));
    this.setState({ user });
  }
  showPlaceDetails(place) {
    this.setState({ place });
    console.log(this.state.place);
    console.log(this.state.place.formatted_address);
    this.props.handleAddress(this.state.place);
  }

  handleChange = event => {
    this.setState({ place: event.target.value });
  };

  handleDates = input => {
    console.log(input);
    this.props.dates(input);
  };
  render() {
    console.log(this.props);
    console.log(this.state);
    let pictures = <BackgroundSlideshow images={travelerArray} />;
    return (
      <div className="background">
        {pictures}
        <div className="components-container">
          <SearchBar
            handleChange={this.handleChange}
            onPlaceChanged={this.showPlaceDetails.bind(this)}
            value={this.state.value}
          />
        </div>
        <DateContainer handleDates={this.handleDates} />
      </div>
    );
  }
}

export default TravelerHome;
