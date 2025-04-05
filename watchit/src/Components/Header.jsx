import React from "react";
import "./Header.css";
import ProfileDropdown from "./ProfileDropdown";
import { FaHome, FaTv, FaFilm, FaSearch, FaUserCircle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const NavItem = ({ icon, text }) => {
  return (
    <div className="nav-item group">
      {icon}
      <span className="nav-text">{text}</span>
    </div>
  );
};

const Header = () => {
  const navigate = useNavigate();
  return (
    <header className="header">
      <div className="logo">
        <img src="./images/logo.jpeg" alt="WatchIt Logo" className="logo-img" />
      </div>

      <nav className="nav">
        <NavItem icon={<FaHome className="nav-icon" />} text="Home" />
        <NavItem icon={<FaTv className="nav-icon" />} text="TV" />
        <div onClick={() => navigate("/movies")}>
          <NavItem icon={<FaFilm className="nav-icon" />} text="Movies" />
        </div>
      </nav>

      <div className="search-bar">
        <FaSearch className="search-icon" />
        <input type="text" placeholder="Search..." className="search-input" />
      </div>

      <ProfileDropdown />
    </header>
  );
};

export default Header;
