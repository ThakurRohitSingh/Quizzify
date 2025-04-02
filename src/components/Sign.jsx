import React, { useState } from 'react';
// import { useHistory } from 'react-router-dom'; // For handling redirects
import blobTop from "../assets/blobTop.svg";
import blobBottom from "../assets/blobBottom.svg";
import './Sign.css';

const SignUp = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
//   const history = useHistory();  // Using useHistory for redirecting

  const handleSignUp = (e) => {
    e.preventDefault();
    // Handle sign up logic here
  };

//   // Redirect to Login page
//   const redirectToLogin = () => {
//     history.push('/login');  // Redirect to /login route
//   };

  return (
    <div className="LandingPage-container">
      <img className="blob-top" src={blobTop} alt="Top Blob" />
      <div className="sign-up-form-container">
        <h2>Sign Up</h2>
        <p>Create an account to get started</p>
        <form onSubmit={handleSignUp}>
          <div>
            <input 
              type="text"
              className="input-field"
              placeholder="Enter your Full Name"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              required
            />
          </div>
          <div>
            <input 
              type="email"
              className="input-field"
              placeholder="Enter your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div>
            <input 
              type="password"
              className="input-field"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="sign-up-button">Sign Up</button>
        </form>
        <div className="login-link">
          <p>Already have an account? <span /* onClick={redirectToLogin} */ className="login-link-text">Login</span></p>
        </div>
      </div>
      <img className="blob-bottom" src={blobBottom} alt="Bottom Blob" />
    </div>
  );
};

export default SignUp;
