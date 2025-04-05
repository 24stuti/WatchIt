import React, { useState } from "react";
import "./ProfileDropdown.css";
import { FaUserCircle, FaUser, FaUserCog, FaQuestionCircle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const ProfileDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const handleAccountClick = () => {
    setIsOpen(false);
    navigate("/login");
  };

  return (
    <div 
      className="profile-dropdown" 
      onMouseEnter={() => setIsOpen(true)} 
      onMouseLeave={() => setIsOpen(false)}
    >
      <FaUserCircle className="profile-icon" />
      
      {isOpen && (
        <div className="dropdown-menu">
        <ul>
            <li onClick={handleAccountClick}>
              <FaUser className="dropdown-icon" /> Account
            </li>
            <li><FaUserCog className="dropdown-icon" /> Manage Profiles</li>
            <li><FaQuestionCircle className="dropdown-icon" /> Help Centre</li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default ProfileDropdown;
