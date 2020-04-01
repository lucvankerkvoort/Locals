import React from "react";
import SearchBar from "../components/General/Searchbar/index";
import Accordion from "../components/General/Accordion/Accordion";
import DateContainer from "../components/General/DateContainer";
import { Map, InfoWindow, GoogleApiWrapper, Marker } from "google-maps-react";
import Moment from "react-moment";
import API from "../controller";

const mapStyles = {
  width: "100%",
  height: "60%"
};

class SearchPage extends React.Component {
  state = {
    place: "",
    activeMarker: {},
    selectedPlace: {},
    showingInfoWindow: false,
    lat: localStorage.getItem("lat"),
    lng: localStorage.getItem("lng"),
    address: JSON.parse(localStorage.getItem("address")),
    startDate: localStorage.getItem("startDate"),
    endDate: localStorage.getItem("endDate"),
    usersThatMatchDate: []
  };

  componentDidMount() {
    this.loadLocals();
  }

  loadLocals = () => {
    const startDate = new Date(localStorage.getItem("startDate"));
    const endDate = new Date(localStorage.getItem("endDate"));
    console.log("users startdates", startDate);
    console.log("users endDate", endDate);
    const info = {
      city: this.state.place.name
    };
    API.searchLocals(info).then(result => {
      const usersThatMatchDate = [];
      result.data.forEach(function(response) {
        const dates = response.availability;
        for (let i = 0; i < dates.length; i++) {
          let localStart = new Date(dates[i].dateStart);
          let localEnd = new Date(dates[i].dateEnd);
          console.log(localStart);
          console.log(localEnd);
          if (localStart <= startDate && localEnd >= endDate) {
            usersThatMatchDate.push(response);
            console.log("usersThatMatchDate", usersThatMatchDate);
            break;
          }
        }
      });
      this.setState({
        usersThatMatchDate
      });
    });
  };

  showPlaceDetails(place) {
    let lat = place.geometry.location.lat();
    let lng = place.geometry.location.lng();
    // console.log("Place", place);
    this.setState({ lat: lat, lng: lng });
  }

  handleChange = event => {
    this.setState({ place: event.target.value });
  };

  onMarkerClick = (props, marker) => {
    this.setState({
      activeMarker: marker,
      selectedPlace: props,
      showingInfoWindow: true
    });
  };

  onInfoWindowClose = () => {
    this.setState({
      activeMarker: null,
      showingInfoWindow: false
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
        lng
      });
    }
    this.loadLocals();
  };

  handleStartDate = startDate => {
    localStorage.setItem("startDate", startDate);
  };

  handleEndDate = endDate => {
    localStorage.setItem("endDate", endDate);
  };

  getLocals = () => {
    const user = JSON.parse(localStorage.getItem("currentUser"));
    const userId = user._id;
    console.log(userId);
    const booking = [];
    API.getTravelerById(userId).then(result => {
      console.log(result);
      for (let i = 0; i < result.data.length; i++) {
        console.log("check if its working", result.data[i].booking);
        booking.push(result.data[i].booking);
      }
      console.log(result);
    });
    const uniqueBookingsArray = [...new Set(booking)];
    const totalBookings = [];
    console.log(uniqueBookingsArray);
    for (let i = 0; i < uniqueBookingsArray.length; i++) {
      API.getLocalById(uniqueBookingsArray[i]).then(result => {
        totalBookings.push(result.data[0]);
        localStorage.setItem("userBooking", JSON.stringify(totalBookings));
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
        userId={user._id}
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
            <DateContainer
              handleStartDate={this.handleStartDate}
              handleEndDate={this.handleEndDate}
            />
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
})(SearchPage);
