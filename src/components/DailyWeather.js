import React from "react";
import { StyledDailyWeather } from "./DailyWeather.styles";
import { Infobox } from "./Infobox";
function DailyWeather() {
  return (
    <StyledDailyWeather>
      <div className="container">
        <div className="infobox-container">
          {Infobox.map((item, idx) => {
            return (
              <div className="date-one" key={idx}>
                <p className="c-dashboard_infobox-date"> {item.date} </p>
                <img src={item.img} />
                <div className="c-dashboard_infobox-text">
                  <p> {item.cent} </p>
                  <p> {item.fan} </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="highlight-container">
        <h2>Today's Highlight</h2>
        <div className="c-highlight-container">
          <div className="c-highlight-container_wind">
            <p className="c-dashboard_infobox-date">Wind Status</p>
          </div>

          <div className="c-highlight-container_humidity"></div>
        </div>
      </div>
    </StyledDailyWeather>
  );
}

export default DailyWeather;
