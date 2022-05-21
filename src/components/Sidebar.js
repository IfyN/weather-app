import { React, useState } from "react";
import { StyledSidebar } from "./Sidebar.styles";
import { Burger } from "./Burger";

function Sidebar() {
  const [location, setLocation] = useState();
  const [search, setSearch] = useState(false);
  const [textarea, setTextarea] = useState();
  const [searchPlaces, setSetPlaces] = useState("");

  /*onSubmit for forms */
  const onSubmit = (e) => {
    e.preventDefault();
  };

  /* handle change for input form */
  const handleChange = (event) => {
    setTextarea(event.target.value);
  };
  /* Burger */
  const openBurger = () => {
    setSearch(true);
  };

  const closeBurger = () => {
    setSearch(false);
  };
  /* onChange for First form  */
  const handleLocationChange = (event) => {
    setTextarea(event.target.value);
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
                value={location}
                onChange={handleChange}
                placeholder="search location"
              />
              <button
                type="submit"
                className="square-button"
                onClick={onSubmit}>
                {" "}
                Search
              </button>
            </form>

            <form className="input-location">
              <input
                type="text"
                value={textarea}
                onChange={handleLocationChange}
                placeholder="Lagos"
              />
            </form>
          </div>
        </div>
      ) : (
        <div className="weather-section">
          <div className="form">
            <form onSubmit={onSubmit}>
              <input
                type="text"
                name=""
                value={searchPlaces}
                onChange={handleChange}
                placeholder="Search for places"
              />
            </form>

            <button className="round-button" onClick={openBurger}></button>
          </div>
          <div className="body">
            <img
              className="sidebar__image-cloud"
              src="https://res.cloudinary.com/ifeoma/image/upload/v1639659828/Shower_nsrvy9.png"
              alt="Shower"
            />

            <div className="weather-readings">
              <h1>15°C</h1>
              <h3>Shower</h3>
            </div>
          </div>
        </div>
      )}
    </StyledSidebar>
  );
}

export default Sidebar;
