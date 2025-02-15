import { useEffect, useState } from "react";
import { Navigate, Route, Routes, useNavigate } from "react-router-dom";
import SideBar from "./component/sidebar/SideBar";
import Home from "./pages/home/Home";
import LoginPage from "./pages/login/LoginPage";
import ProfilePage from "./pages/profile/ProfilePage";
import { toast } from 'react-toastify';  // Import the toast function
import 'react-toastify/dist/ReactToastify.css';  // Import toast styling
import { ToastContainer } from 'react-toastify';

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
            toast.success("Logged out successfully!");
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
                    toast.success("Login Successful!");
                  }}
                />
              }
            />
          </>
        ) : (
          <>
            <Route path="/" element={<Navigate replace to="/home" />} />
            <Route path="/home" element={<Home />} />
            <Route path="/profile" element={<ProfilePage />} />
          </>
        )}
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
