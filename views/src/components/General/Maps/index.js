import React from "react";
import SearchBar from "../Searchbar";
import DateContainer from "../DateContainer";
import { Map, InfoWindow, GoogleApiWrapper, Marker } from "google-maps-react";

const mapStyles = {
  width: "100%",
  height: "60%",
};

class Maps extends React.Component {
  state = {
    place: "",
    activeMarker: {},
    selectedPlace: {},
    showingInfoWindow: false,
    lat: localStorage.getItem("lat"),
    lng: localStorage.getItem("lng"),
    address: JSON.parse(localStorage.getItem("address")),
  };

  showPlaceDetails(place) {
    let lat = place.geometry.location.lat();
    let lng = place.geometry.location.lng();
    this.setState({ lat: lat, lng: lng });
  }

  handleChange = (event) => {
    this.setState({ place: event.target.value });
  };

  onMarkerClick = (props, marker) => {
    this.setState({
      activeMarker: marker,
      selectedPlace: props,
      showingInfoWindow: true,
    });
  };

  onInfoWindowClose = () => {
    this.setState({
      activeMarker: null,
      showingInfoWindow: false,
    });
  };

  zoomInOnMapSearch = () => {
    const lat =
      this.state.place.geometry && this.state.place.geometry.location.lat();
    const lng =
      this.state.place.geometry && this.state.place.geometry.location.lng();
    if (lat && lng) {
      this.setState({
        lat,
        lng,
      });
    }
  };

  handleStartDate = (startDate) => {
    localStorage.setItem("startDate", startDate);
  };

  handleEndDate = (endDate) => {
    localStorage.setItem("endDate", endDate);
  };

  render() {
    const markers = (
      <Marker
        name={this.state.place.formatted_address}
        onClick={this.onMarkerClick}
        position={{ lat: this.state.lat, lng: this.state.lng }}
        key={this.state.place.formatted_address}
      />
    );

    return (
      <div>
        <div className="component-container">
          <Map
            google={this.props.google}
            zoom={10}
            style={mapStyles}
            initialCenter={{ lat: this.state.lat, lng: this.state.lng }}
            center={{ lat: this.state.lat, lng: this.state.lng }}
          >
            <SearchBar
              handleChange={this.handleChange}
              onPlaceChanged={this.showPlaceDetails.bind(this)}
              value={this.state.place.formatted_address}
              searchPlace={this.zoomInOnMapSearch}
            />
            <DateContainer
              handleStartDate={this.handleStartDate}
              handleEndDate={this.handleEndDate}
            />
            {markers}
          </Map>
        </div>
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyD1yu2VLAm210up45SP2wF57FNt9m7w7hE",
})(Maps);
