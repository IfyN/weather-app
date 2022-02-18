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
              <p> {item.date} </p>
              <p> {item.cent} </p>
              <img src={item.img} />
              <p> {item.fan} </p>
            </div>
          );
        })}
      </div>
    </StyledDailyWeather>
  );
}

export default DailyWeather;
