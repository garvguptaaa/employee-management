import React from "react";
import { Link } from "react-router-dom";
// import Logo from "../assets/images/logo.jpg";
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
  return (
    <>
      <div className="main">
        <div className="header">
          <div className="logo">
            <Link to="/">
              {/* <img src={Logo} alt="" className="image" /> */}
              Managify
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
              <input
                type="color"
                onChange={(e) => {
                  document.documentElement.style.setProperty(
                    "--header-color",
                    e.target.value
                  );
                }}
              />
              <input
                type="color"
                onChange={(e) => {
                  document.documentElement.style.setProperty(
                    "--side-header-color",
                    e.target.value
                  );
                }}
              />

             
            </form>
          </div>
          <div>
                
                </div>
        </div>
        <div className="sidebar">
          <div className="side-container">
            <ul class="side-links">
              <li>
                <Link to="/home">
                  <div>
                    <FaHome size={17} color="white" />
                  </div>
                  <div>Home</div>
                </Link>
              </li>
              <li>
                <Link to="/me">
                  <FaUser size={17} color="white" />
                  <br />
                  Me
                </Link>
              </li>
              <li>
                <Link to="/inbox">
                  <FaInbox size={17} color="white" />
                  <br />
                  Inbox
                </Link>
              </li>
              <li>
                <Link to="/myTeam">
                  <FaUsers size={17} color="white" />
                  <br />
                  My Team
                </Link>
              </li>
              <li>
                <Link to="/myFinances">
                  <FaMoneyBillWave size={17} color="white" />
                  <br />
                  My Finances
                </Link>
              </li>
              <li>
                <Link to="/org">
                  <FaBuilding size={17} color="white" />
                  <br />
                  Org
                </Link>
              </li>
              <li>
                <Link to="/engage">
                  <FaComments size={17} color="white" />
                  <br />
                  Engage
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default SideBar;
