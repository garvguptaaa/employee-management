import React, { useEffect, useState } from "react";
import { Link, Navigate, Route, Routes, useNavigate } from "react-router-dom";
// import Logo from "../assets/images/logo.jpg";
import profileImage from "../../assets/ProfilePhoto.png";

import {
  FaComments,
  FaHome,
  FaInbox,
  FaUser
} from "react-icons/fa";
import { toast } from "react-toastify";
import Engage from "../../pages/engage/engage";
import Home from "../../pages/home/Home";
import ManageRole from "../../pages/manage-role/ManageRole";
import AddEditRole from "../../pages/manage-role/add-edit-role";
import ManageUser from "../../pages/manage-user/ManageUser";
import ProfilePage from "../../pages/profile/ProfilePage";
import SalarySlipsForm from "../../pages/salary-slips/salary-slips-form";
import { GetApi } from "../../services/ApiService";
import HelperService from "../../services/HelperService";
import "./SideBar.css";
import { Col, Row } from "reactstrap";

function SideBar(props) {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [userType, setUserType] = useState(HelperService.getLoginUserData('user_type'));
  const [menuList, setMenuList] = useState([]);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  const Logout = () => {
    localStorage.clear();
    props.onLogout();
    navigate("/login");
    setIsOpen(false);
  };
  useEffect(() => {
    getMenuList();
  }, []);
  const getMenuList = () => {
    const role_id = HelperService.getLoginUserData('role_id');
    if (role_id) {
      GetApi("/roles/" + role_id, {}).then((response) => {
        setMenuList(response?.role_access);
      }).catch((error) => {
        toast.error("Something Went Wrong");
      });
    }
  }
  return (
    <>
      <div className="d-flex h-100" >
        <div>
          <Row>
            <Col lg={12} className="header">
              <Col lg={1} className="logo">
                <Link to="/">
                  {/* <img src={Logo} alt="" className="image" /> */}
                  TeamPulse
                </Link>
              </Col>
              <Col lg={2} className="search-container" style={{display:"content"}}>
                <form>
                  <input
                    type="text"
                    placeholder="Search employees or actions (Ex: Apply Leave)"
                  />
                </form>
              </Col>
              <Col lg={9} className="dropdown-profile-icon " style={{ display: "flex", justifyContent: "end" }}>
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
                    <Link onClick={Logout}>Logout</Link>
                    {/* <div className="theme-container">
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
                  </div> */}
                  </div>
                )}
              </Col>
            </Col>
          </Row>
          {userType == 'ADMIN' ?
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
                  <li>
                    <Link to="/salary-slips">
                      <div className="side-icon">
                        <FaInbox size={17} color="white" />
                      </div>
                      <div className="side-icon-name">Salary Slips</div>
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
            </div> :
            <div className="sidebar">
              <div className="side-container">
                <ul class="side-links">

                  {
                    menuList &&
                    menuList?.map((item, index) => {
                      return (
                        <>
                          {(item.is_view && item.menu_code == 'dashboard') && <li>
                            <Link to="/">
                              <div className="side-icon">
                                <FaHome align size={17} color="white" />
                              </div>
                              <div className="side-icon-name"> Dashboard</div>
                            </Link>
                          </li>}


                          {(item.is_view && item.menu_code == 'manage-user') && <li>
                            <Link to="/manage-user">
                              <div className="side-icon">
                                <FaUser size={17} color="white" />
                              </div>
                              <div className="side-icon-name"> Manage User</div>
                            </Link>
                          </li>}

                          {(item.is_view && item.menu_code == 'manage-role') && <li>
                            <Link to="/manage-role">
                              <div className="side-icon">
                                <FaInbox size={17} color="white" />
                              </div>
                              <div className="side-icon-name">Manage Role</div>
                            </Link>
                          </li>}

                          {(item.is_view && item.menu_code == 'engage') && <li>
                            <Link to="/engage">
                              <div className="side-icon">
                                <FaComments size={17} color="white" />
                              </div>
                              <div className="side-icon-name">Engage</div>
                            </Link>
                          </li>}
                        </>)
                    })}



                </ul>

              </div>
            </div>
          }
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
            <Route path="/edit-role/:id" element={<AddEditRole />} />
            <Route path="/engage" index element={<Engage />} />
            <Route path="/salary-slips" index element={<SalarySlipsForm />} />
          </Routes>
        </div>
      </div>
    </>
  );
}

export default SideBar;
