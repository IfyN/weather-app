import React, { useContext, useEffect, useState } from "react";
import { StyledDashboard } from "./Dashboard.styles";
import DailyWeather from "./DailyWeather";
import context from "../themeContext";
import axios from "axios";

function Dashboard() {
  const [weatherData, setWeatherData] = useState({});
  const getLocation = () => {
    axios
      .get(
        "https://api.openweathermap.org/data/2.5/onecall?lat=6.5244&lon=3.3792&exclude=current,minutely,hourly,alerts&appid=f8db3768585aa064c24cdd0227ba44da"
      )
      .then((response) => {
        setWeatherData(response.data);
      });
  };

  useEffect(() => {
    getLocation();
  }, []);

  return (
    <StyledDashboard>
      <DailyWeather climatic={weatherData.daily} />
    </StyledDashboard>
  );
}

export default Dashboard;
