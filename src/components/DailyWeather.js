import React, { useEffect } from "react";
import { StyledDailyWeather } from "./DailyWeather.styles";
import { Infobox } from "./Infobox";

function DailyWeather({ climatic }) {
  //  const displayWeather = data.map((result)=> result.daily.map(dail))
  return (
    <StyledDailyWeather>
      <div className="container">
        <div className="infobox-container">
          {climatic?.map((item, idx) => {
            return (
              <div className="date-one" key={idx}>
                <p className="c-dashboard_infobox-date"> {item.date} </p>
                <img
                  src={`http://openweathermap.org/img/wn/${item.weather[0]?.icon}@2x.png`}
                />
                <div className="c-dashboard_infobox-text">
                  <p> {item.temp.max} </p>
                  <p> {item.temp.min} </p>
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
            <p className="c-dashboard_infobox-date">Wind</p>
            <div className="c-dashboard_infobox-reading">
              <p> 7mph</p>
            </div>

            <p className="c-dashboard_infobox-unit">WSW</p>
          </div>

          <div className="c-highlight-container_wind">
            <p className="c-dashboard_infobox-date">Humidity</p>
            <div className="c-dashboard_infobox-reading">
              <p> 84%</p>
            </div>
          </div>

          {/* <div className="c-highlight-container_humidity"></div> */}
          <div className="c-highlight-container_wind">
            <p className="c-dashboard_infobox-date">Visibilty</p>
            <div className="c-dashboard_infobox-reading">
              <p> 6.4 miles </p>
            </div>
          </div>

          <div className="c-highlight-container_wind">
            <p className="c-dashboard_infobox-date">Air Pressure</p>
            <div className="c-dashboard_infobox-reading">
              <p> 998mb </p>
            </div>
          </div>
        </div>
      </div>
    </StyledDailyWeather>
  );
}

export default DailyWeather;
