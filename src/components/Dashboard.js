import React from "react";
import { StyledDashboard } from "./Dashboard.styles";
import DailyWeather from "./DailyWeather";

function Dashboard({ currentWeather, dailyWeatherData }) {
  return (
    <StyledDashboard>
      <DailyWeather
        dailyWeatherData={dailyWeatherData}
        currentWeather={currentWeather}
      />
    </StyledDashboard>
  );
}

export default Dashboard;
