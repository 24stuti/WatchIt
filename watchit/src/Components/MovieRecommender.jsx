import React, { useState, useRef, useEffect } from "react";
import "./MovieRecommender.css";
import { FaMapMarkerAlt } from "react-icons/fa";

const MovieRecommender = () => {
  const [showInput, setShowInput] = useState(false);
  const [location, setLocation] = useState("");
  const [movies, setMovies] = useState([]);
  const [showMovies, setShowMovies] = useState(false);
  const [error, setError] = useState("");

  const containerRef = useRef(null);

  const fetchMoviesFromXML = async (loc) => {
    try {
      const res = await fetch("/preferences.xml");
      const xmlText = await res.text();

      const parser = new DOMParser();
      const xmlDoc = parser.parseFromString(xmlText, "text/xml");

      const locations = xmlDoc.getElementsByTagName("location");
      const input = loc.trim().toLowerCase();

      let found = false;
      for (let i = 0; i < locations.length; i++) {
        const xmlLoc = locations[i];
        const locName = xmlLoc.getAttribute("name");

        if (locName && locName.trim().toLowerCase() === input) {
          const movieNodes = xmlLoc.getElementsByTagName("movie");
          const movieList = Array.from(movieNodes).map((m) => m.textContent);
          setMovies(movieList);
          setShowMovies(true);
          setError("");
          found = true;
          break;
        }
      }

      if (!found) {
        setMovies([]);
        setShowMovies(false);
        setError("No Movies Recommended for this location");
      }
    } catch (err) {
      console.error("XML fetch error:", err);
      setError("Something went wrong. Try again.");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let loc = location.trim();
    if (!loc) {
      loc = window.prompt("Please enter your location:");
      if (!loc) return;
      setLocation(loc);
    }
    await fetchMoviesFromXML(loc);
  };

  // Close everything on outside click
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
