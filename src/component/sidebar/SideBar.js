import React, { useState } from "react";
import { Link } from "react-router-dom";
// import Logo from "../assets/images/logo.jpg";
import profileImage from "../../assets/ProfilePhoto.png";

import {
  FaBuilding,
  FaComments,
  FaHome,
  FaInbox,
  FaMoneyBillWave,
  FaUser,
  FaUsers,
} from "react-icons/fa";
import "./SideBar.css";

function SideBar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  const handleLinkClick = () => {
    setIsOpen(false);
  };
  return (
    <>
      <div className="header">
        <div className="logo">
          <Link to="/">
            {/* <img src={Logo} alt="" className="image" /> */}
            TeamPulse
          </Link>
        </div>
        <div className="text">
          <p> EMPLOYEE MANAGEMENT APP</p>
        </div>
        <div className="search-container">
          <form>
            <input
              type="text"
              placeholder="Search employees or actions (Ex: Apply Leave)"
            />
          </form>
        </div>
        <div className="dropdown-profile-icon ">
          <div className="profile-icon" onClick={toggleDropdown}>
            <img src={profileImage} alt="Profile" className="profile-img" />
          </div>
          {isOpen && (
            <div className="dropdown-content">
              <Link to="/profile" onClick={handleLinkClick}>
                
                My Profile
              </Link>
              <Link to="/loginpage" onClick={handleLinkClick}>
                
                Logout
              </Link>
              <div className="theme-container">
                <form>
                  <input
                    type="color"
                    onChange={(e) => {
                      document.documentElement.style.setProperty(
                        "--side-header-color",
                        e.target.value
                      );
                    }}
                  />
                  <input
                    type="color"
                    onChange={(e) => {
                      document.documentElement.style.setProperty(
                        "--side-header",
                        e.target.value
                      );
                    }}
                  />
                </form>
              </div>
            </div>
          )}
        </div>
      </div>
      <div className="sidebar">
        <div className="side-container">
          <ul class="side-links">
            <li>
              <Link to="/">
                <div className="side-icon">
                  <FaHome align size={17} color="white" />
                </div>
                <div className="side-icon-name"> Home</div>
              </Link>
            </li>
            <li>
              <Link to="/me">
                <div className="side-icon">
                  <FaUser size={17} color="white" />
                </div>
                <div className="side-icon-name"> Me</div>
              </Link>
            </li>
            <li>
              <Link to="/inbox">
                <div className="side-icon">
                  <FaInbox size={17} color="white" />
                </div>
                <div className="side-icon-name">Inbox</div>
              </Link>
            </li>
            <li>
              <Link to="/myTeam">
                <div className="side-icon">
                  <FaUsers size={17} color="white" />
                </div>
                <div className="side-icon-name">My Team</div>
              </Link>
            </li>
            <li>
              <Link to="/myFinances">
                <div className="side-icon">
                  <FaMoneyBillWave size={17} color="white" />
                </div>
                <div className="side-icon-name">My Finances</div>
              </Link>
            </li>
            <li>
              <Link to="/org">
                <div className="side-icon">
                  <FaBuilding size={17} color="white" />
                </div>
                <div className="side-icon-name">Org</div>
              </Link>
            </li>
            <li>
              <Link to="/engage">
                <div className="side-icon">
                  <FaComments size={17} color="white" />
                </div>
                <div className="side-icon-name">Engage</div>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default SideBar;
