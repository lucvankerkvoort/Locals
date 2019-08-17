import React from "react";
import MapContainer from "./components/Map/MapContainer";
import DateContainer from "./DateContainer/DateContainer";
import Settings from "./components/SettingsBody/SettingsBody";
import ToursBody from "./components/ToursBody/ToursBody";
import NavBar from "./components/NavBar/NavBar";
import "./App.css";

const App = () => {
  return (
    <div>
      <NavBar />
      <MapContainer />
      <DateContainer />
      {/* <Settings />
      <ToursBody /> */}
    </div>
  );
};

export default App;
