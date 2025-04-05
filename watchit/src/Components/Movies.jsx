import React from "react";
import "./Movies.css";
import { motion } from "framer-motion";

const movies = [
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
];

const Movies = () => {
  return (
    <div className="movies-page">
      <h2 className="section-title">🎬 All Movies</h2>
      <motion.div className="movie-grid">
        {movies.map((movie, i) => (
          <motion.div key={i} className="movie-card" whileHover={{ scale: 1.1 }}>
            <img src={movie.img} alt={movie.title} />
            <p className="movie-title">{movie.title}</p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Movies;
