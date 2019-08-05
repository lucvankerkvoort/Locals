import React from "react";
import SearchBar from "./SearchBar";
import { travellerArray } from "../components/LoginPage/images/index";
import BackgroundSlideshow from "react-background-slideshow";
import "./App.css";

class TravelerHome extends React.Component {
  render() {
    let pictures = <BackgroundSlideshow images={travellerArray} />;
    return (
      <div className="background">
        {pictures}
        <SearchBar />
      </div>
    );
  }
}

export default TravelerHome;
