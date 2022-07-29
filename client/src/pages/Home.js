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
    "https://i.imgur.com/49I59VE.jpeg",
    "https://i.imgur.com/X1nNFRb.jpeg",
    "https://i.imgur.com/D1eXsrX.jpeg",
    "https://i.imgur.com/lFWYpo7.jpeg",
    "https://i.imgur.com/qkTgCvz.jpeg",
    "https://i.imgur.com/8lVAchQ.jpeg",
    "https://i.imgur.com/zQmOQ2r.jpeg",
    "https://i.imgur.com/dUyW3MX.jpeg",
    "https://i.imgur.com/eAAWup0.jpeg",
    "https://i.imgur.com/bWCKGxc.jpeg",
    "https://i.imgur.com/IM5MCaQ.jpeg",
  ];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (currentIndex === images.length - 1) {
        setCurrentIndex(0);
      } else {
        setCurrentIndex(currentIndex + 1);
      }
    }, 4000);
    return () => clearInterval(intervalId);
  }, [currentIndex, images.length]);

  return (
    <body className="home_page">
      <div className="home">
        <h1 className="home">Help The Animals</h1>
        <div>
          <img
            id="homepage-img"
            style={{
              margin: "auto",
              padding: "0, auto",
              height: "500px",
              display: "block",
              maxWidth: "75%",
              borderRadius: "20%",
            }}
            src={images[currentIndex]}
            alt="logo"
          />
        </div>
        <h1>Everyone can do there part.</h1>
      </div>
    </body>
  );
};

export default Home;
