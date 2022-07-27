import { useState, useEffect } from "react";

const Home = () => {
  const images = [
    "https://i.imgur.com/VyT7hQ3.jpeg",
    "https://i.imgur.com/X5ZGeeN.jpeg",
    "https://i.imgur.com/dCKH3mg.jpeg",
    "https://i.imgur.com/AKKzyxE.jpeg",
    "https://i.imgur.com/I4StiOj.jpeg",
    "https://i.imgur.com/fCKmaVW.jpeg",
    "https://i.imgur.com/ary1e9E.jpeg",
    "https://i.imgur.com/51On8Zb.jpeg",
    "https://i.imgur.com/pOFmxXU.jpeg",
    "https://i.imgur.com/TQXT2ta.jpeg",
  ];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (currentIndex === images.length - 1) {
        setCurrentIndex(0);
      } else {
        setCurrentIndex(currentIndex + 1);
      }
    }, 7000);
    return () => clearInterval(intervalId);
  }, [currentIndex, images.length]);

  return (
    <div className="home">
      <div>
        <img
          id="homepage-img"
          style={{
            margin: "auto",
            padding: "0, auto",
            height: "500px",
            display: "block",
            maxWidth: "75%",
          }}
          src={images[currentIndex]}
          alt="logo"
        />
      </div>
      <div id="home-greetings">
        <h1 className="home">Welcome!</h1>
      </div>
    </div>
  );
};

export default Home;
