import { React, useState } from "react";
import { StyledSidebar } from "./Sidebar.styles";

function Sidebar() {
  const [textarea, setTextarea] = useState();
  const [search, setSearch] = useState(false);

  const handleChange = (event) => {
    setTextarea(event.target.value);
  };

  const openBurger = () => {
    setSearch(true);
  };

  const closeBurger = () => {
    setSearch(false);
  };

  const handleLocationChange = (event) => {
    setTextarea(event.target.value);
  };
  return (
    <StyledSidebar>
      {search ? (
        <div className="weather-section-two">
          <div className="" onClick={closeBurger}></div>
          <div className="form_section">
            <div className="form-location">
              <form>
                <input
                  type="text"
                  value={textarea}
                  onChange={handleChange}
                  placeholder="search location"
                />
              </form>

              <button className="square-button" onClick={openBurger}>
                {" "}
                Search
              </button>
            </div>

            <div className="input-location">
              <form>
                <input
                  type="text"
                  value={textarea}
                  onChange={handleLocationChange}
                  placeholder="Lagos"
                />
              </form>
            </div>
          </div>
        </div>
      ) : (
        <div className="weather-section">
          <div className="form">
            <form>
              <input
                type="text"
                value={textarea}
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
