import { useEffect, useState } from "react";
import { Navigate, Route, Routes, useNavigate } from "react-router-dom";
import SideBar from "./component/sidebar/SideBar";
import Home from "./pages/home/Home";
import LoginPage from "./pages/login/LoginPage";
import ProfilePage from "./pages/profile/ProfilePage";
import ManageRole from "./pages/manage-role/ManageRole";
import ManageUser from "./pages/manage-user/ManageUser";

function App() {
  const navigate = useNavigate();
  const [isLoginSuccess, setIsLoginSuccess] = useState(
    localStorage.getItem("UserData") ? true : false
  );
  const checkLogin = () => {
    setIsLoginSuccess(localStorage.getItem("UserData") ? true : false);
  };
  useEffect(() => {
    if (!isLoginSuccess) {
      navigate("/login");
    }
  }, [isLoginSuccess]);
  return (
    <div className="App">
      {isLoginSuccess && (
        <SideBar
          onLogout={() => {
            checkLogin();
          }}
        />
      )}
      <Routes>
        {!isLoginSuccess ? (
          <>
            <Route path="/" element={<Navigate replace to="/login" />} />
            <Route
              path="/login"
              element={
                <LoginPage
                  onLogin={() => {
                    checkLogin();
                  }}
                />
              }
            />
          </>
        ) : (
          <>
            <Route path="/" element={<Navigate replace to="/home" />} />
            <Route path="/home" element={<Home onLogout={() => {
              checkLogin();
            }}s />} />
            <Route path="/profile" element={<ProfilePage onLogout={() => {
              checkLogin();
            }} />} />
            <Route path="/manage-user" element={<ManageUser onLogout={() => {
              checkLogin();
            }} />} />
            <Route path="/manage-role" element={<ManageRole onLogout={() => {
              checkLogin();
            }} />} />
          </>
        )}
      </Routes>
    </div>
  );
}

export default App;
