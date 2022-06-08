import "./App.css";
import { useEffect, useState } from "react";
import Sidebar from "./components/Sidebar";
import Dashboard from "./components/Dashboard";
import axios from "axios";

import context from "./themeContext";

function App() {
  // const [data, setData] = useState({ smaple: "red", user: 0 });
  const [currentData, setCurrentData] = useState({});

  return (
    // <context.Provider value={{ data, setData }}>
    <div className="entry">
      <Sidebar />
      <Dashboard />
    </div>
    // </context.Provider>
  );
}

export default App;
