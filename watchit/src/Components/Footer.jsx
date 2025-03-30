import React from "react";
import "./Footer.css"

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* About Section */}
        <div className="footer-section">
          <h3>About WatchIt</h3>
          <p>
            WatchIt brings you the best movies, TV shows, and original content. Stream anytime, anywhere with a seamless experience.
          </p>
        </div>

        {/* Quick Links */}
        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="/about">About</a></li>
            <li><a href="/help">Help Center</a></li>
            <li><a href="/terms">Terms of Service</a></li>
            <li><a href="/privacy">Privacy Policy</a></li>
          </ul>
        </div>

        {/* Categories */}
        <div className="footer-section">
          <h3>Categories</h3>
          <ul>
            <li><a href="/movies">Movies</a></li>
            <li><a href="/tvshows">TV Shows</a></li>
            <li><a href="/originals">WatchIt Originals</a></li>
            <li><a href="/trending">Trending Now</a></li>
          </ul>
        </div>

        {/* Support */}
        <div className="footer-section">
          <h3>Support</h3>
          <p>Email: support@watchit.com</p>
          <p>Phone: +91 1234567890</p>
          <p>Available 24/7</p>
        </div>
      </div>

      {/* Social Media Icons */}
      <div className="footer-bottom">
        <p>© 2024 WatchIt. All Rights Reserved.</p>
        <div className="social-icons">
          <a href="#" className="social-icon"><i className="fab fa-facebook"></i></a>
          <a href="#" className="social-icon"><i className="fab fa-instagram"></i></a>
          <a href="#" className="social-icon"><i className="fab fa-twitter"></i></a>
          <a href="#" className="social-icon"><i className="fab fa-youtube"></i></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
