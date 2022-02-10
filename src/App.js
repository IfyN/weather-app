import logo from "./logo.svg";
import "./App.css";
import Sidebar from "./components/Sidebar";
import Main from "./components/Main";

function App() {
  return (
    <div className="entry">
      <Sidebar />
      <Main />
    </div>
  );
}

export default App;
