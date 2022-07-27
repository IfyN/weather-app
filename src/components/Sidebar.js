import { React, useState, useEffect } from "react";
import { StyledSidebar } from "./Sidebar.styles";
import { Burger } from "./Burger";
import axios from "axios";
import AccessAlarmIcon from "@mui/icons-material/AccessAlarm";
import ThreeDRotation from "@mui/icons-material/ThreeDRotation";

function Sidebar({ currentWeather, updateCoordinates }) {
  const [locations, setLocations] = useState([]); //handles api results
  const [search, setSearch] = useState(false);
  const [query, setQuery] = useState(""); //handles input form
  const [searchPlaces, setSearchPlaces] = useState("");

  const searchLocations = () => {
    axios
      .get(
        `https://api.openweathermap.org/geo/1.0/direct?q=${query}&limit=15&appid=f8db3768585aa064c24cdd0227ba44da`
      )
      .then((response) => {
        setLocations(response.data);
      })
      .catch((err) => {
        // Handle Error Here
        console.error(err);
      });
  };

  // use this as the handler for the select dropdown. Pass the slected location
  const onSelect = (locations) => {
    // call updateCoordinates with the lat and lon values of the selected location
    // updateCoordinates()
  };

  const d = new Date();
  const weekDay = ["Sun", "Mon", "Tue", "Wed", "Thurs", "Fri", "Sat"];
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sept",
    "Oct",
    "Nov",
    "Dec",
  ];

  const day = weekDay[d.getDay()];
  const month = months[d.getMonth()];
  const date = d.getDate();

  /*onSubmit for forms */
  const onSubmit = (e) => {
    e.preventDefault();
    searchLocations();
  };

  /* handle change for input form */
  const handleChange = (event) => {
    setQuery(event.target.value);
  };
  /* Burger */
  const openBurger = () => {
    setSearch(true);
  };

  const closeBurger = () => {
    setSearch(false);
  };

  return (
    <StyledSidebar>
      {search ? (
        <div className="weather-section-two">
          <div className="sidebar--burger">
            <Burger onClick={closeBurger} />
          </div>
          <div className="form_section">
            <form className="form-location" onSubmit={onSubmit}>
              <input
                type="text"
                value={query}
                onChange={handleChange}
                placeholder="search location"
              >
                <span class="material-icons md-16 icon"></span>
              </input>

              <button type="submit" className="square-button">
                {" "}
                Search
              </button>
            </form>

            <div className="displayed-cities">
              {locations?.map((item, idx) => {
                return (
                  <div className="city" key={idx}>
                    {item.name}, {item.country}
                  </div>
                );
              })}
            </div>

            {/* <form className="input-location">
              <input
                type="text"
                value={textarea}
                onChange={handleLocationChange}
                placeholder="Lagos"
              />
            </form> */}
          </div>
        </div>
      ) : (
        <div className="weather-section">
          <div className="form">
            <button onClick={openBurger} className="search-button">
              Search for places
            </button>

            <button className="round-button" onClick={openBurger}></button>
          </div>
          <div className="weather-details">
            <img
              className="sidebar__image-cloud"
              src="https://res.cloudinary.com/ifeoma/image/upload/v1639659828/Shower_nsrvy9.png"
              alt="Shower"
            />

            <footer className="weather-readings">
              <h1>{currentWeather?.main?.temp}</h1>
              <h3>{currentWeather?.weather?.[0]?.main}</h3>
              <p>
                Today <span>•</span> {day}, {date} {month}
              </p>
              <h4>{currentWeather?.name}</h4>
            </footer>
          </div>
        </div>
      )}
    </StyledSidebar>
  );
}

export default Sidebar;
