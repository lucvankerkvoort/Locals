import React from "react";
import SearchBar from "./SearchBar/SearchBar";
import Accordion from "./Accordion/Accordion";
import DateContainer from "./DateContainer/DateContainer";
import { Map, InfoWindow, GoogleApiWrapper, Marker } from "google-maps-react";
import "./MapContainer.css";
import Moment from "react-moment";
import API from "../../../../controller";

const mapStyles = {
  width: "100%",
  height: "60%"
};

class MapContainer extends React.Component {
  state = {
    place: this.props.address,
    activeMarker: {},
    selectedPlace: {},
    showingInfoWindow: false,
    lat:
      this.props.address.geometry && this.props.address.geometry.location.lat(),
    lng:
      this.props.address.geometry && this.props.address.geometry.location.lng(),
    bio: "",
    address: JSON.parse(localStorage.getItem("address")),
    dates: JSON.parse(localStorage.getItem("dates")),
    usersThatMatchDate: []
  };

  componentDidMount() {
    this.loadLocals();
  }

  loadLocals = () => {
    let userStart = new Date(this.state.dates.date[0]);
    let userEnd = new Date(this.state.dates.date[1]);
    console.log(this.state.place.name);
    const info = {
      city: this.state.place.name
    };
    API.searchLocals(info).then(result => {
      var usersThatMatchDate = [];
      result.data.forEach(function(response) {
        const dates = response.availability;
        for (let i = 0; i < dates.length; i++) {
          let localStart = new Date(dates[i].dateStart);
          let localEnd = new Date(dates[i].dateEnd);
          if (localStart <= userStart && localEnd >= userEnd) {
            // it will only reach here if dates are valid
            usersThatMatchDate.push(response);
            console.log("usersThatMatchDate", usersThatMatchDate);
            break;
          }
        }
      });
      this.setState({
        usersThatMatchDate: usersThatMatchDate
      });
    });
  };

  showPlaceDetails(place) {
    this.setState({ place });
    console.log("I Run Showplace");
  }

  handleChange = event => {
    this.setState({ place: event.target.value });
  };

  onMarkerClick = (props, marker) => {
    console.log("I Run OnMarkerClick");
    this.setState({
      activeMarker: marker,
      selectedPlace: props,
      showingInfoWindow: true
    });
  };

  onInfoWindowClose = () => {
    console.log("I Run OnInfoWindowClose");
    this.setState({
      activeMarker: null,
      showingInfoWindow: false
    });
  };

  zoomInOnMapSearch = () => {
    console.log("I Run ZoomInOnMapSearch");
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
    this.loadLocals();
  };

  handleDates = input => {
    console.log(input);
    const dates = {
      date: input
    };
    this.setState({ dates });
  };

  render() {
    console.log(this.state.usersThatMatchDate);
    console.log(this.state);
    console.log(this.props);

    // We get the this.state.place from the localshomepage and it renders all the info into this.props.address
    // Since this.props.address.geometry.location.lat && lng are functions they don't render anything on the page.
    const markers = (
      <Marker
        name={this.state.place.formatted_address}
        onClick={this.onMarkerClick}
        position={{ lat: this.state.lat, lng: this.state.lng }}
        key={this.state.place.formatted_address}
      />
    );

    const matchedUsers = this.state.usersThatMatchDate.map((user, i) => (
      <Accordion
        content={user.bio}
        name={`${user.firstname} ${user.lastname}`}
        rate={user.rate}
        key={i}
        profileImg={user.avatar}
        rating={user.rating}
        tourInfo={user.tourInfo}
        startDate={
          <Moment format="MM/DD/YYYY">{user.availability[0].dateStart}</Moment>
        }
        endDate={
          <Moment format="MM/DD/YYYY">{user.availability[0].dateEnd}</Moment>
        }
      />
    ));
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
            <DateContainer handleDates={this.handleDates} />
            {markers}
          </Map>
        </div>
        <div className="accordion-container">{matchedUsers}</div>
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyD1yu2VLAm210up45SP2wF57FNt9m7w7hE"
})(MapContainer);
