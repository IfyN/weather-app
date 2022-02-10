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
        <h1>15c</h1>
      </div>
    </StyledSidebar>
  );
}

export default Sidebar;
