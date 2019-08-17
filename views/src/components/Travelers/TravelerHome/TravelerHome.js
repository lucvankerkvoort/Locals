import React from "react";
import SearchBar from "./SearchBar";
import DateContainer from "./DateContainer/DateContainer";
import { travellerArray } from "../../General/images";
import BackgroundSlideshow from "react-background-slideshow";
import "./TravelerHome.css";

class TravelerHome extends React.Component {
  state = {
    place: ""
    // startDate: "",
    // endDate: ""
  };

  showPlaceDetails(place) {
    this.setState({ place });
    console.log(this.state.place);
    console.log(this.state.place.formatted_address);
    this.props.handleAddress(this.state.place);
  }

  handleChange = event => {
    this.setState({ place: event.target.value });
    console.log(this.state.place);
  };

  render() {
    console.log(this.props);
    console.log(this.state);
    let pictures = <BackgroundSlideshow images={travellerArray} />;
    return (
      <div className="background">
        {pictures}
        <SearchBar
          handleChange={this.handleChange}
          onPlaceChanged={this.showPlaceDetails.bind(this)}
          value={this.state.value}
        />
        <DateContainer />
      </div>
    );
  }
}

export default TravelerHome;
