import "./styles/App.css";
import { Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Home from "./pages/Home";
import Charities from "./pages/Charities";
import About from "./pages/About";
// import Animals from ".pages/Animals";
import axios from "axios";
import { useState, useEffect } from "react";

function App() {
  const [charities, setCharities] = useState([]);
  const [newCharity, setNewCharity] = useState({
    name: "",
    link: "",
    descrption: "",
    image: "",
  });

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
          />
          <Route path="/About" element={<About />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
