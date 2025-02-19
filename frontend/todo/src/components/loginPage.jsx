import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './loginPage.css'; // Import the new CSS file

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const response = await axios.get(`http://localhost:4000/api/login?email=${email}&password=${password}`);

      if (response.data) {
        navigate('/mainPage');
      } else {
        alert("Enter the correct login credentials or register a new account");
      }
    } catch (error) {
      console.log("API call failed", error);
      alert("Server error! Please try again later.");
    }
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <h2>Login to Todo App</h2>
        <form onSubmit={handleLogin}>
          <div className="input-group">
            <label>Email:</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
            />
          </div>
          <div className="input-group">
            <label>Password:</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
            />
          </div>
          <button onClick={handleLogin} type="button" className="login-button">
            Login
          </button>
        </form>
        <p className="register-link">
          Don't have an account? <a href="/registerPage">Register Now</a>
        </p>
      </div>
    </div>
  );
};

export default Login;
