import React, { useState } from "react";
import "./ProfileDropdown.css";
import { FaUserCircle, FaUser, FaUserCog, FaQuestionCircle } from "react-icons/fa";

const ProfileDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);

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
            <li><FaUser className="dropdown-icon" /> Account</li>
            <li><FaUserCog className="dropdown-icon" /> Manage Profiles</li>
            <li><FaQuestionCircle className="dropdown-icon" /> Help Centre</li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default ProfileDropdown;
