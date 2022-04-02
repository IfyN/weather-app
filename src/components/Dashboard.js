import React, { useContext } from "react";
import { StyledDashboard } from "./Dashboard.styles";
import DailyWeather from "./DailyWeather";
import context from "../themeContext";

function Dashboard() {
  const dataContext = useContext(context);
  console.log(dataContext);
  const { data, setData } = dataContext;
  return (
    <StyledDashboard>
      <DailyWeather />
      <h1
        style={{
          color: "white",
        }}>
        {data.smaple}
        {data.user}
      </h1>
      <button
        style={{
          backgroundColor: "red",
        }}
        onClick={() => {
          setData({ ...data, user: data.user + 1 });
        }}></button>
    </StyledDashboard>
  );
}

export default Dashboard;
