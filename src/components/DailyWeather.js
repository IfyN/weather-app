import React from "react";
import { StyledDailyWeather } from "./DailyWeather.styles";

function DailyWeather({ dailyWeatherData, currentWeather }) {
  return (
    <StyledDailyWeather>
      <div className="infobox-container">
        {dailyWeatherData?.map((item, idx) => {
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
      <div className="highlight-container">
        <h2>Today's Highlight</h2>
        <div className="c-highlight-container">
          <div className="c-highlight-container_wind">
            <p className="c-dashboard_infobox-date">Wind Status</p>
            <div className="c-dashboard_infobox-reading">
              <p> {currentWeather?.wind?.speed}mph</p>
            </div>

            <p className="c-dashboard_infobox-unit">WSW</p>
          </div>

          <div className="c-highlight-container_wind">
            <p className="c-dashboard_infobox-date">Humidity</p>
            <div className="c-dashboard_infobox-reading">
              <p> {currentWeather?.main?.humidity}%</p>
              <div class></div>
            </div>
          </div>
          <div className="c-highlight-container_wind">
            <p className="c-dashboard_infobox-date">Wind Direction</p>
            <div className="c-dashboard_infobox-reading">
              <p> {currentWeather?.wind?.deg} deg </p>
            </div>
          </div>
          <div className="c-highlight-container_wind">
            <p className="c-dashboard_infobox-date">Air Pressure</p>
            <div className="c-dashboard_infobox-reading">
              <p> {currentWeather?.main?.pressure}mb </p>
            </div>
          </div>
        </div>
      </div>
    </StyledDailyWeather>
  );
}

export default DailyWeather;
