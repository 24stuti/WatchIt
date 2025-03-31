import React, { useState, useEffect } from "react";
import { FaVolumeMute, FaVolumeUp, FaArrowLeft, FaArrowRight } from "react-icons/fa";
import "./Banner.css";

const banners = [
  {
    title: "Trending Now",
    description: "Bhool Chuk Maaf is romantic comedy directed by Karan Sharma.The film explores the humorous complexities of relationships, set against the vibrant backdrop of Varanasi. Release date:May 9, 2025 ",
    video: "./images/Bhool Chuk Maaf _ Official Teaser _ Rajkummar R _ Wamiqa G _ Dinesh V _ Karan S _ 10th April 2025.mp4",
  },
  {
    title: "Top Picks for You",
    description: `Sikandar revolves around Raja Sahab, played by Salman Khan, who is the last heir of the royal family of Rajkot.
    Release date:30 March 2025`,
    video: "./images/SIKANDAR Official Trailer - Salman Khan, Rashmika _ Sajid Nadiadwala _ A.R. Murugadoss _ 30th March.mp4",
  },
  {
    title: "New Releases",
    description: `Raid 2 focuses on IRS officer Amay Patnaik who has seized over 4200 crores in his raids' till then, tracks another white-collar crime.
    Release date:1 May 2025. `,
    video: "./images/RAID 2.mp4",
  },
];

const Banner = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMuted, setIsMuted] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % banners.length);
    }, 20000); // Change every 20 seconds

    return () => clearInterval(interval);
  }, []);

  // Function to manually switch banners
  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % banners.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + banners.length) % banners.length);
  };

  return (
    <div className="banner-container">
      <div className="banner">
        {/* Video */}
        <video className="banner-video" src={banners[currentIndex].video} autoPlay loop muted={isMuted}></video>

        {/* Overlay Content */}
        <div className="banner-overlay">
          <h1 className="banner-title">{banners[currentIndex].title}</h1>
          <p className="banner-description">{banners[currentIndex].description}</p>
        </div>

        {/* Mute/Unmute Button */}
        <button className="mute-btn" onClick={() => setIsMuted(!isMuted)}>
          {isMuted ? <FaVolumeMute /> : <FaVolumeUp />}
        </button>

        {/* Navigation Arrows */}
        <button className="prev-btn" onClick={handlePrev}>
          <FaArrowLeft />
        </button>
        <button className="next-btn" onClick={handleNext}>
          <FaArrowRight />
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
