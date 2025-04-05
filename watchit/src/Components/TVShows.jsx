import React from "react";
import "./TVShows.css";
import { motion } from "framer-motion";

const shows = [
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
];

const TVShows = () => {
  return (
    <div className="tvshows-page">
      <h2 className="section-title">📺 All TV Shows</h2>
      <motion.div className="tv-grid">
        {shows.map((show, i) => (
          <motion.div key={i} className="tv-card" whileHover={{ scale: 1.1 }}>
            <img src={show.img} alt={show.title} />
            <p className="tv-title">{show.title}</p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default TVShows;
