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
    { title: "Asur", img: "./images/TVShows/asur.jpg" },
    { title: "The Family Man", img: "./images/TVShows/familyMan.jpg" },
    { title: "Scam 1992", img: "./images/TVShows/scam1992.webp" },
    { title: "Kota Factory", img: "./images/TVShows/kotafactory.jpeg" },
    { title: "Aspirants", img: "./images/TVShows/aspirants.webp" },
    { title: "Delhi Crime", img: "./images/TVShows/delhicrime.jpg" },
    { title: "Jamtara", img: "./images/TVShows/jamtara.jpg" },
  ],
  "Movies": [
    { title: "Animal", img: "./images/Movies/animal.jpg" },
    { title: "Pathaan", img: "./images/Movies/pathaan.jpg" },
    { title: "Jawan", img: "./images/Movies/jawan.jpg" },
    { title: "Gadar 2", img: "./images/Movies/gadar2.jpg" },
    { title: "Brahmāstra", img: "./images/Movies/brahmastra.jpg" },
    { title: "Rocky Aur Rani Ki Prem Kahani", img: "./images/Movies/rockyrr.jpeg" },
    { title: "Drishyam 2", img: "./images/Movies/drishyam2.jpg" },
    { title: "Bhool Bhulaiyaa 2", img: "./images/Movies/bhoolbhulaiyaa2.jpg" },
    { title: "Vikram Vedha", img: "./images/Movies/vikramvedha.webp" },
    { title: "KGF Chapter 2", img: "./images/Movies/kgf2.jpg" },
  ],
  "Trailers": [
    { title: "Pushpa 2", img: "./images/Trailers/pushpa2.jpg" },
    { title: "Fighter", img: "./images/Trailers/fighter.jpg" },
    { title: "Tiger 3", img: "./images/Trailers/tiger3.jpg" },
    { title: "Dunki", img: "./images/Trailers/dunki.jpg" },
    { title: "Salaar", img: "./images/Trailers/salaar.jpg" },
    { title: "Indian 2", img: "./images/Trailers/indian2.avif" },
    { title: "Bade Miyan Chote Miyan", img: "./images/Trailers/bademiyan.jpeg" },
    { title: "Chandu Champion", img: "./images/Trailers/chanduchampion.jpg" },
    { title: "Yodha", img: "./images/Trailers/yodha.avif" },
    { title: "The Crew", img: "./images/Trailers/thecrew.jpeg" },
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
