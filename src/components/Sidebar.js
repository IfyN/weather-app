import React from "react";
import { StyledSidebar } from "./Sidebar.styles";

function Sidebar() {
  return (
    <StyledSidebar>
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
    </StyledSidebar>
  );
}

export default Sidebar;
