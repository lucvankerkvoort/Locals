import React from "react";
import SearchBar from "./SearchBar";
import { travellerArray } from "../components/LoginPage/images/index";
import BackgroundSlideshow from "react-background-slideshow";
import "./App.css";

class TravelerHome extends React.Component {
  state = {
    place: ""
  };

  showPlaceDetails(place) {
    this.setState({ place });
    console.log(this.state.place);
    console.log(this.state.place.formatted_address);
  }

  render() {
    const AddressDetails = props => {
      return (
        <div>
          <pre>{JSON.stringify(props.place, null, 2)}</pre>
        </div>
      );
    };
    let pictures = <BackgroundSlideshow images={travellerArray} />;
    return (
      <div className="background">
        {pictures}
        <SearchBar
          onChange={this.handleChange}
          onPlaceChanged={this.showPlaceDetails.bind(this)}
          value={this.state.value}
        />
        <AddressDetails place={this.state.place} />
      </div>
    );
  }
}

export default TravelerHome;
