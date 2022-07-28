import "./styles/App.css";
import { Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Home from "./pages/Home";
import Charities from "./pages/Charities";
import About from "./pages/About";
import Animals from "./pages/Animals";
import axios from "axios";
import { useState, useEffect } from "react";
import Charity from "./components/Charity";
function App() {
  const [charities, setCharities] = useState([]);
  const [animals, setAnimals] = useState([]);

  useEffect(() => {
    const getCharities = async () => {
      const res = await axios.get("http://localhost:3001/api/charities");
      setCharities(res.data);
    };
    const getAnimals = async () => {
      const res = await axios.get("http://localhost:3001/api/animals");
      console.log();
      setAnimals(res.data);
    };
    getCharities();
    getAnimals();
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
          />
          <Route path="charities/:id" element={<Charity />} />
          <Route path="/about" element={<About />} />
          <Route path="/animals" element={<Animals animals={animals} />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
