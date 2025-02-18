import { useEffect, useState } from "react";
import { Navigate, Route, Routes, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from 'react-toastify'; // Import the toast function
import 'react-toastify/dist/ReactToastify.css'; // Import toast styling
import SideBar from "./component/sidebar/SideBar";
import LoginPage from "./pages/login/LoginPage";

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
      <>
        {!isLoginSuccess ? (
          <Routes>
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
          </Routes>
        ) : (
          <>
            <SideBar onLogout={() => {
              checkLogin();
              toast.success("Logged out successfully!");
            }} />
          </>
        )}
      </>
      <ToastContainer />
    </div>
  );
}

export default App;
