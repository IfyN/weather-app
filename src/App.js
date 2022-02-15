import "./App.css";
import Sidebar from "./components/Sidebar";
import DailyWeather from "./components/DailyWeather";

function App() {
  return (
    <div className="entry">
      <Sidebar />
      <DailyWeather />
    </div>
  );
}

export default App;
