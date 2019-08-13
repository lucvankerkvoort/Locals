import React from "react";
import SearchBar from "./SearchBar/SearchBar";
import { Map, InfoWindow, GoogleApiWrapper, Marker } from "google-maps-react";
import "./MapContainer.css";

const mapStyles = {
  width: "100%",
  height: "60%"
};

class MapContainer extends React.Component {
  state = {
    place: "",
    activeMarker: {},
    selectedPlace: {},
    showingInfoWindow: false,
    lat: 37.7749295,
    lng: -122.41941550000001
  };

  showPlaceDetails(place) {
    this.setState({ place });
  }

  handleChange = event => {
    this.setState({ place: event.target.value });
  };

  onMarkerClick = (props, marker) =>
    this.setState({
      activeMarker: marker,
      selectedPlace: props,
      showingInfoWindow: true
    });

  onInfoWindowClose = () =>
    this.setState({
      activeMarker: null,
      showingInfoWindow: false
    });

  zoomInOnMapSearch = () => {
    const lat =
      this.state.place.geometry && this.state.place.geometry.location.lat();
    const lng =
      this.state.place.geometry && this.state.place.geometry.location.lng();
    if (lat && lng) {
      this.setState({
        lat,
        lng
      });
    }
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
    console.log(this.state.lat);
    console.log(this.state.lng);
    return (
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
          {markers}
        </Map>
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyD1yu2VLAm210up45SP2wF57FNt9m7w7hE"
})(MapContainer);
