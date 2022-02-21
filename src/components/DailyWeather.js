import React from "react";
import { StyledDailyWeather } from "./DailyWeather.styles";
import { Infobox } from "./Infobox";
function DailyWeather() {
  return (
    <StyledDailyWeather>
      <div className="container">
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
    </StyledDailyWeather>
  );
}

export default DailyWeather;
