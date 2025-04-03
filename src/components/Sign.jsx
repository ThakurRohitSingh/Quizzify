import React, { useState } from 'react';
import blobTop from "../assets/blobTop.svg";
import blobBottom from "../assets/blobBottom.svg";
import "../Styles/Auth.css"; 

const SignUp = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignUp = (e) => {
    e.preventDefault();
    // Handle sign-up logic here
  };

  return (
    <div className="LandingPage-container">
      <img className="blob-top" src={blobTop} alt="Top Blob" />
      <div className="container">
        <h2>Sign Up</h2>
        <p>Unlock Quizzes by Creating an Account!</p>
        <form onSubmit={handleSignUp}>
          <input 
            type="text"
            className="input-field"
            placeholder="Enter your Full Name"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            required
          />
          <input 
            type="email"
            className="input-field"
            placeholder="Enter your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input 
            type="password"
            className="input-field"
            placeholder="Enter your Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit" className="auth-button">Sign Up</button>
        </form>
        <div className="auth-link">
          <p>Already have an account? <span className="auth-link-text">Login</span></p>
        </div>
      </div>
      <img className="blob-bottom" src={blobBottom} alt="Bottom Blob" />
    </div>
  );
};

export default SignUp;
