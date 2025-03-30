import React, { useState, useEffect } from "react";
import { FaVolumeMute, FaVolumeUp } from "react-icons/fa";
import "./Banner.css";

const banners = [
  {
    title: "Trending Now",
    description: "Watch the latest blockbuster hits.",
    video: "https://www.w3schools.com/html/mov_bbb.mp4",
  },
  {
    title: "Top Picks for You",
    description: "Enjoy personalized recommendations.",
    video: "https://www.w3schools.com/html/movie.mp4",
  },
  {
    title: "New Releases",
    description: "Catch the newest movies and shows.",
    video: "https://www.w3schools.com/html/mov_bbb.mp4",
  },
];

const Banner = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMuted, setIsMuted] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % banners.length);
    }, 10000); // Change every 10 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="banner-container">
      <div className="banner">
        <video
          className="banner-video"
          src={banners[currentIndex].video}
          autoPlay
          loop
          muted={isMuted}
        ></video>

        <div className="banner-overlay">
          <h1>{banners[currentIndex].title}</h1>
          <p>{banners[currentIndex].description}</p>
        </div>

        {/* Mute/Unmute Button */}
        <button className="mute-btn" onClick={() => setIsMuted(!isMuted)}>
          {isMuted ? <FaVolumeMute /> : <FaVolumeUp />}
        </button>

        {/* Dots Indicator */}
        <div className="dots">
          {banners.map((_, index) => (
            <span
              key={index}
              className={`dot ${index === currentIndex ? "active" : ""}`}
              onClick={() => setCurrentIndex(index)}
            ></span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Banner;
