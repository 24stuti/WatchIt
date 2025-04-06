import React, { useState, useRef, useEffect } from "react";
import "./MovieRecommender.css";
import { FaMapMarkerAlt } from "react-icons/fa";

const MovieRecommender = () => {
  const [showInput, setShowInput] = useState(false);
  const [location, setLocation] = useState("");
  const [movies, setMovies] = useState([]);
  const [showMovies, setShowMovies] = useState(false);
  const [error, setError] = useState("");

  const NCR_LOCATIONS = [
    "delhi", "new delhi", "central delhi", "east delhi", "north delhi", "north east delhi",
    "north west delhi", "south delhi", "south west delhi", "west delhi",
    "gurugram", "faridabad", "rohtak", "sonepat", "panipat", "jind", "jhajjar", "palwal",
    "rewari", "mahendragarh", "bhiwani", "nuh", "meerut", "ghaziabad", "noida",
    "greater noida", "bulandshahr", "baghpat", "hapur", "muzaffarnagar",
    "alwar", "bharatpur"
  ];

  const containerRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const loc = location.toLowerCase().trim();
    if (NCR_LOCATIONS.includes(loc)) {
      setMovies(["Article 370", "Crew"]);
      setShowMovies(true);
      setError("");
    } else {
      setMovies([]);
      setShowMovies(false);
      setError("No Movies Recommended for this location");
    }
  };

  // Hide input & movies on outside click
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (containerRef.current && !containerRef.current.contains(event.target)) {
        setShowInput(false);
        setShowMovies(false);
        setError("");
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="movie-recommender-container" ref={containerRef}>
      <FaMapMarkerAlt
        className="location-icon"
        onClick={() => setShowInput(!showInput)}
      />

      {showInput && (
        <form onSubmit={handleSubmit} className="location-form">
          <input
            type="text"
            placeholder="Enter your location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="location-input"
          />
          <button type="submit" className="location-btn">Go</button>
        </form>
      )}

      {showMovies && (
        <div className="recommendation-box">
          <h4>🎬 Recommended Movies</h4>
          <ul>
            {movies.map((movie, idx) => (
              <li key={idx}>{movie}</li>
            ))}
          </ul>
        </div>
      )}

      {error && (
        <div className="recommendation-box error-box">
          <p>{error}</p>
        </div>
      )}
    </div>
  );
};

export default MovieRecommender;
