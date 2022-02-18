import React from "react";
import { StyledDashboard } from "./Dashboard.styles";
import DailyWeather from "./DailyWeather";

function Dashboard() {
  return (
    <StyledDashboard>
      <DailyWeather />
    </StyledDashboard>
  );
}

export default Dashboard;
