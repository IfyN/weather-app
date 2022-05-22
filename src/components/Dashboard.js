import React, { useContext, useEffect, useState } from "react";
import { StyledDashboard } from "./Dashboard.styles";
import DailyWeather from "./DailyWeather";
import context from "../themeContext";
import axios from "axios";

function Dashboard() {
  const [data, setData] = useState();
  const getLocation = () => {
    axios
      .get(
        "https://api.openweathermap.org/data/2.5/weather?lat=6.5244&lon=3.3792&appid=bedafea85a3c0242ccc7b8679fbf379c"
      )
      .then((response) => setData(response.data));
  };

  useEffect(() => {
    getLocation();
  }, []);

  // const dataContext = useContext(context);
  // console.log(dataContext);
  // const { data, setData } = dataContext;
  return (
    <StyledDashboard>
      <DailyWeather weather={data} />
      {/* <h1
        style={{
          color: "white",
        }}>
        {data.smaple}
        {data.user}
      </h1> */}
      {/* <button
        style={{
          backgroundColor: "red",
        }}
        onClick={() => {
          setData({ ...data, user: data.user + 1 });
        }}></button> */}
    </StyledDashboard>
  );
}

export default Dashboard;
