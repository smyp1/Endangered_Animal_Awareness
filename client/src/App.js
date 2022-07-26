import "./styles/App.css";
import { Routes, Route } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";
import Nav from "./components/Nav";
import Home from "./pages/Home";
import Charities from "./pages/Charities";
function App() {
  const [charities, setCharities] = useState([]);

  useEffect(() => {
    const getCharities = async () => {
      const res = await axios.get("http://localhost:3001/api/charities");
      setCharities(res.data);
    };
    getCharities();
  }, []);

  return (
    <div className="App">
      <header>
        <Nav />
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/charities"
            element={<Charities charities={charities} />}
          ></Route>
        </Routes>
      </main>
    </div>
  );
}

export default App;
