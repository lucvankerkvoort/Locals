import React from "react";
import "./SearchBar.css";
import SearchBarLogoSVG from "./SearchBarLogoSVG/SearchBarLogoSVG";

const SearchBar = props => {
  return (
    <div class="wrap">
      <div class="search">
        <input
          type="text"
          class="searchTerm"
          placeholder="What are you looking for?"
        />
        <button type="submit" class="searchButton">
          <i class="fa fa-search" />
          <SearchBarLogoSVG />
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
