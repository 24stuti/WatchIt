import React, { useRef } from "react";
import "./TopCharts.css";
import { motion } from "framer-motion";
import { Play, Film, Tv, Clapperboard, ChevronLeft, ChevronRight } from "lucide-react";

const categories = [
  { name: "TV Shows", icon: <Tv size={20} /> },
  { name: "Movies", icon: <Film size={20} /> },
  { name: "Trailers", icon: <Clapperboard size={20} /> },
];

const topData = {
  "TV Shows": [
    { title: "Sacred Games", img: "./images/TVShows/sacred-games.webp" },
    { title: "Mirzapur", img: "./images/TVShows/Mirzapur.jpg" },
    { title: "Panchayat", img: "./images/TVShows/panchayat.webp" },
    { title: "Asur", img: "./images/TVShows/asur.webp" },
    { title: "The Family Man", img: "./images/TVShows/familyMan.jpg" },
    { title: "Scam 1992", img: "./images/TVShows/scam1992.webp" },
    { title: "Kota Factory", img: "./images/TVShows/kotafactory.jpeg" },
    { title: "Aspirants", img: "./images/TVShows/aspirants.webp" },
    { title: "Delhi Crime", img: "./images/TVShows/delhicrime.jpg" },
    { title: "Jamtara", img: "./images/TVShows/jamtara.jpg" },
  ],
  "Movies": [
    { title: "Animal", img: "/animal.jpg" },
    { title: "Pathaan", img: "/pathaan.jpg" },
    { title: "Jawan", img: "/jawan.jpg" },
    { title: "Gadar 2", img: "/gadar2.jpg" },
    { title: "Brahmāstra", img: "/brahmastra.jpg" },
    { title: "Rocky Aur Rani Ki Prem Kahani", img: "/rockyrr.jpg" },
    { title: "Drishyam 2", img: "/drishyam2.jpg" },
    { title: "Bhool Bhulaiyaa 2", img: "/bhoolbhulaiyaa2.jpg" },
    { title: "Vikram Vedha", img: "/vikramvedha.jpg" },
    { title: "KGF Chapter 2", img: "/kgf2.jpg" },
  ],
  "Trailers": [
    { title: "Pushpa 2", img: "/pushpa2.jpg" },
    { title: "Fighter", img: "/fighter.jpg" },
    { title: "Tiger 3", img: "/tiger3.jpg" },
    { title: "Dunki", img: "/dunki.jpg" },
    { title: "Salaar", img: "/salaar.jpg" },
    { title: "Indian 2", img: "/indian2.jpg" },
    { title: "Bade Miyan Chote Miyan", img: "/bademiyan.jpg" },
    { title: "Chandu Champion", img: "/chanduchampion.jpg" },
    { title: "Yodha", img: "/yodha.jpg" },
    { title: "The Crew", img: "/thecrew.jpg" },
  ],
};

const TopCharts = () => {
  const scrollRefs = {
    "TV Shows": useRef(null),
    "Movies": useRef(null),
    "Trailers": useRef(null),
  };

  const scrollLeft = (category) => {
    const container = scrollRefs[category].current;
    container.scrollBy({ left: -300, behavior: "smooth" });
  };

  const scrollRight = (category) => {
    const container = scrollRefs[category].current;
    container.scrollBy({ left: 300, behavior: "smooth" });
  };

  return (
    <div className="top-charts">
      <h2 className="section-title">🔥 Top Charts</h2>
      {categories.map((category) => (
        <div key={category.name} className="category-section">
          <h3 className="category-title">
            {category.icon} {category.name}
          </h3>
          <div className="chart-wrapper">
            <button className="scroll-btn left" onClick={() => scrollLeft(category.name)}>
              <ChevronLeft size={20} />
            </button>
            <motion.div ref={scrollRefs[category.name]} className="chart-container">
              {topData[category.name].map((item, index) => (
                <motion.div key={index} className="chart-card" whileHover={{ scale: 1.1 }}>
                  <img src={item.img} alt={item.title} />
                  <p className="chart-title">{item.title}</p> {/* 🎯 Yaha Title add kiya */}
                </motion.div>
              ))}
            </motion.div>
            <button className="scroll-btn right" onClick={() => scrollRight(category.name)}>
              <ChevronRight size={20} />
            </button>
          </div>
          <hr className="divider-line" />
        </div>
      ))}
    </div>
  );
};

export default TopCharts;
