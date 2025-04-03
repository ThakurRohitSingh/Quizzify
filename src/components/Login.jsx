import React, { useState } from 'react';
import blobTop from "../assets/blobTop.svg";
import blobBottom from "../assets/blobBottom.svg";
import '../Styles/Auth.css'; // Using shared CSS file

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    // Handle login logic here
  };

  return (
    <div className="LandingPage-container">
      <img className="blob-top" src={blobTop} alt="Top Blob" />
      <div className="container">
        <h2>Login</h2>
        <p>Enter Credentials to Start Quizzing Now</p>
        <form onSubmit={handleLogin}>
          <input
            type="email"
            className="input-field"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            className="input-field"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <div className="forgot-password">
            <a href="/forgot-password">Forgot password?</a>
          </div>
          <button type="submit" className="auth-button">Login</button>
        </form>
        <div className="auth-link">
          <p>Don't have an account? <span className="auth-link-text">Sign Up</span></p>
        </div>
      </div>
      <img className="blob-bottom" src={blobBottom} alt="Bottom Blob" />
    </div>
  );
};

export default Login;
