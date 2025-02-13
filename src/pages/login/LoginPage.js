import React, { useState } from 'react';
import { Link,  useNavigate } from "react-router-dom"; 
import './LoginPage.css'; 

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    const storedEmail = 'user@example.com';
    const storedPassword = 'password123';

    if (email === storedEmail && password === storedPassword) {
      localStorage.setItem('user', JSON.stringify({ email }));
      
      navigate("/"); 
    } else {
      setError('Invalid email or password');
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h2>Login to TeamPulse</h2>
        
        {/* Show error message if invalid credentials */}
        {error && <div className="error-message">{error}</div>}
        
        <form onSubmit={handleLogin}>
          <div className="input-group">
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)} // Handle input change
              required
            />
          </div>

          <div className="input-group">
            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)} // Handle input change
              required
            />
          </div>

          <button type="submit" className="login-btn">Login</button>

          <div className="forgot-password">
          <Link to="/forget password">forget password?</Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
