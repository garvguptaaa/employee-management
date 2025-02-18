import React, { useState } from "react";
import { Link, Navigate, Outlet, Route, Routes, useNavigate } from "react-router-dom";
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
import Home from "../../pages/home/Home";
import ProfilePage from "../../pages/profile/ProfilePage";
import ManageUser from "../../pages/manage-user/ManageUser";
import ManageRole from "../../pages/manage-role/ManageRole";
import AddEditRole from "../../pages/manage-role/add-edit-role";
import Engage from "../../pages/engage/engage";

function SideBar(props) {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  const Logout = () => {
    localStorage.clear();
    props.onLogout();
    navigate("/login");
    setIsOpen(false);
  };
  return (
    <>
      <div className="d-flex h-100" >
        <div>
          <div className="header">
            <div className="logo">
              <Link to="/">
                {/* <img src={Logo} alt="" className="image" /> */}
                TeamPulse
              </Link>
            </div>
            <div className="text">
              {/* <p> EMPLOYEE MANAGEMENT APP</p> */}
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
                  <Link
                    to="/profile"
                    onClick={() => {
                      setIsOpen(false);
                    }}
                  >
                    My Profile
                  </Link>
                  <a onClick={Logout}>Logout</a>
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
                    <div className="side-icon-name"> Dashboard</div>
                  </Link>
                </li>
                <li>
                  <Link to="/manage-user">
                    <div className="side-icon">
                      <FaUser size={17} color="white" />
                    </div>
                    <div className="side-icon-name"> Manage User</div>
                  </Link>
                </li>
                <li>
                  <Link to="/manage-role">
                    <div className="side-icon">
                      <FaInbox size={17} color="white" />
                    </div>
                    <div className="side-icon-name">Manage Role</div>
                  </Link>
                </li>

                {/* <li>
                  <Link to="/myFinances">
                    <div className="side-icon">
                      <FaMoneyBillWave size={17} color="white" />
                    </div>
                    <div className="side-icon-name">My Finances</div>
                  </Link>
                </li> */}
                {/* <li>
                  <Link to="/org">
                    <div className="side-icon">
                      <FaBuilding size={17} color="white" />
                    </div>
                    <div className="side-icon-name">Org</div>
                  </Link>
                </li> */}
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
        </div>
        <div style={{ marginTop: "55px", overflow: "auto", width: "100%", padding: "10px" }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="*" element={<Navigate replace to="/" />} />
            <Route path="/home" index element={<Home />} />
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="/manage-user" element={<ManageUser />} />
            <Route path="/manage-role" element={<ManageRole />} />
            <Route path="/add-role" element={<AddEditRole />} />
            <Route path="/engage" index element={<Engage />} />
          </Routes>
        </div>
      </div>
    </>
  );
}

export default SideBar;
