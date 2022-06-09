import "./App.css";
import { useEffect, useState } from "react";
import Sidebar from "./components/Sidebar";
import Dashboard from "./components/Dashboard";
import axios from "axios";

function App() {
  const [currentWeather, setCurrentWeather] = useState({});

  const getCurrentData = () => {
    axios
      .get(
        "https://api.openweathermap.org/data/2.5/weather?lat=6.5244&lon=3.3792&appid=f8db3768585aa064c24cdd0227ba44da"
      )
      .then((response) => {
        setCurrentWeather(response.data);
      })
      .catch((err) => {
        // Handle Error Here
        console.error(err);
      });
  };

  useEffect(() => {
    getCurrentData();
  }, []);

  return (
    <div className="entry">
      <Sidebar current={currentWeather} />
      <Dashboard />
    </div>
  );
}

export default App;
