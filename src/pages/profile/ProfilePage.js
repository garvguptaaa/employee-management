import React, { useState } from "react";
import {
  FaEllipsisH,
  FaEnvelope,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaUserTag,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import profileImage from "../../assets/ProfilePhoto.png";
import "./ProfilePage.css";

function ProfilePage() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };
  const handleLinkClick = () => {
    setIsDropdownOpen(false);
  };
  return (
    <>
      <div className="user-container">
        <div className="profile">
          <div className="profile-content">
            <div className="profile-photo">
              <img src={profileImage} alt="Profile" className="profile-img" />
              <div className="profile-detail">
                <div className="name">Garv Gupta</div>
                <div className="personal-info">
                  <div className="profile-info">
                    <div className="info-item">
                      <label>
                        <FaUserTag />
                      </label>
                      <span>Software Engineer</span>
                    </div>
                    <div className="info-item">
                      <label>
                        <FaEnvelope />
                      </label>
                      <span>garv@example.com</span>
                    </div>
                    <div className="info-item">
                      <label>
                        <FaPhoneAlt />
                      </label>
                      <span>+91 6265896291</span>
                    </div>
                    <div className="info-item">
                      <label>
                        <FaMapMarkerAlt />
                      </label>
                      <span>Indore, INDIA</span>
                    </div>
                  </div>

                  <div className="dropdown1">
                    <FaEllipsisH
                      onClick={toggleDropdown}
                      className="dropdown-icon"
                    />
                    {isDropdownOpen && (
                      <div className="dropdown-menu">
                        <Link to="/profile" onClick={handleLinkClick}>
                          View ID Card
                        </Link>
                      </div>
                    )}
                  </div>
                </div>
                <hr />
                <div className="office-role"></div>
              </div>
            </div>
          </div>
          <div className="main-detail">
            <nav className="navbar">
              <ul className="nav-links">
                <li>
                  <Link to="/about">About</Link>
                </li>
                <li>
                  <Link to="/profile">Profile</Link>
                </li>
                <li>
                  <Link to="/job">Job</Link>
                </li>
                <li>
                  <Link to="/documents">Documents</Link>
                </li>
                <li>
                  <Link to="/assets">Assets</Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProfilePage;
