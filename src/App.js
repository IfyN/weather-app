import "./App.css";
import { useEffect, useState } from "react";
import Sidebar from "./components/Sidebar";
import Dashboard from "./components/Dashboard";
import axios from "axios";

function App() {
  const [currentWeather, setCurrentWeather] = useState({});
  const [searchLocation, setSearchLocation] = useState("");
  const [dailyWeatherData, setDailyWeatherData] = useState({});
  // //state to store cities being searched for
  // const [searchResult, setSearchResult] = useState([]);
  const [lat, setLat] = useState("6.5244");
  const [lon, setLon] = useState("3.3792");

  const updateCoordinates = ({ lat, lon }) => {
    setLat(lat);
    setLon(lon);
  };

  const getCurrentData = () => {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=f8db3768585aa064c24cdd0227ba44da`
      )

      .then((response) => {
        setCurrentWeather(response.data);
      })
      .catch((err) => {
        // Handle Error Here
        console.error(err);
      });
  };

  const getDaily = () => {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=current,minutely,hourly,alerts,&limit=4&appid=f8db3768585aa064c24cdd0227ba44da`
      )
      .then((response) => {
        setDailyWeatherData(response.data);
      })
      .catch((err) => {
        // Handle Error Here
        console.error(err);
      });
  };

  useEffect(() => {
    getCurrentData();
    getDaily();
  }, [lat, lon]);

  //handle the searching of the city
  // useEffect(() => {
  //   setSearchResult(
  //     searchResult.filter((citiesData) =>
  //       citiesData["cities"].includes(currentSearch)
  //     )
  //   );
  // }, [currentSearch, searchResult]);

  return (
    <div className="entry">
      <Sidebar
        currentWeather={currentWeather}
        updateCoordinates={updateCoordinates}
      />
      <Dashboard
        lon={lon}
        lat={lat}
        currentWeather={currentWeather}
        dailyWeatherData={dailyWeatherData.daily}
      />
    </div>
  );
}

export default App;
