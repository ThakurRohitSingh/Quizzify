 import React, { useState } from 'react';
// import { useHistory } from 'react-router-dom'; // For handling redirects
import blobTop from "../assets/blobTop.svg";
import blobBottom from "../assets/blobBottom.svg";
import './Login.css';
// import '../App.css'

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
//   const history = useHistory();  // Using useHistory for redirecting

  const handleLogin = (e) => {
    e.preventDefault();
    // Handle login logic here
  };

  // Redirect to Signup page
//   const redirectToSignup = () => {
//     history.push('/signup');  // Redirect to /signup route
//   };

  return (
    <div className="LandingPage-container">
      <img className="blob-top" src={blobTop} alt="Top Blob" />
      <div className="login-form-container">
        <h2>Login</h2>
        <p>Enter your credentials to access your account</p>
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
          <button type="submit" className="login-button">Login</button>
        </form>
        <div className="signup-link">
          <p>Don't have an account? <span /* onClick={redirectToSignup} */ className="signup-link-text">Sign Up</span></p>
        </div>
      </div>
      <img className="blob-bottom" src={blobBottom} alt="Bottom Blob" />
    </div>
  );
};

export default Login; 