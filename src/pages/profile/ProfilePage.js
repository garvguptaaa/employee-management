import React, { use, useEffect, useState } from "react";
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
import { get } from "react-hook-form";
import HelperService from "../../services/HelperService";
import { GetApi } from "../../services/ApiService";
import { toast } from "react-toastify";

function ProfilePage() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [UserData, setUserData] = useState("");

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };
  const handleLinkClick = () => {
    setIsDropdownOpen(false);
  };
  useEffect(() => {
    getUserDetails();
  }, []);
  const getUserDetails = () => {
    const id = HelperService.getLoginUserData('id');
    GetApi("/users/" + id, {}).then((response) => {
      setUserData(response);
    }).catch((error) => {
      toast.error("Something Went Wrong");
    });
  }
  return (
    <>
      <div>
        <div className="profile">
          <div className="profile-content">
            <div className="profile-photo">
              <img src={profileImage} alt="Profile" className="profile-img" />
              <div className="profile-detail">
                <div className="name">{UserData?.first_name} {UserData?.last_name}</div>
                <div className="personal-info">
                  <div className="profile-info">
                    <div className="info-item">
                      <label>
                        <FaUserTag />
                      </label>
                      <span>{UserData?.position}</span>
                    </div>
                    <div className="info-item">
                      <label>
                        <FaEnvelope />
                      </label>
                      <span>{UserData?.email}</span>
                    </div>
                    <div className="info-item">
                      <label>
                        <FaPhoneAlt />
                      </label>
                      <span>+91 {UserData?.mobile}</span>
                    </div>
                    <div className="info-item">
                      <label>
                        <FaMapMarkerAlt />
                      </label>
                      <span>{UserData?.address}</span>
                    </div>
                  </div>
                </div>
                <hr />
                <div className="office-role"></div>
              </div>
            </div>
          </div>
          {/* <div className="main-detail">
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
          </div> */}
        </div>
      </div>
    </>
  );
}

export default ProfilePage;
