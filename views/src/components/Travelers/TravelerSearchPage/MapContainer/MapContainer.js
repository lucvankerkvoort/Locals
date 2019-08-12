import React from "react";
import SearchBar from "./SearchBar/SearchBar";
import { Map, InfoWindow, GoogleApiWrapper, Marker } from "google-maps-react";
import data from "./data";
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
    lat: 32.3812,
    lng: -86.9023
  };

  showPlaceDetails(place) {
    this.setState({ place });
    console.log(this.state.place.formatted_address);
    console.log(this.state.place.geometry.viewport.ia.j); // lat
    console.log(this.state.place.geometry.viewport.na.l); // lng
  }

  handleChange = event => {
    this.setState({ place: event.target.value });
    console.log(this.state.place);
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
    this.setState({
      lat: this.state.place.geometry.viewport.ia.j,
      lng: this.state.place.geometry.viewport.na.l
    });
    console.log(this.state.lat);
    console.log(this.state.lng);
  };

  render() {
    const markers = data.map((info, i) => (
      <Marker
        name={info.name}
        address={info.address}
        hours={info.hours}
        onClick={this.onMarkerClick}
        position={{ lat: info.latitude, lng: info.longitude }}
        key={i}
      />
    ));
    return (
      <div className="component-container">
        <Map
          google={this.props.google}
          zoom={10}
          style={mapStyles}
          initialCenter={{ lat: this.state.lat, lng: this.state.lng }}
        >
          <SearchBar
            handleChange={this.handleChange}
            onPlaceChanged={this.showPlaceDetails.bind(this)}
            value={this.state.place}
            searchPlace={this.zoomInOnMapSearch}
          />
          {markers}
          <InfoWindow
            marker={this.state.activeMarker}
            onClose={this.onInfoWindowClose}
            visible={this.state.showingInfoWindow}
          >
            <div className="info-window">
              <h2>{this.state.selectedPlace.name}</h2>
              <h4>Address: {this.state.selectedPlace.address}</h4>
              <h4>Hours: {this.state.selectedPlace.hours}</h4>
            </div>
          </InfoWindow>
        </Map>
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyD1yu2VLAm210up45SP2wF57FNt9m7w7hE"
})(MapContainer);
