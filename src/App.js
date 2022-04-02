import "./App.css";
import Sidebar from "./components/Sidebar";
import Dashboard from "./components/Dashboard";
import { useContext, useState } from "react";
import context from "./themeContext";

function App() {
  const [data, setData] = useState({ smaple: "red", user: 0 });
  return (
    <context.Provider value={{ data, setData }}>
      <div className="entry">
        <Sidebar />
        <Dashboard />
      </div>
    </context.Provider>
  );
}

export default App;
